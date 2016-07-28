myApp.factory('StoryFactory', ['$http', function($http){

	// This is my dummyFactory. I usually add this into any project that
	// I do. Just so that I can use it for reference as I add new Factories
	// below we have an example of how we would create a post request, as well
	// as how we would create a get request.

	var factory = {};
  var stories = [];
	var story = [];

	factory.getStories = function(callback){
		$http.get('/stories').then(function(data){
			stories = data.data;
			callback(stories);
		});
	};
	// factory.getStory = function(id, callback){
	// 	console.log('story factory  id', id)
	// 	$http.get('/story'+ id).then(function(data){
	// 		story = data.data;
	// 		callback(story);
	// 	})
	// };
	factory.addStory = function(info, callback){
		console.log('made it to story factory');
		$http.post('/stories', info).then(function(data){
			console.log('back from backend -> this is story', data);
			if(data.error){
				console.log(data.error);
			} else {
				stories.push(data.data);
				callback(stories);
			}
		})
	};

	return factory;
}])
