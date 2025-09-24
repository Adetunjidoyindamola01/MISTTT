// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // prevent page reload

    // Get values from form fields
    const studentData = {
      fullname: document.getElementById("fullname").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      school: document.getElementById("school").value,
      department: document.getElementById("department").value,
      matric: document.getElementById("matric").value,
      duration: document.getElementById("duration").value,
      password: document.getElementById("password").value,
    };

    // Save data to localStorage
    localStorage.setItem("studentProfile", JSON.stringify(studentData));

    alert("Sign up successful! Redirecting to login...");
    window.location.href = "login.html"; // redirect after signup
  });
});
