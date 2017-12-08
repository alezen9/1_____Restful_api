var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
	name: String,
	email: String,
	password: String
});
mongoose.model('User',UserSchema); // binding schema to model

module.exports = mongoose.model('User');