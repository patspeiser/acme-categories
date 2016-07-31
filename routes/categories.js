var express = require('express');
var router = express.Router();
var db = require('../db.js');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

//REQUIRED FUNCTIONALITY
// delete a category
// list all products
// add product
// delete product

// need this to use delete when POSTing
router.use(methodOverride('_method'));

router.get('/:category', function(req, res){
	var category = req.params.category;
	res.render('categories', { products: db.getProducts(category), categories: db.getCategories(), category: category } );
});

router.post('/:category', function(req, res){
	db.addProduct(req.params.category, req.body.newProduct);
	res.redirect(req.params.category);
});

router.delete('/:category', function(req, res){
	db.deleteCategory(req.params.category);
	res.redirect('/');
});

router.delete('/:category/:product', function(req, res){
	db.deleteProduct(req.params.category, req.params.product);
	res.redirect('back');
});

module.exports = router;
