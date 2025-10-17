# Debbiehair - Professional Hair Care & Styling

A modern, responsive static website for Debbiehair salon, built with vanilla HTML, CSS, and JavaScript.

## Project Structure

```
debbiehair/
├── index.html              # Main HTML file with semantic structure
├── assets/
│   ├── css/
│   │   └── styles.css      # Complete design system and styles
│   └── js/
│       └── main.js         # Interactive functionality
├── images/                 # Image assets directory
│   └── .gitkeep
├── .gitignore
└── README.md
```

## Features

### HTML Structure
- Semantic HTML5 markup
- SEO-optimized meta tags
- Accessibility features (ARIA labels)
- Responsive viewport configuration
- Google Fonts integration (Playfair Display & Poppins)

### Design System
The project uses a comprehensive CSS variable system for:
- **Color Palette**: Primary green (#2d7a4f), secondary dark tones, accent colors
- **Typography**: Playfair Display for headings, Poppins for body text
- **Spacing Scale**: Consistent spacing from xs (0.25rem) to 5xl (8rem)
- **Font Sizes**: From xs (0.75rem) to 5xl (3rem)
- **Shadows**: Multiple levels (sm, md, lg, xl)
- **Transitions**: Standardized animation durations

### Components
- Fixed header with navigation
- Responsive hamburger menu for mobile
- Hero section with call-to-action
- Content sections for services, gallery, about, and contact
- Comprehensive footer with links and business information

### JavaScript Features
- Mobile menu toggle with smooth animations
- Smooth scrolling navigation
- Active navigation highlighting based on scroll position
- Dynamic header shadow on scroll
- Responsive behavior handling

### Responsive Design
- Mobile-first approach
- Breakpoints: 576px, 768px, 992px
- Adaptive navigation for mobile devices
- Fluid typography and spacing

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid and Flexbox support required
- ES5+ JavaScript

## Development
This is a static site requiring no build process. Simply open `index.html` in a web browser to view.

For local development with live reload, you can use any static server:
```bash
# Python 3
python -m http.server 8000

# Node.js (with http-server)
npx http-server

# PHP
php -S localhost:8000
```

## Customization
All design tokens are defined as CSS variables in `:root` at the top of `styles.css`. Modify these variables to customize:
- Colors
- Typography
- Spacing
- Shadows
- Border radius
- Transitions

## License
All rights reserved © 2024 Debbiehair
