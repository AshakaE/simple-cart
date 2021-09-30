const express = require('express');
const cartRouter = require('./routes/cartRoutes');
const tokenRouter = require('./routes/tokenRoutes');

const app = express();

app.use(express.json());

app.use('/api/v1/token/', tokenRouter);
app.use('/api/v1/carts/', cartRouter);

module.exports = app;
