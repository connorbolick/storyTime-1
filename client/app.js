var myApp = angular.module('Myapp', ['ngRoute', 'ngCookies']);

(function(){
	myApp.config(function($routeProvider){
		$routeProvider
			.when('/',
			{
				controller: 'reglogController',
				templateUrl: "partials/index.html"
			})

			.when('/user/new',
			{
				controller: 'reglogController',
				templateUrl: 'partials/userNew.html'
			})

			.when('/dashboard',{
				controller: 'dashboardController',
				templateUrl: 'partials/dashboard.html',
				authenticated: true
			})

			.when('/new_story', {
				controller: 'new_storyController',
				templateUrl: 'partials/new_story.html',
				authenticated: true
			})

			.when('/profile', {
				templateUrl: 'partials/profile.html',
				authenticated: true
			})

			.when('/story/:id', {
				controller: 'storyController',
				templateUrl: 'partials/story.html',
				authenticated: true
			})

			.otherwise({redirectTo:'/'});

	})
}());

myApp.run(function($rootScope, $location, loginFactory){
	$rootScope.$on("$routeChangeStart",
		function(event, next, current){
			if(next.$$route.authenticated) {
				if (!loginFactory.getAuthStatus()) {
					$location.path('/');
				}
			}

			if(next.$$route.originalPath == '/') {
				console.log('login page');
				if (loginFactory.getAuthStatus()) {
					$location.path(current.$$route.originalPath);
				}
			}
		});
})
