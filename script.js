function showSection(sectionId) {
  const sections = document.querySelectorAll(".content-section");
  sections.forEach(section => {
    section.style.display = section.id === sectionId ? "block" : "none";
  });
}

// Hide all sections on first load
window.onload = () => {
  showSection(null);
};
