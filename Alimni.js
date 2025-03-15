// Open Modal
function openModal(name, year, job) {
    document.getElementById("alumni-name").innerText = name;
    document.getElementById("alumni-year").innerText = year;
    document.getElementById("alumni-job").innerText = job;
    document.getElementById("alumni-modal").style.display = "flex";
}

// Close Modal
function closeModal() {
    document.getElementById("alumni-modal").style.display = "none";
}

// GSAP Animation for Flipping Cards
document.querySelectorAll(".alumni-card").forEach((card) => {
    card.addEventListener("mouseenter", () => {
        gsap.to(card.querySelector(".card-inner"), { rotationY: 180, duration: 0.6 });
    });
    card.addEventListener("mouseleave", () => {
        gsap.to(card.querySelector(".card-inner"), { rotationY: 0, duration: 0.6 });
    });
});
