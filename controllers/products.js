const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    console.log('Middleware 2: /add-product route accessed');
    res.render('add-product', { pageTitle: 'Add Product', path: '/admin/add-product' })
};

exports.postAddProduct = (req, res, next) => {
  console.log('Middleware 3: /product route accessed');
  const product = new Product(req.body.title);
  product.save();
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop', {products: products, pageTitle: 'Shop', path: '/'});
    });
};