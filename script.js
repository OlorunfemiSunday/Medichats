// Change navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Form Submission Simulation
const regForm = document.getElementById('regForm');

regForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('fname').value;
    
    // Simple feedback
    alert(`Thank you, ${name}! Your consultation request has been received. Our team will contact you shortly.`);
    
    regForm.reset();
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
    // You can add CSS for .nav-list.active to show a vertical menu
});
