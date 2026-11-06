document.addEventListener("DOMContentLoaded", () => {
    const serviceItems = document.querySelectorAll(".services-item");

    serviceItems.forEach((item) => {
        const toggle = item.querySelector(".services-toggle");
        const details = item.querySelector(".services-body");
        const icon = item.querySelector(".services-toggle-icon");

        if (!toggle || !details) return;

        toggle.setAttribute("aria-expanded", "false");
        details.setAttribute("aria-hidden", "true");

        const updateState = (isOpen) => {
            toggle.setAttribute("aria-expanded", String(isOpen));
            details.setAttribute("aria-hidden", String(!isOpen));

            if (icon) {
                icon.textContent = isOpen ? "−" : "+";
            }
        };

        toggle.addEventListener("click", () => {
            const isOpen = toggle.getAttribute("aria-expanded") === "true";

            serviceItems.forEach((otherItem) => {
                const otherToggle = otherItem.querySelector(".services-toggle");
                const otherDetails = otherItem.querySelector(".services-body");
                const otherIcon = otherItem.querySelector(".services-toggle-icon");

                if (!otherToggle || !otherDetails) return;

                otherToggle.setAttribute("aria-expanded", "false");
                otherDetails.setAttribute("aria-hidden", "true");

                if (otherIcon) {
                    otherIcon.textContent = "+";
                }
            });

            if (!isOpen) {
                updateState(true);
            }
        });
    });
});
