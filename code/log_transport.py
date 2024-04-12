#!/usr/bin/env python3


import json
from pymongo import MongoClient

# MongoDB에 연결
client = MongoClient('mongodb://localhost:27017/')
db = client['network_catcher_database']
collection = db['logs']

# JSON 파일 읽기
with open('access_log.json', 'r', encoding='utf-8') as file: 
    data = json.load(file)

# MongoDB에 데이터 저장
if isinstance(data, list):  # 데이터가 리스트 형태인 경우
    collection.insert_many(data)
else:  # 데이터가 단일 문서인 경우
    collection.insert_one(data)