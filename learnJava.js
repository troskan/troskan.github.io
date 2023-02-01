// Define the function in the global scope
function clickToLogin() {
  var loginContainer = document.getElementById("login-container");
  if (loginContainer.style.display === "none") {
    loginContainer.style.display = "block";
  } else {
    loginContainer.style.display = "none";
  }
}
function clickToLogin2() {
  document.getElementByClass("login-container").style.display = "block";
}

function checkLogin() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let found = false;
  // Fetch the JSON file and check the login credentials
  fetch("storage.json")
    .then((response) => response.json())
    .then((data) => {
      let users = data.users;
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
          found = true;
          break;
        }
      }
      if (found) {
        // login successful
        alert("Login successful!");
        window.location.href = "home.html";
      } else {
        // login failed
        alert("Username or password incorrect. Please try again.");
      }
    });
}
