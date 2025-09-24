// ===== Tab Switching =====
const userTab = document.getElementById("userTab");
const adminTab = document.getElementById("adminTab");
const userForm = document.getElementById("loginForm");
const adminForm = document.getElementById("adminLoginForm");

userTab.addEventListener("click", () => {
  userTab.classList.add("active");
  adminTab.classList.remove("active");
  userForm.classList.add("active");
  adminForm.classList.remove("active");
});

adminTab.addEventListener("click", () => {
  adminTab.classList.add("active");
  userTab.classList.remove("active");
  adminForm.classList.add("active");
  userForm.classList.remove("active");
});

// ===== Student Login =====
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();
  const rememberMe = document.getElementById("rememberMe").checked;

  const students = JSON.parse(localStorage.getItem("students")) || [];

  const user = students.find(u => u.email === email && u.password === password);

  if (user) {
    alert("Login successful ✅");
    localStorage.setItem("loggedInUser", JSON.stringify(user));

    if (rememberMe) {
      localStorage.setItem("rememberMe", email);
    } else {
      localStorage.removeItem("rememberMe");
    }

    window.location.href = "student-dashboard.html";
  } else {
    alert("❌ Invalid email or password. Try again!");
  }
});

// ===== Admin Login =====
document.getElementById("adminLoginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const adminEmail = document.getElementById("adminEmail").value.trim();
  const adminPassword = document.getElementById("adminPassword").value.trim();

  if (adminEmail === "admin@app.com" && adminPassword === "admin123") {
    alert("Admin login successful ✅");
    localStorage.setItem("adminLoggedIn", "true");
    window.location.href = "admin-dashboard.html";
  } else {
    alert("❌ Invalid admin credentials.");
  }
});

// ===== Auto-fill Remember Me =====
window.addEventListener("load", () => {
  const remembered = localStorage.getItem("rememberMe");
  if (remembered) {
    document.getElementById("loginEmail").value = remembered;
    document.getElementById("rememberMe").checked = true;
  }
});
