const fs = require('fs');
const catchAsync = require('../utils/catchAsync');

const carts = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/cart-data.json`)
);

exports.getAllCarts = catchAsync(async (req, res, next) => {
  res.status(200).json({
    status: 'success',
    results: carts.length,
    data: {
      carts,
    },
  });
});

exports.getCart = catchAsync(async (req, res, next) => {
  const id = req.params.id * 1;
  const cart = carts.find((el) => el.id === id);
  if (!cart) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }
  res.status(200).json({
    status: 'success',
    data: {
      cart,
    },
  });
});

exports.createCart = catchAsync(async (req, res, next) => {
  const newId = carts[carts.length - 1].id + 1;
  const newCart = { id: newId, ...req.body };
  carts.push(newCart);
  fs.writeFile(
    `${__dirname}/../data/cart-data.json`,
    JSON.stringify(carts),
    () => {
      res.status(201).json({
        status: 'success',
        data: {
          cart: newCart,
        },
      });
    }
  );
});

exports.updateCart = catchAsync(async (req, res, next) => {
  const id = req.params.id * 1;
  if (id > carts.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }

  carts[id] = { id, ...req.body };
  fs.writeFile(
    `${__dirname}/../data/cart-data.json`,
    JSON.stringify(carts, null, 2),
    () => {
      res.status(200).json({
        status: 'success',
        data: 'updated item',
      });
    }
  );
});

exports.deleteCart = catchAsync(async (req, res, next) => {
  if (req.params.id * 1 > carts.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }
  const id = req.params.id * 1;
  delete carts[id];
  fs.writeFile(
    `${__dirname}/../data/cart-data.json`,
    JSON.stringify(carts, null, 2),
    () => {
      res.status(200).json({
        status: 'success',
        data: 'deleted',
      });
    }
  );
});
