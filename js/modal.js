// Modal open logic
document.addEventListener('DOMContentLoaded', function() {
  // Open modal on button click
  document.querySelectorAll('[data-modal-target]').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const modalId = btn.getAttribute('data-modal-target');
      const modal = document.querySelector(modalId);
      if (modal) {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden'; // Prevent background scroll
      }
    });
  });

  // Close modal when clicking the backdrop
  document.querySelectorAll('.modal').forEach(function(modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        modal.classList.remove('show');
        document.body.style.overflow = '';
      }
    });
  });

  // Close modal on any .btn-close
  document.querySelectorAll('.btn-close').forEach(function(btn) {
    btn.addEventListener('click', function() {
      let modal = btn.closest('.modal');
      if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = '';
      }
    });
  });

  // Close modal on Esc key
  document.addEventListener('keydown', function(e) {
    if (e.key === "Escape") {
      document.querySelectorAll('.modal.show').forEach(function(modal) {
        modal.classList.remove('show');
        document.body.style.overflow = '';
      });
    }
  });
});

// For use in HTML inline
function closeModal(modalId) {
  var modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }
}
