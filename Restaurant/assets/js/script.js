// Navbar scroll effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Menu category filter
const categoryButtons = document.querySelectorAll('.menu-categories button');
const menuItems = document.querySelectorAll('.menu-item');

categoryButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all buttons
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');
        
        const category = this.getAttribute('data-category');
        
        menuItems.forEach(item => {
            if (category === 'all' || item.getAttribute('data-category') === category) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Testimonials slider
const testimonials = document.querySelectorAll('.testimonial');
const testimonialNav = document.querySelectorAll('.testimonial-nav button');

testimonialNav.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        // Remove active class from all testimonials and dots
        testimonials.forEach(testimonial => testimonial.classList.remove('active'));
        testimonialNav.forEach(d => d.classList.remove('active'));
        
        // Add active class to selected testimonial and dot
        testimonials[index].classList.add('active');
        dot.classList.add('active');
    });
});

// Auto slide testimonials
let currentTestimonial = 0;
function rotateTestimonials() {
    testimonials.forEach(testimonial => testimonial.classList.remove('active'));
    testimonialNav.forEach(d => d.classList.remove('active'));
    
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    
    testimonials[currentTestimonial].classList.add('active');
    testimonialNav[currentTestimonial].classList.add('active');
}

setInterval(rotateTestimonials, 5000);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});