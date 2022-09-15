## 💡Inspiration
Every year, around 40 million tons of food is wasted in the United States. That is estimated to be around 35 percent, of the entire US food supply. When we waste food, we also waste all the energy and water it takes to grow, harvest, transport, and package it. And if food goes to the landfill and rots, it produces methane—a greenhouse gas that is 26x more potent than carbon dioxide.
Drilling down further into the problem of food waste, research shows that 43% of all waste in United States actually comes from homes, which is more than food services and grocery stores combined.
Reducing food waste is one of the easiest and most, powerful actions anyone can take to help sustainability, so this weekend, our team chose to build a IoT and mobile solution that tackles food waste at homes.

## 🤔 What it does
**GreenFridge** is a end-to-end IoT, data and mobile application solution that tracks what users have in their fridge, remind users of food that is about to go bad, and educate users on ways they can do their part in minimizing their carbon footprint. Its key features include:
* Mobile feature 1: Displays live view of food items currently in the fridge and their shelf life 
* Mobile feature 2: Displays fridge power usage, temperature and humidity data, CO2 emissions per week, correlation between number of times fridge door was open and power. 
* Mobile feature 3: Recommends sustainable alternatives and way to offset carbon dioxide emissions of food items currently in fridge
* Integration 1: Twilio messages with reminders of food that is going to go bad today and recommends ways to preserve them 

[![IMG-2177.jpg](https://i.postimg.cc/NM561vVm/IMG-2177.jpg)](https://postimg.cc/cgGtS2dL)

[![Screen-Shot-2022-09-04-at-7-22-21-AM.jpg](https://i.postimg.cc/B6qysbjs/Screen-Shot-2022-09-04-at-7-22-21-AM.jpg)](https://postimg.cc/Z9MjxTPD)

## 🦾 How we built it
* __IoT:__ Raspberry Pi Camera Local Object Detection, Humidity Sensor, Temperature Sensor
* __Backend:__ Postman, Google Cloud Platform, Flask
* __Web Scraping:__ Python
* __Google Cloud Services:__ AutoML, Vision, Vertex AI, Compute Engine, Maps
* __Database:__ Cockcroach DB, Cloud Storage, FireStore
* __Twilio:__ Auto SMS
* __Frontend:__ React, JS, HTML, CSS, Figma

[![Screen-Shot-2022-09-04-at-6-06-14-AM.jpg](https://i.postimg.cc/k4vd7Wjj/Screen-Shot-2022-09-04-at-6-06-14-AM.jpg)](https://postimg.cc/5Yyr3QWv)

## 👨🏻‍🤝‍👨🏽 (PennApps Track) Sustainability Prize
We believe, and a lot of research also points to that, reducing food waste is the easiest and most powerful way to make a dent in sustainability. Like the Nest Thermostat that saves users ~13% on energy bills (usage), we envision GreenFridge to be in every home, helping users on food waste reduction and educating them on carbon footprint reduction, thus bringing outsized impact on sustainability.

## 🛠 (Sponsored by Citadel & Penn Detkin Lab) Best Hardware Hack
Thank you Penn Detkin Lab for lending us Raspberry Pi camera and other tools late at night, so that we can use local object detection to enable the rest of our solution! 

## ☁️ Best Use of Google Cloud - MLH
Our application uses Vertex AI (Auto ML) for Custom ML model, Compute Engine to deploy flask server, Cloud Storage to store images for training, FireStore to update data of items in fridge in real time, Connectors AI. 

## 🤖 Most Creative Use of Twilio - MLH
We used Twilio SMS to serve reminders of food that is going to go bad on that day and recommendations on ways to preserve them. Twilio was so intuitive to use, even for someone who is completely new!

[![Screen-Shot-2022-09-04-at-7-13-02-AM.jpg](https://i.postimg.cc/Y0PQXn5Z/Screen-Shot-2022-09-04-at-7-13-02-AM.jpg)](https://postimg.cc/p5D9rZXJ)

## Challenges we ran into
* We tried hard and followed documentation, but could not get Cockroach DB network setup

## Accomplishments that we're proud of
* Finding an object detection algorithm that is efficient on Raspberry Pi
* Interfacing humidity and temperature sensors, modeling surge in power consumption over time
* Training custom computer vision model and deploying for real time predictions
* Setting up Google Cloud infrastructure to enable efficient use of their tech stack - compute engine, API services, ML toolkit, data storage

## What we learned
* We were surprised by technology development that allow even learners to deploy complex technologies
* We were surprised by how big the opportunity it is to make a dent in sustanability through reducing food waste

