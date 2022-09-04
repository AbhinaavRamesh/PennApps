import firebase_admin
from firebase_admin import firestore
from datetime import datetime

from config import prediction_mapping

app = firebase_admin.initialize_app()
db = firestore.client()

TEMPERATURE_COLLECTION = 'temperature'
HUMIDITY_COLLECTION = 'humidity'
REFRIGERATOR_ITEMS_COLLECTION = 'refrigerator_items'
FOOD_COLLECTION = 'food'

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

def fetch_food() -> dict:
    temp_ref = db.collection(FOOD_COLLECTION)
    docs = temp_ref.stream()
    return docs

def fetch_food_id(food_name: str):
    food_dict = { el.id: el.to_dict() for el in fetch_food() } 
    if food_name not in food_dict: return -1
    food_id = food_dict[food_name]['id']
    return food_id

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

def insert_refrigerator_item(label: str):
    timestamp = get_timestamp()
    doc_ref = db.collection(REFRIGERATOR_ITEMS_COLLECTION).document(timestamp)
    label_mapping = prediction_mapping[label]['name']
    doc_ref.set({u'label': label_mapping, 'food_id': fetch_food_id(label_mapping), 'weight': prediction_mapping[label]['weight'], 'item_count': 1}) # include food id and time

if __name__ == '__main__':
    print(fetch_humidity())
    print(fetch_temperature())
    