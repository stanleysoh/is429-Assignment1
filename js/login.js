var ref = new Firebase("https://casstanley0691.firebaseio.com");

$(function () {
    
    
    $(document).ready(function(){
        $('#loginBtn').click(function(){
            
            var email = $("#login-email").val();
            var password = $("#login-password").val();
            
            // Create a callback to handle the result of the authentication
            function authHandler(error, authData) {
              if (error) {
                console.log("Login Failed!", error);
                
                var status = document.createElement('p');
                status.className = 'status';
                status.innerHTML = "Username/password is invalid.";

            document.getElementsByTagName('div')['statusMsg'].appendChild(status);
                
              } else {
                  
                  localStorage.setItem("loginUser",email);
                  
                  if (email !== "manager@toiletic.com") {
                      window.location.href = "cleaner.html";
                  } else {
                  
                  window.location.href = "dashboard.html";
            
                    }
                  
                  console.log("Authenticated successfully with payload:", authData);
              }
            }
            
            // Or with an email/password combination
            ref.authWithPassword({
              email    : email,
              password : password
            }, authHandler);

        });
    });
    
    

});