'use strict';

angular.module('myApp.bikeedit', ['ngRoute','firebase'])

// .config(['$routeProvider', function($routeProvider) {
//   $routeProvider.when('/bike', {
//     templateUrl: 'bikes/bikelist.html',
//     controller: 'BikeCtrl'
//   });
// }])

//.controller('BikeCtrl', ['$scope','$firebase','$firebaseSimpleLogin','$location',function($scope,$firebase,$firebaseSimpleLogin,$location, $routeParams) {
//.controller('HomeCtrl', function ($scope ,$firebaseSimpleLogin, $location, $routeParams, attendeeFactory, $window) {
  
.controller('BikeiditCtrl', ['$scope', '$firebase', '$routeParams','CommonProp','$location', function($scope, $firebase, $routeParams,CommonProp,$location) {
      $scope.username = CommonProp.getUser(); 
  //  var firebaseObj = new Firebase("https://dotapp.firebaseio.com/Bikes");
      
         
 // var sync = $firebase(firebaseObj);

//  $scope.articles = sync.$asArray();
//$scope.postToUpdate={};



  $scope.back = function() {
    $location.path('/bikelist');
  };


var bikeid = $routeParams.id;
console.log(bikeid);
  //  $scope.editPost = function(id) {
        console.log(bikeid);
        var firebaseObj = new Firebase("https://dotapp.firebaseio.com/Bikes/" + bikeid);


        var syn = $firebase(firebaseObj);
        $scope.postToUpdate = syn.$asObject();

    $scope.update = function() {
        console.log($scope.postToUpdate.$id);
        var fb = new Firebase("https://dotapp.firebaseio.com/Bikes/" + bikeid);
        var article = $firebase(fb);
        article.$update({
        gpsid:$scope.postToUpdate.gpsid,
        bikename:$scope.postToUpdate.bikename,
        bikemake: $scope.postToUpdate.bikemake,
        bikecode: $scope.postToUpdate.bikecode,
       // emailId: CommonProp.getUser()
       biketype: $scope.postToUpdate.biketype,
       chassisnumber: $scope.postToUpdate.chassisnumber,
       batterynumber: $scope.postToUpdate.batterynumber,
       chassisnumber: $scope.postToUpdate.chassisnumber,
       batteryexpiry: $scope.postToUpdate.batteryexpiry,
       bikeservice: $scope.postToUpdate.bikeservice,
       bikegivenumber: $scope.postToUpdate.bikegivenumber,
       idealconditioncoveredkm: $scope.postToUpdate.idealconditioncoveredkm,
       actualcoverdkm: $scope.postToUpdate.actualcoverdkm,
       bikeprice: $scope.postToUpdate.bikeprice,
       bikeshift: $scope.postToUpdate.bikeshift,
       isactive:$scope.postToUpdate.isactive,


        }).then(function(ref) {
           // console.log(ref.key()); // bar
           // $('#editModal').modal('hide')
           $location.path('/bikelist');
        }, function(error) {
            console.log("Error:", error);
        });

    }

}]);