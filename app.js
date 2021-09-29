const express = require('express');
const cartRouter = require('./routes/cartRoutes');

const app = express();

app.use(express.json());

app.use('/api/v1/carts/', cartRouter);
module.exports = app;
