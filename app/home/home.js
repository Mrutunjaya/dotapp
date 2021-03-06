'use strict';

angular.module('myApp.home', ['ngRoute','firebase'])

// .config(['$routeProvider', function($routeProvider) {
//   $routeProvider.when('/home', {
//     templateUrl: 'home/home.html',
//     controller: 'HomeCtrl'
//   });
// }])
.controller('HomeCtrl', ['$scope','$firebase','$firebaseSimpleLogin','$location','CommonProp',function($scope,$firebase,$firebaseSimpleLogin,$location,CommonProp, $routeParams) {
//.controller('HomeCtrl', ['$scope','$location','CommonProp','$firebaseAuth',function($scope,$location,CommonProp,$firebaseAuth) {
 var firebaseObj = new Firebase("https://ariska.firebaseio.com");
    var loginObj = $firebaseSimpleLogin(firebaseObj);
  
  $scope.user = {};
  var login={};


    $scope.bikelist = function() {
    $location.path('/bikelist');
  };

$scope.test = function(){
  login.loading = true;
}

$scope.login=login;
  var firebaseObj = new Firebase("https://dotapp.firebaseio.com");
  var loginObj = $firebaseSimpleLogin(firebaseObj);
  
  $scope.user = {};
  $scope.SignIn = function(){ 
if (!$scope.regForm.$invalid) {

     //e.preventDefault();
     var username = $scope.user.email;
     var password = $scope.user.password;
     loginObj.$login('password', {
                email: username,
                password: password
            })
            .then(function(user) {
                //Success callback
                CommonProp.setUser(user.email);
                console.log('Authentication successful');
                $location.path('/bikelist');
            }, function(error) {
                //Failure callback
                if(username =='undefined')
                {
                  $scope.regError = false;

                  }
                  else
                  {
                    $scope.regError = true;
                    $scope.regErrorMessage = error.message;
                  }
                console.log('Authentication failure');
            });
          }
  }
}])
//.service('CommonProp', function() {
  .service('CommonProp',['$location','$firebaseSimpleLogin',function($location,$firebaseSimpleLogin) {
    var user = '';

      var firebaseObj = new Firebase("https://dotapp.firebaseio.com");
  var loginObj = $firebaseSimpleLogin(firebaseObj);
  


    return {
        getUser: function() {
            return user;
        },
        setUser: function(value) {
            user = value;
        },
          logoutUser:function(){
            loginObj.$logout();
            user='';
            localStorage.removeItem('userEmail');
            $location.path('/home');
        }
    };
//})
  }])
// .directive('laddaLoading', [
//     function() {
//         return {
//             link: function(scope, element, attrs) {
//                 var Ladda = window.Ladda;
//                 var ladda = Ladda.create(element[0]);
//                 // Watching login.loading for change
//                 scope.$watch(attrs.laddaLoading, function(newVal, oldVal) {
//                     // if true show loading indicator
//                     if (newVal) {
//                         ladda.start();
//                     } else {
//                         ladda.stop();
//                     }
//                 });
//             }
//         };
//     }
// ]);
