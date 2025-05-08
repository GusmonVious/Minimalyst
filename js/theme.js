// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.querySelector('.theme-toggle');
  const body = document.body;
  
  // Check for saved theme preference or use preferred color scheme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    body.classList.remove('light-theme', 'dark-theme');
    body.classList.add(savedTheme);
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    body.classList.add(prefersDark ? 'dark-theme' : 'light-theme');
  }
  
  // Theme toggle click handler
  themeToggle.addEventListener('click', () => {
    if (body.classList.contains('light-theme')) {
      body.classList.replace('light-theme', 'dark-theme');
      localStorage.setItem('theme', 'dark-theme');
    } else {
      body.classList.replace('dark-theme', 'light-theme');
      localStorage.setItem('theme', 'light-theme');
    }
  });
  
  // Header background on scroll
  const header = document.querySelector('.header');
  
  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  
  window.addEventListener('scroll', handleScroll);
  
  // Set current year in footer
  document.getElementById('current-year').textContent = new Date().getFullYear();
});