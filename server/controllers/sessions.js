var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = (function() {
	return {
		create: function(req, res){
			console.log(req.body.email);
			User.findOne({'email': req.body.email}, function(err, result){
				if(err){
					res.json({errors: {
						message: "username and/or password is invalid"
					}})
				}else if(result && result.validPassword(req.body.password)){
					res.json(result);
				}else{
					res.json({errors: {
						message: "nononooooo"
					}})
				}
				console.log(result);
			})
		}
	}
})();