from pymongo import MongoClient
import json

# MongoDB Atlas 클라이언트 설정
client = MongoClient('mongodb+srv://(userID):(UserPW)@(mongoAtlasURI)', tls=True, tlsAllowInvalidCertificates=True)

# 데이터베이스와 컬렉션 설정
db = client['network_catcher_database']
collection = db['traffic']

# Change Stream 설정
with client['network_catcher_database']['traffic'].watch() as stream:
    for change in stream:
        if 'operationType' in change:  # 연산 유형이 있는지 확인
            operation_type = change['operationType']
            if operation_type == 'update' or operation_type == 'insert':  # 연산 유형이 update 또는 insert인 경우
                if 'updateDescription' in change or operation_type == 'insert':  # updateDescription 필드가 있거나 연산이 insert인 경우
                    # 변경 사항 콘솔 출력
                    print(change)  

                    try:
                        # 변경 사항을 JSON 파일에 저장
                        with open('/var/log/traffic.json', 'a') as file:  # 파일 경로 수정
                            # 'timestamp' 필드가 Timestamp 객체인 경우 문자열로 변환하여 새로운 딕셔너리 생성
                            new_change = {key: str(value) if key == 'timestamp' and isinstance(value, Timestamp) else value for key, value in change.items()}
                            json.dump(new_change, file, default=str)  # default=str를 추가하여 Timestamp 객체를 문자열로 직렬화
                            file.write('\n')  # 다음 변경 사항을 위해 새 줄 추가
                    except Exception as e:
                        print("An error occurred while writing to the file:", e)
                else:
                    print("Update description not found in the document:", change)
            else:
                print("Unsupported operation type:", operation_type)
