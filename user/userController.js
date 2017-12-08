var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended: true}));

var User = require('./user');
module.exports = router;


//create new user
router.post('/',function(req,res){
	User.create({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password
	},function(err,user){
		if(err) return res.status(500).send("There was a problem adding the info to the database.");
		res.status(200).send(user);
	});
});

//returns all users in database
router.get('/',function(req,res){
	User.find({},function(err,users){
		if(err) return res.status(500).send("There was a problem finding the user.");
		res.status(200).send(users);
	});
});

//gets single user from database
router.get('/:id',function(req,res){
	User.findById(req.params.id,function(err,user){
		if(err) return res.status(500).send("There was a problem finding the user.");
		res.status(200).send(user);
	});
});

//delete user from database
router.delete('/:id',function(req,res){
	User.findByIdAndRemove(req.params.id,function(err,user){
		if(err) return res.status(500).send("There was a problem deleting the user.");
		res.status(200).send("User "+user.name+" was deleted.");
	});
});

//update single user in database
router.put('/:id',function(req,res){
	User.findByIdAndUpdate(req.params.id,req.body,{new: true},function(err,user){ //new: true because i want to be returned the updated value of user and not the old one
		if(err) return res.status(500).send("There was a problem updating the user.");
		res.status(200).send(user);
	});
});