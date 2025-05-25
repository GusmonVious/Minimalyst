document.addEventListener('DOMContentLoaded', function() {
    // Animation on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.fade-in-element');
        
        elements.forEach(element => {
            const position = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (position < windowHeight * 0.8) {
                element.classList.add('fade-in');
            }
        });
    };

    // Mobile menu functionality
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // Project Slideshow functionality
    const setupSlideshow = () => {
        const slides = document.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.slide-dot');
        const prevBtn = document.querySelector('.slide-nav.prev');
        const nextBtn = document.querySelector('.slide-nav.next');
        
        if (!slides.length || !dots.length) return;
        
        let currentSlide = 0;
        let slideInterval;
        const slideDelay = 5000; // 5 seconds between auto slides
        
        // Initialize the slideshow
        const showSlide = (index) => {
            // Hide all slides
            slides.forEach(slide => {
                slide.style.opacity = '0';
                slide.style.zIndex = '1';
            });
            
            // Show the current slide
            slides[index].style.opacity = '1';
            slides[index].style.zIndex = '2';
            
            // Update dots
            dots.forEach(dot => dot.classList.remove('active'));
            dots[index].classList.add('active');
        };
        
        // Start with the first slide
        showSlide(currentSlide);
        
        // Auto slideshow functionality
        const startSlideshow = () => {
            if (slideInterval) {
                clearInterval(slideInterval);
            }
            
            slideInterval = setInterval(() => {
                currentSlide = (currentSlide + 1) % slides.length;
                showSlide(currentSlide);
            }, slideDelay);
        };
        
        // Start the slideshow
        startSlideshow();
        
        // Previous slide button
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                clearInterval(slideInterval);
                currentSlide = (currentSlide - 1 + slides.length) % slides.length;
                showSlide(currentSlide);
                startSlideshow();
            });
        }
        
        // Next slide button
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {  
                clearInterval(slideInterval);
                currentSlide = (currentSlide + 1) % slides.length;
                showSlide(currentSlide);
                startSlideshow();
            });
        }
        
        // Dot navigation
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                clearInterval(slideInterval);
                currentSlide = index;
                showSlide(currentSlide);
                startSlideshow();
            });
        });
        
        // Pause slideshow on hover
        const slideshowContainer = document.querySelector('.slideshow-container');
        if (slideshowContainer) {
            slideshowContainer.addEventListener('mouseenter', () => {
                clearInterval(slideInterval);
            });
            
            slideshowContainer.addEventListener('mouseleave', () => {
                startSlideshow();
            });
        }
    };
    
    setupSlideshow();

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Run animations
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run on initial load

    // Update copyright year
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Form submission handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add your form submission logic here
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }
});