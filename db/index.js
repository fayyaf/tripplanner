var Sequelize = require('Sequelize');
var db = new Sequelize('postgres://localhost/tripplanner', {
	logging: false
});

module.exports = db;