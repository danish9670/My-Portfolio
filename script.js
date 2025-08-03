// Professional Portfolio JavaScript Enhancements

// Animated Skill Bars with improved performance
function animateSkillBars() {
  const skillSection = document.querySelector('.skills-section');
  const bars = document.querySelectorAll('.bar .progress');
  let animated = false;

  function checkAndAnimate() {
    const rect = skillSection.getBoundingClientRect();
    if (!animated && rect.top < window.innerHeight - 100) {
      bars.forEach((bar, index) => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
          bar.style.transition = 'width 1.5s cubic-bezier(.77,0,.18,1)';
          bar.style.width = width;
        }, index * 100); // Staggered animation
      });
      animated = true;
    }
  }

  window.addEventListener('scroll', checkAndAnimate);
  checkAndAnimate();
}
animateSkillBars();

 // Toggle mobile menu
  const mobileMenu = document.getElementById('mobile-menu');
  const navbarLinks = document.getElementById('navbar-links');

  mobileMenu.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
    mobileMenu.classList.toggle('open');
  });

// Enhanced Contact Form Validation and Submission
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let valid = true;
    
    // Clear previous error states
    inputs.forEach(input => {
      input.style.boxShadow = '';
      input.style.border = '';
    });
    
    // Validate required fields
    inputs.forEach(input => {
      if (!input.value.trim()) {
        input.style.boxShadow = '0 0 8px #ff3e3e99';
        input.style.border = '1px solid #ff3e3e';
        valid = false;
      }
    });
    
    // Email validation
    const emailInput = form.querySelector('input[type="email"]');
    if (emailInput && emailInput.value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value)) {
        emailInput.style.boxShadow = '0 0 8px #ff3e3e99';
        emailInput.style.border = '1px solid #ff3e3e';
        valid = false;
      }
    }
    
    if (!valid) {
      showNotification('Please fill in all required fields correctly.', 'error');
      return;
    }
    
    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
      showNotification('Thank you for contacting me! I will get back to you soon.', 'success');
      form.reset();
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }, 1500);
  });
}

// Professional Notification System
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  
  // Add styles
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    color: white;
    font-weight: 500;
    z-index: 1000;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    max-width: 300px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  `;
  
  // Set background color based on type
  if (type === 'success') {
    notification.style.background = '#10b981';
  } else if (type === 'error') {
    notification.style.background = '#ef4444';
  } else {
    notification.style.background = '#3ec6ff';
  }
  
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 100);
  
  // Remove after 5 seconds
  setTimeout(() => {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 5000);
}

// Scroll Progress Indicator
function addScrollProgress() {
  const progressBar = document.createElement('div');
  progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: linear-gradient(90deg, #3ec6ff, #1e8ec6);
    z-index: 1001;
    transition: width 0.1s ease;
  `;
  document.body.appendChild(progressBar);
  
  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = scrollPercent + '%';
  });
}
addScrollProgress();

// Enhanced About Section Toggle
function toggleAboutContent() {
  const extra = document.querySelector('.about-extra');
  const btn = document.querySelector('.read-more-btn');
  
  if (extra.style.display === 'none' || !extra.style.display) {
    extra.style.display = 'block';
    btn.textContent = 'Show Less';
    extra.style.animation = 'fadeInUp 0.5s ease-out';
  } else {
    extra.style.display = 'none';
    btn.textContent = 'Read More';
  }
}

// Intersection Observer for Animations
function addScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // Observe elements for animation
  const animateElements = document.querySelectorAll('.about-details, .journey-columns, .skills-columns, .projects-grid, .testimonials-list');
  animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}
addScrollAnimations(); 