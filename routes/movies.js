var express = require('express');
var redis = require('redis');
var redisClient = redis.createClient();
var router = express.Router();

//GET moive listings
router.get('/', function(req, res) {
	redisClient.smembers('movies',function(err, movies){
		reslocals.movies = movies ? movies : [];
		res.render('movies');
	});
});

//Post Add Movie
router.post('/', function(req, res) {
	redisClient.sadd('movies', req.body.name);
	res.redirect('/movies');
});

module.exports = router;