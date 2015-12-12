'use strict';

angular.module('myApp.bike', ['ngRoute','firebase'])

// .config(['$routeProvider', function($routeProvider) {
//   $routeProvider.when('/bike', {
//     templateUrl: 'bikes/bikelist.html',
//     controller: 'BikeCtrl'
//   });
// }])

//.controller('BikeCtrl', ['$scope','$firebase','$firebaseSimpleLogin','$location',function($scope,$firebase,$firebaseSimpleLogin,$location, $routeParams) {
//.controller('HomeCtrl', function ($scope ,$firebaseSimpleLogin, $location, $routeParams, attendeeFactory, $window) {
 


.controller('BikeCtrl', ['$scope', '$firebase', 'CommonProp','$location', function($scope, $firebase, CommonProp,$location) {
      $scope.username = CommonProp.getUser(); 

//       if(!$scope.username){
//       $location.path('/home');
// }
          console.log($scope.username);

    var firebaseObj = new Firebase("https://dotapp.firebaseio.com/Bikes");
      
         
  var sync = $firebase(firebaseObj);

  $scope.articles = sync.$asArray();
//$scope.postToUpdate={};

  $scope.viewSession = function(id) {
    $location.path('/bikesedit');
  };


    $scope.editPost1 = function(id) {
      //  console.log(id);
      //  var firebaseObj = new Firebase("https://dotapp.firebaseio.com/Bikes/" + id);


       // var syn = $firebase(firebaseObj);
       // $scope.postToUpdate = syn.$asObject();
        $location.path('/bikesedit/' + id);

       // $('#editModal').modal('show');
    }


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



// $scope.editPost = function(id) {    
// //$location.path('/bikeedit');
//     var firebaseObj = new Firebase("https://dotapp.firebaseio.com/Bikes/" + id); 
//     var syn = $firebase(firebaseObj);
//     $scope.postToUpdate = syn.$asObject();
//     $location.path('/bikeedit');
    
//    // $('#editModal').modal();      // triggers the modal pop up
// }

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