document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu functionality
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  mobileMenuToggle.addEventListener('click', () => {
    mobileMenuToggle.classList.toggle('active'); 
  
    // Toggle mobile menu
    if (mobileMenuToggle.classList.contains('active')) {
      console.log("worked");
      // Create mobile menu if it doesn't exist
      if (!document.querySelector('.mobile-menu')) {
        const mobileMenu = document.createElement('div');
        mobileMenu.className = 'mobile-menu';
        mobileMenu.innerHTML = navLinks.outerHTML;
        console.log(mobileMenu.innerHTML);
        document.querySelector('.navbar').appendChild(mobileMenu);
        
        // Add event listeners to mobile menu links
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
          link.addEventListener('click', () => {
            mobileMenuToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
          });
        });
      }

      // // console.log(document.querySelector('.mobile-menu'));
      // console.log("worked");  TESTING DUE TO ERROR 
      
      // Show mobile menu with animation
      const mobileMenu = document.querySelector('.mobile-menu');
      mobileMenu.classList.add('active');
    } else {
      // Hide mobile menu
      const mobileMenu = document.querySelector('.mobile-menu');
      if (mobileMenu) {
        mobileMenu.classList.remove('active');
      }
    }
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Animate elements on scroll
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe all sections and steps
  document.querySelectorAll('section, .step').forEach(element => {
    element.classList.add('fade-in');
    observer.observe(element);
  });

// Add CSS for mobile menu and animations
  const style = document.createElement('style');
  style.textContent = `
    .mobile-menu {
      position: absolute;
      top: 80px;
      left: 0;
      width: 100%;
      background-color: var(--bg-light);
      padding: 1rem;
      border-radius: 0 0 var(--radius-md) var(--radius-md);
      box-shadow: var(--shadow-md);
      transform: translateY(-10px);
      opacity: 0;
      visibility: hidden;
      transition: all var(--transition-normal);
      z-index: 100;
    }
    
    body.dark-theme .mobile-menu {
      background-color: var(--bg-dark);
    }
    
    .mobile-menu.active {
      transform: translateY(0);
      opacity: 1;
      visibility: visible;
    }
    
    .mobile-menu .nav-links {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    
    .mobile-menu .nav-links a {
      padding: 0.5rem 0;
      display: block;
    }
    
    .animated {
      animation: fadeIn 1s ease forwards;
    }
    
    section, .step {
      opacity: 0;
    }
    
    section.animated, .step.animated {
      opacity: 1;
    }
  `;
  document.head.appendChild(style);
});