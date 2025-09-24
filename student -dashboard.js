// ===== Dashboard Navigation =====
document.addEventListener("DOMContentLoaded", () => {
  const menuLinks = document.querySelectorAll(".sidebar nav ul li a");
  const sections = document.querySelectorAll(".content-section");

  menuLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();

      // Remove active state from all links
      menuLinks.forEach(l => l.classList.remove("active"));

      // Add active state to clicked link
      link.classList.add("active");

      // Hide all sections
      sections.forEach(section => section.classList.add("hidden"));

      // Show the target section
      const targetId = link.getAttribute("data-section");
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.classList.remove("hidden");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const saveBtn = document.querySelector(".save-btn");
  const message = document.getElementById("scheduleMessage");

  if (saveBtn) {
    saveBtn.addEventListener("click", () => {
      message.style.display = "block"; // show message

      // hide after 3 seconds
      setTimeout(() => {
        message.style.display = "none";
      }, 3000);
    });
  }
});



