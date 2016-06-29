var http = require('http');
var server = http.createServer();
var models = require('./models');
var Promise = require('bluebird');

server.on('request', require('./app'));

// Promise.all([
// 	models.Place.sync({}),
// 	models.Activity.sync({}),
// 	models.Hotel.sync({}),
// 	models.Restaurant.sync({})
// 	])
// 	.then(function(){
		server.listen(3000, function(){
			console.log('Sever listening on port 3000');
		});
	// })
	// .catch(console.error);
