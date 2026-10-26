
const menuToggle = document.querySelector(".menu-toggle");
const navList = document.querySelector(".nav-list");

menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.classList.toggle("active");

    navList.classList.toggle("active", isOpen);
    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Zavřít menu" : "Otevřít menu"
    );
});
