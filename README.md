# Debbiehair - Premium Hair Styling & Beauty Services

A modern, responsive website for Debbiehair salon, featuring elegant design and comprehensive service information.

## Features

### Homepage
- **Hero Section**: Eye-catching hero with compelling tagline, call-to-action buttons, and elegant background design
- **Responsive Navigation**: Fixed header with smooth scroll navigation and mobile-friendly menu
- **Brand Identity**: Professional color scheme with golden/brown tones reflecting luxury hair care

### Services Section
- Six featured service categories with detailed descriptions
- Interactive service cards with hover effects
- Direct booking links for each service
- Services include:
  - Hair Cutting & Styling
  - Color & Highlights
  - Treatment & Care
  - Special Occasions
  - Extensions & Weaves
  - Natural Hair Care

### About Section
- Compelling brand story highlighting values and mission
- Four key unique selling points:
  - Expert Stylists
  - Premium Products
  - Personalized Care
  - Luxury Experience
- Visual layout with imagery placeholder
- Two-column responsive design

### Contact Section
- **Contact Information Block**:
  - Physical address
  - Phone number (clickable)
  - Email address (clickable)
  - Detailed business hours
  
- **Inquiry Form**:
  - Full name (required)
  - Email (required)
  - Phone number (optional)
  - Service interest dropdown
  - Message textarea (required)
  - Form validation
  - Accessible labels and ARIA attributes

### Design System

#### Color Palette
- Primary: Gold/Brown tones (#c4a57b)
- Secondary: Dark charcoal (#2c2c2c)
- Accent: Gold (#d4af37)
- Background: Soft cream (#faf8f5)

#### Typography
- Headings: Playfair Display (serif)
- Body: Poppins (sans-serif)
- Responsive font sizes
- Optimized line heights

#### Components
- Buttons (primary, outline, white variants)
- Form inputs with focus states
- Service cards with animations
- Contact detail cards
- Business hours display

### Accessibility Features
- Semantic HTML5 structure
- ARIA labels and roles
- Keyboard navigation support
- Focus visible states
- Screen reader friendly
- Reduced motion support

### Responsive Design
- Mobile-first approach
- Breakpoints:
  - Mobile: < 480px
  - Tablet: 481px - 768px
  - Desktop: > 768px
- Touch-friendly interactions
- Optimized for all screen sizes

### Interactive Features
- Smooth scroll navigation
- Active nav link highlighting
- Mobile hamburger menu
- Scroll-to-top button
- Form validation
- Service card animations on scroll
- Header scroll effects

## Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern features (Grid, Flexbox, Custom Properties)
- **JavaScript**: Vanilla JS for interactivity
- **Fonts**: Google Fonts (Playfair Display, Poppins)

## File Structure

```
debbiehair/
├── index.html           # Main homepage
├── css/
│   ├── variables.css    # Design system variables
│   └── style.css        # Main stylesheet
├── js/
│   └── main.js         # JavaScript functionality
├── images/             # Image assets directory
└── README.md           # Project documentation
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimizations

- Efficient CSS with custom properties
- Minimal JavaScript footprint
- Intersection Observer for animations
- Optimized font loading
- CSS transitions over JavaScript animations

## Future Enhancements

- Image gallery for portfolio
- Online booking system integration
- Customer testimonials section
- Blog/articles about hair care
- Pricing page
- Stylist profiles
- Before/after gallery

## Getting Started

1. Clone or download the repository
2. Open `index.html` in a web browser
3. No build process required - works out of the box

## Customization

### Updating Colors
Edit the CSS custom properties in `css/variables.css`:
```css
:root {
  --primary-color: #c4a57b;
  --secondary-color: #2c2c2c;
  /* ... */
}
```

### Updating Content
All content can be edited directly in `index.html`:
- Hero section text
- Service descriptions
- About section story
- Contact information
- Business hours

### Adding Images
1. Add images to the `images/` directory
2. Replace placeholder elements in HTML with `<img>` tags
3. Update CSS for proper styling

## Contact

For questions or support, contact Debbiehair at:
- Email: hello@debbiehair.com
- Phone: (555) 123-4567
- Address: 123 Beauty Boulevard, Style District, ST 12345

---

Built with ❤️ for Debbiehair
