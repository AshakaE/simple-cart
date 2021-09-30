const express = require('express');
const tokenController = require('../controllers/tokenController');

const router = express.Router();

router.route('/:name').get(tokenController.getToken);

module.exports = router;
