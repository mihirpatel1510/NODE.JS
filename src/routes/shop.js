const path = require('path');

const express = require('express');

const { getAddProduct } = require('../controller/products');

const router = express.Router();

router.get('/', getAddProduct);

module.exports = router;
