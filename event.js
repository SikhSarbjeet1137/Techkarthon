// Scroll Animations
document.addEventListener("DOMContentLoaded", function() {
    ScrollReveal().reveal('.fade-in', { delay: 200, distance: '50px', duration: 1000, origin: 'bottom' });
    ScrollReveal().reveal('.slide-left', { delay: 300, distance: '50px', duration: 1000, origin: 'left' });
    ScrollReveal().reveal('.slide-right', { delay: 300, distance: '50px', duration: 1000, origin: 'right' });
});

// Open & Close Registration Form
function openForm() {
    document.getElementById("popup-form").style.display = "block";
}


// Back button function
function goBack() {
    window.location.href = 'index.html'; // Change this to the main file path
}
