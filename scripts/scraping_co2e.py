import time
import requests
import pandas as pd


BASE_URL = 'https://app.myemissions.green'

food_res = requests.get(f'{BASE_URL}/api/v1/calculator/foods/?limit=1000')
food_data: list = food_res.json()['results']
print(food_data)

units_res = requests.get(f'{BASE_URL}/api/v1/calculator/units')
units_data: list = units_res.json()['results']
print(units_data)

units_map = {}

for unit in units_data:
    if unit.get('short_desc') and unit.get('short_desc') not in units_map:
        units_map[unit['short_desc']] = {'id': unit.get('id'), 'long_desc': unit.get('long_desc')}


food_results = []

for ind, food in enumerate(food_data):
    time.sleep(2)
    print(f'Iteration: {ind} => Scraping for: {food.get("name")}')
    try:
        carbon_footprint_res = requests.post(f'{BASE_URL}/api/v1/calculator/', json={'ingredients': [{'food': food.get('id'), 'unit': units_map['kg'].get('id'), 'amount': '1'}], 'servings': 1})
        if carbon_footprint_res.status_code != 201: raise Exception('Status code not 201')
        _data = carbon_footprint_res.json()['recipe'][0]
        temp = {'emissions_per_serving': _data['emissions_per_serving'], 'emissions_category_letter': _data['emissions_category_letter'],
                'emissions_category_description': _data['emissions_category_description'], 'carbon_label_url': _data['carbon_label_url']}
        food_results.append({**food, **temp})
    except Exception as e:
        print('Exception occurred', str(e))
    

df = pd.DataFrame.from_dict(food_results)
df.to_csv('output.csv', index=False)


