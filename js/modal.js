// Open modal with fade-in
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('[data-modal-target]').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      let target = btn.getAttribute('data-modal-target');
      let modal = document.querySelector(target);
      if (modal) {
        modal.classList.add('show');
        // Trap focus inside modal (optional accessibility)
        modal.setAttribute('tabindex', '-1');
        modal.focus();
      }
    });
  });

  // Close modals on close button click
  document.querySelectorAll('.btn-close').forEach(function (btn) {
    btn.addEventListener('click', function () {
      let modal = btn.closest('.modal');
      if (modal) modal.classList.remove('show');
    });
  });

  // Close modals when clicking on the overlay background
  document.querySelectorAll('.modal').forEach(function (modal) {
    modal.addEventListener('click', function (e) {
      if (e.target === modal) modal.classList.remove('show');
    });
  });

  // Optional: Close modal on escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal.show').forEach(function (modal) {
        modal.classList.remove('show');
      });
    }
  });
});
