myApp.controller('dashboardController', ['$scope', 'StoryFactory', function($scope, StoryFactory){
	// Here is where we are creating indexController.
	// You have to make sure that our index controller matches the name
	// that we pass in, in our router.
	// So far the only variable that I'm injecting into this controller
	// is $scope.

	console.log('I am able to load my new_storyController along with my dashboard partial');

  StoryFactory.getStories(function(data){
    console.log('dashboard controller getting stories', data);
    $scope.stories = data;
  })
}])
