var ref = new Firebase("https://casstanley0691.firebaseio.com");

$(function () { 
    
    var loginUsername = localStorage.getItem("loginUser");
    
    var node = document.createElement("LI");                 
    var status = document.createElement('a');
    
    status.className = 'status';
    status.innerHTML = "Welcome, " +loginUsername;
    
    node.appendChild(status);                              
    document.getElementById("navbarList").appendChild(node); 
    
    //var active = false;
    
    /*$('.panel-collapse').collapse('show');

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
    });*/
    
    //grab the assignment number
    var refCount = new Firebase("https://casstanley0691.firebaseio.com/cleanerAssignment");
    
    var count = 0;
    
    refCount.once("value", function(snapshot) {
                count = snapshot.numChildren();
                console.log("count number: " +count);
              });
    
    $(document).ready(function(){
        
        $('#assign').click(function(){
            
            var dateTime = new Date().toLocaleString();    
            
            count++; //get ready for next assignment no.
            
            var name = $("#assign-name").val();
            var contact = $("#assign-contact").val();
            var toilet = $("#assign-toilet").val();
            var purpose = $("#assign-purpose").val();
            var email = $("#assign-email").val();
            var assignmentNo = "assignment" + count;
            
            console.log("assignment no: " + assignmentNo);
            
            var assignmentRef = ref.child("cleanerAssignment");
            
            assignmentRef.push().set({
                cleaner: name,
                contactNo: contact,
                email: email,
                toiletAssigned: toilet,
                purpose: purpose,
                reportedTime: dateTime,
                status: "In Progress"
              });
            
        });
        
    });

});


