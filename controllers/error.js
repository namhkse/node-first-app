exports.get404 = (req, res, next) => {
  console.log('Middleware 4: 404 route accessed');
  res.render('404', { pageTitle: 'Page Not Found', path: req.url });
};