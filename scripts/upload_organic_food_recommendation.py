import pandas as pd
import ast
import firebase_admin
from firebase_admin import firestore

app = firebase_admin.initialize_app()
db = firestore.client()

df = pd.read_csv('AlternateRecommendations.csv')

ORGANIC_FOOD_COLLECTION = 'organic_food_recommendation'

for rec in df.to_dict('records'):
    url = ast.literal_eval(rec.get('URL'))
    food_id = rec.get('Food Id')
    name = rec.get('Name')
    doc_ref = db.collection(ORGANIC_FOOD_COLLECTION).document(name)
    doc_ref.set({'food_id': food_id, 'url': url})
