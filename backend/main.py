from flask import Flask, request, jsonify
from PIL import Image


app = Flask(__name__)


@app.route('/')
def hello():
    """Return a friendly HTTP greeting."""
    return 'Hello World!'

@app.route('/item/image', methods=['POST'])
def food_item_image():
    if request.method == 'POST':
        file = request.files['image']
        img = Image.open(file.stream)
        return jsonify({'msg': 'success', 'size': [img.width, img.height]})



if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8080, debug=True)
