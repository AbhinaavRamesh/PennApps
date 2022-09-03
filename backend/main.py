from PIL import Image
from flask import Flask, request, jsonify

from firebase_handler import write_humidity, write_temperature, fetch_humidity, fetch_temperature
from model_prediction import add_item_to_refrigerator


app = Flask(__name__)


@app.route('/')
def hello():
    """Return a friendly HTTP greeting."""
    return 'Hello World!'

@app.route('/item/image', methods=['POST'])
def food_item_image():
    if request.method == 'POST':
        file = request.files['image'].read()
        add_item_to_refrigerator(file)
        return jsonify({'messsage': 'success'})

@app.route('/refrigerator/metric', methods=['POST', 'GET'])
def fridge_metrics():
    if request.method == 'POST':
        try:
            data = request.json
            temp = data.get('temperature')
            if temp: write_temperature(temp)
            humidity = data.get('humidity')
            if humidity: write_humidity(humidity)
        except Exception as e:
            print(f'Exception occurred: {str(e)}')
            return {'message': 'INTERNAL_SERVER_ERROR'}, 500
        return {'message': 'Data saved successfully'}, 200
    if request.method == 'GET':
        return {'temperature': sorted(fetch_temperature(), key=lambda x: x[0]), 'humidity': sorted(fetch_humidity(), key=lambda x: x[0])}, 200


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8080, debug=True)
