var db = require('../db.js');
var router = require('express').Router();

module.exports = router;

router.get('/:category', function(req, res){
	var category = req.params.category;
	res.render('category', {
    products: db.getProducts(category),
    categories: db.getCategories(),
    category: category
  });
});

router.post('/', function(req, res){
	db.addCategory(req.body.categoryToAdd);
	res.redirect('/categories/' + req.body.categoryToAdd);
});

router.delete('/:category', function(req, res){
	db.deleteCategory(req.params.category);
	res.redirect('/');
});

router.post('/:category/products', function(req, res){
	db.addProduct(req.params.category, req.body.newProduct);
	res.redirect('/categories/' + req.params.category);
});


router.delete('/:category/products/:product', function(req, res){
	db.deleteProduct(req.params.category, req.params.product);
	res.redirect('/categories/' + req.params.category);
});
