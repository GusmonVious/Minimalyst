document.addEventListener('DOMContentLoaded', function() {
  // // Theme toggle functionality
  // const themeToggle = document.querySelector('.theme-toggle');
  // const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

  // // Mobile menu functionality
  // const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  // let mobileNav = document.querySelector('.mobile-nav');
  
  // Create mobile nav if it doesn't exist
  // if (!mobileNav) {
  //   mobileNav = document.createElement('div');
  //   mobileNav.className = 'mobile-nav';
  //   mobileNav.innerHTML = `
  //     <ul class="mobile-nav-links">
  //       <li><a href="#" class="active">Home</a></li>
  //       <li><a href="#minimalism">Minimalism</a></li>
  //       <li><a href="#sustainable-living">Sustainable Living</a></li>
  //       <li><a href="#about">About Us</a></li>
  //       <li><a href="#quiz">Quiz</a></li>
  //     </ul>
  //   `;
  //   document.body.appendChild(mobileNav);
  // }
  
  // mobileMenuToggle.addEventListener('click', () => {
  //   mobileMenuToggle.classList.toggle('active');
  //   mobileNav.classList.toggle('active');
  // });

  // Scroll animations
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.card, .practice-item, .stat-item');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementPosition < windowHeight * 0.8) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  };
  
  // Set initial state for animated elements
  const elementsToAnimate = document.querySelectorAll('.card, .practice-item, .stat-item');
  elementsToAnimate.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });
  
  // Run animations on load and scroll
  window.addEventListener('scroll', animateOnScroll);
  window.addEventListener('load', animateOnScroll);
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
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
});