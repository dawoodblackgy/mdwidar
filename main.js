// Sticky navbar
const navbar = document.querySelector(".navbar");
window.onscroll = () => {
    this.scrollY > 20 ? navbar.classList.add('sticky') : navbar.classList.remove('sticky');
}

// Navbar Toggling
const navMenu = document.querySelector(".menu");
const navToggle = document.querySelector(".menu-btn");

if(navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    })
}

// Closing Menu when navlink is clicked
const navLink = document.querySelectorAll(".nav-link");
function linkAction() {
    navMenu.classList.remove("active");
}
navLink.forEach(n => n.addEventListener("click", linkAction));

// Fix for Contact Section on Mobile
function fixContactSection() {
    const contactSection = document.querySelector(".contact-section");
    const contactInfo = document.querySelector(".contact-info");
    const contactForm = document.querySelector(".contact-form");
    
    if (window.innerWidth <= 771) {
        // Ensure elements are displayed as block
        contactInfo.style.display = "block";
        contactForm.style.display = "block";
        
        // Reset any conflicting styles
        contactInfo.style.float = "none";
        contactForm.style.float = "none";
        contactInfo.style.width = "100%";
        contactForm.style.width = "100%";
    }
}

// Run on load and resize
window.addEventListener("load", fixContactSection);
window.addEventListener("resize", fixContactSection);

// Scroll Reveal Animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

// Home section
sr.reveal('.home-text h2', {delay: 200});
sr.reveal('.home-text p', {delay: 300});
sr.reveal('.btn1', {delay: 400});
sr.reveal('.home-image', {delay: 500});

// About section
sr.reveal('.about-img', {delay: 200});
sr.reveal('.about-text .title', {delay: 300});
sr.reveal('.about-text .subtitle', {delay: 400});
sr.reveal('.about-text p', {delay: 500});
sr.reveal('.skills-container', {delay: 600});
sr.reveal('.languages', {delay: 700});

// Experience section
sr.reveal('.experience-section .title', {delay: 200});
sr.reveal('.experience-section .subtitle', {delay: 300});
sr.reveal('.timeline-item', {interval: 200});

// Contact section - Added specific reveal for contact elements
sr.reveal('.contact-info', {delay: 200, mobile: true});
sr.reveal('.contact-info-item', {interval: 200, mobile: true});
sr.reveal('.contact-form', {delay: 400, mobile: true});

// Footer
sr.reveal('.left-col', {delay: 200});
sr.reveal('.right-col', {delay: 400});

// Timeline animation on scroll
const timelineItems = document.querySelectorAll('.timeline-item');
function checkTimelineItems() {
    timelineItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        if (itemTop < window.innerHeight - 100) {
            item.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', checkTimelineItems);
window.addEventListener('load', checkTimelineItems);

// PDF download functionality (placeholder)
document.getElementById('downloadPdf').addEventListener('click', function(e) {
    e.preventDefault();
    alert('CV download functionality will be implemented here');
});

document.getElementById('footerDownloadPdf').addEventListener('click', function(e) {
    e.preventDefault();
    alert('CV download functionality will be implemented here');
});