// ================= NAVBAR SCROLL EFFECT =================
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    }
});

// ================= MOBILE MENU TOGGLE =================
const menuToggle = document.getElementById("mobile-menu");
const navList = document.getElementById("nav-list");

if (menuToggle && navList) {
    menuToggle.addEventListener("click", (e) => {
        e.stopPropagation(); // prevent closing when clicking toggle
        navList.classList.toggle("active");
    });
}

// ================= DROPDOWN TOGGLE (SERVICES) =================
const dropdownParent = document.querySelector(".dropdown");
const dropdownToggle = document.querySelector(".dropdown-toggle");

if (dropdownToggle && dropdownParent) {
    dropdownToggle.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation(); // stop click from reaching document
        dropdownParent.classList.toggle("dropdown-active");
    });
}

// ================= CLOSE DROPDOWN WHEN CLICK OUTSIDE =================
document.addEventListener("click", (e) => {
    if (dropdownParent && !dropdownParent.contains(e.target)) {
        dropdownParent.classList.remove("dropdown-active");
    }
});

// ================= CLOSE MOBILE MENU WHEN LINK CLICKED =================
const navLinks = document.querySelectorAll(".nav-list a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (navList) navList.classList.remove("active");
    });
});

// ================= SMOOTH SCROLL FUNCTION =================
function scrollToSignup() {
    const signup = document.getElementById("signup");
    if (signup) {
        signup.scrollIntoView({ behavior: "smooth" });
    }
}

// ================= FORM SUBMISSION =================
const regForm = document.getElementById("regForm");

if (regForm) {
    regForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const nameInput = regForm.querySelector('input[type="text"]');
        const name = nameInput ? nameInput.value : "User";

        alert(
            `Thank you, ${name}! Your appointment request has been received. Our medical team will contact you shortly.`
        );

        regForm.reset();
    });
}
