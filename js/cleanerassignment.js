var ref = new Firebase("https://casstanley0691.firebaseio.com");

$(function () { 
    
    var active = false;
    
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
    
    var dateTime = new Date().toLocaleString();
    
    refCount.once("value", function(snapshot) {
        count = snapshot.numChildren();
        console.log("count number: " +count);
      });
    
    $(document).ready(function(){
        
        $('#assign').click(function(){
            
            count++; //get ready for next assignment no.
            
            var name = $("#assign-name").val();
            var contact = $("#assign-contact").val();
            var toilet = $("#assign-toilet").val();
            var purpose = $("#assign-purpose").val();
            var assignmentNo = "assignment" + count;
            
            console.log("assignment no: " + assignmentNo);
            
            var assignmentRef = ref.child("cleanerAssignment");
            
            assignmentRef.child(assignmentNo).set({
                cleaner: name,
                contactNo: contact,
                toiletAssigned: toilet,
                purpose: purpose,
                reportedTime: dateTime,
                status: "In Progress"
              });
            
        });
        
    });

});


