var express = require('express');
var router = express.Router();
var db = require('../db.js');

//console.log(db.CatToys);

//REQUIRED FUNCTIONALITY
// delete a category
// list all products
// add product
// delete product

router.get('/:category', function(req, res){
	var category = req.params.category;
	res.render('categories', { products: db.getProducts(category), categories: db.getCategories() } );
});

router.post('/', function(req, res){
	// do something when product is added
});

router.delete('/', function(req, res){
	// when a cateogry is deleted redirect to home page
});

router.delete('/', function(req, res){
	// do something when a product is deleted
});

module.exports = router;
