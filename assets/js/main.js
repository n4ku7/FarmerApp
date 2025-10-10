// Enhanced global script with performance optimizations
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Bootstrap components
  initializeBootstrapComponents();
  
  // Add smooth scrolling
  initializeSmoothScrolling();
  
  // Initialize lazy loading for images
  initializeLazyLoading();
  
  // Add loading states to forms
  initializeFormLoading();
  
  // Initialize card animations
  initializeCardAnimations();
  
  // Initialize search functionality
  initializeSearch();
  
  // Initialize theme persistence
  initializeThemePersistence();
});

// Bootstrap components initialization
function initializeBootstrapComponents() {
  // Enable Bootstrap tooltips
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.forEach(el => new bootstrap.Tooltip(el));
  
  // Enable Bootstrap popovers
  const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
  popoverTriggerList.forEach(el => new bootstrap.Popover(el));
  
  // Initialize modals with enhanced behavior
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    modal.addEventListener('shown.bs.modal', () => {
      const firstInput = modal.querySelector('input, select, textarea');
      if (firstInput) firstInput.focus();
    });
  });
}

// Smooth scrolling for anchor links
function initializeSmoothScrolling() {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Lazy loading for images
function initializeLazyLoading() {
  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('loading');
        observer.unobserve(img);
      }
    });
  });
  
  images.forEach(img => {
    img.classList.add('loading');
    imageObserver.observe(img);
  });
}

// Form loading states
function initializeFormLoading() {
  const forms = document.querySelectorAll('form');
  
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn && !submitBtn.disabled) {
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Processing...';
        submitBtn.disabled = true;
        
        // Re-enable button after 3 seconds as fallback
        setTimeout(() => {
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
        }, 3000);
      }
    });
  });
}

// Card animations on scroll
function initializeCardAnimations() {
  const cards = document.querySelectorAll('.card');
  
  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        cardObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });
  
  cards.forEach(card => {
    cardObserver.observe(card);
  });
}

// Enhanced search functionality
function initializeSearch() {
  const searchInputs = document.querySelectorAll('.search-input');
  
  searchInputs.forEach(input => {
    let searchTimeout;
    
    input.addEventListener('input', (e) => {
      clearTimeout(searchTimeout);
      const query = e.target.value.trim();
      
      if (query.length > 2) {
        searchTimeout = setTimeout(() => {
          performSearch(query, input.dataset.target);
        }, 300);
      } else {
        clearSearchResults(input.dataset.target);
      }
    });
  });
}

// Search implementation
function performSearch(query, targetSelector) {
  const target = document.querySelector(targetSelector);
  if (!target) return;
  
  const items = target.querySelectorAll('[data-searchable]');
  let visibleCount = 0;
  
  items.forEach(item => {
    const searchableText = item.dataset.searchable.toLowerCase();
    const matches = searchableText.includes(query.toLowerCase());
    
    item.style.display = matches ? 'block' : 'none';
    if (matches) visibleCount++;
  });
  
  // Show "no results" message if needed
  let noResultsMsg = target.querySelector('.no-results');
  if (visibleCount === 0 && query.length > 0) {
    if (!noResultsMsg) {
      noResultsMsg = document.createElement('div');
      noResultsMsg.className = 'no-results alert alert-info text-center';
      noResultsMsg.innerHTML = '<i class="fas fa-search me-2"></i>No results found';
      target.appendChild(noResultsMsg);
    }
    noResultsMsg.style.display = 'block';
  } else if (noResultsMsg) {
    noResultsMsg.style.display = 'none';
  }
}

// Clear search results
function clearSearchResults(targetSelector) {
  const target = document.querySelector(targetSelector);
  if (!target) return;
  
  const items = target.querySelectorAll('[data-searchable]');
  items.forEach(item => {
    item.style.display = 'block';
  });
  
  const noResultsMsg = target.querySelector('.no-results');
  if (noResultsMsg) {
    noResultsMsg.style.display = 'none';
  }
}

// Theme persistence with smooth transitions
function initializeThemePersistence() {
  // Get saved theme or default to light
  const savedTheme = localStorage.getItem('theme') || 'light';
  
  // Apply theme using both data attribute and class for maximum compatibility
  document.documentElement.setAttribute('data-bs-theme', savedTheme);
  document.documentElement.className = document.documentElement.className.replace(/dark-theme|light-theme/g, '');
  document.documentElement.classList.add(`${savedTheme}-theme`);
  
  const themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle) {
    // Set initial icon based on saved theme
    const icon = themeToggle.querySelector('i');
    icon.className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    
    themeToggle.addEventListener('click', (e) => {
      e.preventDefault();
      
      const currentTheme = document.documentElement.getAttribute('data-bs-theme') || 'light';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      // Add transition class for smooth animation
      document.body.classList.add('theme-transitioning');
      
      // Update theme using both methods for maximum compatibility
      document.documentElement.setAttribute('data-bs-theme', newTheme);
      document.documentElement.className = document.documentElement.className.replace(/dark-theme|light-theme/g, '');
      document.documentElement.classList.add(`${newTheme}-theme`);
      localStorage.setItem('theme', newTheme);
      
      // Update toggle icon with animation
      icon.style.transform = 'rotate(360deg) scale(0.8)';
      setTimeout(() => {
        icon.className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        icon.style.transform = 'rotate(0deg) scale(1)';
      }, 150);
      
      // Remove transition class after animation completes
      setTimeout(() => {
        document.body.classList.remove('theme-transitioning');
      }, 300);
      
      // Show notification
      utils.showNotification(
        `Switched to ${newTheme === 'dark' ? 'dark' : 'light'} mode`, 
        'success', 
        2000
      );
    });
  }
}

// Utility functions
const utils = {
  // Debounce function
  debounce: (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },
  
  // Format currency
  formatCurrency: (amount, currency = 'USD') => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency
    }).format(amount);
  },
  
  // Format date
  formatDate: (date, options = {}) => {
    const defaultOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    };
    return new Intl.DateTimeFormat('en-US', { ...defaultOptions, ...options }).format(new Date(date));
  },
  
  // Show notification
  showNotification: (message, type = 'info', duration = 3000) => {
    const notification = document.createElement('div');
    notification.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
    notification.style.cssText = 'top: 20px; right: 20px; z-index: 9999; min-width: 300px;';
    
    const icons = {
      success: 'fas fa-check-circle',
      danger: 'fas fa-exclamation-circle',
      warning: 'fas fa-exclamation-triangle',
      info: 'fas fa-info-circle'
    };
    
    notification.innerHTML = `
      <i class="${icons[type] || icons.info} me-2"></i>
      ${message}
      <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      if (notification.parentNode) {
        notification.remove();
      }
    }, duration);
  },
  
  // Validate email
  validateEmail: (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  },
  
  // Copy to clipboard
  copyToClipboard: async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      utils.showNotification('Copied to clipboard!', 'success');
    } catch (err) {
      utils.showNotification('Failed to copy to clipboard', 'danger');
    }
  }
};

// Make utils available globally
window.utils = utils;


