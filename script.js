function showSection(id) {
  const sections = document.querySelectorAll(".content-section");
  sections.forEach((section) => {
    section.style.display = section.id === id ? "block" : "none";
  });
}

// Run on page load
window.onload = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const user = JSON.parse(localStorage.getItem("currentUser"));

  if (isLoggedIn === "true" && user) {
    document.getElementById("username-display").textContent = user.name;
    document.getElementById("user-greeting").style.display = "inline";
    document.getElementById("login-link").style.display = "none";
    document.getElementById("signin-link").style.display = "none";
  } else {
    document.getElementById("user-greeting").style.display = "none";
    document.getElementById("login-link").style.display = "inline";
    document.getElementById("signin-link").style.display = "inline";
  }

  showSection("home");
};

function handleSignup(event) {
  event.preventDefault();
  const name = document.getElementById("signupName").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  const user = { name, email, password };
  localStorage.setItem("user", JSON.stringify(user));

  document.getElementById("signupMessage").textContent = "Signup successful!";
  event.target.reset();
  showSection("login");
  return false;
}

function handleLogin(event) {
  event.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.email === email && user.password === password) {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("currentUser", JSON.stringify(user));

    document.getElementById("username-display").textContent = user.name;
    document.getElementById("user-greeting").style.display = "inline";
    document.getElementById("login-link").style.display = "none";
    document.getElementById("signin-link").style.display = "none";
    document.getElementById("loginMessage").textContent = "";
    showSection("home");
  } else {
    document.getElementById("loginMessage").textContent = "Invalid email or password.";
  }
  return false;
}

function logout() {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("currentUser");

  document.getElementById("user-greeting").style.display = "none";
  document.getElementById("login-link").style.display = "inline";
  document.getElementById("signin-link").style.display = "inline";
  showSection("home");
}
