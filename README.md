# Product Data Management System

## Project Overview

The Product Data Management System is a console-based JavaScript application that interacts with the DummyJSON Products API. The project demonstrates core JavaScript concepts, including asynchronous programming, array methods, object manipulation, Promises, async/await, and CRUD operations using the Fetch API.

All application output is displayed in the console. No DOM manipulation or external JavaScript libraries are used.

## Features

### Product Retrieval

* Fetch product data from the DummyJSON API
* Handle HTTP responses and errors
* Convert JSON responses into JavaScript objects

### Product Display

* Display product information using `forEach()`
* Show product ID, title, price, category, rating, and stock

### Data Transformation

* Create simplified product objects using `map()`
* Extract only relevant product properties

### Product Search

* Search products by title using `filter()`
* Case-insensitive search functionality

### Product Lookup

* Find a specific product by ID using `find()`

### Price Filtering

* Filter products based on a maximum price

### Value Calculation

* Calculate total product value using `reduce()`

### Object Operations

* Demonstrate:

  * `Object.keys()`
  * `Object.values()`
  * `Object.entries()`

### Destructuring

* Object destructuring
* Array destructuring

### Spread Operator

* Create updated product objects without modifying originals

### Promises and Async Programming

* Custom Promise implementation
* Promise chaining with `.then()` and `.catch()`
* Async/await implementation with `try...catch`

### CRUD Operations

* GET products
* POST new products
* PATCH existing products
* DELETE products

---

## Technologies Used

* JavaScript (ES6+)
* Fetch API
* DummyJSON REST API
* Async/Await
* Promises

---

## API Used

DummyJSON Products API

Endpoint:

```text
https://dummyjson.com/products
```

Documentation:

https://dummyjson.com/docs/products

---

## Concepts Demonstrated

### JavaScript Fundamentals

* Functions
* Arrays
* Objects
* Destructuring
* Spread Operator

### Array Methods

* `forEach()`
* `map()`
* `filter()`
* `find()`
* `reduce()`

### Object Methods

* `Object.keys()`
* `Object.values()`
* `Object.entries()`

### Asynchronous JavaScript

* `setTimeout()`
* Callbacks
* Promises
* `.then()`
* `.catch()`
* `async`
* `await`
* `try...catch`
* `finally`

### API Concepts

* `fetch()`
* `response.ok`
* `response.json()`
* `JSON.stringify()`

### HTTP Methods

* GET
* POST
* PATCH
* DELETE

---

## Project Structure

```text
product-data-management-system/
│
├── index.js
├── README.md
└── package.json (optional)
```

---

## How to Run

### Clone the Repository

```bash
git clone <repository-url>
```

### Navigate to the Project Folder

```bash
cd product-data-management-system
```

### Run the Program

Using Node.js:

```bash
node index.js
```

Or run the file directly in the browser console.

---

## Learning Objectives

This project was created to strengthen understanding of:

* Asynchronous JavaScript
* Working with REST APIs
* Processing and transforming data
* Error handling
* Modern JavaScript syntax
* CRUD operations using Fetch API

---

## Author

Mahder Seifu

