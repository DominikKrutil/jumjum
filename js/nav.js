
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navList = document.querySelector(".nav-list");
    const navContainer = document.querySelector(".nav-container");

    if (!navContainer) return;

    const updateNav = () => {
        navContainer.classList.toggle("scrolled", window.scrollY > 20);
    };

    window.addEventListener("scroll", updateNav, { passive: true });
    updateNav();

    if (menuToggle && navList) {
        menuToggle.addEventListener("click", () => {
            const isOpen = menuToggle.classList.toggle("active");

            navList.classList.toggle("active", isOpen);
            menuToggle.setAttribute("aria-expanded", String(isOpen));
            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Zavřít menu" : "Otevřít menu"
            );
        });

        navList.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                menuToggle.classList.remove("active");
                navList.classList.remove("active");
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute("aria-label", "Otevřít menu");
            });
        });
    }
});
