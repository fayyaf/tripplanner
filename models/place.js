'use strict';

var db = require('../db');
var Sequelize = require('sequelize');

var Place = db.define('place', {
	address: {
		type: Sequelize.TEXT,
		allowNull: false
	},
	city: {
		type: Sequelize.STRING,
		allowNull: false
	},
	state: {
		type: Sequelize.STRING,
		allowNull: false
	},
	phone: {
		type: Sequelize.STRING,
		allowNull: false
	},
	location: {
		type: Sequelize.ARRAY(Sequelize.FLOAT), // latitude, ion float array
		allowNull: false
	}
});

module.exports = Place;
