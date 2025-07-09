// Toggle dropdown on click for "About"
document.addEventListener("DOMContentLoaded", function () {
  const dropbtn = document.querySelector(".dropbtn");
  const dropdownContent = document.querySelector(".dropdown-content");

  dropbtn.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent link action if <a href="#"> is used
    dropdownContent.classList.toggle("show");
  });

  // Optional: close the dropdown if clicked outside
  window.addEventListener("click", function (e) {
    if (!e.target.matches('.dropbtn')) {
      if (dropdownContent.classList.contains("show")) {
        dropdownContent.classList.remove("show");
      }
    }
  });
});
