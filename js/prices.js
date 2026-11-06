document.querySelectorAll(".price-toggle").forEach((button) => {
    button.addEventListener("click", () => {
        const item = button.closest(".price-item");
        const isOpen = item.classList.contains("is-open");

        item.classList.toggle("is-open", !isOpen);
        button.setAttribute("aria-expanded", String(!isOpen));
    });
});