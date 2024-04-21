// ( Show/Hide eye icon in password input)
function myFunction() {
  var passwordField = document.getElementById("password");
  var showPasswordBtn = document.getElementById("eye");
  if (passwordField.type === "password") {
    passwordField.type = "text";
  } else {
    passwordField.type = "password";
  }
  showPasswordBtn.classList.toggle("fa-eye-slash");
}

// (Show/Hide eye icon in repassword input)
function myFunction1() {
  var repasspasswordField = document.getElementById("repassword");
  var repassshowPasswordBtn = document.getElementById("repass-eye");
  if (repasspasswordField.type === "password") {
    repasspasswordField.type = "text";
  } else {
    repasspasswordField.type = "password";
  }
  repassshowPasswordBtn.classList.toggle("fa-eye-slash");
}
