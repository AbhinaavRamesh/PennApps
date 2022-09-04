from ast import Or
from weakref import ref
import firebase_admin
from firebase_admin import firestore
from datetime import datetime

from config import prediction_mapping
from datetime import datetime
import time

def offsetCurrent(utc_datetime):
    now_timestamp = time.time()
    offset = datetime.fromtimestamp(now_timestamp) - datetime.fromtimestamp(utc_datetime)
    return offset.days

app = firebase_admin.initialize_app()
db = firestore.client()

TEMPERATURE_COLLECTION = 'temperature'
HUMIDITY_COLLECTION = 'humidity'
REFRIGERATOR_ITEMS_COLLECTION = 'refrigerator_items'
FOOD_COLLECTION = 'food'
ORGANIC_COLLECTION='organic_food_recommendation'

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

def fetch_refrigerator() -> dict:
    fridg_ref = db.collection(REFRIGERATOR_ITEMS_COLLECTION)
    docs = fridg_ref.stream()
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

def write_expirationDay(expDay: int):
    doc_ref = db.collection(FOOD_COLLECTION).document(timestamp)
    doc_ref.set({u'value': expDay})

def fetchCarbonEquivalence(food_name: str):
    food_dict = { el.id: el.to_dict() for el in fetch_food() } 
    if food_name not in food_dict: return -1
    food_id = food_dict[food_name]["id"]
    emissions_category_description = food_dict[food_name]["emissions_category_description"]
    emissions_category_letter = food_dict[food_name]["emissions_category_letter"]
    emissions_per_serving = food_dict[food_name]["emissions_per_serving"]
    expiration_dayspan = food_dict[food_name]["expiration_day"]
    food_image_url = food_dict[food_name]["food_image_url"]
    preservation_methods = food_dict[food_name]["preservation_methods"]
    refrigerator_dict={ el.id: el.to_dict() for el in fetch_refrigerator()}
    for it in refrigerator_dict:
        if refrigerator_dict[it]["food_id"]==food_id:
            offset_days=offsetCurrent(int(it))
            if expiration_dayspan+offset_days>0:
                expiredFlag=False
                daysToExpiry=int(expiration_dayspan+offset_days)
            else:
                expiredFlag=True
                daysToExpiry=-1
            foodWeight=refrigerator_dict[it]["weight"]
            carbonEquivalence=int(emissions_per_serving*foodWeight)
            return {"food_name":food_name,"emissions_category_description":emissions_category_description,"emissions_category_letter":emissions_category_letter, "emissions_per_serving":emissions_per_serving, "food_image_url":food_image_url, "preservation_methods":preservation_methods, "expiredFlag":expiredFlag,"daysToExpiry":daysToExpiry,"carbonEquivalence":carbonEquivalence }
            


    return {}

def deleteDocumentsRefrigerator():
    for it in db.collection(REFRIGERATOR_ITEMS_COLLECTION).stream():
        db.collection(REFRIGERATOR_ITEMS_COLLECTION).document(it).delete()

def fetchRecommendations():
    orref = db.collection(ORGANIC_COLLECTION)
    docs = orref.stream()
    food_dict = { el.id: el.to_dict() for el in docs }
    result_dict={}
    for it in food_dict:
        result_dict[it]={}
        result_dict[it]['RecommendationLink']=food_dict[it]['url'][0]
        # try:
        result_dict[it]['IconLink']=db.collection(FOOD_COLLECTION).document(it).get().to_dict()['food_image_url']
        # except:
        #     continue
    return result_dict
    


if __name__ == '__main__':
    print(fetch_humidity())
    print(fetch_temperature())
    
    