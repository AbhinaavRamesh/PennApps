# Download the helper library from https://www.twilio.com/docs/python/install
import os
from twilio.rest import Client


# Find your Account SID and Auth Token at twilio.com/console
# and set the environment variables. See http://twil.io/secure
account_sid = "AC91b945aea28815f67bd00e4e132b9ac2"
auth_token = "c8f2c5002da0277fcfc72c4d0c3fc0e7"
client = Client(account_sid, auth_token)

lst = ["apple", "pear", "banana"] #to be linked to database

dict = {"apple": "freeze apple for smoothies", 
        "pear": "wrap pear tightly with plastic wrap and refrigerate",
        "banana": "freeze bananas for smoothies."
        }



foodStr = ""
hints = ""
if len(lst) == 1:
    foodStr += lst[0]
else:
    for i in range(len(lst)-1): 
        foodStr += f"{lst[i]}, "
        hints += f"{dict[lst[i]]}, "
    foodStr += f"and {lst[-1]}"
    hints += f"{dict[lst[-1]]}. "





message = client.messages \
                .create(
                     body=f"\nMorning Jane! Just a small reminder that your {foodStr} might go bad today so remember to use or preserve it soon!\n\nHint: {hints}\n\nLove, your GreenFridge <3",
                     from_='+15737874445',
                     to='+14154167799'
                 )

print(message.sid)