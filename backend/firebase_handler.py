import firebase_admin
from firebase_admin import firestore
from datetime import datetime

app = firebase_admin.initialize_app()
db = firestore.client()

TEMPERATURE_COLLECTION = 'temperature'
HUMIDITY_COLLECTION = 'humidity'
REFRIGERATOR_ITEMS_COLLECTION = 'refrigerator_items'

def fetch_temperature() -> list:
    temp_ref = db.collection(TEMPERATURE_COLLECTION)
    docs = temp_ref.stream()
    result = [[int(doc.id), round(doc.to_dict().get('value'), 2)] for doc in docs]
    return result

def fetch_humidity() -> list:
    temp_ref = db.collection(HUMIDITY_COLLECTION)
    docs = temp_ref.stream()
    result = [[int(doc.id), round(doc.to_dict().get('value'), 2)] for doc in docs]
    return result 

def get_timestamp() -> str:
    return str(int(datetime.now().timestamp()))

def write_temperature(temperature: float):
    timestamp = get_timestamp()
    doc_ref = db.collection(TEMPERATURE_COLLECTION).document(timestamp)
    doc_ref.set({u'value': temperature})

def write_humidity(humidity: float):
    timestamp = get_timestamp()
    doc_ref = db.collection(HUMIDITY_COLLECTION).document(timestamp)
    doc_ref.set({u'value': humidity})

def insert_refrigerator_item(label: str, weight: float):
    timestamp = get_timestamp()
    doc_ref = db.collection(REFRIGERATOR_ITEMS_COLLECTION).document(timestamp)
    doc_ref.set({u'label': label, 'weight': weight}) # include food id and time

if __name__ == '__main__':
    print(fetch_humidity())
    print(fetch_temperature())
    