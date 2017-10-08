# To-do list aplication (backend only) with node.js:<br>
Logged users can **creates**, **updates** and **deletes** their own todos.<br>
Passwords are **encrypted** and authorization tokens are created to secure the data.

## Routes:<br>

**Users**

>GET /users/me => Return user if authentificated<br>
POST /users => Create new user<br>
POST /users/login => Login user and return auth token<br>
DELETE /users/me/token => Remove auth token on logout<br>

**Todos**

>GET /todos => Get all todos<br>
POST /todos => Create a new todo<br>
GET /todos/:id => Return todo by id<br>
PATCH /todos/:id => Update todo by id<br>
DELETE /todos/:id => Remove todo by id<br>

## Node packages used:

- [bcryptjs](https://www.npmjs.com/package/bcryptjs): Inbuilt crypto module's randomBytes interface used to obtain secure random numbers.
- [body-parser](https://www.npmjs.com/package/body-parser): Parse incoming request bodies in a middleware before handlers.
- [crypto-js](https://www.npmjs.com/package/crypto-js): Collection of standard and secure cryptographic algorithms.
- [express](https://www.npmjs.com/package/express): Express is the backend part of the MEAN stack.
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken): Creates tokens that can be verified and trusted by means of a digital signature.
- [lodash](https://www.npmjs.com/package/lodash): Toolkit of Javascript functions that provides clean, performant methods for manipulating objects and collections.
- [mongodb](https://www.npmjs.com/package/mongodb): Provides a high-level API on top of mongodb-core that is meant for end users.
- [mongoose](https://www.npmjs.com/package/mongoose): Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment.
- [validator](https://www.npmjs.com/package/validator): A library of string validators and sanitizers.
- [expect](https://www.npmjs.com/package/expect) : Expect lets you write better assertions.
- [mocha](https://www.npmjs.com/package/mocha): Mocha is a flexible JavaScript test framework for node.js and the browser.
- [nodemon](https://www.npmjs.com/package/nodemon): Watches files in the directory. If any files change, nodemon will automatically restart the node application.
- [supertest](https://www.npmjs.com/package/supertest): HTTP assertions. Provide a high-level abstraction for testing HTTP.
