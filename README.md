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
When Register successfully  
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
