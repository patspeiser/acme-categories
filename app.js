var express = require('express');
var app = express();
var swig = require('swig');
var routes = require('./routes/categories.js');
var db = require('./db.js');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
swig.setDefaults({
	cache: false
});

//config view engine
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

//static files served from here
app.use(express.static(__dirname + '/node_modules/'));

//use body parser to make handling forms way easier
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

// displays index.html
app.get('/', function(req, res){
	res.render('index', { categories: db.getCategories()} );
});

//adds category

//when hitting /categories use router
app.use('/categories', routes);


//make the server listen on this port
app.listen(process.env.PORT, function(){
  console.log('listening on PORT ' + process.env.PORT);

});
