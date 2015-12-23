'use strict';

angular.module('myApp.bike', ['ngRoute','firebase'])

.controller('BikeCtrl', ['$scope', '$firebase', 'CommonProp','$location','$rootScope','$routeParams', function($scope, $firebase, CommonProp,$location,$rootScope,$routeParams) {
     
      $rootScope.loggedIn = CommonProp.getUser();
   // $scope.$apply()

$scope.username = {};
var currentUser = {};
var myRef = new Firebase("https://dotapp.firebaseio.com");
var authClient = new FirebaseSimpleLogin(myRef, function(error, user) {

if(user == null)
{
  $location.path('/home');
}

  if (error) {
    // an error occurred while attempting login
    console.log(error);
  } else if (user) {
    // user authenticated with Firebase
    currentUser = user;
    
  } else {
    // user is logged out
  }
});

 $scope.username = currentUser; 

       if(!$scope.username){
      $location.path('/home');
}

  $scope.logOut = function() {
     $rootScope.authClient.$logout();

  };


      console.log($rootScope.loggedIn);

      if($scope.loggedIn)
      {
        console.log("loggedIn")
      }
      else
      {
        console.log('not loggedIn')
      }

     // $scope.username = CommonProp.getUser(); 

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


  $scope.bikerlist = function() {
    $location.path('/bikerslist');
  };

  $scope.addbikers = function() {
    $location.path('/addbikers');
  };

    $scope.addbike = function() {
    $location.path('/addbikes');
  };

      $scope.assignbike = function() {
    $location.path('/assignbike');
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