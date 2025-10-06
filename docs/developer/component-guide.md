# UI Component Guide

This guide documents all reusable UI components in the AltHistLearn project, including their structure, styling, and behavior.

## 🎯 Component Overview

The AltHistLearn interface is built using modular, reusable components that follow consistent design patterns and accessibility standards.

## 🧩 Core Components

### Navigation Components

#### Header & Navbar
**Location**: Global site header  
**Purpose**: Primary navigation and site branding

```html
<header class="header">
  <nav class="navbar">
    <div class="nav-brand">
      <h1>AltHistLearn</h1>
    </div>
    <ul class="nav-menu">
      <li><a href="#home">Home</a></li>
      <li><a href="#scenarios">Scenarios</a></li>
      <!-- Additional menu items -->
    </ul>
    <div class="hamburger">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </div>
  </nav>
</header>
```

**CSS Classes**:
- `.header` - Main header container
- `.navbar` - Navigation flex container
- `.nav-brand` - Logo/brand area
- `.nav-menu` - Navigation menu list
- `.hamburger` - Mobile menu toggle

**JavaScript Behavior**:
- Mobile menu toggle functionality
- Active navigation highlighting on scroll
- Smooth scrolling to sections

**Responsive Behavior**:
- Desktop: Horizontal navigation menu
- Mobile: Hamburger menu with slide-out navigation

---

#### Mobile Hamburger Menu
**Purpose**: Mobile navigation toggle

```css
.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.bar {
  width: 25px;
  height: 3px;
  background-color: #ecf0f1;
  margin: 3px 0;
  transition: 0.3s;
}

@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }
  
  .nav-menu {
    position: fixed;
    left: -100%;
    top: 70px;
    transition: 0.3s;
  }
  
  .nav-menu.active {
    left: 0;
  }
}
```

**States**:
- Default: Three horizontal bars
- Active: Animated transformation (can be enhanced)

---

### Content Components

#### Hero Section
**Purpose**: Main landing area with call-to-action

```html
<section id="home" class="hero">
  <div class="hero-content">
    <h2>Explore What Could Have Been</h2>
    <p>Discover fascinating alternative history scenarios...</p>
    <button class="cta-button" onclick="scrollToSection('scenarios')">
      Start Exploring
    </button>
  </div>
</section>
```

**Design Features**:
- Full viewport height
- Gradient background
- Centered content with animation
- Primary call-to-action button

**Animation**: Fade-in-up animation on page load

---

#### Scenario Cards
**Purpose**: Display alternative history scenarios

```html
<div class="scenario-card">
  <h3>What if Rome Never Fell?</h3>
  <p>Explore a world where the Roman Empire continued to thrive...</p>
  <button class="learn-more">Learn More</button>
</div>
```

**CSS Structure**:
```css
.scenario-card {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.scenario-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.15);
}
```

**Interactive States**:
- Default: Standard card appearance
- Hover: Lift effect with enhanced shadow
- Focus: Keyboard navigation support

**Grid Layout**:
```css
.scenario-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}
```

---

#### Timeline Items
**Purpose**: Display historical events in chronological order

```html
<div class="timeline-item">
  <div class="timeline-marker"></div>
  <div class="timeline-content">
    <h4>49 BCE - Caesar's Decision</h4>
    <p>What if Julius Caesar never crossed the Rubicon?</p>
  </div>
</div>
```

**Visual Structure**:
- Timeline marker (circular indicator)
- Connecting line between items
- Content area with border accent

**CSS Implementation**:
```css
.timeline-item {
  position: relative;
  margin-bottom: 2rem;
  padding-left: 3rem;
}

.timeline-marker {
  position: absolute;
  left: 0;
  top: 0;
  width: 20px;
  height: 20px;
  background: #3498db;
  border-radius: 50%;
  border: 4px solid white;
  box-shadow: 0 0 0 4px #3498db;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: 9px;
  top: 20px;
  bottom: -2rem;
  width: 2px;
  background: #3498db;
}
```

---

#### Resource Items
**Purpose**: Display learning resources

```html
<div class="resource-item">
  <h3>Historical Method</h3>
  <p>Learn how historians analyze evidence and construct alternative narratives.</p>
</div>
```

**Design Characteristics**:
- Centered text alignment
- White background with subtle shadow
- Hover lift effect
- Grid-based layout

---

### Interactive Components

#### Buttons

##### Primary CTA Button
```html
<button class="cta-button" onclick="scrollToSection('scenarios')">
  Start Exploring
</button>
```

```css
.cta-button {
  background: #e74c3c;
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 1.1rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.cta-button:hover {
  background: #c0392b;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}
```

##### Secondary Button
```html
<button class="learn-more">Learn More</button>
```

```css
.learn-more {
  background: #3498db;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.learn-more:hover {
  background: #2980b9;
}
```

---

### Layout Components

#### Container
**Purpose**: Consistent content width and centering

```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
```

**Usage**: Wrap section content for consistent spacing

---

#### Section Layouts

##### Grid Sections
```css
.scenario-grid,
.resource-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}
```

**Responsive Behavior**:
- Desktop: Multiple columns based on available space
- Tablet: 2 columns typically
- Mobile: Single column

##### Timeline Layout
```css
.timeline-container {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}
```

**Structure**: Centered timeline with consistent spacing

---

## 🎨 Design System Integration

### Color Usage
```css
:root {
  --primary-dark: #2c3e50;     /* Headers, navigation */
  --primary-blue: #3498db;     /* Links, timeline, secondary buttons */
  --primary-red: #e74c3c;      /* Primary CTA buttons */
  --text-dark: #333;           /* Main content text */
  --text-light: #666;          /* Secondary text */
  --background-light: #f8f9fa; /* Alternating section backgrounds */
  --white: #fff;               /* Card backgrounds */
}
```

### Typography Scale
- **Hero Heading**: `3.5rem` (desktop) / `2.5rem` (tablet) / `2rem` (mobile)
- **Section Headings**: `2.5rem`
- **Card Titles**: `1.3rem`
- **Timeline Headings**: `1.2rem`
- **Body Text**: `1rem` - `1.3rem`

### Spacing System
- **Component Padding**: `2rem` (desktop) / `1.5rem` (mobile)
- **Grid Gaps**: `2rem`
- **Section Padding**: `80px 0`
- **Card Margins**: `1rem` - `3rem`

## 📱 Responsive Behavior

### Breakpoints
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px  
- **Desktop**: 1024px+

### Component Adaptations

#### Navigation
- **Desktop**: Horizontal menu
- **Mobile**: Hamburger menu with full-screen overlay

#### Cards/Grid
- **Desktop**: Multi-column grid (auto-fit)
- **Tablet**: 2-column grid typically
- **Mobile**: Single column stack

#### Typography
- **Desktop**: Full size headings
- **Mobile**: Scaled-down headings for readability

#### Spacing  
- **Desktop**: Full padding and margins
- **Mobile**: Reduced spacing for better fit

## ⚡ Animation Patterns

### Hover Animations
```css
/* Card Lift Effect */
.card-component {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-component:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.15);
}
```

### Scroll Animations
```javascript
// Intersection Observer for entrance animations
const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
});
```

### Page Load Animations
```css
/* Hero section fade-in-up */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-content h2 {
  animation: fadeInUp 1s ease-out;
}
```

## ♿ Accessibility Features

### Keyboard Navigation
- All interactive elements focusable with Tab
- Visual focus indicators on all components
- Escape key closes mobile menu

### Screen Reader Support
```html
<!-- ARIA attributes for enhanced accessibility -->
<button aria-expanded="false" aria-controls="nav-menu">Menu</button>
<nav aria-label="Main navigation">
<img src="image.jpg" alt="Descriptive alternative text">
```

### Color Contrast
- All text meets WCAG AA standards
- Interactive elements have sufficient contrast
- Focus indicators are clearly visible

## 🔧 Component Customization

### Adding New Components
1. Follow existing HTML structure patterns
2. Use consistent CSS naming conventions
3. Add responsive behavior
4. Include hover and focus states
5. Test accessibility features

### Extending Existing Components
1. Add modifier classes for variations
2. Maintain backward compatibility
3. Update documentation
4. Test across all breakpoints

---

**Related Documentation**:
- [Architecture Guide](architecture.md)
- [Coding Standards](coding-standards.md)
- [CSS Classes Reference](../api/css-classes.md)