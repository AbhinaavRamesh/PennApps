from nbformat import write
import firebase_admin
from firebase_admin import firestore
from datetime import datetime

app = firebase_admin.initialize_app()
db = firestore.client()

def fetch_temperature():
    pass

def write_temperature(temperature: float):
    timestamp = int(datetime.now().timestamp())
    doc_ref = db.collection(u'temperature').document(timestamp)
    doc_ref.set({u'temperature': temperature})

if __name__ == '__main__':
    write_temperature(50)