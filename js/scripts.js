$(document).ready(function(){
  let $passwordInput = $("#passwordInput");
  let $showHidePassword = $("#showHidePassword");
  let $eyeCon = $("#eyeCon");
  let $loginButton = $("#loginFormSubmitButton")
  let $emailInput = $("#emailInput");


// show hide password
  console.log(showHidePassword);
  $showHidePassword.on('click', function(event){
  event.preventDefault();
  console.log("eyeball was clicked");
  if ($passwordInput.attr("type") == "password") {
      console.log("type is password")
      $eyeCon.removeClass("fa-eye-slash");
      $eyeCon.addClass("fa-eye");
      $passwordInput.attr("type", "text");
} else {
      $eyeCon.removeClass("fa-eye");
      $eyeCon.addClass("fa-eye-slash");
      $passwordInput.attr("type", "password");
    }
  });


  //when the login form bottion is click
$loginButton.on('click', function(event){
  let email = $emailInput.val();
  let password = $passwordInput.val();
    console.log("password");
  if (email == "" || password == ""){
    $("#loginError").text("");
    $("#loginError").text("Email and password");
  }
});

});
