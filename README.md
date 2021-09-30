# SIMPLE CART API

> A simple cart API built with Node.js, it authenticates and authorizes with JWT. Using this API, users can perform basic CRUD operations.

## Built With

- Node.js
- Expess.js
- JWT

## Current API Endpoints

- Base Endpoint `localhost:4000/api/v1/`

| Endpoints         | Functionality       |
| ----------------- | ------------------- |
| GET /token/:name  | Generate token      |
| GET /carts        | List all cart items |
| GET /carts/:id    | List one cart item  |
| POST /carts/      | Add new cart item   |
| PUT /carts/:id    | update cart item    |
| DELETE /carts/:id | Delete cart item    |

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

JavaScript

### Setup

- git clone `git@github.com:AshakaE/simple-cart.git`
- cd simple-cart

- Install required dependecies :<br>
  `npm install`

- Setup the secret key :<br>
  on linux machine -`echo "module.exports = { JWT_SECRET: 'Your secret key', }; " >> config.js`<br>
  on windows machine - create a file `config.js` in root folder and paste `module.exports = { JWT_SECRET: 'Your secret key', };` <br>

### Usage

- `npm start`<br>

👤 **Ashaka Egerega**

- GitHub: [@AshakaE](https://www.github.com/AshakaE/)
- LinkedIn: [AshakaE](https://www.linkedin.com/in/AshakaE/)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/AshakaE/simple-cart/issues).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

TBA

## 📝 License

Copyright 2021 Ashaka Egerega

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
