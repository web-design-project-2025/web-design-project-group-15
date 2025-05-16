const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
const loginForm = document.querySelector(".login-form");
const logoutSection = document.getElementById("logoutSection");
const loggedInAsText = document.getElementById("loggedInAs");
const noAccount = document.getElementById("noAccountMsg");

if (loggedInUser) {
  if (loginForm) loginForm.style.display = "none";
  if (noAccount) noAccount.style.display = "none";
  if (logoutSection) logoutSection.style.display = "block";
  if (loggedInAsText) {
    loggedInAsText.textContent = `You are currently logged in as "${loggedInUser.username}"`;
    loggedInAsText.style.color = "rgb(221, 219, 241)";
    loggedInAsText.style.fontSize = "1.5rem";
  }

  const logoutButton = document.getElementById("logoutButton");
  logoutButton.addEventListener("click", () => {
    localStorage.removeItem("loggedInUser");
    window.location.reload();
  });
} else {
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
}
