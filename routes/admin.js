const { log } = require('console');
const express = require('express');
const path = require('path');
const productsController = require('../controllers/products');

const rootDir = require('../utils/path');

const router = express.Router();


router.get('/add-product', productsController.getAddProduct);

router.post('/product', productsController.postAddProduct);

module.exports = router;