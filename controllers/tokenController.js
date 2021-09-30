const jwt = require('jsonwebtoken');
const config = require('../config');
const catchAsync = require('../utils/catchAsync');

exports.getToken = catchAsync(async (req, res, next) => {
  const payload = {
    name: req.params.name,
    scopes: ['create', 'read', 'update', 'delete'],
  };
  const token = jwt.sign(payload, config.JWT_SECRET);
  return res.json({ token });
});
