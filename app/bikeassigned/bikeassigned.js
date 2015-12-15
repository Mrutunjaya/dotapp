'use strict';

angular.module('myApp.biker', ['ngRoute','firebase'])

// .config(['$routeProvider', function($routeProvider) {
//   $routeProvider.when('/home', {
//     templateUrl: 'home/home.html',
//     controller: 'HomeCtrl'
//   });
// }])
.controller('bikerCtrl', ['$scope','$firebase','$firebaseSimpleLogin','$location','CommonProp','$routeParams',function($scope,$firebase,$firebaseSimpleLogin,$location,CommonProp, $routeParams) {
//.controller('HomeCtrl', ['$scope','$location','CommonProp','$firebaseAuth',function($scope,$location,CommonProp,$firebaseAuth) {
      $scope.username = CommonProp.getUser(); 

//       if(!$scope.username){
//       $location.path('/home');
// }

    var firebaseassign = new Firebase("https://dotapp.firebaseio.com/Bikes");
 
    var bikesyn = $firebase(firebaseassign);
   
    $scope.allbikes = bikesyn.$asArray();

          console.log($scope.username);

    var bikerid = $routeParams.id;
    var bikerObj = new Firebase("https://dotapp.firebaseio.com/Biker/" + bikerid);


        var syn = $firebase(bikerObj);
        $scope.bikerToUpdate = syn.$asObject();

      
var firebaseObj = new Firebase("https://dotapp.firebaseio.com/Biker");    
  var sync = $firebase(firebaseObj);

  $scope.bikerlist = sync.$asArray();


$scope.assign = function(id) {
     
    $('#editModal').modal();      // triggers the modal pop up
}



  $scope.addbiker = function() {
    $location.path('/addbikers');
  };

    $scope.bikelist = function() {
    $location.path('/bikelist');
  };

    $scope.editbiker = function(id) {
        $location.path('/bikeredit/' + id);
    }
    $scope.bikerslist = function() {
    $location.path('/bikerslist');
  };
      $scope.assignbike = function() {
    $location.path('/assignbike');
  };
  $scope.user = {};

    $scope.update = function() {
        console.log(bikerid);
    //    var fb = new Firebase("https://dotapp.firebaseio.com/Bikes/" + bikeid);
        var bikerobjbyid = $firebase(bikerObj);
    bikerobjbyid.$update({
    firstname:$scope.bikerToUpdate.firstname,
     middlename:$scope.bikerToUpdate.middlename,
    lastname:$scope.bikerToUpdate.lastname,
     fathersname:$scope.bikerToUpdate.fathersname,
     mobileno:$scope.bikerToUpdate.mobileno,
     Employeecode:$scope.bikerToUpdate.Employeecode,
     email:$scope.bikerToUpdate.email,
     dob:$scope.bikerToUpdate.dob.toString(),
     homeaddress:$scope.bikerToUpdate.homeaddress,
     relname:$scope.bikerToUpdate.relname,
     reladdress:$scope.bikerToUpdate.reladdress,
     relmobile:$scope.bikerToUpdate.relmobile,
     bloodgroup:$scope.bikerToUpdate.bloodgroup,
     bikeassigned:$scope.bikerToUpdate.bikeassigned,
     qualification:$scope.bikerToUpdate.qualification,
     operatingarea:$scope.bikerToUpdate.operatingarea,
     interests:$scope.bikerToUpdate.interests,
    children:$scope.bikerToUpdate.children,
     religion:$scope.bikerToUpdate.religion,
     ratings:$scope.bikerToUpdate.ratings,
     training:$scope.bikerToUpdate.training,
     completed:$scope.bikerToUpdate.completed,
    comments:$scope.bikerToUpdate.comments,
     shift:$scope.bikerToUpdate.shift,
     reference1:$scope.bikerToUpdate.reference1,
     reference2:$scope.bikerToUpdate.reference2,
     maritalstatus:$scope.bikerToUpdate.maritalstatus,
     employeetype:$scope.bikerToUpdate.employeetype, 
      gender:$scope.bikerToUpdate.gender,
      tempaddress:$scope.bikerToUpdate.tempaddress,
      


        }).then(function(ref) {
           // console.log(ref.key()); // bar
           // $('#editModal').modal('hide')
           $location.path('/bikerslist');
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
