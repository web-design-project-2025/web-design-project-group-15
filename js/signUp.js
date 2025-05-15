const signUpButton = document.getElementById("signUp-button");

if ("signUpButton") {
  signUpButton.addEventListener("click", () => {
    const username = document.getElementById("signUpUsername").value.trim();
    const email = document.getElementById("signUpEmail").value.trim();
    const password = document.getElementById("signUpPassword").value;
    const confirmPassword = document.getElementById(
      "signUpConfirmPassword"
    ).value;

    if (!username || !email || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    let users;
    let usersData = localStorage.getItem("users");

    if (usersData) {
      users = JSON.parse(usersData);
    } else {
      users = [];
    }
    for (let user of users) {
      if (user.username === username) {
        alert("This username already exists.");
        return;
      }
    }
    users.push({ username, email, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Account created successfully!");
    window.location.href = "login.html";
  });
}
