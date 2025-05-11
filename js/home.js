document.addEventListener('DOMContentLoaded', () => {
  // Hero Grid Animation
  const heroGrid = document.querySelector('.hero-grid');
  if (heroGrid) {
    // Create 400 grid items (20x20 grid)
    for (let i = 0; i < 400; i++) {
      const gridItem = document.createElement('div');
      gridItem.className = 'grid-item';
      
      // Calculate distance from center
      const row = Math.floor(i / 20);
      const col = i % 20;
      const centerRow = 10;
      const centerCol = 10;
      const distance = Math.sqrt(
        Math.pow(row - centerRow, 2) + 
        Math.pow(col - centerCol, 2)
      );
      
      // Set animation delay based on distance from center
      const delay = distance * 0.05;
      gridItem.style.animationDelay = `${delay}s`;
      
      // Set opacity based on distance from center
      const maxDistance = Math.sqrt(Math.pow(10, 2) + Math.pow(10, 2));
      const opacity = 1 - (distance / maxDistance);
      gridItem.style.opacity = opacity * 0.1;
      
      heroGrid.appendChild(gridItem);
    }
  }

  // FAQ Accordion Functionality
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const faqItem = question.parentNode;
      const isActive = faqItem.classList.contains('active');
      
      // Close all other FAQ items
      document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
        const answer = item.querySelector('.faq-answer');
        answer.style.maxHeight = null;
      });
      
      // Toggle the clicked FAQ item
      if (!isActive) {
        faqItem.classList.add('active');
        const answer = faqItem.querySelector('.faq-answer');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  // Open the first FAQ item by default
  if (faqQuestions.length > 0) {
    const firstFaqItem = faqQuestions[0].parentNode;
    firstFaqItem.classList.add('active');
    const firstAnswer = firstFaqItem.querySelector('.faq-answer');
    firstAnswer.style.maxHeight = firstAnswer.scrollHeight + 'px';
  }

  // Reveal animations on scroll
  const revealElements = document.querySelectorAll('.section-content, .section-image, .faq-item');
  
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  });
  
  revealElements.forEach(element => {
    revealObserver.observe(element);
  });
});