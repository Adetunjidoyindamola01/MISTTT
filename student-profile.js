document.addEventListener("DOMContentLoaded", () => {
  // Retrieve student data from localStorage
  const studentData = JSON.parse(localStorage.getItem("studentProfile"));

  if (studentData) {
    document.getElementById("p-fullname").textContent = studentData.fullname;
    document.getElementById("p-email").textContent = studentData.email;
    document.getElementById("p-phone").textContent = studentData.phone;
    document.getElementById("p-school").textContent = studentData.school;
    document.getElementById("p-department").textContent = studentData.department;
    document.getElementById("p-matric").textContent = studentData.matric;
    document.getElementById("p-duration").textContent = studentData.duration;
  } else {
    alert("No profile found. Please sign up first.");
    window.location.href = "signup.html";
  }

  // Logout button clears localStorage (or just login state)
  document.getElementById("logoutBtn").addEventListener("click", () => {
    alert("Logged out successfully!");
    window.location.href = "login.html";
  });
});
