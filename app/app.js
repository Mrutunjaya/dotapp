'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.register',
  'myApp.bike',
  'myApp.bikeedit',

]).
config(['$routeProvider', function($routeProvider) {

		$routeProvider.when('/home', {
		templateUrl: 'home/home.html',
		controller: 'HomeCtrl'
	})


	// 	.when('/editb', {
	// 	templateUrl: 'home/editbikes.html',
	// 	controller: 'HomeCtrl'
	// })
		.when('/bike', {
		templateUrl: 'home/bike.html',
		controller: 'HomeCtrl'
	})
		.when('/addbikes', {
		templateUrl: 'bikes/addbikes.html',
		controller: 'BikeCtrl'
	})

	.when('/addbikers', {
		templateUrl: 'bikers/addbikers.html',
		controller: 'HomeCtrl'
	})
	// 	.when('/bikeedit', {
	// 	templateUrl: 'bikes/bikeedit.html',
	// 	controller: 'BikeCtrl'
	// })

		.when('/register', {
    templateUrl: 'register/register.html',
    controller: 'RegisterCtrl'
	})

		.when('/bikesedit/:id', {
		templateUrl: 'bikes/bikeedit.html',
		controller: 'BikeiditCtrl'
	})
	// 	.when('/register', {
	// 	templateUrl: 'home/register.html',
	// 	controller: 'RegisterCtrl'
	// })

		.when('/bikelist', {
		templateUrl: 'bikes/bikelist.html',
		controller: 'BikeCtrl'
	})		

  $routeProvider.otherwise({redirectTo: '/home'});
}]);




// 'use strict';

// // Declare app level module which depends on views, and components
// angular.module('myApp', [
//   'ngRoute',
//   'myApp.home',
//   'myApp.register',
//   'myApp.bike',
//  // 'myApp.welcome',
//   //'myApp.addPost',
//   //'myApp.test'
// ]).
// config(['$routeProvider', function($routeProvider) {
//   $routeProvider.otherwise({redirectTo: '/home'});

//   		.when('/bike', {
// 		templateUrl: 'bikes/bikelist.html',
// 		controller: 'BikeCtrl'
// 	})	


// 		.when('/addbikes', {
// 		templateUrl: 'bikes/addbikes.html',
// 		controller: 'BikeCtrl'
// 	})	
// }]);
