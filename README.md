## Farmer Marketplace

A static front-end prototype for a multi-role agricultural marketplace connecting Farmers and Buyers, with an Admin panel for governance. The site is organized by dashboards and feature areas using plain HTML/CSS/JS.

## Contents
- Overview
- Features
- Project structure
- Getting started
- Development guidelines
- Conventions
- Roadmap
- Contributing
- License

## Overview
This project provides a modular layout for a farmer marketplace platform. It includes role-based dashboards for Farmers, Buyers, and Admins, along with a global marketplace and shared assets.

## Features
- Multi-role dashboards: Farmer, Buyer, and Admin
- Product browsing, search, and filtering
- Orders: history, tracking, acceptance/rejection, and shipping updates
- Farmer product management, inventory, and payouts
- Admin approvals, content management, and analytics
- Shared styles and scripts under `assets/`

## Project structure
```
D:\HTML Projects\Farmer\
  index.html
  assets\
    css\
      theme.css
    js\
      main.js
    img\

  Home\
    about.html
    contact.html
    Login-Register\
      admin-login.html
      buyer-signup.html
      farmer-signup.html

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

## Getting started
This is a static site. You can open `index.html` directly in a browser. To avoid potential CORS issues (for future AJAX), use a local web server.

- Option A: Open `index.html` directly (double-click)
- Option B: Serve locally
  - Python: `python -m http.server 8000` then open `http://localhost:8000`
  - Node: `npx http-server -p 8000` then open `http://localhost:8000`

Windows example:
```bat
cd "D:\HTML Projects\Farmer"
python -m http.server 8000
```

## Development guidelines
- Place new pages within the appropriate dashboard folder.
- Shared styles go in `assets/css/theme.css`.
- Shared behavior goes in `assets/js/main.js`.
- Images/icons live in `assets/img/`.

### Linking
- Use correct relative or root-relative paths between sections.
- Keep navigation consistent across dashboards.

### Browser support
Modern evergreen browsers (latest Chrome, Edge, Firefox, Safari).

## Conventions
- File/folder names: kebab-case (e.g., `view-orders.html`).
- HTML: semantic elements; minimize inline styles/scripts.
- CSS: prefer BEM-like classes; define variables and base tokens in `theme.css`.
- JS: keep scripts modular in `assets/js/main.js`; avoid large inline blocks.

## Roadmap
- Add real data via a backend or JSON mocks
- Introduce templating/build step for shared layouts (e.g., Nunjucks/Handlebars)
- Improve responsiveness and accessibility (ARIA, focus states, contrast)
- Client-side validation and form UX improvements
- Basic tests for any non-trivial client logic

## Contributing
1. Create a feature branch from `main`
2. Make changes following conventions above
3. Test locally (open or serve `index.html`)
4. Submit a PR with a clear description and screenshots for UI changes

## License
Add a license file for clarity. Until then, treat as All Rights Reserved.
