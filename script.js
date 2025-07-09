function toggleDropdown(event) {
  event.preventDefault();
  const dropdown = document.getElementById("aboutDropdown");
  dropdown.classList.toggle("show");
}

// Optional: Close dropdown if clicked elsewhere
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      if (dropdowns[i].classList.contains('show')) {
        dropdowns[i].classList.remove('show');
      }
    }
  }
};
