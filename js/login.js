const loginButton = document.getElementById("login-button");

if (loginButton) {
  loginButton.addEventListener("click", () => {
    const username = document.getElementById("loginUsername").value.trim();
    const password = document.getElementById("loginPassword").value;

    if (!username || !password) {
      alert("Please enter both username and password.");
      return;
    }

    let usersData = localStorage.getItem("users");
    let users;

    if (usersData) {
      users = JSON.parse(usersData);
    } else {
      users = [];
    }

    const matchingUser = users.find(
      (user) => user.username === username && user.password === password
    );

    if (matchingUser) {
      alert("Login succesfull");
      localStorage.setItem("loggedInUser", JSON.stringify(matchingUser));
      window.location.href = "index.html";
    } else {
      alert("Incorrect username or password.");
    }
  });
}
