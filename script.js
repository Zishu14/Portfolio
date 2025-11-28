// Basic interactivity: theme toggle, burger menu, simple contact form front-end validation
(function(){
    const themeToggle = document.getElementById('themeToggle');
    const root = document.documentElement;
    const currentTheme = localStorage.getItem('theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    if (currentTheme === 'dark') document.documentElement.setAttribute('data-theme','dark');
    document.getElementById('year').textContent = new Date().getFullYear();
  
    themeToggle.addEventListener('click', () => {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      if (isDark) {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme','light');
        themeToggle.textContent = '🌙';
      } else {
        document.documentElement.setAttribute('data-theme','dark');
        localStorage.setItem('theme','dark');
        themeToggle.textContent = '☀️';
      }
    });
  
    // mobile nav
    const burger = document.getElementById('burger');
    const nav = document.getElementById('nav');
    burger.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
  
    // contact form mock submission
    const form = document.getElementById('contactForm');
    const status = document.getElementById('formStatus');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      status.textContent = '';
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
  
      if (name.length < 2) {
        status.textContent = 'Please enter your name (2+ chars).';
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        status.textContent = 'Please enter a valid email.';
        return;
      }
      if (message.length < 10) {
        status.textContent = 'Message should be at least 10 characters.';
        return;
      }
  
      // simulate submission (frontend-only)
      status.textContent = 'Sending...';
      setTimeout(() => {
        status.textContent = 'Thanks — your message was sent (demo only).';
        form.reset();
      }, 900);
    });
  
  })();
  
