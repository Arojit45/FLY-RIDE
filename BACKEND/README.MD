# User Registration Endpoint Documentation

## Endpoint

`POST /users/register`

## Description

This endpoint is used to register a new user. It validates the input data and creates a new user in the database.

## Request Body

The request body should be a JSON object containing the following fields:

- `fullname`: An object containing:
  - `firstname`: A string with a minimum length of 3 characters.
  - `lastname`: A string with a minimum length of 3 characters.
- `email`: A valid email address.
- `password`: A string with a minimum length of 6 characters.

Example:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

## Responses

### Success

- **Status Code**: `201 Created`
- **Body**: A JSON object containing the authentication token and user details.

Example:

```json
{
  "token": "your-auth-token",
  "user": {
    "_id": "user-id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

### Validation Errors

- **Status Code**: `400 Bad Request`
- **Body**: A JSON object containing the validation errors.

Example:

```json
{
  "error": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "First Name must be at least 3 characters long.",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

### Server Errors

- **Status Code**: `500 Internal Server Error`
- **Body**: A JSON object containing the error message.

Example:

```json
{
  "error": "Internal Server Error"
}
```

# User Login Endpoint Documentation

## Endpoint

`POST /users/login`

## Description

This endpoint is used to authenticate a user. It validates the input data and returns an authentication token if the credentials are correct.

## Request Body

The request body should be a JSON object containing the following fields:

- `email`: A valid email address.
- `password`: A string with a minimum length of 6 characters.

Example:

```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

## Responses

### Success

- **Status Code**: `200 OK`
- **Body**: A JSON object containing the authentication token and user details.

Example:

```json
{
  "token": "your-auth-token",
  "user": {
    "_id": "user-id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

### Validation Errors

- **Status Code**: `400 Bad Request`
- **Body**: A JSON object containing the validation errors.

Example:

```json
{
  "error": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

### Authentication Errors

- **Status Code**: `401 Unauthorized`
- **Body**: A JSON object containing the error message.

Example:

```json
{
  "error": "Invalid email or password"
}
```

### Server Errors

- **Status Code**: `500 Internal Server Error`
- **Body**: A JSON object containing the error message.

Example:

```json
{
  "error": "Internal Server Error"
}
```

# User Profile Endpoint Documentation

## Endpoint

`GET /users/profile`

## Description

This endpoint is used to retrieve the authenticated user's profile information.

## Request Headers

- `Authorization`: Bearer token

## Responses

### Success

- **Status Code**: `200 OK`
- **Body**: A JSON object containing the user details.

Example:

```json
{
  "user": {
    "_id": "user-id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

### Authentication Errors

- **Status Code**: `401 Unauthorized`
- **Body**: A JSON object containing the error message.

Example:

```json
{
  "error": "Access denied"
}
```

### Server Errors

- **Status Code**: `500 Internal Server Error`
- **Body**: A JSON object containing the error message.

Example:

```json
{
  "error": "Internal Server Error"
}
```

# User Logout Endpoint Documentation

## Endpoint

`GET /users/logout`

## Description

This endpoint is used to log out the authenticated user by invalidating the authentication token.

## Request Headers

- `Authorization`: Bearer token

## Responses

### Success

- **Status Code**: `200 OK`
- **Body**: A JSON object containing a success message.

Example:

```json
{
  "message": "Logout successfully"
}
```

### Authentication Errors

- **Status Code**: `401 Unauthorized`
- **Body**: A JSON object containing the error message.

Example:

```json
{
  "error": "Unauthorized"
}
```

### Server Errors

- **Status Code**: `500 Internal Server Error`
- **Body**: A JSON object containing the error message.

Example:

```json
{
  "error": "Internal Server Error"
}
```
# Captain Route Endpoint Documentation

## 1. Captain Registration Endpoint

### Endpoint

`POST /captain/register`

### Description

Register a new captain. Validates input data and creates a new captain record in the database.

### Request Body

- `fullname`: An object containing:
  - `firstname`: A string with at least 3 characters.
  - `lastname`: A string with at least 3 characters.
- `email`: A valid email address.
- `password`: A string with a minimum length of 6 characters.
- `licenseNumber`: A valid captain license number.

Example:

```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "jane.doe@example.com",
  "password": "securePass123",
  "licenseNumber": "LIC-987654"
}
```

### Responses

#### Success

- **Status Code**: `201 Created`
- **Body**:

```json
{
  "token": "your-auth-token",
  "captain": {
    "_id": "captain-id",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "jane.doe@example.com",
    "licenseNumber": "LIC-987654"
  }
}
```

#### Validation Errors

- **Status Code**: `400 Bad Request`
- **Body**: Details of validation errors.

#### Server Errors

- **Status Code**: `500 Internal Server Error`
- **Body**:

```json
{
  "error": "Internal Server Error"
}
```

## 2. Captain Login Endpoint

### Endpoint

`POST /captain/login`

### Description

Authenticate a captain. Returns an authentication token on success.

### Request Body

- `email`: A valid email address.
- `password`: A string with a minimum length of 6 characters.

Example:

```json
{
  "email": "jane.doe@example.com",
  "password": "securePass123"
}
```

### Responses

#### Success

- **Status Code**: `200 OK`
- **Body**:

```json
{
  "token": "your-auth-token",
  "captain": {
    "_id": "captain-id",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "jane.doe@example.com",
    "licenseNumber": "LIC-987654"
  }
}
```

#### Authentication Errors

- **Status Code**: `401 Unauthorized`
- **Body**:

```json
{
  "error": "Invalid email or password"
}
```

#### Server Errors

- **Status Code**: `500 Internal Server Error`
- **Body**:

```json
{
  "error": "Internal Server Error"
}
```

## 3. Captain Profile Endpoint

### Endpoint

`GET /captain/profile`

### Description

Retrieve the authenticated captain’s profile details.

### Request Headers

- `Authorization`: Bearer token

### Responses

#### Success

- **Status Code**: `200 OK`
- **Body**:

```json
{
  "captain": {
    "_id": "captain-id",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "jane.doe@example.com",
    "licenseNumber": "LIC-987654"
  }
}
```

#### Authentication Errors

- **Status Code**: `401 Unauthorized`
- **Body**:

```json
{
  "error": "Access denied"
}
```

#### Server Errors

- **Status Code**: `500 Internal Server Error`
- **Body**:

```json
{
  "error": "Internal Server Error"
}
```

## 4. Captain Logout Endpoint

### Endpoint

`GET /captain/logout`

### Description

Logs out the authenticated captain by invalidating the authentication token.

### Request Headers

- `Authorization`: Bearer token

### Responses

#### Success

- **Status Code**: `200 OK`
- **Body**:

```json
{
  "message": "Logout successful"
}
```

#### Authentication Errors

- **Status Code**: `401 Unauthorized`
- **Body**:

```json
{
  "error": "Unauthorized"
}
```

#### Server Errors

- **Status Code**: `500 Internal Server Error`
- **Body**:

```json
{
  "error": "Internal Server Error"
}
```
# Captain Route Endpoint Documentation

## 1. Captain Registration Endpoint

### Endpoint

`POST /captain/register`

### Description

Register a new captain. Validates input data and creates a new captain record in the database.

### Request Body

- `fullname`: An object containing:
  - `firstname`: A string with at least 3 characters.
  - `lastname`: A string with at least 3 characters.
- `email`: A valid email address.
- `password`: A string with a minimum length of 6 characters.
- `licenseNumber`: A valid captain license number.

Example:

```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "jane.doe@example.com",
  "password": "securePass123",
  "licenseNumber": "LIC-987654"
}
```

### Responses

#### Success

- **Status Code**: `201 Created`
- **Body**:

```json
{
  "token": "your-auth-token",
  "captain": {
    "_id": "captain-id",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "jane.doe@example.com",
    "licenseNumber": "LIC-987654"
  }
}
```

#### Validation Errors

- **Status Code**: `400 Bad Request`
- **Body**: Details of validation errors.

#### Server Errors

- **Status Code**: `500 Internal Server Error`
- **Body**:

```json
{
  "error": "Internal Server Error"
}
```

## 2. Captain Login Endpoint

### Endpoint

`POST /captain/login`

### Description

Authenticate a captain. Returns an authentication token on success.

### Request Body

- `email`: A valid email address.
- `password`: A string with a minimum length of 6 characters.

Example:

```json
{
  "email": "jane.doe@example.com",
  "password": "securePass123"
}
```

### Responses:
"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2MwMDRjMTBiYjc3YjVkZjUyZTNkYmUiLCJpYXQiOjE3NDA2MzczNzcsImV4cCI6MTc0MDcyMzc3N30.3OHOY9z5zuBYSbfiOyJ-n4IZ021_PXWuHEprbVBZt3k",
"captain":{"fullname":{"firstname":"John","lastname":"Doe"},"email":"john.doe@example.com","password":"$2a$10$KudxhxlGuzNLCbMTAS81.evwMhRz4U5fOR8b5hoLmPkKZpYZ31/EO","status":"inactive",
"role":"captain",
"Vehicle":
{"color":"red",
"plate":"ABC123",
"capacity":4,
"vehicleType":"auto"
},
"_id":"67c004c10bb77b5df52e3dbe",
"__v":0}"
#### Success

- **Status Code**: `200 OK`
- **Body**:

```json
{
  "token": "your-auth-token",
  "captain": {
    "_id": "captain-id",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "jane.doe@example.com",
    "licenseNumber": "LIC-987654"
  }
}
```

#### Authentication Errors

- **Status Code**: `401 Unauthorized`
- **Body**:

```json
{
  "error": "Invalid email or password"
}
```

#### Server Errors

- **Status Code**: `500 Internal Server Error`
- **Body**:

```json
{
  "error": "Internal Server Error"
}
```

## 3. Captain Profile Endpoint

### Endpoint

`GET /captain/profile`

### Description

Retrieve the authenticated captain’s profile details.

### Request Headers

- `Authorization`: Bearer token

### Responses

#### Success

- **Status Code**: `200 OK`
- **Body**:

```json
{
  "captain": {
    "_id": "captain-id",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "jane.doe@example.com",
    "licenseNumber": "LIC-987654"
  }
}
```

#### Authentication Errors

- **Status Code**: `401 Unauthorized`
- **Body**:

```json
{
  "error": "Access denied"
}
```

#### Server Errors

- **Status Code**: `500 Internal Server Error`
- **Body**:

```json
{
  "error": "Internal Server Error"
}
```

## 4. Captain Logout Endpoint

### Endpoint

`GET /captain/logout`

### Description

Logs out the authenticated captain by invalidating the authentication token.

### Request Headers

- `Authorization`: Bearer token

### Responses

#### Success

- **Status Code**: `200 OK`
- **Body**:

```json
{
  "message": "Logout successful"
}
```

#### Authentication Errors

- **Status Code**: `401 Unauthorized`
- **Body**:

```json
{
  "error": "Unauthorized"
}
```

#### Server Errors

- **Status Code**: `500 Internal Server Error`
- **Body**:

```json
{
  "error": "Internal Server Error"
}
```


