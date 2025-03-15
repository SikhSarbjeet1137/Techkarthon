document.addEventListener("DOMContentLoaded", () => {
    gsap.from(".card", {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1
    });
});
