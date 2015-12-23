'use strict';

angular.module('myApp.biker', ['ngRoute','firebase'])

.controller('bikerCtrl', ['$scope','$firebase','$firebaseSimpleLogin','$location','CommonProp','$routeParams',function($scope,$firebase,$firebaseSimpleLogin,$location,CommonProp, $routeParams) {
//.controller('HomeCtrl', ['$scope','$location','CommonProp','$firebaseAuth',function($scope,$location,CommonProp,$firebaseAuth) {
      $scope.username = CommonProp.getUser(); 
      $scope.today = new Date();
     // var day = today.getDate();
//       if(!$scope.username){
//       $location.path('/home');
// }


    $scope.roles =
    [
        'ADMIN',
        'BIKER',
        'RIDER',
    ];


var currentUser = {};
var myRef = new Firebase("https://dotapp.firebaseio.com");
var loginObj = $firebaseSimpleLogin(myRef);
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



    var bikebiker = new Firebase("https://dotapp.firebaseio.com/Biker");
  var sync = $firebase(bikebiker);

  $scope.bikerlist = sync.$asArray();




    var firebaseassign = new Firebase("https://dotapp.firebaseio.com/Bikes");
 
    var bikesyn = $firebase(firebaseassign);
   
    $scope.allbikes = bikesyn.$asArray();



$scope.BikeridToupdate ={};


    var bikerid = $routeParams.id;
    var bikebiker = new Firebase("https://dotapp.firebaseio.com/Profile");
  var sync = $firebase(bikebiker);

  $scope.profilelist = sync.$asArray();

          console.log($scope.username);

    var bikerid = $routeParams.id;
    var bikerObj = new Firebase("https://dotapp.firebaseio.com/Profile/" + bikerid);


        var syn = $firebase(bikerObj);
        $scope.bikerToUpdate = syn.$asObject();

      

var firebaseObj = new Firebase("https://dotapp.firebaseio.com/Biker");    
  var sync = $firebase(firebaseObj);

  $scope.assignedbikelist = sync.$asArray();


$scope.assign = function(id) {
     $scope.BikeridToupdate = id;
    $('#editModal').modal();      // triggers the modal pop up
}


$scope.newassign = function() {
     //$scope.BikeridToupdate = id;
    $('#addassignedbikeModal').modal();      // triggers the modal pop up
}

  $scope.logOut = function() {
     $rootScope.authClient.$logout();

  };

  $scope.addbiker = function() {
    $location.path('/addbikers');
  };

    $scope.bikelist = function() {
    $location.path('/bikelist');
  };

      $scope.upper = function(test){
    $scope.Biker_Information.shift = test.toUpperCase();
}

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
    var homeaddress = ($scope.Biker_Information.homeaddress === undefined) ? "" : $scope.Biker_Information.homeaddress;;
    var relname = ($scope.Biker_Information.relname === undefined) ? "" : $scope.Biker_Information.relname;
    var reladdress = ($scope.Biker_Information.reladdress === undefined) ? "" : $scope.Biker_Information.reladdress;
    var relmobile = ($scope.Biker_Information.relmobile === undefined) ? "" : $scope.Biker_Information.relmobile;
    var bloodgroup = ($scope.Biker_Information.bloodgroup === undefined) ? "" : $scope.Biker_Information.bloodgroup;
    // var bikeassigned = $scope.Biker_Information.bikeassigned;
    var bikeassigned = '';
    var qualification = ($scope.Biker_Information.qualification === undefined) ? "" : $scope.Biker_Information.qualification;
    var operatingarea = ($scope.Biker_Information.operatingarea === undefined) ? "" : $scope.Biker_Information.operatingarea;
    var interests = ($scope.Biker_Information.interests === undefined) ? "" : $scope.Biker_Information.interests;
   // var children ===$scope.Biker_Information.children;
   // $scope.model === null ? 'null' : $scope.model;
    var children = ($scope.Biker_Information.children === undefined) ? "" : $scope.Biker_Information.children;
    var religion = ($scope.Biker_Information.religion === undefined) ? "" : $scope.Biker_Information.religion;
    var ratings = ($scope.Biker_Information.ratings === undefined) ? "" : $scope.Biker_Information.ratings;
    var training = ($scope.Biker_Information.training === undefined) ? "" : $scope.Biker_Information.training;
    var completed = ($scope.Biker_Information.completed === undefined) ? "" : $scope.Biker_Information.completed;
    var comments = ($scope.Biker_Information.comments === undefined) ? "" : $scope.Biker_Information.comments;
    var shift = $scope.Biker_Information.shift;
    var reference1 = ($scope.Biker_Information.reference1 === undefined) ? "" : $scope.Biker_Information.reference1;
    var reference2 = ($scope.Biker_Information.reference2 === undefined) ? "" : $scope.Biker_Information.reference2;
    var maritalstatus = $scope.Biker_Information.maritalstatus;
    var employeetype = $scope.Biker_Information.employeetype;
    var gender = $scope.Biker_Information.gender;
    var tempaddress = ($scope.Biker_Information.tempaddress === undefined) ? "" : $scope.Biker_Information.tempaddress;
    var roleselected = $scope.selected3;
    var uid = null;



       // // var email = $scope.user.email;
       //  var password = "12345678";
       //  if (email && password) {
       //      loginObj.$createUser(email, password)
       //          .then(function() {
       //              // do things if success
       //              console.log('User creation success');
       //              $location.path('/home');
       //          }, function(error) {
       //              // do things if failure
       //              console.log(error);
       //              $scope.regError = true;
       //              $scope.regErrorMessage = error.message;
       //          });
       //  }

  var ref = new Firebase("https://dotapp.firebaseio.com");
ref.createUser({
  email: email,
  password: "12345678"
}, function(error, userData) {
  if (error) {
    switch (error.code) {
      case "EMAIL_TAKEN":
        console.log("The new user account cannot be created because the email is already in use.");
        break;
      case "INVALID_EMAIL":
        console.log("The specified email is not a valid email.");
        break;
      default:
        console.log("Error creating user:", error);
    }
  } else {
    console.log("Successfully created user account with uid:", userData.uid);
    uid = userData.uid;

    var firebasebikerObj = new Firebase("https://dotapp.firebaseio.com/Biker");
    var bkobj = new $firebase(firebasebikerObj);

    bkobj.$push({
    employeeCode:Employeecode,
    isAvailable: false,
    bikeId:"null",
    // firstName:firstname,
    // middleName:middlename,
    // lastName:lastname,
    displayName:firstname+' '+middlename+' '+lastname,
    bikeCode:"null",
    bikeNumber:" ",
    bikeName:" ",
    }).then(function(ref) {
        console.log(ref);

    var firebaseprofileObj = new Firebase("https://dotapp.firebaseio.com/Profile/" + uid);
   // var fb = $firebase(firebaseprofileObj);
 
    firebaseprofileObj.set({
    firstName:firstname,
     middleName:middlename,
    lastName:lastname,
     fatherName:fathersname,
     mobileNo:mobileno,
     employeeCode:Employeecode,
     email:email,
     dob:dob.toString(),
     homeAddress:homeaddress,
     relativeName:relname,
     relativeAddress:reladdress,
     relativeMobile:relmobile,
     bloodGroup:bloodgroup,
     bikeId:bikeassigned,
     qualification:qualification,
     operatingArea:operatingarea,
     interests:interests,
    children:children,
     religion:religion,
     rating:ratings,
     training:training,
     completed:completed,
    comments:comments,
     shift:shift,
     reference1:reference1,
     reference2:reference2,
     maritalStatus:maritalstatus,
     employeeType:employeetype,
     gender:gender,
     tempAddress:tempaddress,
     role:roleselected,
     userKey:ref.key(),
    })
    $location.path('/bikerslist');
    });

  }
});
}

    $scope.update = function() {
        console.log($scope.BikeridToupdate);
        console.log(bikerid);
    //    var fb = new Firebase("https://dotapp.firebaseio.com/Bikes/" + bikeid);
    var bikerobjbyid = $firebase(bikerObj);
    bikerobjbyid.$update({
    firstName:$scope.bikerToUpdate.firstName,
     middleName:$scope.bikerToUpdate.middleName,
    lastName:$scope.bikerToUpdate.lastName,
     fatherName:$scope.bikerToUpdate.fatherName,
     mobileNo:$scope.bikerToUpdate.mobileNo,
     employeeCode:$scope.bikerToUpdate.employeeCode,
     email:$scope.bikerToUpdate.email,
     dob:$scope.bikerToUpdate.dob.toString(),
     homeAddress:$scope.bikerToUpdate.homeAddress,
     relativeName:$scope.bikerToUpdate.relativeName,
     relativeAddress:$scope.bikerToUpdate.relativeAddress,
     relativeMobile:$scope.bikerToUpdate.relativeMobile,
     bloodGroup:$scope.bikerToUpdate.bloodGroup,
    // bikeassigned:$scope.bikerToUpdate.bikeAssigned,
     qualification:$scope.bikerToUpdate.qualification,
     operatingArea:$scope.bikerToUpdate.operatingArea,
     interests:$scope.bikerToUpdate.interests,
    children:$scope.bikerToUpdate.children,
     religion:$scope.bikerToUpdate.religion,
     rating:$scope.bikerToUpdate.rating,
     training:$scope.bikerToUpdate.training,
     completed:$scope.bikerToUpdate.completed,
    comments:$scope.bikerToUpdate.comments,
     shift:$scope.bikerToUpdate.shift,
     reference1:$scope.bikerToUpdate.reference1,
     reference2:$scope.bikerToUpdate.reference2,
     maritalStatus:$scope.bikerToUpdate.maritalStatus,
     employeeType:$scope.bikerToUpdate.employeeType, 
      gender:$scope.bikerToUpdate.gender,
      tempAddress:$scope.bikerToUpdate.tempAddress,
      


        }).then(function(ref) {
           // console.log(ref.key()); // bar
           // $('#editModal').modal('hide')
           $location.path('/bikerslist');
        }, function(error) {
            console.log("Error:", error);
        });

    }




    $scope.updatebikeAssigned = function() {
        var bikeidbyvalue;
        var firebasebikecode;
        var firebasebikename;
        var firebasebikenumber;
        var bikeid;

var ref = new Firebase("https://dotapp.firebaseio.com/Bikes");

ref.orderByChild("bikecode").equalTo($scope.selected.bikecode).on("child_added", function(snapshot) {
  console.log(snapshot.key());
 // bikeidbyvalue = snapshot.key();
  var bikeobj = snapshot.val();
  firebasebikecode = bikeobj.bikecode;
  firebasebikename = bikeobj.bikename;
  firebasebikenumber = bikeobj.bikegivenumber;
  bikeid = snapshot.key();
});

    console.log($scope.BikeridToupdate);
    var bikebiker = new Firebase("https://dotapp.firebaseio.com/Biker/" + $scope.BikeridToupdate);
    var BikeBikerObj = $firebase(bikebiker);
    BikeBikerObj.$update({
    bikeCode:firebasebikecode,
    bikeId:bikeid,
    bikeName:firebasebikename,
    bikeNumber:firebasebikenumber,
    }).then(function(ref) {
        console.log(ref);
        $('#editModal').modal('hide');
      //  $location.path('/bikerslist');
    //  $('#editModal').modal('hide');
    }, function(error) {
        console.log("Error:", error);
    });
    }



      $scope.newbikeAssigned = function() {
        var firstname;
        var middlename;
        var lastname;
        var empcode;
        var bikeridbyvalue1;
        var bikeidbyvalue;
        var firebasebikecode;
        var firebasebikename;
        var firebasebikenumber;


var ref = new Firebase("https://dotapp.firebaseio.com/Bikes");

ref.orderByChild("bikecode").equalTo($scope.selected2.bikecode).on("child_added", function(snapshot) {
  console.log(snapshot.key());
  bikeidbyvalue = snapshot.key();
  var bikeobj = snapshot.val();
  firebasebikecode = bikeobj.bikecode;
  firebasebikename = bikeobj.bikename;
  firebasebikenumber = bikeobj.bikegivenumber;
});

var reff = new Firebase("https://dotapp.firebaseio.com/Biker");
reff.orderByChild("employeeCode").equalTo($scope.selected1.employeeCode).on("child_added", function(snapshot) {
  console.log(snapshot.key());
  bikeridbyvalue1 = snapshot.key();
  var bikeobj = snapshot.val();
});

    var firebasebikerobj = new Firebase("https://dotapp.firebaseio.com/Biker/" + bikeridbyvalue1);
    var BikeBikerObj = $firebase(firebasebikerobj);

    BikeBikerObj.$update({

        bikeId:bikeidbyvalue,
        bikeCode:firebasebikecode,
        bikeName:firebasebikename,
        bikeNumber:firebasebikenumber,
    // bikeassigned:$scope.bikerToUpdate.bikeassigned,     
        }).then(function(ref) {
           // console.log(ref.key()); // bar
           // $('#editModal').modal('hide')
           $('#addassignedbikeModal').modal('hide');
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
