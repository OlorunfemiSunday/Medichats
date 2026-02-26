// ================= NAVBAR SCROLL EFFECT =================

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (navbar) {
        if (window.scrollY > 50)
            navbar.classList.add("scrolled");
        else
            navbar.classList.remove("scrolled");
    }

});



// ================= MOBILE MENU TOGGLE =================

const menuToggle = document.getElementById("mobile-menu");
const navList = document.getElementById("nav-list");

if (menuToggle && navList) {

    menuToggle.addEventListener("click", () => {

        navList.classList.toggle("active");

    });

}



// ================= CLOSE MOBILE MENU WHEN LINK CLICKED =================

const navLinks = document.querySelectorAll(".nav-list a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navList.classList.remove("active");

    });

});



// ================= SMOOTH SCROLL FUNCTION =================

function scrollToSignup() {

    const signup = document.getElementById("signup");

    if (signup) {

        signup.scrollIntoView({
            behavior: "smooth"
        });

    }

}



// ================= FORM SUBMISSION =================

const regForm = document.getElementById("regForm");

if (regForm) {

    regForm.addEventListener("submit", function(e) {

        e.preventDefault();

        // safer selector (first input field)
        const nameInput = regForm.querySelector('input[type="text"]');

        const name = nameInput ? nameInput.value : "User";

        // Professional confirmation message
        alert(
            `Thank you, ${name}! Your appointment request has been received. Our medical team will contact you shortly.`
        );

        regForm.reset();

    });

}
