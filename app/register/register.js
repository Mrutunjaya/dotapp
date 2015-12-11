'use strict';

angular.module('myApp.register', ['ngRoute','firebase'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/register', {
    templateUrl: 'register/register.html',
    controller: 'RegisterCtrl'
  });
}])

.controller('RegisterCtrl', ['$scope','$firebase','$firebaseSimpleLogin','$location',function($scope,$firebase,$firebaseSimpleLogin,$location, $routeParams) {
//.controller('HomeCtrl', function ($scope ,$firebaseSimpleLogin, $location, $routeParams, attendeeFactory, $window) {
  


  var firebaseObj = new Firebase("https://dotapp.firebaseio.com");
  var loginObj = $firebaseSimpleLogin(firebaseObj);
  

$scope.signUp = function() {


// var firebaseObj = new Firebase("https://dotapp.firebaseio.com");
// var auth = $firebaseAuth(firebaseObj);
  
    if (!$scope.regForm.$invalid) {
        var email = $scope.user.email;
        var password = $scope.user.password;
        if (email && password) {
            loginObj.$createUser(email, password)
                .then(function() {
                    // do things if success
                    console.log('User creation success');
                    $location.path('/home');
                }, function(error) {
                    // do things if failure
                    console.log(error);
                    $scope.regError = true;
                    $scope.regErrorMessage = error.message;
                });
        }
    }
};

    $scope.editSession = function(id) {

  };


}]);