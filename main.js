// Toggle Search Bar
function toggleSearch() {
    const searchBox = document.querySelector(".search-box");
    searchBox.classList.toggle("active");
    if (searchBox.classList.contains("active")) {
        searchBox.focus();
    }
}

// Alumni Slider Functionality
let slideIndex = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;

    slideIndex += direction;

    if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    } else if (slideIndex >= totalSlides) {
        slideIndex = 0;
    }

    document.querySelector(".slider").style.transform = `translateX(${-slideIndex * 100}%)`;
}

// Auto-Slide Alumni Section
setInterval(() => {
    moveSlide(1);
}, 3000); // Change every 3 seconds

// Add Hover Effect for Navbar Items
document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("mouseenter", () => {
        link.style.textDecoration = "underline";
    });
    link.addEventListener("mouseleave", () => {
        link.style.textDecoration = "none";
    });
});

// Add Hover Effect for Signup Button
const signUpBtn = document.querySelector(".signup-btn");
signUpBtn.addEventListener("mouseenter", () => {
    signUpBtn.style.backgroundColor = "#0056b3"; // Darker shade on hover
});
signUpBtn.addEventListener("mouseleave", () => {
    signUpBtn.style.backgroundColor = "#007bff"; // Default color
});
