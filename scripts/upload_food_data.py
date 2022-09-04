import pandas as pd
import firebase_admin
from firebase_admin import firestore

app = firebase_admin.initialize_app()
db = firestore.client()

df = pd.read_csv('output.csv')
df = df.fillna('')
data = df.to_dict('records')
print('Length of data:', data)
res = []

FOOD_COLLECTION = 'food'

for rec in data:
    name = rec.get('name').lower()
    del rec['name']
    print(name)
    doc_ref = db.collection(FOOD_COLLECTION).document(name)
    doc_ref.set(rec)
