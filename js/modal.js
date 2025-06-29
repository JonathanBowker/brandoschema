// Open modal with fade-in
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('[data-modal-target]').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      let target = btn.getAttribute('data-modal-target');
      let modal = document.querySelector(target);
      if (modal) {
        modal.classList.add('show');
        modal.setAttribute('tabindex', '-1'); // Only if needed
        modal.focus();
      }
    });
  });

  // Close modal on close button
  document.querySelectorAll('.btn-close').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      let modal = btn.closest('.modal');
      if (modal) modal.classList.remove('show');
    });
  });

  // Close modal on backdrop click
  document.querySelectorAll('.modal').forEach(function (modal) {
    modal.addEventListener('click', function (e) {
      if (e.target === modal) modal.classList.remove('show');
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal.show').forEach(function (modal) {
        modal.classList.remove('show');
      });
    }
  });
});
