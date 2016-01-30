$(function() {
 
    Parse.$ = jQuery;
 
    // Replace this line with the one on your Quickstart Guide Page
    Parse.initialize("iqKwC20zKXO0eXu7g0sBfV195QBnBHfnYy2ffBjk", "2E8jlTU5y0uGzFrROzDt9AyL1sVbMDS4yZ3tIYw7");
    
    $('.form-signin').on('submit', function(e) {
 
    // Prevent Default Submit Event
    e.preventDefault();
 
    // Get data from the form and put them into variables
    var data = $(this).serializeArray(),
        username = data[0].value,
        password = data[1].value;
 
    // Call Parse Login function with those variables
    Parse.User.logIn(username, password, {
        // If the username and password matches
        success: function(user) {
            
            window.location.href = "dashboard.html";
            
            localStorage.setItem("loginUser",username);
            
        },
        // If there is an error
        error: function(user, error) {
            
            var status = document.createElement('p');
            status.className = 'status';
            status.innerHTML = "Username/password is invalid.";

            document.getElementsByTagName('div')['statusMsg'].appendChild(status);
            
            console.log(error);
            
        }
    });
 
});
 
    
});