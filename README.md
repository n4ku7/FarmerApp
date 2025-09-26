# AgriCraft - Global Marketplace for Value-Added Farm Goods

A modern, responsive front-end prototype for a multi-role agricultural marketplace connecting Farmers, Buyers, and Admins. Features a comprehensive dashboard system with role-based authentication, dark/light theme support, and optimized performance using HTML5, CSS3, and JavaScript.

## Contents
- [Overview](#overview)
- [Features](#features)
- [New Features & Improvements](#new-features--improvements)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Theme System](#theme-system)
- [Performance Optimizations](#performance-optimizations)
- [Development Guidelines](#development-guidelines)
- [Conventions](#conventions)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)

## Overview
AgriCraft is a comprehensive agricultural marketplace platform that enables farmers to sell value-added products directly to buyers worldwide. The platform features role-based dashboards, modern UI/UX design, and advanced functionality for seamless transactions and management.

## Features

### Core Functionality
- **Multi-role dashboards**: Farmer, Buyer, and Admin interfaces
- **Product browsing**: Advanced search, filtering, and categorization
- **Order management**: History, tracking, acceptance/rejection, and shipping updates
- **Farmer tools**: Product management, inventory control, earnings, and payouts
- **Admin controls**: User approvals, content management, dispute resolution, and analytics
- **Responsive design**: Optimized for desktop, tablet, and mobile devices

### User Experience
- **Unified authentication**: Role selection during login/registration
- **Modern card-based UI**: Clean, professional design with hover effects
- **Smooth animations**: CSS transitions and JavaScript animations
- **Intuitive navigation**: Consistent across all dashboards
- **Accessibility features**: ARIA labels, keyboard navigation, and screen reader support

## New Features & Improvements

### 🎨 Enhanced UI/UX
- **Dark/Light Theme System**: Smooth transitions with persistent user preferences
- **Modern Card Design**: Glass-morphism effects, shadows, and hover animations
- **Font Awesome Icons**: Consistent iconography throughout the interface
- **Responsive Layout**: Mobile-first design with Bootstrap 5.3.3
- **Loading States**: Visual feedback for form submissions and data loading

### 🔐 Authentication System
- **Unified Login/Register**: Single pages with role selection (Farmer/Admin/Buyer)
- **Role-specific Forms**: Customized registration fields for each user type
- **Form Validation**: Client-side validation with visual feedback
- **Password Visibility Toggle**: Enhanced security with show/hide functionality

### ⚡ Performance Optimizations
- **Lazy Loading**: Images load only when visible for faster page loads
- **Service Worker**: Caching for offline functionality and improved performance
- **Debounced Search**: Optimized search with 300ms delay to reduce server load
- **Resource Preloading**: Critical pages and assets preloaded for faster navigation
- **Memory Management**: Proper cleanup of event listeners and observers

### 🛠️ Technical Enhancements
- **CSS Custom Properties**: Consistent theming with CSS variables
- **Intersection Observer**: Efficient scroll-based animations and lazy loading
- **Local Storage**: Theme preferences and user settings persistence
- **Utility Functions**: Reusable JavaScript utilities for common operations
- **Cross-browser Compatibility**: Modern browser support with graceful degradation

## Project Structure
```
D:\HTML Projects\Farmer\
  index.html                    # Enhanced homepage with modern design
  sw.js                         # Service worker for caching
  assets\
    css\
      theme.css                 # Comprehensive theme system with dark/light modes
    js\
      main.js                   # Enhanced functionality and utilities
      performance.js            # Performance optimizations and lazy loading
    img\                        # Image assets

  Home\
    about.html
    contact.html
    Login-Register\
      login.html                # Unified login with role selection
      register.html             # Unified registration with role-specific fields
      admin-login.html          # Legacy admin login (deprecated)
      buyer-signup.html         # Legacy buyer signup (deprecated)
      farmer-signup.html        # Legacy farmer signup (deprecated)

  Global-Marketplace\
    categories.html
    featured-farmers.html
    search-filters.html
    trending-products.html

  Buyer-Dashboard\
    index.html
    Browse-Products\
      categories.html
      search-filter.html
    Cart-Checkout\
      payment.html
      shipping.html
    Orders\
      order-history.html
      track-orders.html
    Product-Detail\
      index.html
    feedback-reviews.html
    profile-management.html

  Farmer-Dashboard\
    index.html
    messages-chat.html
    earnings-payouts.html
    Orders\
      accept-reject.html
      shipping-updates.html
      view-orders.html
    Product-Management\
      add-product.html
      edit-delete.html
      manage-inventory.html
    Profile-Management\
      certificates-approvals.html
      update-farm-info.html

  Admin-Dashboard\
    index.html
    Manage-Users\
      approve-suspend.html
      view-all.html
    Manage-Products\
      approve-listings.html
      edit-remove.html
    Manage-Transactions\
      resolve-disputes.html
      view-orders.html
    Platform-Settings\
      categories-tags.html
      content-management.html
    reports-analytics.html
```

## Getting Started

### Quick Start
This is a static site that can be opened directly in a browser or served locally for better performance.

**Option A: Direct Access**
```bash
# Simply open index.html in your browser
open index.html  # macOS/Linux
start index.html # Windows
```

**Option B: Local Server (Recommended)**
```bash
# Python
python -m http.server 8000
# Then open http://localhost:8000

# Node.js
npx http-server -p 8000
# Then open http://localhost:8000

# PHP
php -S localhost:8000
# Then open http://localhost:8000
```

**Windows Example:**
```bat
cd "D:\HTML Projects\Farmer"
python -m http.server 8000
```

### First-Time Setup
1. Clone or download the project
2. Navigate to the project directory
3. Start a local server (recommended)
4. Open your browser to the local server URL
5. Explore the unified login/register system
6. Test the dark/light theme toggle

## Theme System

### Dark/Light Mode
The platform features a sophisticated theme system with smooth transitions:

- **Automatic Detection**: Remembers user preference via localStorage
- **Smooth Transitions**: 0.3s cubic-bezier animations between themes
- **Icon Animation**: Theme toggle button rotates 360° when switching
- **Cross-page Persistence**: Theme choice maintained across all pages
- **Visual Feedback**: Notification appears when switching themes

### Theme Toggle Usage
```javascript
// Theme is automatically initialized
// Users can click the theme toggle button in the navbar
// Theme preference is saved and restored on page reload
```

### Customization
Themes can be customized by modifying CSS custom properties in `assets/css/theme.css`:
```css
/* Dark theme colors */
--bg-canvas: #0d1117;
--bg-subtle: #161b22;
--fg-default: #f0f6fc;

/* Light theme colors */
[data-bs-theme="light"] {
  --bg-canvas: #ffffff;
  --bg-subtle: #f8f9fa;
  --fg-default: #212529;
}
```

## Performance Optimizations

### Lazy Loading
Images are loaded only when they enter the viewport:
```javascript
// Images with data-src attribute are lazy loaded
<img data-src="image.jpg" class="loading">
```

### Service Worker Caching
Static assets are cached for offline functionality:
```javascript
// Service worker caches CSS, JS, and other static assets
// Improves loading speed on repeat visits
```

### Search Optimization
Debounced search prevents excessive API calls:
```javascript
// Search input has 300ms delay
// Reduces server load and improves UX
```

### Memory Management
Proper cleanup prevents memory leaks:
```javascript
// Event listeners are removed on page unload
// Intersection observers are disconnected when not needed
```

## Development Guidelines

### File Organization
- **Dashboard pages**: Place within appropriate dashboard folder (Farmer-Dashboard, Buyer-Dashboard, Admin-Dashboard)
- **Shared styles**: All common styles in `assets/css/theme.css`
- **Shared scripts**: Core functionality in `assets/js/main.js`
- **Performance scripts**: Optimization code in `assets/js/performance.js`
- **Images/icons**: Store in `assets/img/` directory
- **Service worker**: Root-level `sw.js` for caching

### Theme Development
- Use CSS custom properties for colors and spacing
- Test both dark and light themes when adding new components
- Ensure proper contrast ratios for accessibility
- Use the theme toggle during development to verify consistency

### Performance Considerations
- Use `data-src` attribute for lazy-loaded images
- Implement debouncing for search and form inputs
- Add loading states for better user feedback
- Test with service worker enabled/disabled

### Linking & Navigation
- Use correct relative paths between sections
- Maintain consistent navigation across all dashboards
- Include theme toggle button in all page navbars
- Ensure all links work in both light and dark themes

### Browser Support
- **Modern browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Features**: ES6+, CSS Grid, Flexbox, Intersection Observer
- **Fallbacks**: Graceful degradation for older browsers

## Conventions

### Naming
- **Files/folders**: kebab-case (`view-orders.html`, `product-management/`)
- **CSS classes**: BEM-like methodology (`.card`, `.card__header`, `.card--featured`)
- **JavaScript**: camelCase for variables, PascalCase for constructors

### HTML Standards
- Semantic HTML5 elements (`<main>`, `<section>`, `<article>`)
- Minimize inline styles and scripts
- Include proper ARIA labels for accessibility
- Use `data-*` attributes for JavaScript functionality

### CSS Guidelines
- Use CSS custom properties for theming
- Implement responsive design with mobile-first approach
- Include smooth transitions for interactive elements
- Test with both dark and light themes

### JavaScript Best Practices
- Modular code organization in `assets/js/main.js`
- Use modern ES6+ features
- Implement proper error handling
- Clean up event listeners and observers
- Use utility functions for common operations

### Code Quality
- Consistent indentation (2 spaces)
- Meaningful variable and function names
- Comment complex logic
- Validate HTML and test CSS

## Roadmap

### Phase 1: Backend Integration
- [ ] **API Integration**: Connect to REST/GraphQL backend
- [ ] **Real Data**: Replace mock data with live database
- [ ] **Authentication**: Implement JWT-based user authentication
- [ ] **File Upload**: Add image upload for product listings
- [ ] **Payment Gateway**: Integrate Stripe/PayPal for transactions

### Phase 2: Enhanced Features
- [ ] **Real-time Chat**: WebSocket-based messaging system
- [ ] **Push Notifications**: Browser notifications for orders/updates
- [ ] **Advanced Search**: Elasticsearch integration for product search
- [ ] **Recommendation Engine**: AI-powered product suggestions
- [ ] **Multi-language Support**: i18n implementation

### Phase 3: Mobile & PWA
- [ ] **Progressive Web App**: Full PWA capabilities
- [ ] **Mobile App**: React Native/Flutter mobile application
- [ ] **Offline Support**: Enhanced offline functionality
- [ ] **Push Notifications**: Mobile push notifications
- [ ] **App Store Deployment**: iOS and Android app stores

### Phase 4: Advanced Features
- [ ] **Analytics Dashboard**: Advanced reporting and insights
- [ ] **Machine Learning**: Price optimization and demand forecasting
- [ ] **Blockchain Integration**: Supply chain transparency
- [ ] **IoT Integration**: Sensor data for farm monitoring
- [ ] **Sustainability Metrics**: Carbon footprint tracking

## Contributing

We welcome contributions! Please follow these guidelines:

### Getting Started
1. **Fork the repository** and clone your fork
2. **Create a feature branch**: `git checkout -b feature/your-feature-name`
3. **Make your changes** following our conventions
4. **Test thoroughly** in both light and dark themes
5. **Commit with clear messages**: `git commit -m "Add: new feature description"`
6. **Push to your fork**: `git push origin feature/your-feature-name`
7. **Submit a Pull Request** with detailed description

### Contribution Guidelines
- **Code Style**: Follow existing conventions and use Prettier
- **Testing**: Test on multiple browsers and devices
- **Theme Testing**: Ensure changes work in both dark and light modes
- **Performance**: Consider impact on page load and user experience
- **Documentation**: Update README if adding new features
- **Accessibility**: Ensure WCAG 2.1 AA compliance

### Bug Reports
When reporting bugs, please include:
- Browser version and operating system
- Steps to reproduce the issue
- Expected vs actual behavior
- Screenshots (if applicable)
- Console errors (if any)

### Feature Requests
For new features, please:
- Check existing issues first
- Provide detailed use case description
- Include mockups or wireframes if applicable
- Consider impact on existing functionality

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### Third-Party Licenses
- **Bootstrap 5.3.3**: MIT License
- **Font Awesome 6.4.0**: Font Awesome Free License
- **Icons**: Used under respective licenses

---

**AgriCraft** - Connecting farmers with global markets through modern technology.
