'use strict';

angular.module('myApp.biker', ['ngRoute','firebase'])

// .config(['$routeProvider', function($routeProvider) {
//   $routeProvider.when('/home', {
//     templateUrl: 'home/home.html',
//     controller: 'HomeCtrl'
//   });
// }])
.controller('bikerCtrl', ['$scope','$firebase','$firebaseSimpleLogin','$location','CommonProp',function($scope,$firebase,$firebaseSimpleLogin,$location,CommonProp, $routeParams) {
//.controller('HomeCtrl', ['$scope','$location','CommonProp','$firebaseAuth',function($scope,$location,CommonProp,$firebaseAuth) {
 var firebaseObj = new Firebase("https://ariska.firebaseio.com");
    var loginObj = $firebaseSimpleLogin(firebaseObj);
  
  $scope.user = {};
  var login={};

$scope.test = function(){
  login.loading = true;
}


  
  $scope.user = {};



  $scope.addbikes = function() {
    var gpsid = $scope.Biker_Information.gpsid;
    var bikename = $scope.Biker_Information.bikename;
    var bikemake = $scope.Biker_Information.bikemake;
    var bikecode = $scope.Biker_Information.bikecode;
    var biketype = $scope.Biker_Information.biketype;
    var chassisnumber = $scope.Biker_Information.chassisnumber;
    var batterynumber = $scope.Biker_Information.batterynumber;
    var batteryexpiry = $scope.Biker_Information.batteryexpiry;
    var bikeservice = $scope.Biker_Information.bikeservice;
    var bikegivenumber = $scope.Biker_Information.bikegivenumber;
    var idealconditioncoveredkm = $scope.Biker_Information.idealconditioncoveredkm;
    var actualcoverdkm = $scope.Biker_Information.actualcoverdkm;
    var bikeprice = $scope.Biker_Information.bikeprice;
    var bikeshift = $scope.Biker_Information.bikeshift;
     isactive = $scope.Biker_Information.isactive;
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
