# TravelPal

This is a course project. I am building a mobile app which is designed for students to find travel componions. A similar website could be fonud here http://www.solotraveller.com/.

The front-end is based on [*Ionic*](http://ionicframework.com/), an AngularJS framework. Check it out if you are interested.
The back-end is written in Ruby on Rails by yeelan. The repo is [here](https://github.com/yeelan0319/travelPal). Ionic apps are based on _Cordova/PhoneGap_ and can be converted into native app easily.

The app is built following the RESTful API described below:

### All request data and response are in JSON format:  
* User Register
* User Login
* User Logout
* Get Trips list for certain user_id
* Create a new trip
* Get Trip Detail for certain trip_id
* Edit Trip Detail for certain trip_id
* Delete Trip for certain trip_id 
* Leave a chat message
* .......

###Host: 
127.0.0.1:3000/api

###Meta - Status code:
* “200” // server successfully process the request and return the result
* “401” // authentication is required and has failed or has not yet been provided(not Login)
* “403” // not authorized to execute the request (like delete a trip that not belong to the user)
* “404” // stands for results not found

####User Register
path: api/signup  
method: POST  
parameters:  
```json
 {
    "user": {
        "email": "yuany11i@gmail.com",
        "password": "1234",
        "password_confirmation": "1234",
        "college": "NYU",
        "age": 24,
        "gender": 0,
        "major": "MSIS",
        "name": "Yuanyi"
    }
}
```

Sample response:  
If the email doesn’t exist, then it will create a new user and it returns:  
```json
{
    "meta": {
        "status": 200,
        "msg": "OK"
    },
    "data": {
        "token":"94ZcE8Otc1Ed_j_85rJ_mw"
    }
}
```
------

#### User Login
path: api/signin  
method: POST  
parameters:  
```json
 {"sessions":
          {"email": "yuanyi@gmail.com",
           "password": "1234"
          }
 }
 ```
Sample response:  
When login successfully  
```json
{
    "meta": {
        "status": 200,
        "msg": "OK"
    },
    "data": {
        "token":"94ZcE8Otc1Ed_j_85rJ_mw"
    }
}
```
--------
#### User Logout
path: api/signout  
method: DELETE  
parameters:  
```json
{"token":"p_SsuF2ig2abo25E6x8nCQ"}
```

Sample response:  
When logout successfully  
```json
{
    "meta": {
        "status": 200,
        "msg": "OK"
    }
}
```
--------
#### Get Trips list for certain user_id  
Get the list of trips information that the user has either initiated or applied  
path: /api/trips  
Method: GET  
Parameters:   
```json
{"token":"94ZcE8Otc1Ed_j_85rJ_mw"}
```
Sample response:  
```json
{
    "data": [
        { //Example for user initiated and joined trip
            "user_id": 1,
            "trip_id": 1,
            "status": true,  //The user has been approved to join, owner of the trip will default be so
            "trip": {
                "id": 1,
                "destination": "Alaska",
                "start_date": "2020-10-10T00:00:00.000Z",
                "end_date": "2020-10-30T00:00:00.000Z",
                "fee": 2000,
                "owner_id": 1
                "owner": {
                          "email": "ym731@nyu.edu",
               "id": 20,
               "name": "Yiran Mao"
                  }
            }
        },
        { //Example for user try to join trip initiated by someone else and yet been approved
            "user_id": 1,
            "trip_id": 4,
            "status": false,  //The user has applied but yet approved
            "trip": {
                "id": 4,
                "destination": "Florida",
                "start_date": "2014-12-10T00:00:00.000Z",
                "end_date": "2014-12-16T00:00:00.000Z",
                "fee": 1000,
                "owner_id": 2
                "owner": {
                          "email": "yuhaofool@126.com",
               "id": 2,
               "name": "Hao Yu"
                  }
            }
        }
    ],
    "meta": {
        "status": 200,
        "msg": "OK"
    }
}
```
---------
#### Create a new trip
Create the trip information and also build the relationship between user and this trip.  
path: /api/trips
Method: POST  
Parameters:   
```json
{"trip":{
      "destination":"Heaven",
      "start_date": "2014-04-29 04:09:52.422460", 
      "end_date":"2014-04-29 04:09:52.422460", 
      "fee":200
      },
  "token":"94ZcE8Otc1Ed_j_85rJ_mw"
}
```
Sample response:   
When the trip was created successfully  
```json
{
    "meta": {
        "status": 200,
        "msg": "OK"
    }
}
```
----------
#### Get Trip Detail for certain trip_id  
Give the detail information about a single trip.   
path: /api/trips/[trip_id]  
Method: GET  
Parameters:  
```json
{"token":"94ZcE8Otc1Ed_j_85rJ_mw"}
```
Sample response:  
```json
{
    "data": {
          "id": 1,
          "destination": "Alaska",
          "start_date": "2020-10-10T00:00:00.000Z",
          "end_date": "2020-10-30T00:00:00.000Z",
          "fee": 2000,
          "owner_id": 1
          "owner": {
                "email": "ym731@nyu.edu",
     "id": 20,
     "name": "Yiran Mao"
           }
     },
     "meta": {
        "status": 200,
        "msg": "OK"
     }
}
```
---------
#### Edit Trip Detail for certain trip_id  
Edit the detail information about a single trip.   
path: /api/trips/[trip_id]  
Method: PUT  
Parameters: (limited to the following fields but not all of them need to be filled)  
```json
{"trip":{
         "destination":"Earth",
         "start_date": "2014-04-29 04:09:52.422460", 
         "end_date":"2014-04-29 04:09:52.422460", 
         "fee":200
          },
 "token":"94ZcE8Otc1Ed_j_85rJ_mw"
}
```
Sample response:  
```json
{
    "meta": {
        "status": 200,
        "msg": "OK"
    }
}
```
----------
#### Delete Trip for certain trip_id 
Delete the detail information about a single trip.   
path: /api/trips/[trip_id]  
Method: DELETE  
Parameters:   
```json
{"token":"94ZcE8Otc1Ed_j_85rJ_mw"}
```
Sample response:   
```json
{
    "meta": {
        "status": 200,
        "msg": "OK"
    }
}
````
