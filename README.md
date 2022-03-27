

# Directus Courier 💬
An extension for sending multi-channel notifications with courier. 
> Disclaimer: this is currently not intended for a production environment. In most cases mailerService can be used for action based emails.

## Installation
- Download or fork the repository
- Install the requirements\
  `npm install`
- Build the extension\
  `npm run build`
- Create a folder in your directus endpoints folder named `courier` or an alternate route name.
- Move the `index.js` build file to your new folder  `directus/extensions/courier/index.js`
- Include your Courier authentication token in your Directus .env file.
- Start your Directus instance `npx directus start`

## API Reference
This extension was made for sending notifications with Directus & Courier. Since it is limited in scope, certain Courier features are not currently supported. 

|  Type| Supported |
|--|--|
| POST/send | ✅ Supported [Reference](https://www.courier.com/docs/reference/send/message/)|
| POST/send/list | ✅ Supported [Reference](https://www.courier.com/docs/reference/send/list/) |
| POST /send/:event/routing | ✅ Supported [Reference](https://www.courier.com/docs/reference/send/routing-by-id/)|
| Profile API | ❌ Not Supported |
| Preferences API | ❌ Not Supported |
| Messages API | 👷🏻‍♂️ In Progress |
| Automation API | ❌ Not Supported |
| Lists API| ❌ Not Supported |
| Brands API| ❌ Not Supported |
| Events API| ❌ Not Supported |

## Authentication
Requests made by unauthenticated users will be rejected. Requests must be made with a cookie or bearer token.


## Sending Notifications
An example `POST` request made to `https://directusAppDomain/courier{or custom path}/`
In this example we are using an AWS SES channel to send an PDF attachment with courier overrides.
```JSON
{
 "brand": "**********************************",
 "eventId": "**********************************",
 "recipientId": "*******-****-****-****-*********",
 "profile": {
   "email": "email@mail.com"
  },
  "data": {},
  "override": {
		 "channel": {
      "email": {
        "attachments": [],
        "bcc": "",
        "cc": "",
        "from": "",
        "html": "",
        "replyTo": "",
        "subject": "My first courier directus notification!",
        "text": ""
      }
    },
    "aws-ses": {
      "attachments": [
        {
          "filename": "Test.pdf",
          "contentType": "application/pdf",
          "data": "JVBERi0xLjcKJYGBgYEKCjQgMCBvYmoKPDwKL..."
        }
      ]
    }
  }
}
```

## Environment Variables
 Required: The authentication key for your courier account.
 `AUTH_KEY="dk_prod_************************"`
