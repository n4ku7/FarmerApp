// Performance optimization utilities
(function() {
  'use strict';

  // Service Worker registration for caching
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('SW registered: ', registration);
        })
        .catch(registrationError => {
          console.log('SW registration failed: ', registrationError);
        });
    });
  }

  // Image lazy loading with Intersection Observer
  const lazyImages = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('loading');
        img.classList.add('loaded');
        observer.unobserve(img);
      }
    });
  });

  lazyImages.forEach(img => {
    imageObserver.observe(img);
  });

  // Preload critical resources
  const preloadCriticalResources = () => {
    const criticalPages = [
      'Home/Login-Register/login.html',
      'Home/Login-Register/register.html',
      'Global-Marketplace/categories.html'
    ];

    criticalPages.forEach(page => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = page;
      document.head.appendChild(link);
    });
  };

  // Debounced scroll handler
  const handleScroll = utils.debounce(() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add scroll-based classes
    if (scrollTop > 100) {
      document.body.classList.add('scrolled');
    } else {
      document.body.classList.remove('scrolled');
    }
  }, 10);

  // Throttled resize handler
  const handleResize = utils.debounce(() => {
    // Recalculate layouts if needed
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      // Trigger any layout recalculations
      card.style.transform = 'translateZ(0)';
    });
  }, 250);

  // Initialize performance optimizations
  document.addEventListener('DOMContentLoaded', () => {
    // Preload critical resources after initial load
    setTimeout(preloadCriticalResources, 2000);
    
    // Add scroll and resize listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    
    // Optimize animations
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (prefersReducedMotion.matches) {
      document.documentElement.style.setProperty('--animation-duration', '0.01ms');
      document.documentElement.style.setProperty('--animation-iteration-count', '1');
    }
  });

  // Memory cleanup
  window.addEventListener('beforeunload', () => {
    // Clean up observers and event listeners
    if (imageObserver) {
      imageObserver.disconnect();
    }
    
    window.removeEventListener('scroll', handleScroll);
    window.removeEventListener('resize', handleResize);
  });

})();
