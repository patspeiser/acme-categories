var express = require('express');
var app = express();
var swig = require('swig');
var routes = require('./routes/categories.js');
var db = require('./db.js');

swig.setDefaults({
	cache: false
});

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/node_modules/'));

// displays index.html
app.get('/', function(req, res){
	res.render('index', { categories: db.getCategories()} );
});

//adds category
app.post('/', function(req, res){
	// do something here later
});

//when hitting /categories use router
app.use('/categories', routes);

app.listen(8080);
