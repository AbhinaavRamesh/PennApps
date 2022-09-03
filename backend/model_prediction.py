import base64
from google.cloud import aiplatform
from google.cloud.aiplatform.gapic.schema import predict

from firebase_handler import insert_refrigerator_item

def predict_image_classification_sample(
    project: str,
    endpoint_id: str,
    filename: str,
    location: str = "us-central1",
    api_endpoint: str = "us-central1-aiplatform.googleapis.com",
):
    # The AI Platform services require regional API endpoints.
    client_options = {"api_endpoint": api_endpoint}
    # Initialize client that will be used to create and send requests.
    # This client only needs to be created once, and can be reused for multiple requests.
    client = aiplatform.gapic.PredictionServiceClient(client_options=client_options)
    with open(filename, "rb") as f:
        file_content = f.read()

    # The format of each instance should conform to the deployed model's prediction input schema.
    encoded_content = base64.b64encode(file_content).decode("utf-8")
    instance = predict.instance.ImageClassificationPredictionInstance(
        content=encoded_content,
    ).to_value()
    instances = [instance]
    # See gs://google-cloud-aiplatform/schema/predict/params/image_classification_1.0.0.yaml for the format of the parameters.
    parameters = predict.params.ImageClassificationPredictionParams(
        confidence_threshold=0.5, max_predictions=5,
    ).to_value()
    endpoint = client.endpoint_path(
        project=project, location=location, endpoint=endpoint_id
    )
    response = client.predict(
        endpoint=endpoint, instances=instances, parameters=parameters
    )
    # print(" deployed_model_id:", response.deployed_model_id)
    # See gs://google-cloud-aiplatform/schema/predict/prediction/image_classification_1.0.0.yaml for the format of the predictions.
    predictions = response.predictions
    result = []
    for prediction in predictions:
        prediction_dict = dict(prediction)
        # print(" prediction:", dict(prediction))
        if len(prediction_dict.get('displayNames', [])) == 0 or len(prediction_dict.get('confidences', [])) == 0: continue
        result.append((prediction_dict.get('displayNames', [''])[0], prediction_dict.get('confidences', [0])[0]))
    if not result: return ()
    return sorted(result, key=lambda x: x[1])[0]


def classify_image(
    project: str,
    endpoint_id: str,
    image,
    location: str = "us-central1",
    api_endpoint: str = "us-central1-aiplatform.googleapis.com",
):
    # The AI Platform services require regional API endpoints.
    client_options = {"api_endpoint": api_endpoint}
    # Initialize client that will be used to create and send requests.
    # This client only needs to be created once, and can be reused for multiple requests.
    client = aiplatform.gapic.PredictionServiceClient(client_options=client_options)
    # with open(filename, "rb") as f:
    #     file_content = f.read()

    # The format of each instance should conform to the deployed model's prediction input schema.
    encoded_content = base64.b64encode(image).decode("utf-8")
    instance = predict.instance.ImageClassificationPredictionInstance(
        content=encoded_content,
    ).to_value()
    instances = [instance]
    # See gs://google-cloud-aiplatform/schema/predict/params/image_classification_1.0.0.yaml for the format of the parameters.
    parameters = predict.params.ImageClassificationPredictionParams(
        confidence_threshold=0.5, max_predictions=5,
    ).to_value()
    endpoint = client.endpoint_path(
        project=project, location=location, endpoint=endpoint_id
    )
    response = client.predict(
        endpoint=endpoint, instances=instances, parameters=parameters
    )
    # print(" deployed_model_id:", response.deployed_model_id)
    # See gs://google-cloud-aiplatform/schema/predict/prediction/image_classification_1.0.0.yaml for the format of the predictions.
    predictions = response.predictions
    result = []
    for prediction in predictions:
        prediction_dict = dict(prediction)
        # print(" prediction:", dict(prediction))
        if len(prediction_dict.get('displayNames', [])) == 0 or len(prediction_dict.get('confidences', [])) == 0: continue
        result.append((prediction_dict.get('displayNames', [''])[0], prediction_dict.get('confidences', [0])[0]))
    if not result: return ()
    return sorted(result, key=lambda x: x[1])[0]


def add_item_to_refrigerator(image):
    prediction = classify_image(
            project="369326407674",
            endpoint_id="4292343861256126464",
            location="us-central1",
            image=image
    )
    print(prediction)
    if not prediction: return
    label, confidence = prediction # maintain a history table and insert conf value
    weight = 250 # in grams
    insert_refrigerator_item(label, weight)
        


if __name__ == '__main__':
    file_path = 'C:/Users/Vikram/Desktop/PenApps/test_images'
    for i in range(1, 6):
        print(predict_image_classification_sample(
            project="369326407674",
            endpoint_id="4292343861256126464",
            location="us-central1",
            filename=f"{file_path}/{i}.jpeg"
        ))
