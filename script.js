function toggleDropdown(event) {
  // Close any open dropdowns first
  document.querySelectorAll('.dropdown').forEach(function(drop) {
    if (drop !== event.target.closest('.dropdown')) {
      drop.classList.remove('show');
    }
  });

  // Toggle current dropdown
  const dropdown = event.target.closest('.dropdown');
  dropdown.classList.toggle('show');

  // Prevent link jump
  event.preventDefault();
}
