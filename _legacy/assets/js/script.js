// Mobile Menu Toggle
const mobileBtn = document.getElementById('mobile-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const closeBtn = document.getElementById('mobile-close');
const mobileLinks = document.querySelectorAll('.mobile-link');

function toggleMenu() {
    const isOpen = !mobileMenu.classList.contains('translate-x-full');
    if (isOpen) {
        mobileMenu.classList.add('translate-x-full');
    } else {
        mobileMenu.classList.remove('translate-x-full');
    }
}

if (mobileBtn) mobileBtn.addEventListener('click', toggleMenu);
if (closeBtn) closeBtn.addEventListener('click', toggleMenu);
mobileLinks.forEach(link => link.addEventListener('click', toggleMenu));

// Scroll Reveal Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('py-2');
        } else {
            navbar.classList.remove('py-2');
        }
    });
}
