document.addEventListener("DOMContentLoaded", function () {
    // Select all anchor links with hashes
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,  // Adjust offset if header is sticky
                    behavior: "smooth"
                });

                // Update URL in address bar (optional)
                history.pushState(null, null, `#${targetId}`);
            }
        });
    });
});
