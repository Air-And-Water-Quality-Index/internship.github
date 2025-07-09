// Toggle mobile navbar (hamburger menu)
function toggleNav() {
  document.getElementById('nav-links').classList.toggle('active');
}

// Toggle dropdown (e.g., About → Hardware/Software) on click
function toggleDropdown(event) {
  event.preventDefault(); // Prevent the link from navigating
  const dropdown = event.target.nextElementSibling;
  dropdown.classList.toggle('show');
}

// Close dropdowns if user clicks outside
window.addEventListener("click", function (event) {
  if (!event.target.matches('.dropbtn')) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      dropdowns[i].classList.remove('show');
    }
  }
});
