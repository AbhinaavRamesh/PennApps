from audioop import avg
import os
import psycopg2
from dotenv import load_dotenv
from flask import Flask, request, jsonify
from scipy.signal import find_peaks
import numpy as np

from firebase_handler import write_humidity, write_temperature, fetch_humidity, fetch_temperature
from model_prediction import add_item_to_refrigerator



app = Flask(__name__)

load_dotenv()
USER = os.getenv('user')
PASSWORD = os.getenv('password')
CLUSTER_NAME = os.getenv('cluster_name')
PROJECT_ID = os.getenv('project_id')
CREDENTIALS_FILE_PATH = os.getenv('credentials_file_path')

def disp_Power(temps):
    baseline_power=500 # https://www.solarreviews.com/blog/refrigerator-how-many-watts
    peak_power= 1250 #https://www.solarreviews.com/blog/refrigerator-how-many-watts
    min_temp,peak_temp=min(temps),max(temps)
    power_ls=[baseline_power+((peak_power-baseline_power)*(it_temp-min_temp)/(peak_temp-min_temp)) for it_temp in temps]
    return power_ls

def CalculatePower(temps):
    baseline_power = 500 # https://www.solarreviews.com/blog/refrigerator-how-many-watts
    peak_power = 1250 # https://www.solarreviews.com/blog/refrigerator-how-many-watts
    price_pKWH = 0.129 # https://www.globalpetrolprices.com/electricity_prices/
    avg_cfp= 0.85 #Pounds https://www.eia.gov/tools/faqs/faq.php?id=74&t=11
    
    pks=list(find_peaks(temps))
    n_dips=len(pks)
    min_temp,peak_temp=min(temps),max(temps)
    powers_ls=[baseline_power+((peak_power-baseline_power)*(it_temp-min_temp)/(peak_temp-min_temp)) for it_temp in temps]
    increase_power=[powers_ls[i] for i in pks]
    # Calculate Monthly Cost with Skewed offset on high load time periods
    avgPowerConsumed=(0.001*500*sum(powers_ls)/len(powers_ls))  + (0.001*0.4*(1250+500)*sum(increase_power)/len(increase_power))  #in 15 Minutes
    costElectricity = 4 * 18 * 7 * 30 * price_pKWH * (avgPowerConsumed)
    avgWeeklyCarbonDioxide = 4 * 18 * 7 * avg_cfp * (avgPowerConsumed)

    return n_dips, costElectricity, avgWeeklyCarbonDioxide



    

@app.route('/')
def hello():
    """Return a friendly HTTP greeting."""
    return 'Hello World!'

@app.route('/test')
def test_db():
    conn = psycopg2.connect(f"postgresql://{USER}:{PASSWORD}@{CLUSTER_NAME}.gcp-us-east1.cockroachlabs.cloud:26257/defaultdb", sslmode='verify-full', sslrootcert="./ruby-mummy-ca.crt")
    res = ''
    with conn.cursor() as cur:
        cur.execute("SELECT now()")
        res = cur.fetchall()
        conn.commit()
    return jsonify({'message': res})

@app.route('/webhook', methods=['POST'])
def webhook():
    data = request.get_json(silent=True)
    print(data)
    reply = {'fulfillmentText': 'Ok'}
    return jsonify(reply)

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

@app_route('/refridgerator/populateLabels',methods=['POST','GET'])
def populateLabels_FridgeMetrics():
    if request.method=='GET':
        try:
            humidity_values=fetch_humidity()[-30:]
            temp_values=fetch_temperature()[-30:]
        except:
            humidity_values=fetch_humidity()
            temp_values=fetch_temperature()
        avg_temp = np.mean([i[1] for i in temp_values])
        avg_humidity = np.mean([i[1] for i in humidity_values])
        num_events,estMonthCos,est_WeeklyCarbonFootPrint=CalculatePower([i[1] for i in temp_values])
        return {'avgTemperature':avg_temp , 'avgHumidity' : avg_humidity, 'numEvents': num_events, 'monthlyCostElectricity': estMonthCos, 'weeklyCarbonDiOxide':est_WeeklyCarbonFootPrint}, 200

@app_route('/refridgerator/populateGraphs',methods=['POST','GET'])
def populateGraphs_FridgeMetrics():
    if request.method=='GET':
        try:
            temp_values=fetch_temperature()[-30:]
        except:
            temp_values=fetch_temperature()
        time_ls=[i[0] for i in temp_values]
        temp_values=[i[1] for i in temp_values]
        power_ls=disp_Power(temp_values)

        return {'timels':time_ls,'templs':temp_values,'powerls':power_ls},200

@app.route('/refrigerator/carbonEquivalence', methods=['POST'])
def fridge_metrics():
    if request.method == 'POST':
        try:
            data = request.json
            foodName = data.get('foodName')
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
