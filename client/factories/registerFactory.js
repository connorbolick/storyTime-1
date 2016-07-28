myApp.factory('registerFactory', function($http){
	var factory = {};

	factory.registerUser = function(newUser, cb){
		$http.post('/users', newUser).then(function(data){
			console.log('made it back from db to factory added newuser', data.data.errors);
			cb(data.data);
		})
	}

	return factory;
})