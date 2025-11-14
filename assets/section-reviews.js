document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".lumira-review-card");

    cards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";

        setTimeout(() => {
            card.style.transition = "0.5s ease";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, 100);
    });
});
