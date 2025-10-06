# Coding Standards & Best Practices

This document outlines the coding standards, style guidelines, and best practices for the AltHistLearn project.

## 📋 General Principles

### Code Quality Goals
- **Readability**: Code should be self-documenting and easy to understand
- **Consistency**: Follow established patterns throughout the codebase
- **Maintainability**: Write code that is easy to modify and extend
- **Performance**: Optimize for fast loading and smooth user experience
- **Accessibility**: Ensure code supports assistive technologies

### File Organization
```
Project Structure:
├── index.html              # Main entry point
├── css/
│   └── styles.css         # Single stylesheet (for now)
├── js/
│   └── main.js            # Single JavaScript file (for now)
├── assets/
│   └── images/            # Optimized image assets
└── docs/                  # Documentation (this folder)
```

## 🌐 HTML Standards

### Document Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Descriptive content">
  <title>Page Title - AltHistLearn</title>
  <!-- CSS before JavaScript -->
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <!-- Content structure -->
  
  <!-- JavaScript at end of body -->
  <script src="js/main.js"></script>
</body>
</html>
```

### Semantic HTML Guidelines

#### ✅ Do
```html
<!-- Use semantic elements -->
<header class="header">
<nav class="navbar">
<main>
  <section id="home" class="hero">
    <h2>Section Heading</h2>
    <p>Descriptive content</p>
  </section>
</main>
<footer class="footer">

<!-- Meaningful class names -->
<div class="scenario-card">
<button class="cta-button">
<article class="timeline-item">
```

#### ❌ Don't
```html
<!-- Avoid generic divs without semantic meaning -->
<div class="header">
<div class="nav">

<!-- Don't skip heading levels -->
<h2>Main Title</h2>
<h4>Subtitle</h4> <!-- Should be h3 -->

<!-- Avoid inline styles -->
<div style="color: red;">
```

### Accessibility Standards
```html
<!-- Always include alt text -->
<img src="image.jpg" alt="Descriptive text">

<!-- Use proper form labels -->
<label for="search">Search:</label>
<input id="search" type="text">

<!-- Include ARIA attributes when needed -->
<button aria-expanded="false" aria-controls="menu">Menu</button>

<!-- Ensure proper heading hierarchy -->
<h1>Page Title</h1>
  <h2>Section Title</h2>
    <h3>Subsection</h3>
```

## 🎨 CSS Standards

### File Organization
```css
/* 1. CSS Reset & Base Styles */
*, *::before, *::after { box-sizing: border-box; }

/* 2. CSS Custom Properties (Variables) */
:root { --primary-color: #2c3e50; }

/* 3. Typography */
body, h1, h2, h3, h4, p { /* font styles */ }

/* 4. Layout Components */
.container, .header, .navbar { /* layout styles */ }

/* 5. UI Components */
.scenario-card, .timeline-item { /* component styles */ }

/* 6. Utility Classes */
.cta-button, .learn-more { /* utility styles */ }

/* 7. Responsive Design */
@media (max-width: 768px) { /* responsive styles */ }
```

### Naming Conventions

#### Class Naming (BEM-inspired)
```css
/* Block - Component */
.scenario-card { }

/* Element - Part of component */
.scenario-card__title { }
.scenario-card__content { }

/* Modifier - Variation */
.scenario-card--featured { }
.scenario-card--large { }

/* Utility classes */
.text-center { }
.margin-bottom-large { }
```

#### CSS Property Order
```css
.element {
  /* 1. Display & Box Model */
  display: flex;
  position: relative;
  top: 0;
  width: 100%;
  height: auto;
  margin: 0;
  padding: 1rem;
  
  /* 2. Typography */
  font-family: inherit;
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
  
  /* 3. Visual */
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  
  /* 4. Animation */
  transition: all 0.3s ease;
  transform: translateY(0);
}
```

### Responsive Design Standards
```css
/* Mobile-first approach */
.component {
  /* Base styles (mobile) */
  width: 100%;
  padding: 1rem;
}

/* Tablet and up */
@media (min-width: 768px) {
  .component {
    width: 50%;
    padding: 2rem;
  }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .component {
    width: 33.333%;
    padding: 3rem;
  }
}
```

### CSS Best Practices

#### ✅ Do
```css
/* Use custom properties for consistency */
:root {
  --primary-color: #2c3e50;
  --spacing-unit: 1rem;
}

/* Prefer flexbox and grid for layouts */
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-unit);
}

/* Use relative units */
.text {
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
}
```

#### ❌ Don't
```css
/* Avoid !important unless absolutely necessary */
.element {
  color: red !important; /* Avoid */
}

/* Don't use fixed pixel values for typography */
.text {
  font-size: 16px; /* Use rem instead */
}

/* Avoid overly specific selectors */
div.container > .content > .item > p {
  /* Too specific */
}
```

## 💻 JavaScript Standards

### Code Organization
```javascript
// 1. Constants and Configuration
const CONFIG = {
  SCROLL_OFFSET: 100,
  ANIMATION_DURATION: 300
};

// 2. Utility Functions
function debounce(func, wait) {
  // Utility implementation
}

// 3. Feature Modules
document.addEventListener('DOMContentLoaded', function() {
  initializeNavigation();
  initializeAnimations();
  initializeInteractiveElements();
});

// 4. Event Handlers
function handleScrollEvent() {
  // Event handling logic
}
```

### Naming Conventions
```javascript
// Variables: camelCase
const userName = 'example';
const isMenuOpen = false;

// Functions: camelCase with descriptive verbs
function scrollToSection(sectionId) { }
function toggleMobileMenu() { }
function updateActiveNavigation() { }

// Constants: UPPER_SNAKE_CASE
const DEFAULT_ANIMATION_DURATION = 300;
const BREAKPOINT_TABLET = 768;

// DOM elements: descriptive names
const hamburgerButton = document.querySelector('.hamburger');
const navigationMenu = document.querySelector('.nav-menu');
```

### Function Standards

#### ✅ Good Function Design
```javascript
// Pure function with single responsibility
function calculateScrollPosition(element, offset = 0) {
  if (!element) return 0;
  
  const headerHeight = document.querySelector('.header').offsetHeight;
  return element.offsetTop - headerHeight - offset;
}

// Clear parameter handling
function scrollToSection(sectionId, options = {}) {
  const {
    behavior = 'smooth',
    offset = 0
  } = options;
  
  const element = document.getElementById(sectionId);
  if (!element) {
    console.warn(`Section with id "${sectionId}" not found`);
    return;
  }
  
  window.scrollTo({
    top: calculateScrollPosition(element, offset),
    behavior
  });
}
```

#### Event Handler Patterns
```javascript
// Use named functions for event handlers
function handleMenuToggle(event) {
  event.preventDefault();
  
  const menu = document.querySelector('.nav-menu');
  const isOpen = menu.classList.contains('active');
  
  menu.classList.toggle('active');
  
  // Update ARIA attributes for accessibility
  this.setAttribute('aria-expanded', !isOpen);
}

// Attach event listeners properly
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  
  if (hamburger) {
    hamburger.addEventListener('click', handleMenuToggle);
  }
});
```

### Error Handling
```javascript
// Defensive programming
function safelyUpdateElement(selector, content) {
  try {
    const element = document.querySelector(selector);
    
    if (!element) {
      console.warn(`Element not found: ${selector}`);
      return false;
    }
    
    element.textContent = content;
    return true;
    
  } catch (error) {
    console.error('Error updating element:', error);
    return false;
  }
}

// Feature detection
if ('IntersectionObserver' in window) {
  // Use Intersection Observer
  initializeScrollAnimations();
} else {
  // Fallback behavior
  console.warn('IntersectionObserver not supported');
}
```

## 📝 Documentation Standards

### Code Comments
```javascript
/**
 * Smoothly scrolls to a section with the given ID
 * @param {string} sectionId - The ID of the target section
 * @param {Object} options - Configuration options
 * @param {string} options.behavior - Scroll behavior ('smooth' | 'auto')
 * @param {number} options.offset - Additional offset in pixels
 */
function scrollToSection(sectionId, options = {}) {
  // Implementation...
}

// Single-line comments for complex logic
const headerHeight = document.querySelector('.header').offsetHeight;
// Subtract header height to account for fixed positioning
const targetPosition = element.offsetTop - headerHeight;
```

### CSS Comments
```css
/* ==========================================================================
   Layout Components
   ========================================================================== */

/* Header and Navigation
   ========================================================================== */
.header {
  /* Fixed positioning for persistent navigation */
  position: fixed;
  top: 0;
  z-index: 1000;
}

/* Hero Section
   ========================================================================== */
.hero {
  /* Full viewport height minus header */
  min-height: calc(100vh - 70px);
}
```

## 🧪 Testing Standards

### Manual Testing Checklist
```markdown
## Functionality Testing
- [ ] All navigation links work correctly
- [ ] Mobile menu toggles properly
- [ ] Smooth scrolling functions on all browsers
- [ ] Interactive elements provide feedback

## Responsive Testing
- [ ] Layout works on mobile (320px+)
- [ ] Layout works on tablet (768px+) 
- [ ] Layout works on desktop (1024px+)
- [ ] Images scale appropriately

## Accessibility Testing
- [ ] All images have alt text
- [ ] Keyboard navigation works
- [ ] Screen reader compatibility
- [ ] Sufficient color contrast

## Performance Testing
- [ ] Page loads quickly
- [ ] No JavaScript errors in console
- [ ] CSS renders without layout shifts
- [ ] Smooth animations and transitions
```

### Browser Compatibility
```javascript
// Test across supported browsers:
// - Chrome 70+
// - Firefox 65+
// - Safari 12+
// - Edge 79+

// Use feature detection for newer APIs
if ('requestAnimationFrame' in window) {
  // Use modern animation approach
} else {
  // Fallback for older browsers
}
```

## 🚀 Performance Standards

### Loading Optimization
```html
<!-- Preload critical resources -->
<link rel="preload" href="css/styles.css" as="style">

<!-- Optimize images -->
<img src="image.webp" alt="Description" loading="lazy">

<!-- Defer non-critical JavaScript -->
<script src="analytics.js" defer></script>
```

### CSS Performance
```css
/* Prefer efficient selectors */
.component { } /* Good */
div > p + span { } /* Avoid complex selectors */

/* Use will-change for animated elements */
.animated-element {
  will-change: transform, opacity;
}

/* Remove will-change after animation */
.animation-complete {
  will-change: auto;
}
```

---

**Related Documentation**:
- [Architecture Guide](architecture.md)
- [Component Guide](component-guide.md)
- [Setup Instructions](setup.md)