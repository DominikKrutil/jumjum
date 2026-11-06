const footerLinks = document.querySelectorAll("#footer-content3 p");
const footerItems = document.querySelectorAll(".footer-conten5-item");

footerLinks.forEach((link, index) => {
    link.addEventListener("click", () => {
        const panel = footerItems[index];

        if (!panel) return;

        panel.classList.add("active");
        document.body.style.overflow = "hidden";
    });
});

footerItems.forEach(item => {
    const closeButton = document.createElement("button");

    closeButton.className = "footer-panel-close";
    closeButton.type = "button";
    closeButton.setAttribute("aria-label", "Zavřít");
    closeButton.innerHTML = "&times;";

    item.appendChild(closeButton);

    closeButton.addEventListener("click", () => {
        item.classList.remove("active");
        document.body.style.overflow = "";
    });
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        footerItems.forEach(item => item.classList.remove("active"));
        document.body.style.overflow = "";
    }
});