# Express.js RESTful API – Week 2 Assignment

## Overview

This project is a RESTful API built using **Express.js** as part of the Week 2 assignment.
It demonstrates **CRUD operations**, **middleware usage**, **error handling**, and **advanced features** such as filtering, pagination, and search.

---

## How to Run the Server

### 1. Clone the Repository

### 2. Install Dependencies

Make sure you have **Node.js v18+** installed, then run:

```bash
npm install
```

### 3. Run the Server

```bash
npm start
```

By default, the server runs on:

```
http://localhost:3000
```

---

## API Endpoints

### 1. **Get All Products**

**Endpoint:** `GET /api/products`
**Description:** Retrieves a list of all products.
**Query Parameters (optional):**

| Parameter | Type   | Description                 |
| --------- | ------ | --------------------------- |
| category  | string | Filter products by category |
| name      | string | Search products by name     |
| page      | number | Page number for pagination  |
| limit     | number | Number of results per page  |

**Example Request:**

```
GET /api/products?category=electronics&page=1&limit=2
```

**Example Response:**

```json
{
  "total": 2,
  "products": [
    {
      "id": "1",
      "name": "Laptop",
      "description": "High-performance laptop with 16GB RAM",
      "price": 1200,
      "category": "electronics",
      "inStock": true
    },
    {
      "id": "2",
      "name": "Smartphone",
      "description": "Latest model with 128GB storage",
      "price": 800,
      "category": "electronics",
      "inStock": true
    }
  ]
}
```

---

### 2. **Get Product by ID**

**Endpoint:** `GET /api/products/:id`
**Example Request:**

```
GET /api/products/1
```

**Example Response:**

```json
{
  "id": "1",
  "name": "Laptop",
  "description": "High-performance laptop with 16GB RAM",
  "price": 1200,
  "category": "electronics",
  "inStock": true
}
```

---

### 3. **Create a Product**

**Endpoint:** `POST /api/products`
**Authentication Required:** Yes (`x-api-key` header)

**Headers:**

```
x-api-key: mysecretkey
Content-Type: application/json
```

**Example Request Body:**

```json
{
  "name": "Air Fryer",
  "description": "Oil-free cooking appliance",
  "price": 150,
  "category": "kitchen",
  "inStock": true
}
```

**Example Response:**

```json
{
  "id": "9b22e0f7-1a2e-4a2e-9a8d-6e5a13e68a09",
  "name": "Air Fryer",
  "description": "Oil-free cooking appliance",
  "price": 150,
  "category": "kitchen",
  "inStock": true
}
```

---

### 4. **Update a Product**

**Endpoint:** `PUT /api/products/:id`
**Authentication Required:** Yes (`x-api-key` header)

**Example Request:**

```
PUT /api/products/2
```

**Request Body:**

```json
{
  "price": 750,
  "inStock": false
}
```

**Example Response:**

```json
{
  "id": "2",
  "name": "Smartphone",
  "description": "Latest model with 128GB storage",
  "price": 750,
  "category": "electronics",
  "inStock": false
}
```

---

### 5. **Delete a Product**

**Endpoint:** `DELETE /api/products/:id`
**Authentication Required:** Yes (`x-api-key` header)

**Example Request:**

```
DELETE /api/products/3
```

**Example Response:**

```json
{
  "message": "Product deleted successfully",
  "deleted": [
    {
      "id": "3",
      "name": "Coffee Maker",
      "description": "Programmable coffee maker with timer",
      "price": 50,
      "category": "kitchen",
      "inStock": false
    }
  ]
}
```

---

## Middleware Implemented

1. **Logger Middleware:** Logs method, URL, and timestamp for every request.
2. **Authentication Middleware:** Checks for a valid `x-api-key` header (`mysecretkey`).
3. **Error Handler:** Catches and formats errors with status codes and messages.
4. **Body Parser:** Parses JSON bodies for incoming requests.

---

## Testing the API

You can use **Postman**, **Insomnia**, or **curl** to test the endpoints.

**Example curl command:**

```bash
curl -X GET http://localhost:3000/api/products
```

**Example curl command with authentication:**

```bash
curl -X POST http://localhost:3000/api/products \
-H "x-api-key: mysecretkey" \
-H "Content-Type: application/json" \
-d '{"name":"Blender","description":"Smoothie maker","price":100,"category":"kitchen","inStock":true}'
```

---