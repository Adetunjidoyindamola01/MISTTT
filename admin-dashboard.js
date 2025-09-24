// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".sidebar nav ul li a");
  const sections = document.querySelectorAll(".content-section");
  const logoutBtn = document.querySelector(".logout-btn");

  // Sidebar navigation
  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      // Remove "active" from all links
      links.forEach(l => l.classList.remove("active"));
      // Add "active" to clicked link
      link.classList.add("active");

      // Hide all sections
      sections.forEach(section => section.classList.add("hidden"));
      // Show selected section
      const targetId = link.getAttribute("data-target");
      document.getElementById(targetId).classList.remove("hidden");
    });
  });

  // Logout functionality
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      alert("You have been logged out!");
      window.location.href = "index.html"; // redirect back to login
    });
  }

  // Scheduler form functionality (basic demo)
  const schedulerForm = document.getElementById("schedulerForm");
  if (schedulerForm) {
    schedulerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Schedule saved successfully!");
    });
  }
});

