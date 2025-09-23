// Minimal global script; extend as needed
document.addEventListener('DOMContentLoaded', () => {
  // Enable Bootstrap tooltips if present
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.forEach(el => new bootstrap.Tooltip(el));
});


