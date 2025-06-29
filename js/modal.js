// Modal open logic
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('[data-modal-target]').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const modalId = btn.getAttribute('data-modal-target');
      const modal = document.querySelector(modalId);
      if (modal) modal.style.display = 'block';
    });
  });

  // Close modal when clicking the backdrop
  document.querySelectorAll('.modal').forEach(function(modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) modal.style.display = 'none';
    });
  });
});

// Modal close function for close buttons
function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
}
