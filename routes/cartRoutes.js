const express = require('express');
const cartController = require('../controllers/cartController');
const auth = require('../auth');

const router = express.Router();

router
  .route('/')
  .get(auth('read'), cartController.getAllCarts)
  .post(auth('create'), cartController.createCart);

router
  .route('/:id')
  .get(auth('read'), cartController.getCart)
  .put(auth('update'), cartController.updateCart)
  .delete(auth('delete'), cartController.deleteCart);

module.exports = router;
