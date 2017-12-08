var express = require('express');
var app = express();
var db = require('./db');

var userConroller = require('./user/userController');
app.use('/users',userConroller);

// to make it visible to the rest of the programm
module.exports = app;