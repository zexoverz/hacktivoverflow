# hacktivoverflow

 

## **1. `POST` User / Register**

  

Register new user and will returns data user and password that has been hashed.

  

-  **URL**

  

/user/register

  

-  **Method:**

  

`POST`

  

-  **URL params**

  

none

  

-  **Data Body**

  

```json

username=[string]

email=[string]

password=[string]

```

  

-  **Success Response:**

  

-  **Code:** 201

**Content:**

  

```json

{  
username  :  "username",

email  :  "email",

password  :  "$2a$10$ASA5ZM/cnNoBcR/OIl1iZOczgacDPUamq3Kwrmn1C01Pw0u4.4Iqi"  
}

```

  

**Error Response:**

  

-  **Code:** 400 BAD REQUEST

**Content:**  `{ 
    error : "username / password required" }/{ error : "username / password has been taken" }`

  

-  **Sample Input:**

  

```JSON

{

"username":  "username",

"email":  "email",

"password":  "123456"

}

```

  
  
  

## **2. `POST` User / Login**

  

Login user and will returns username, email and data Token.

  

-  **URL**

  

/user/login

  

-  **Method:**

  

`POST`

  

-  **URL params**

  

none

  

-  **Data Body**

  

```

email=[string]

password=[string]

```

  

-  **Success Response:**

  

-  **Code:** 200

**Content:**

  

```json

{

"token":  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNTY5OTgwMDE0fQ.UOxbgr1EY5sXCM1csgZIjba2vbbML-Tc-LtqDTKs5NY",

"username":  "username"

}

```

  

-  **Error Response:**

  

-  **Code:** 400 BAD REQUEST

**Content:**  `{ error : "username / password wrong" }`

-  **Code:** 500

**Content:**  `{ error : "Internal server error" }`

  

-  **Sample Input:**

  

```JSON

{

"email":  "email"

"password":  "123456"

}

```


## **3. `GET` Question**

  

GET question and will returns all questions Data

  

-  **URL**

  

/question

  

-  **Method:**

  

`GET`

  

-  **URL params**

  

none

  

-  **Data Body**

  

```
none
```

  

-  **Success Response:**

  

-  **Code:** 200

**Content:**

  

```json

[{
"upVotes": [
            "5dd5464ad7ebad4f5716f878",
            "5dd4b2020e69282c404e7c22",
            "5dd64e19db015f5cb7a5be88"
        ],
"downVotes": [],
"answers": [
            "5dd5ecd1db015f5cb7a5be87",
            "5dd64e40db015f5cb7a5be89"
        ],
"_id": "5dd5ec93db015f5cb7a5be86",
"title": "How can I calculate a Spearman coefficient of correlation with Spark ? ",
"description": "<p>To train myself with <code>Spark</code> and classical statistical \nanalysis",
"userId": {
"_id": "5dd5ec27db015f5cb7a5be85",
"name": "danang",
"email": "danang@gmail.com",
"password": "$2b$10$9Lz5sTeuba1mM787HPBXnOHbc1jqQVpBeA5XaRcreCi.9H.Jjy1qu",
"__v": 0
        },
"__v": 196
    }
]

```

  

-  **Error Response:**

  



-  **Code:** 500

**Content:**  `{ error : "Internal server error" }`

  

-  **Sample Input:**

  

```JSON
none
```

## **4. `GET` Question / :id**

  

GET Question/:id will returns one question data

  

-  **URL**

  

/question/:id

  

-  **Method:**

  

`GET`

  

-  **URL params**

  

/:id

  

-  **Data Body**

  

```

none

```

-  **Headers**

  

```

token=[string]

```

  

-  **Success Response:**

  

-  **Code:** 200

**Content:**

  

```json

{

"upVotes": [
            "5dd5464ad7ebad4f5716f878",
            "5dd4b2020e69282c404e7c22",
            "5dd64e19db015f5cb7a5be88"
        ],
"downVotes": [],
"answers": [
            "5dd5ecd1db015f5cb7a5be87",
            "5dd64e40db015f5cb7a5be89"
        ],
"_id": "5dd5ec93db015f5cb7a5be86",
"title": "How can I calculate a Spearman coefficient of correlation with Spark ? ",
"description": "<p>To train myself with <code>Spark</code> and classical statistical \nanalysis",
"userId": {
"_id": "5dd5ec27db015f5cb7a5be85",
"name": "danang",
"email": "danang@gmail.com",
"password": "$2b$10$9Lz5sTeuba1mM787HPBXnOHbc1jqQVpBeA5XaRcreCi.9H.Jjy1qu",
"__v": 0
        },
"__v": 196

}

```

  

-  **Error Response:**

  

-  **Code:** 400 BAD REQUEST

**Content:**  `{ error : "cant find id" }`

-  **Code:** 500

**Content:**  `{ error : "Internal server error" }`

  

-  **Sample Input:**

  

```JSON

{

"token" = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZDRiMjAyMGU2OTI4MmM0MDRlN2MyMiIsImlhdCI6MTU3NDMxMDU5M30.TAVEK1wmT3_1WINkP8MlmUF0L-cP9191NKS01-qlxXg"

}

```



## **5. `POST` Question**

  

POST Question will returns Create a question data

  

-  **URL**

  

/question

  

-  **Method:**

  

`POST`

  

-  **URL params**

  

none

  

-  **Data Body**

  

```

{

title=[string]
description=[string],
upVotes=[ObjectId]
downVotes=[ObjectId]
userId=[ObjectId]
answers=[ObjectId]

}

```

-  **Headers**

  

```

token=[string]

```

  

-  **Success Response:**

  

-  **Code:** 201

**Content:**

  

```json

{

"upVotes": [],
"downVotes": [],
"answers": [],
"_id": "5dd5ec93db015f5cb7a5be86",
"title": "How can I calculate a Spearman coefficient of correlation with Spark ? ",
"description": "<p>To train myself with <code>Spark</code> and classical statistical \nanalysis",
"userId": "5dd5ec27db015f5cb7a5be85"
"__v": 196

}

```

  

-  **Error Response:**

  

-  **Code:** 400 BAD REQUEST

**Content:**  `{ error : "title and description mustbe required" }`

-  **Code:** 500

**Content:**  `{ error : "Internal server error" }`

  

-  **Sample Input:**

  

```JSON

{

"title": "testing",
"description": "testinggggggggggg"

}

```


## **6. `PUT` Question /:id**

  

PUT Question will returns Update a question data

  

-  **URL**

  

/question/:id

  

-  **Method:**

  

`PUT`

  

-  **URL params**

  

/:id

  

-  **Data Body**

  

```

{

title=[string]
description=[string]

}

```

-  **Headers**

  

```

token=[string]

```

  

-  **Success Response:**

  

-  **Code:** 200

**Content:**

  

```json

{

"upVotes": [],
"downVotes": [],
"answers": [],
"_id": "5dd5ec93db015f5cb7a5be86",
"title": "How can I calculate a Spearman coefficient of correlation with Spark ? ",
"description": "<p>To train myself with <code>Spark</code> and classical statistical \nanalysis",
"userId": "5dd5ec27db015f5cb7a5be85"
"__v": 196

}

```

  

-  **Error Response:**

  

-  **Code:** 400 BAD REQUEST

**Content:**  `{ error : "cant find id" }`

-  **Code:** 500

**Content:**  `{ error : "Internal server error" }`

  

-  **Sample Input:**

  

```JSON

{

"title": "testing",
"description": "testinggggggggggg"

}

```

## **7. `DELETE` Question /:id**

  

DELETE Question will returns Delete a question data

  

-  **URL**

  

/question/:id

  

-  **Method:**

  

`DELETE`

  

-  **URL params**

  

/:id

  

-  **Data Body**

  

```

none

```

-  **Headers**

  

```

token=[string]

```

  

-  **Success Response:**

  

-  **Code:** 200

**Content:**

  

```json

{
    "n": 1,
    "ok": 1,
    "deletedCount": 1
}

```

  

-  **Error Response:**

  

-  **Code:** 400 BAD REQUEST

**Content:**  `{ error : "cant find id" }`

-  **Code:** 500

**Content:**  `{ error : "Internal server error" }`

  

-  **Sample Input:**

  

```JSON

{

"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZDRiMjAyMGU2OTI4MmM0MDRlN2MyMiIsImlhdCI6MTU3NDMxMDU5M30.TAVEK1wmT3_1WINkP8MlmUF0L-cP9191NKS01-qlxXg"

}

```


## **8. `PATCH` Question /upVote/:id**

  

PATCH Question will returns Update upVote question data

  

-  **URL**

  

/question/upVote/:id

  

-  **Method:**

  

`PATCH`

  

-  **URL params**

  

/:id

  

-  **Data Body**

  

```

none

```

-  **Headers**

  

```

token=[string]

```

  

-  **Success Response:**

  

-  **Code:** 200

**Content:**

  

```json

{
    "n": 1,
    "ok": 1,
    "updatedCount": 1
}

```

  

-  **Error Response:**

  

-  **Code:** 400 BAD REQUEST

**Content:**  `{ error : "cant find id" }`

-  **Code:** 500

**Content:**  `{ error : "Internal server error" }`

  

-  **Sample Input:**

  

```JSON

{

"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZDRiMjAyMGU2OTI4MmM0MDRlN2MyMiIsImlhdCI6MTU3NDMxMDU5M30.TAVEK1wmT3_1WINkP8MlmUF0L-cP9191NKS01-qlxXg"

}

```

## **9. `PATCH` Question /downVote/:id**

  

PATCH Question will returns Update downVote question data

  

-  **URL**

  

/question/downVote/:id

  

-  **Method:**

  

`PATCH`

  

-  **URL params**

  

/:id

  

-  **Data Body**

  

```

none

```

-  **Headers**

  

```

token=[string]

```

  

-  **Success Response:**

  

-  **Code:** 200

**Content:**

  

```json

{
    "n": 1,
    "ok": 1,
    "updatedCount": 1
}

```

  

-  **Error Response:**

  

-  **Code:** 400 BAD REQUEST

**Content:**  `{ error : "cant find id" }`

-  **Code:** 500

**Content:**  `{ error : "Internal server error" }`

  

-  **Sample Input:**

  

```JSON

{

"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZDRiMjAyMGU2OTI4MmM0MDRlN2MyMiIsImlhdCI6MTU3NDMxMDU5M30.TAVEK1wmT3_1WINkP8MlmUF0L-cP9191NKS01-qlxXg"

}

```


## **10. `POST` Answer**

  

POST Answer will returns Create a answer data

  

-  **URL**

  

/answer

  

-  **Method:**

  

`POST`

  

-  **URL params**

  

none

  

-  **Data Body**

  

```

{


description=[string],
upVotes=[ObjectId]
downVotes=[ObjectId]
userId=[ObjectId]
author=[string]

}

```

-  **Headers**

  

```

token=[string]

```

  

-  **Success Response:**

  

-  **Code:** 201

**Content:**

  

```json

{

"upVotes": [],
"downVotes": [],
"author": "rendo",
"_id": "5dd5ec93db015f5cb7a5be86",
"description": "<p>To train myself with <code>Spark</code> and classical statistical \nanalysis",
"userId": "5dd5ec27db015f5cb7a5be85"
"__v": 196

}

```

  

-  **Error Response:**

  

-  **Code:** 400 BAD REQUEST

**Content:**  `{ error : "description mustbe required" }`

-  **Code:** 500

**Content:**  `{ error : "Internal server error" }`

  

-  **Sample Input:**

  

```JSON

{

"description": "testinggggggggggg"

}

```

## **11. `PATCH` Answer /upVote/:id**

  

PATCH Answer will returns Update upVote question data

  

-  **URL**

  

/answer/upVote/:id

  

-  **Method:**

  

`PATCH`

  

-  **URL params**

  

/:id

  

-  **Data Body**

  

```

none

```

-  **Headers**

  

```

token=[string]

```

  

-  **Success Response:**

  

-  **Code:** 200

**Content:**

  

```json

{
    "n": 1,
    "ok": 1,
    "updatedCount": 1
}

```

  

-  **Error Response:**

  

-  **Code:** 400 BAD REQUEST

**Content:**  `{ error : "cant find id" }`

-  **Code:** 500

**Content:**  `{ error : "Internal server error" }`

  

-  **Sample Input:**

  

```JSON

{

"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZDRiMjAyMGU2OTI4MmM0MDRlN2MyMiIsImlhdCI6MTU3NDMxMDU5M30.TAVEK1wmT3_1WINkP8MlmUF0L-cP9191NKS01-qlxXg"

}

```

## **12. `PATCH` Answer /downVote/:id**

  

PATCH Answer will returns Update downVote question data

  

-  **URL**

  

/answer/downVote/:id

  

-  **Method:**

  

`PATCH`

  

-  **URL params**

  

/:id

  

-  **Data Body**

  

```

none

```

-  **Headers**

  

```

token=[string]

```

  

-  **Success Response:**

  

-  **Code:** 200

**Content:**

  

```json

{
    "n": 1,
    "ok": 1,
    "updatedCount": 1
}

```

  

-  **Error Response:**

  

-  **Code:** 400 BAD REQUEST

**Content:**  `{ error : "cant find id" }`

-  **Code:** 500

**Content:**  `{ error : "Internal server error" }`

  

-  **Sample Input:**

  

```JSON

{

"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZDRiMjAyMGU2OTI4MmM0MDRlN2MyMiIsImlhdCI6MTU3NDMxMDU5M30.TAVEK1wmT3_1WINkP8MlmUF0L-cP9191NKS01-qlxXg"

}

```