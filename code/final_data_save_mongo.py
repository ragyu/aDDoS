from pymongo import MongoClient
from pymongo import ASCENDING
from pymongo import IndexModel
import json
from datetime import datetime

def parse_json_file(file_path):
    with open(file_path, 'r') as file:
        json_objects = [json.loads(line) for line in file]
    return json_objects

def convert_timestamp(json_objects):
    for obj in json_objects:
        # ISO 8601 형식에 대한 처리
        obj['timestamp'] = datetime.fromisoformat(obj['timestamp'])
    return json_objects

def save_to_mongodb(data):
    client = MongoClient('localhost', 27017)
    db = client.network_catcher_database  
    collection = db.traffic  
    collection.insert_many(data)

    # TTL index 생성
    collection.create_indexes([
        IndexModel([('timestamp', ASCENDING)], expireAfterSeconds=30)  # 5일 후에 삭제
    ])

if __name__ == "__main__":
    json_file_path = "C:\pythonstudy\Django\syn_flood_attackdata.json" 
    json_objects = parse_json_file(json_file_path)
    json_objects = convert_timestamp(json_objects)
    save_to_mongodb(json_objects)
