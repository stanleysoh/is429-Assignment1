var myApp = angular.module("myApp", ["firebase"]);

myApp.controller('cleanerController', ['$scope', '$firebase',
    function($scope, $firebase) { 

    var loginUsername = localStorage.getItem("loginUser");
    
    var node = document.createElement("LI");                 
    var status = document.createElement('a');
    
    status.className = 'status';
    status.innerHTML = "Welcome, " +loginUsername;
    
    node.appendChild(status);                              
    document.getElementById("navbarList").appendChild(node);
    
    var active = false;
    
    $('.panel-collapse').collapse('show');

    $('#collapse-init').click(function () {
        if (active) {
            active = false;
            $('.panel-collapse').collapse('show');
            $('.panel-title').attr('data-toggle', '');
            $(this).text('Enable accordion behavior');
        } else {
            active = true;
            $('.panel-collapse').collapse('hide');
            $('.panel-title').attr('data-toggle', 'collapse');
            $(this).text('Disable accordion behavior');
        }
    });
    
    var theFirebaseURL = "https://casstanley0691.firebaseio.com";
    
    var assignmentNo = "";
    var cleanerAssignment = "";
        
    var ref = new Firebase(theFirebaseURL);
    $scope.assignments = $firebase(ref.child("cleanerAssignment").orderByChild("email").equalTo(loginUsername)).$asArray();
    
    ref.child("cleanerAssignment").orderByChild("email").equalTo(loginUsername).on("child_added", function(snapshot) {
        assignmentNo = snapshot.key();
        cleanerAssignment = snapshot.val();
        console.log(cleanerAssignment);
      });
      
      ref.child("cleanerAssignment").orderByChild("email").equalTo(loginUsername).on("child_changed", function(snapshot) {
        assignmentNo = snapshot.key();
        cleanerAssignment = snapshot.val();
        console.log(cleanerAssignment);
      });
        
        $(document).on("click", "#cleaned", function(){
            console.log("button clicked");
            var dateTime = new Date().toLocaleString();    
            
            var status = "Completed";
            
            var assignmentRef = ref.child("cleanerAssignment");
            
            
            assignmentRef.child(assignmentNo).set({
                cleaner: cleanerAssignment.cleaner,
                contactNo: cleanerAssignment.contactNo,
                email: cleanerAssignment.email,
                toiletAssigned: cleanerAssignment.toiletAssigned,
                purpose: cleanerAssignment.purpose,
                reportedTime: cleanerAssignment.reportedTime,
                completedTime: dateTime,
                status: status
              });
              
        });

}]);


