# Download the helper library from https://www.twilio.com/docs/python/install
import os
from twilio.rest import Client


# Find your Account SID and Auth Token at twilio.com/console
# and set the environment variables. See http://twil.io/secure
account_sid = "AC91b945aea28815f67bd00e4e132b9ac2"
auth_token = "c8f2c5002da0277fcfc72c4d0c3fc0e7"
client = Client(account_sid, auth_token)

lst = ["apple", "pear", "banana"] #to be linked to database
foodStr = ""
if len(lst) == 1:
    foodStr += lst[0]
else:
    for i in range(len(lst)-1): 
        foodStr += f"{lst[i]}, "
    foodStr += f"and {lst[-1]}"


message = client.messages \
                .create(
                     body=f"Morning Jane! Just a small reminder\
                         that your {foodStr} might go bad today so\
                         remember to use or preserve it soon!\n\
                         Love, your GreenFridge",
                     from_='+15737874445',
                     to='+14154167799'
                 )

print(message.sid)