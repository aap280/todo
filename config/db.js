var Mongoose = require('mongoose');

Mongoose.connect('mongodb://localhost/tododb');
var db = Mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback() {
	console.log("Connection with database succeeded.");
});

exports.db = db;