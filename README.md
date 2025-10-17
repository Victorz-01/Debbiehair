# Luxe Hair Collection - Product Catalog

A professional, responsive product catalog website for hair products including wigs, extensions, accessories, and care products.

## Features

### 1. Product Catalog
- Grid layout with responsive cards
- Product imagery with hover effects
- Pricing and short descriptions
- Featured product badges
- Lazy loading for images

### 2. Product Detail View
- Modal/expanded panel presentation
- Detailed product information
- Features list
- Care tips for each product
- Upsell recommendations
- Call-to-action buttons

### 3. Category Filtering
- Filter by category: All Products, Wigs, Extensions, Accessories, Care Products
- Smooth transitions between filtered views
- Active filter indication

### 4. Interactive Features
- Smooth scrolling navigation
- Mobile menu toggle
- Auto-hiding header on scroll
- Modal interactions with keyboard support (ESC to close)
- Click outside to close modal

### 5. Responsive Design
- Mobile-first approach
- Breakpoints for mobile, tablet, and desktop
- Optimized layouts for all screen sizes
- Touch-friendly interactions
- Professional typography and spacing

## Technology Stack

- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern styling with CSS Grid, Flexbox, animations, and transitions
- **JavaScript**: Vanilla JS for all interactive features (no dependencies)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## File Structure

```
├── index.html          # Main HTML structure
├── styles.css          # All styling and responsive design
├── products.js         # Product data
├── script.js           # Interactive functionality
└── README.md           # Project documentation
```

## Product Categories

### Wigs
Premium human hair wigs with various styles:
- Lace front wigs
- Curly and straight textures
- Multiple lengths and colors

### Extensions
Various extension types for added length and volume:
- Clip-in extensions
- Tape-in extensions
- Ponytail extensions
- Halo extensions

### Accessories
Essential accessories for wig and hair care:
- Silk bonnets
- Wig stands
- Edge control products
- Wig grip bands

### Care Products
Professional-grade care products:
- Wig care kits
- Argan oil serums
- Purple toning shampoos
- Heat protectant sprays

## Customization

### Adding Products
Edit `products.js` to add new products with the following structure:

```javascript
{
    id: unique_number,
    name: "Product Name",
    category: "wigs|extensions|accessories|care",
    price: 99.99,
    image: "image_url",
    description: "Short description",
    featured: true|false,
    features: ["Feature 1", "Feature 2"],
    careTips: ["Tip 1", "Tip 2"],
    upsell: "Upsell message"
}
```

### Styling
Modify CSS custom properties in `styles.css`:

```css
:root {
    --primary-color: #8b5a8e;
    --secondary-color: #c9a0dc;
    --accent-color: #d4af37;
    /* ... more variables */
}
```

## Performance Optimizations

- Lazy loading for product images
- CSS animations using transform and opacity
- Efficient event delegation
- Minimal DOM manipulation
- No external dependencies

## Accessibility Features

- Semantic HTML elements
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus indicators
- Alt text for images
- Proper heading hierarchy

## Future Enhancements

Potential features for future development:
- Shopping cart functionality
- Product search
- User reviews and ratings
- Wishlist feature
- Product comparison
- Color/size variations
- Backend integration for dynamic data
- Payment processing

## License

This project is created for demonstration purposes.
