var express = require('express');
var promise = require('bluebird');
var router = express.Router();

var Place = require('../models/place');
var Activity = require('../models/activity');
var Hotel = require('../models/hotel');
var Restaurant = require('../models/restaurant');	

router.get('/', function(req, res, next) {

	var getActivities = Activity.findAll({});
	var getHotels = Hotel.findAll({});
	var getRestaurants = Restaurant.findAll({});

	promise.all([getHotels, getRestaurants, getActivities])
	.spread(function(hotels, restaurants, activities) {
		res.render('index', {
			hotels: hotels,
			restaurants: restaurants,
			activities: activities
		});
	})
	.catch(next);
	console.log('hello')
});

module.exports = router;
