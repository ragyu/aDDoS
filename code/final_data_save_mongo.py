import json
import re
import os
from datetime import datetime, timedelta
from pymongo import MongoClient, ASCENDING, IndexModel

def parse_json_file(file_path):
    with open(file_path, 'r') as file:
        json_objects = [json.loads(line) for line in file]
    return json_objects

def convert_timestamp(json_objects):
    for obj in json_objects:
        if 'timestamp' in obj:
            # Extract timestamp and timezone offset from the string
            timestamp_str = obj['timestamp']
            offset_match = re.search(r'(?P<offset>[+-]\d{2})(?P<minute>\d{2})$', timestamp_str)
            
            if offset_match:
                offset_str = offset_match.group('offset')
                # Remove the timezone offset from the string
                timestamp_str = timestamp_str[:-6]
                
                # Adjust the number of digits after the decimal point to 6
                if '.' in timestamp_str:
                    timestamp_str += '0' * (6 - len(timestamp_str.split('.')[1]))
                
                # Convert to datetime object
                obj['timestamp'] = datetime.fromisoformat(timestamp_str) - timedelta(hours=int(offset_str))
            else:
                obj['timestamp'] = datetime.fromisoformat(timestamp_str)
    return json_objects

def add_flow_id(json_objects):
    for obj in json_objects:
        if all(key in obj for key in ['src_ip', 'src_port', 'dest_ip', 'dest_port', 'proto']):
            # Generate flow ID and add it to the log entry
            flow_id = f"{obj['src_ip']}:{obj['src_port']}-{obj['dest_ip']}:{obj['dest_port']}-{obj['proto']}"
            obj['Flow ID'] = flow_id
        else:
            obj['Flow ID'] = None  # or handle as per your requirement
    return json_objects

def save_to_mongodb(data):
    # MongoDB에 연결하고 사용자 인증을 수행합니다.
    mongo_username = os.environ.get('MONGODB_USER')
    mongo_password = os.environ.get('MONGODB_PASSWORD')
    client = MongoClient(f'mongodb://{mongo_username}:{mongo_password}@localhost:27019/network_catcher_database')
    db = client['network_catcher_database']
    collection = db['traffic']

    # 데이터베이스에 데이터를 삽입합니다.
    collection.insert_many(data)

    # TTL 인덱스가 이미 존재하는지 확인하고, 없다면 생성합니다.
    existing_indexes = collection.index_information()
    if 'timestamp_1' not in existing_indexes:
        collection.create_indexes([
            IndexModel([('timestamp', ASCENDING)], expireAfterSeconds=432000)  # 5일 후에 삭제
        ])

def recreate_eve_json_file(file_path):
    # Delete eve.json if it exists
    if os.path.exists(file_path):
        os.remove(file_path)
    
    # Recreate eve.json file
    with open(file_path, 'w') as file:
        file.write("")

if __name__ == "__main__":
    eve_json_path = "/var/log/suricata/eve.json"

    # Parse JSON file
    json_objects = parse_json_file(eve_json_path)
    
    # Convert timestamp
    json_objects = convert_timestamp(json_objects)
    
    # Add flow ID
    json_objects = add_flow_id(json_objects)
    
    # Save to MongoDB
    save_to_mongodb(json_objects)
    
    # Recreate eve.json file
    recreate_eve_json_file(eve_json_path)

