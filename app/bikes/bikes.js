'use strict';

angular.module('myApp.bike', ['ngRoute','firebase'])

// .config(['$routeProvider', function($routeProvider) {
//   $routeProvider.when('/bike', {
//     templateUrl: 'bikes/bikelist.html',
//     controller: 'BikeCtrl'
//   });
// }])

.controller('BikeCtrl', ['$scope','$firebase','$firebaseSimpleLogin','$location',function($scope,$firebase,$firebaseSimpleLogin,$location, $routeParams) {
//.controller('HomeCtrl', function ($scope ,$firebaseSimpleLogin, $location, $routeParams, attendeeFactory, $window) {
  


  var firebaseObj = new Firebase("https://ariska.firebaseio.com");
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

                console.log('Authentication successful');
                $location.path('/bike');
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




$scope.signUp = function() {


var firebaseObj = new Firebase("https://dotapp.firebaseio.com");
var auth = $firebaseAuth(firebaseObj);


  
    if (!$scope.regForm.$invalid) {
        var email = $scope.user.email;
        var password = $scope.user.password;
        if (email && password) {
            auth.$createUser(email, password)
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




  $scope.user = {};

    var firebaseObj = new Firebase("https://dotapp.firebaseio.com/Bikes");
      
         
  var sync = $firebase(firebaseObj);

  $scope.articles = sync.$asArray();
//$scope.postToUpdate={};


  var isactive ='';
  $scope.addbikes = function() {
    var gpsid = $scope.Bike_Information.gpsid;
    var bikename = $scope.Bike_Information.bikename;
    var bikemake = $scope.Bike_Information.bikemake;
    var bikecode = $scope.Bike_Information.bikecode;
    var biketype = $scope.Bike_Information.biketype;
    var chassisnumber = $scope.Bike_Information.chassisnumber;
    var batterynumber = $scope.Bike_Information.batterynumber;
    var batteryexpiry = $scope.Bike_Information.batteryexpiry;
    var bikeservice = $scope.Bike_Information.bikeservice;
    var bikegivenumber = $scope.Bike_Information.bikegivenumber;
    var idealconditioncoveredkm = $scope.Bike_Information.idealconditioncoveredkm;
    var actualcoverdkm = $scope.Bike_Information.actualcoverdkm;
    var bikeprice = $scope.Bike_Information.bikeprice;
    var bikeshift = $scope.Bike_Information.bikeshift;
     isactive = $scope.Bike_Information.isactive;
    if(typeof isactive==='undefined')
    {
      isactive = false;
    }
    var firebaseObj = new Firebase("https://dotapp.firebaseio.com/Bikes");
    var fb = $firebase(firebaseObj);
 
    fb.$push({
        gpsid:gpsid,
        bikename:bikename,
        bikemake: bikemake,
        bikecode: bikecode,
       // emailId: CommonProp.getUser()
       biketype: biketype,
       chassisnumber: chassisnumber,
       batterynumber: batterynumber,
       chassisnumber: chassisnumber,
       batteryexpiry: batteryexpiry,
       bikeservice: bikeservice,
       bikegivenumber: bikegivenumber,
       idealconditioncoveredkm: idealconditioncoveredkm,
       actualcoverdkm: actualcoverdkm,
       bikeprice: bikeprice,
       bikeshift: bikeshift,
       isactive:isactive,      
    }).then(function(ref) {
        console.log(ref);
        $location.path('/bikelist');
    }, function(error) {
        console.log("Error:", error);
    });
 
}


  $scope.bikelist = function() {
    $location.path('/bikelist');
  };

    $scope.register = function() {
    $location.path('/register');
  };

  $scope.addbikers = function() {
    $location.path('/addbikers');
  };

    $scope.addbike = function() {
    $location.path('/addbikes');
  };


    $scope.editSession = function(id) {

  };



$scope.editPost = function(id) {    
//$location.path('/bikeedit');
    var firebaseObj = new Firebase("https://dotapp.firebaseio.com/Bikes/" + id); 
    var syn = $firebase(firebaseObj);
    $scope.postToUpdate = syn.$asObject();
    $location.path('/bikeedit/');
    
   // $('#editModal').modal();      // triggers the modal pop up
}

    $scope.update = function() {
        console.log($scope.postToUpdate.$id);
        var fb = new Firebase("https://dotapp.firebaseio.com/Bikes/" + $scope.postToUpdate.$id);
        var article = $firebase(fb);
        article.$update({
            title: $scope.postToUpdate.title,
            post: $scope.postToUpdate.post,
            emailId: $scope.postToUpdate.emailId
        }).then(function(ref) {
            console.log(ref.key()); // bar
            $('#editModal').modal('hide')
        }, function(error) {
            console.log("Error:", error);
        });

    }

}]);