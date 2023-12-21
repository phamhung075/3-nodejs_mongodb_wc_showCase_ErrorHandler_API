# Node.js MongoDB Showcase Projects

This is a personal project created based on the series of lessons by @anonystick (https://github.com/anonystick).

## 1. [Authentication and API Key Management (HS256)](https://github.com/phamhung075/2-nodejs_mongodb_wc_showCase_Dynamic_for_ApiKey_and_Permissions_HS256/tree/master)
---
## 2. ErrorHandler API

### Introduction

`3-nodejs_mongodb_wc_showCase_ErrorHandler_API` is a Node.js application designed to showcase advanced error handling techniques in a Node.js and MongoDB environment.

### Installation

- Clone the repository: `git clone https://github.com/phamhung075/3-nodejs_mongodb_wc_showCase_ErrorHandler_API.git`
- Change to the directory: `cd 3-nodejs_mongodb_wc_showCase_ErrorHandler_API`
- Install dependencies: `npm install`

### Features

- Advanced error handling mechanisms integrated into the Node.js application.
- Utilizes HTTP status codes and reason phrases for precise error communication.
- Enhanced API response management for better error reporting.

### Usage

- The application demonstrates effective error handling in various scenarios within a Node.js and MongoDB setup.
- For detailed examples and usage, refer to the provided documentation and code examples in the project.
### MongoDB Connection

Connect to the MongoDB server using: `mongodb://localhost:27017`

### Postman Example for SignUp

### Create API key

Please uncomment lines 8 to 11 in the `apiKey.service.js` file. Then, make a request to [http://localhost:3052/v1/api/shop/signup](http://localhost:3052/v1/api/shop/signup) to create an API key, which will be displayed in the Node.js server console.

```
    // //create Api for test
    // const newKey = await apiKeyModel.create({key: crypto.randomBytes(64).toString('hex'), permissions: ['0000']});
    // console.log(newKey);
    // //end Api for test
```

now, we can signup with Apikey

```
@url_dev=http://localhost:3052/v1/api/

### signup
POST {{url_dev}}/shop/signup
Content-Type: application/json
x-api-key: bebded361da96590be34a4b7f9aa3f9db3fc637d27c95428c13d4c0ad2145cdbdb2b2974df95715efaf5335c3c7f6368e86e5f29bb846e54b3250b48fc1d7fe7

{
    "name": "cartepopup",
    "email": "cartepopup4@gmail.com",
    "password": "abc123"
}
```
For more detailed examples, refer to see [README.png](./help03.png).
