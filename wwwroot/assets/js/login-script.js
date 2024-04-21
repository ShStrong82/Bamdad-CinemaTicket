// ( Show/Hide eye icon )
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
