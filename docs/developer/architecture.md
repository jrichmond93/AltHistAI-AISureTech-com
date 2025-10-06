# System Architecture & Design Patterns

This document outlines the architectural design and patterns used in the AltHistLearn educational platform.

## 🏗️ Overall Architecture

AltHistLearn follows a **static site architecture** with client-side interactivity, designed for simplicity, performance, and educational accessibility.

```
┌─────────────────────────────────────────┐
│                Browser                   │
├─────────────────────────────────────────┤
│  HTML Structure (Semantic Layout)       │
│  CSS Styling (Responsive Design)        │  
│  JavaScript (Interactive Features)      │
└─────────────────────────────────────────┘
                    │
                    │ HTTP Request
                    ▼
┌─────────────────────────────────────────┐
│            Web Server                    │
│  (Python HTTP Server / Apache / Nginx)  │
│                                         │
│  Static Files:                          │
│  • index.html                          │
│  • css/styles.css                      │
│  • js/main.js                          │
│  • assets/images/                      │
└─────────────────────────────────────────┘
```

## 📋 Design Principles

### 1. **Progressive Enhancement**
- Core content accessible without JavaScript
- Enhanced experience with JavaScript enabled
- Graceful degradation for older browsers

### 2. **Mobile-First Responsive Design**
- Base styles for mobile devices
- Progressive enhancement for larger screens
- Touch-friendly interactive elements

### 3. **Semantic HTML Structure**
- Meaningful HTML5 elements
- Accessibility-first approach
- SEO-optimized markup

### 4. **Modular CSS Architecture**
- Component-based styling
- Consistent naming conventions
- Reusable utility classes

### 5. **Vanilla JavaScript Approach**
- No external dependencies
- Lightweight and fast loading
- Educational clarity in code

## 🎯 Core Components

### HTML Structure Layer
```html
<!DOCTYPE html>
<html lang="en">
├── <head> (Meta, Links, Title)
└── <body>
    ├── <header class="header">
    │   └── <nav class="navbar">
    ├── <main>
    │   ├── <section id="home" class="hero">
    │   ├── <section id="scenarios" class="scenarios">
    │   ├── <section id="timeline" class="timeline">
    │   ├── <section id="learn" class="learn">
    │   └── <section id="about" class="about">
    └── <footer class="footer">
```

### CSS Architecture
```css
/* 1. Reset & Base Styles */
* { box-sizing: border-box; }

/* 2. Layout Components */
.header, .navbar, .container

/* 3. Section-Specific Styles */
.hero, .scenarios, .timeline, .learn, .about

/* 4. UI Components */
.scenario-card, .timeline-item, .resource-item

/* 5. Utility Classes */
.cta-button, .learn-more

/* 6. Responsive Breakpoints */
@media (max-width: 768px)
@media (max-width: 480px)
```

### JavaScript Module Pattern
```javascript
// Event Listeners Module
document.addEventListener('DOMContentLoaded', function() {
  // Mobile Navigation
  // Smooth Scrolling  
  // Interactive Elements
});

// Utility Functions
function scrollToSection(id) { ... }
function debounce(func, wait) { ... }

// Feature Modules
// - Navigation highlighting
// - Intersection Observer animations
// - Mobile menu toggle
```

## 🎨 Design System

### Color Palette
```css
:root {
  --primary-dark: #2c3e50;     /* Navigation, headings */
  --primary-blue: #3498db;     /* Links, accents */
  --primary-red: #e74c3c;      /* CTA buttons */
  --text-dark: #333;           /* Body text */
  --text-light: #666;          /* Secondary text */
  --background-light: #f8f9fa; /* Section backgrounds */
  --white: #fff;               /* Cards, content areas */
}
```

### Typography Scale
```css
/* Headings */
h1: 1.8rem (navbar brand)
h2: 3.5rem (hero) / 2.5rem (sections)
h3: 1.3rem (cards)
h4: 1.2rem (timeline)

/* Body Text */
body: 1rem (base)
p: 1.1rem - 1.3rem (depending on section)
```

### Spacing System
```css
/* Consistent spacing using multiples of 1rem */
--spacing-xs: 0.5rem
--spacing-sm: 1rem  
--spacing-md: 1.5rem
--spacing-lg: 2rem
--spacing-xl: 3rem
--spacing-xxl: 5rem
```

## 📱 Responsive Design Strategy

### Breakpoint System
```css
/* Mobile First Approach */
/* Base: 320px+ (Mobile) */

/* Tablet: 768px+ */
@media (max-width: 768px) {
  /* Adjust navigation, grid layouts */
}

/* Mobile: 480px and below */
@media (max-width: 480px) {
  /* Further mobile optimizations */
}
```

### Grid Layouts
```css
/* Flexible Grid System */
.scenario-grid,
.resource-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

/* Responsive behavior automatically handled by auto-fit */
```

## ⚡ Performance Considerations

### Loading Strategy
1. **HTML**: Loads immediately (structure)
2. **CSS**: Blocks rendering (critical path)
3. **JavaScript**: Loads after DOM (progressive enhancement)
4. **Images**: Lazy loading ready (future enhancement)

### Optimization Techniques
- **CSS**: Single file, minification ready
- **JavaScript**: Vanilla JS, no dependencies
- **Images**: Compressed, next-gen formats ready
- **Fonts**: System font stack (no web fonts)

## 🔧 Interactive Features Architecture

### Navigation System
```javascript
// Smooth Scrolling Implementation
window.scrollTo({
  top: elementPosition,
  behavior: 'smooth'
});

// Active Navigation Highlighting
window.addEventListener('scroll', updateActiveNav);
```

### Animation Framework
```javascript
// Intersection Observer for scroll animations
const observer = new IntersectionObserver(callback, options);

// CSS Transition-based animations
.element {
  transition: opacity 0.6s ease, transform 0.6s ease;
}
```

### Mobile Menu Pattern
```javascript
// Toggle-based mobile navigation
hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});
```

## 📊 Data Flow

### User Interaction Flow
```
User Action → Event Listener → DOM Manipulation → Visual Feedback
     ↓              ↓              ↓               ↓
Click Button → Button Handler → Update Classes → CSS Transition
Scroll Page → Scroll Handler → Update Nav → Highlight Active
Resize Window → Resize Handler → Adjust Layout → Responsive CSS
```

### Content Structure Flow
```
HTML (Structure) → CSS (Presentation) → JavaScript (Behavior)
       ↓                  ↓                    ↓
Semantic Markup → Visual Design → Interactive Features
       ↓                  ↓                    ↓  
Accessibility → Responsive Layout → Progressive Enhancement
```

## 🛡️ Error Handling Strategy

### JavaScript Error Handling
```javascript
// Defensive programming
if (element && element.classList) {
  element.classList.add('active');
}

// Graceful degradation
try {
  // Enhanced feature
} catch (error) {
  // Fallback behavior
  console.warn('Feature unavailable:', error);
}
```

### CSS Fallbacks
```css
/* Progressive enhancement */
.element {
  background: #3498db; /* Fallback */
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

## 🔮 Scalability Considerations

### Future Enhancements Ready
- **Component System**: Easy to extract into reusable components
- **Build Process**: Structure ready for bundling/minification
- **CMS Integration**: Content structure prepared for dynamic data
- **Framework Migration**: Clean separation allows easy framework adoption

### Extension Points
- **New Sections**: Follow existing pattern in HTML/CSS/JS
- **Interactive Elements**: Extend existing event handling system  
- **Animations**: Built on existing Intersection Observer pattern
- **Responsive Design**: Existing grid system scales naturally

---

**Related Documentation**: 
- [Setup Guide](setup.md) 
- [Component Guide](component-guide.md)
- [Coding Standards](coding-standards.md)