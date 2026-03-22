# ElectroTech - Electric Service Company Website

A modern, responsive single-page website for an electric service company built with HTML, CSS, and JavaScript featuring advanced interactive elements and animations.

## Features

- **Fully Responsive Design**: Optimized for mobile, tablet, and desktop
- **Modern UI/UX**: Clean, professional design with electric blue and yellow accents
- **Advanced Animations**: 
  - Typing animation in hero section
  - Scroll-triggered animations using AOS.js
  - Counter animations for statistics
  - Smooth transitions and hover effects
- **Interactive Elements**: 
  - Particle background effects using Particles.js
  - Service modals with detailed information
  - Testimonial carousel with auto-play and manual controls
  - Multi-step contact form with progress tracking
  - Theme toggle (light/dark mode) with localStorage persistence
- **Form Validation**: Advanced client-side validation with real-time feedback
- **Real Images**: High-quality images from Unsplash for authentic content
- **Performance Optimized**: Efficient JavaScript and CSS for fast loading

## Sections

1. **Hero Section**: Dynamic typing animation, particle background, and enhanced statistics with icons
2. **Services Section**: 5 service offerings with icons, images, and detailed modal popups
3. **About Section**: Company description with professional team image
4. **Why Choose Us Section**: 6 key benefits highlighting company strengths and certifications
5. **Testimonials Section**: Customer reviews in an interactive carousel with navigation
6. **Contact Section**: Multi-step contact form with progress bar and validation
7. **Footer**: Social links and quick navigation

## Technologies Used

- HTML5 with semantic markup
- CSS3 (CSS Variables, Flexbox, Grid, Animations)
- JavaScript (ES6+ with modern APIs)
- AOS.js for scroll animations
- Particles.js for interactive background
- Animate.css for additional animations
- Font Awesome for icons
- Google Fonts for typography
- Local Storage API for theme persistence

## Getting Started

1. Clone or download the project files
2. Start a local HTTP server (recommended for proper functionality):
   ```bash
   # Using Python (if installed)
   python -m http.server 8000
   
   # Using Node.js (if installed)
   npx http-server
   
   # Or use any other local server
   ```
3. Open `http://localhost:8000` in your web browser
4. The website is ready to use!

## Advanced Features

- **Typing Animation**: Dynamic text animation in the hero section
- **Particle Background**: Interactive particle system using Particles.js
- **Dynamic Background Animations**: 
  - Geometric shapes (triangles, hexagons) with rotation and scaling
  - Electric waves flowing across the screen
  - Flashing lightning bolt effects
  - Rotating circuit patterns
- **Service Modals**: Click any service card to view detailed information
- **Testimonial Carousel**: Auto-playing carousel with manual navigation controls
- **Multi-Step Contact Form**: Form divided into steps with progress tracking and validation
- **Get Service Now Popup**: Advanced popup form that sends WhatsApp messages upon submission
- **Theme Toggle**: Switch between light and dark themes (persisted in localStorage)
- **Form Validation**: Real-time validation with visual feedback
- **Responsive Design**: Mobile-first approach with breakpoints for all devices

## Hero Section Stats

- **2500+ Projects Done**: Showcasing extensive project portfolio with project icon
- **99.9% Success Rate**: Demonstrating reliability and quality with award icon
- **500+ 5-Star Reviews**: Highlighting customer satisfaction with star icon
- **150+ Happy Clients**: Showing customer satisfaction with users icon

## WhatsApp Integration

The contact form automatically sends detailed inquiries to your WhatsApp business number when users complete all form steps:

**Contact Form WhatsApp Message includes:**
- Customer name, phone, and email
- Service type and urgency level
- Detailed project description
- Submission timestamp
- Professional formatting with emojis

**"Get Service Now" Popup sends:**
- Customer name and phone number
- Service type and description
- Quick response promise (30 minutes)
- Professional formatting

**Note**: Update the WhatsApp number in `js/script.js` (line ~549) with your actual business WhatsApp number.

## File Structure

```
/
├── index.html          # Main HTML file with all sections
├── css/
│   └── style.css       # Comprehensive stylesheet with animations
├── js/
│   └── script.js       # Advanced JavaScript functionality
├── public/             # Static assets (if any)
└── README.md           # This file
```

## Customization

- **Colors**: Modify CSS variables in `:root` for easy theme changes
- **Content**: Update text, images, and links in `index.html`
- **Styling**: Adjust styles in `css/style.css`
- **Functionality**: Modify behavior in `js/script.js`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is for educational purposes. Images are sourced from Unsplash (free to use).