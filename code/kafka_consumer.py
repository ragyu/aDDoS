from kafka import KafkaConsumer
import json
import logging

# 필요한 필드 정의 
filtered_logs_required_fields = [
    'timestamp', 'src_ip', 'dest_ip', 'src_port', 'dest_port', 'proto', 'packet_length', 'packet_type', 
    'traffic_type', 'payload_data', 'malware_indicators', 'anomaly_scores', 'alerts_warnings', 
    'attack_type', 'attack_signature', 'action_taken', 'severity_level', 'user_info', 
    'device_info', 'network_segment', 'geo_location_data', 'proxy_info', 'firewall_logs', 
    'ids_ips_alerts', 'log_source'
]

# 로그 설정
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

# Kafka 설정 및 Consumer 생성
consumer = KafkaConsumer(
    'filtered_logs',  
    bootstrap_servers='localhost:9092',
    group_id='suricata_consumer_group',
    auto_offset_reset='earliest',
    enable_auto_commit=True
)

try:
    with open('filtered_suricata_logs.json', 'a') as output_file: 
        for msg in consumer:
            if msg.value:
                logging.debug("수신한 메시지: %s", msg.value.decode('utf-8'))
                data = json.loads(msg.value.decode('utf-8'))
                
                # 필터링된 데이터 추출
                filtered_data = {field: data.get(field, None) for field in filtered_logs_required_fields}
                logging.debug("추출된 데이터: %s", json.dumps(filtered_data))
                
                # filtered_data를 파일에 쓰거나 추가적으로 처리
                output_file.write(json.dumps(filtered_data) + '\n')

            else:
                logging.debug("빈 메시지 수신")

except KeyboardInterrupt:
    pass
finally:
    consumer.close()