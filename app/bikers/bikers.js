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



$scope.BikeridToupdate ={};


    var bikerid = $routeParams.id;
    var bikebiker = new Firebase("https://dotapp.firebaseio.com/Biker");
  var sync = $firebase(bikebiker);

  $scope.bikerlist = sync.$asArray();

          console.log($scope.username);

    var bikerid = $routeParams.id;
    var bikerObj = new Firebase("https://dotapp.firebaseio.com/Biker/" + bikerid);


        var syn = $firebase(bikerObj);
        $scope.bikerToUpdate = syn.$asObject();

      

var firebaseObj = new Firebase("https://dotapp.firebaseio.com/BikeBiker");    
  var sync = $firebase(firebaseObj);

  $scope.assignedbikelist = sync.$asArray();


$scope.assign = function(id) {
     $scope.BikeridToupdate = id;
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

  $scope.addbikers = function() {
    var firstname = $scope.Biker_Information.firstname;
    var middlename = $scope.Biker_Information.middlename;
    var lastname = $scope.Biker_Information.lastname;
    var fathersname = $scope.Biker_Information.fathersname;
    var mobileno = $scope.Biker_Information.mobileno;
    var Employeecode = $scope.Biker_Information.Employeecode;
    var email = $scope.Biker_Information.email;
    var dob = $scope.Biker_Information.dob;
    var homeaddress = $scope.Biker_Information.homeaddress;
    var relname = $scope.Biker_Information.relname;
    var reladdress = $scope.Biker_Information.reladdress;
    var relmobile = $scope.Biker_Information.relmobile;
    var bloodgroup = $scope.Biker_Information.bloodgroup;
    var bikeassigned = $scope.Biker_Information.bikeassigned;
    var qualification = $scope.Biker_Information.qualification;
    var operatingarea = $scope.Biker_Information.operatingarea;
    var interests = $scope.Biker_Information.interests;
    var children = $scope.Biker_Information.children;
    var religion = $scope.Biker_Information.religion;
    var ratings = $scope.Biker_Information.ratings;
    var training = $scope.Biker_Information.training;
    var completed = $scope.Biker_Information.completed;
    var comments = $scope.Biker_Information.comments;
    var shift = $scope.Biker_Information.shift;
    var reference1 = $scope.Biker_Information.reference1;
    var reference2 = $scope.Biker_Information.reference2;
    var maritalstatus = $scope.Biker_Information.maritalstatus;
    var employeetype = $scope.Biker_Information.employeetype;
    var gender = $scope.Biker_Information.gender;
    var tempaddress = $scope.Biker_Information.tempaddress;
   
    var firebaseObj = new Firebase("https://dotapp.firebaseio.com/Biker");
    var fb = $firebase(firebaseObj);
 
    fb.$push({
    firstname:firstname,
     middlename:middlename,
    lastname:lastname,
     fathersname:fathersname,
     mobileno:mobileno,
     Employeecode:Employeecode,
     email:email,
     dob:dob.toString(),
     homeaddress:homeaddress,
     relname:relname,
     reladdress:reladdress,
     relmobile:relmobile,
     bloodgroup:bloodgroup,
     bikeassigned:bikeassigned,
     qualification:qualification,
     operatingarea:operatingarea,
     interests:interests,
    children:children,
     religion:religion,
     ratings:ratings,
     training:training,
     completed:completed,
    comments:comments,
     shift:shift,
     reference1:reference1,
     reference2:reference2,
     maritalstatus:maritalstatus,
     employeetype:employeetype,
     gender:gender,
     tempaddress:tempaddress,
    }).then(function(ref) {
        console.log(ref);
        $location.path('/bikerslist');
    }, function(error) {
        console.log("Error:", error);
    });
 
}

    $scope.update = function() {
        console.log($scope.BikeridToupdate);
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




    $scope.updatebikeAssigned = function() {


    //  var test = new Firebase("https://dotapp.firebaseio.com/Biker")
    // //.orderBy('Employeecode')
    // test.orderByChild("Employeecode")
    // .startAt('dot1501')
    // .endAt('dot1501')
    // .on('value', function(snap) {
    //    console.log('accounts matching email address', snap.val())
    // });

        var firstname;
        var middlename;
        var lastname;
        var empcode;
        var bikeridbyvalue;

        console.log($scope.BikeridToupdate);
        console.log(bikerid);      
var messagesPath = new Firebase("https://dotapp.firebaseio.com/BikeBiker/");
    var Messages = messagesPath.child($scope.BikeridToupdate);
    Messages.on("value", function (snapshot) {
      var messagesObj = snapshot.val();
      // firstname = messagesObj.firstname;
      // middlename = messagesObj.middlename;
      // lastname = messagesObj.lastname;
      empcode = messagesObj.Employeecode;
      return messagesObj;
    }, function (errorObject) {
      console.log("Error code: " + errorObject.code);
    });


var ref = new Firebase("https://dotapp.firebaseio.com/Biker");

ref.orderByChild("Employeecode").equalTo(empcode).on("child_added", function(snapshot) {
  console.log(snapshot.key());
  bikeridbyvalue = snapshot.key();
  var bikeobj = snapshot.val();
  firstname = bikeobj.firstname;
  middlename = bikeobj.middlename;
  lastname = bikeobj.lastname;
 // empcode = snapshot.Employeecode;

});


    var bikeassigned = $scope.selected.bikename;
    var fromdate= $scope.bikebiker.fromdate;
    var todate = $scope.bikebiker.todate;
    var bikebiker = new Firebase("https://dotapp.firebaseio.com/BikeBiker/" + $scope.BikeridToupdate);
    var BikeBikerObj = $firebase(bikebiker);
    BikeBikerObj.$update({
     firstname:firstname,
     middlename:middlename,
     lastname:lastname,
     Employeecode:empcode,
     bikeassigned:bikeassigned,
     fromdate:fromdate,
     todate:todate,
    }).then(function(ref) {
        console.log(ref);
      //  $location.path('/bikerslist');
    //  $('#editModal').modal('hide');
    }, function(error) {
        console.log("Error:", error);
    });

    var bikerObj = new Firebase("https://dotapp.firebaseio.com/Biker/" + bikeridbyvalue);
    //    var fb = new Firebase("https://dotapp.firebaseio.com/Bikes/" + bikeid);
    var bikerobjbyid = $firebase(bikerObj);
    console.log($scope.selected.bikename);



    bikerobjbyid.$update({

       bikeassigned:$scope.selected.bikename,
    // bikeassigned:$scope.bikerToUpdate.bikeassigned,     
        }).then(function(ref) {
           // console.log(ref.key()); // bar
           // $('#editModal').modal('hide')
           $('#editModal').modal('hide');
          // $location.path('/bikerslist');
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
