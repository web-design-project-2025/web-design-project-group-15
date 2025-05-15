document.getElementById("signUp-button").addEventListener("click");
const username = document.getElementById("signUpUserame").value.trim();
const email = document.getElementById("signUpEmail").value.trim();
const password = document.getElementById("signUpPassword").value.trim();
const confirmPassword = document.getElementById("signUpConfirmPassword").value;

if (password !== confirmPassword) {
  alert("Passwords do not match");
  return;
}
