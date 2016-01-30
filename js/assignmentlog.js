var myApp = angular.module("myApp", ["firebase"]);

myApp.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
});


  myApp.controller('assignmentController', ['$scope', '$firebase',
    function($scope, $firebase) { 
    
        var theFirebaseURL = "https://casstanley0691.firebaseio.com";
        
        var ref = new Firebase(theFirebaseURL);
        $scope.assignments = $firebase(ref.child("cleanerAssignment").limitToLast(10)).$asArray(); 
        
        /*$scope.currentUser = null;
        //Check to see if the users is already logged in to Firebase and update currentUser if yes. 
        var authData = ref.getAuth();
          if (authData && authData !=={}) {
              $scope.currentUser = $firebase(ref.child("user").child(authData.uid)).$asObject();
          } else {
              console.log("User is logged out");
          }*/
        
    
    }]);

