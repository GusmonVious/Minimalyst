document.addEventListener('DOMContentLoaded', () => {
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