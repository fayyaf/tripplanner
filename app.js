var Express = require('express');
var app = Express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var routes = require('./routes');
var swig = require('swig');

app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.engine('html', swig.renderFile);

app.use(morgan('      :method :url :status'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(Express.static(__dirname + '/public'));

app.use('/', routes);

app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
})

app.use(function(err, req, res, next) {
	res.status(err.status || 500).end();
	console.log(err.message);
	//res.render('index');
})

module.exports = app;
