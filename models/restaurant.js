'use strict';

var db = require('../db');
var Sequelize = require('sequelize');
var Place = require('./place');

var Restaurant = db.define('restaurant', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	cuisine: {
		type: Sequelize.STRING // comma delimited string list
	},
	price: {
		type: Sequelize.INTEGER,
		validate: { // int from 1-5 for number of dollar signs
			min: 1,
			max: 5
		}
	}
});

Restaurant.belongsTo(Place);

module.exports = Restaurant;
