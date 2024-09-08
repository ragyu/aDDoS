import json
import re
import os
from datetime import datetime, timedelta
from pymongo import MongoClient, ASCENDING, IndexModel
from dotenv import load_dotenv

# .env 파일 로드
load_dotenv()

def parse_json_file(file_path):
    json_objects = []
    with open(file_path, 'r') as file:
        for line in file:
            try:
                json_obj = json.loads(line)
                if "event_type" in json_obj and json_obj["event_type"] == "stats":
                    continue  # Skip processing stats events
                json_objects.append(json_obj)
            except json.decoder.JSONDecodeError as e:
                print(f"Error decoding JSON: {e}")
    return json_objects

def convert_timestamp(json_objects):
    for obj in json_objects:
        if 'timestamp' in obj:
            timestamp_str = obj['timestamp']
            offset_match = re.search(r'(?P<offset>[+-]\d{2})(?P<minute>\d{2})$', timestamp_str)

            if offset_match:
                offset_str = offset_match.group('offset')
                timestamp_str = timestamp_str[:-6]

                if '.' in timestamp_str:
                    timestamp_str += '0' * (6 - len(timestamp_str.split('.')[1]))

                obj['timestamp'] = datetime.fromisoformat(timestamp_str) - timedelta(hours=int(offset_str))
            else:
                obj['timestamp'] = datetime.fromisoformat(timestamp_str)
    return json_objects

def add_flow_id(json_objects):
    for obj in json_objects:
        if all(key in obj for key in ['src_ip', 'src_port', 'dest_ip', 'dest_port', 'proto']):
            flow_id = f"{obj['src_ip']}:{obj['src_port']}-{obj['dest_ip']}:{obj['dest_port']}-{obj['proto']}"
            obj['Flow ID'] = flow_id
        else:
            obj['Flow ID'] = None
    return json_objects

def save_to_mongodb(data):
    # 환경 변수에서 MongoDB URI 가져오기
    mongo_uri = os.getenv("MONGODB_URI")
    if not mongo_uri:
        print("MongoDB URI를 환경 변수에서 찾을 수 없습니다.")
        return

    # MongoDB 클라이언트 연결 설정
    try:
        client = MongoClient(mongo_uri, tls=True, tlsAllowInvalidCertificates=True)
        db = client['network_catcher_database']
        collection = db['traffic']

        # 데이터 삽입
        collection.insert_many(data)

        # 인덱스 생성
        existing_indexes = collection.index_information()
        if 'timestamp_1' not in existing_indexes:
            collection.create_indexes([
                IndexModel([('timestamp', ASCENDING)], expireAfterSeconds=432000)
            ])
    except Exception as e:
        print(f"MongoDB에 연결하는 동안 오류 발생: {e}")

def recreate_eve_json_file(file_path):
    if os.path.exists(file_path):
        os.remove(file_path)

    with open(file_path, 'w') as file:
        file.write("")

if __name__ == "__main__":
    eve_json_path = "/var/log/suricata/eve.json"

    json_objects = parse_json_file(eve_json_path)
    json_objects = convert_timestamp(json_objects)
    json_objects = add_flow_id(json_objects)
    save_to_mongodb(json_objects)
    recreate_eve_json_file(eve_json_path)
