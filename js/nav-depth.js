document.addEventListener("DOMContentLoaded", function () {
  function getDepth(toggle) {
    const suffix = toggle.id.replace(/^__nav_/, "");
    return suffix.split("_").length;
  }

  function setNavDepth() {
    document
      .querySelectorAll('input.md-nav__toggle[id^="__nav_"]')
      .forEach(function (toggle) {
        const depth = getDepth(toggle);
        const isTopLevel = depth === 1;
        toggle.checked = isTopLevel;
        toggle.indeterminate = false;

        const nav = toggle.parentElement && toggle.parentElement.querySelector("nav.md-nav");
        if (nav) {
          nav.setAttribute("aria-expanded", isTopLevel ? "true" : "false");
        }
      });
  }

  setNavDepth();
  window.setTimeout(setNavDepth, 0);
  window.setTimeout(setNavDepth, 250);
  window.requestAnimationFrame(setNavDepth);
});
