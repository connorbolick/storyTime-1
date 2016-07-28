var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = (function() {
	return {

		create: function(req, res){
			var user = new User(req.body);
			user.save(function(err){
				if (err) {
					console.log('ohooooo problem saving newUser', user);
					res.json(err);
				}else{
					res.json(user);
				}
			})
		}

		// getMongooses: function(req, res){
		// 	mongooseDb.find({}, function(err, mongooses){
		// 		if(err){
		// 			console.log(err);
		// 			console.log('getmongooses function mongooses controller');
		// 		} else {
		// 			res.json(mongooses);
		// 		}
		// 	})
		// }
	}
})();
