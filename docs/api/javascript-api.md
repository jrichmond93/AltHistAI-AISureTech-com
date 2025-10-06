# JavaScript API Reference

This document provides a comprehensive reference for all JavaScript functions, methods, and utilities used in the AltHistLearn project.

## 🎯 API Overview

The AltHistLearn JavaScript API is built using vanilla JavaScript with no external dependencies. All functions are designed for educational clarity and browser compatibility.

## 📚 Core Functions

### Navigation Functions

#### `scrollToSection(sectionId, options)`
Smoothly scrolls to a specified section on the page.

**Parameters:**
- `sectionId` (string): The ID of the target section (without #)
- `options` (object, optional): Configuration options

**Options:**
- `behavior` (string): Scroll behavior - 'smooth' (default) or 'auto'
- `offset` (number): Additional offset in pixels (default: 0)

**Returns:** `void`

**Example:**
```javascript
// Basic usage
scrollToSection('scenarios');

// With custom options
scrollToSection('timeline', {
  behavior: 'smooth',
  offset: 20
});
```

**Implementation:**
```javascript
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
  
  const headerHeight = document.querySelector('.header').offsetHeight;
  const elementPosition = element.offsetTop - headerHeight - offset;
  
  window.scrollTo({
    top: elementPosition,
    behavior
  });
}
```

---

### Utility Functions

#### `debounce(func, wait)`
Creates a debounced version of a function that delays execution until after wait milliseconds have elapsed since the last time it was invoked.

**Parameters:**
- `func` (function): The function to debounce
- `wait` (number): The number of milliseconds to delay

**Returns:** `function` - Debounced function

**Example:**
```javascript
const debouncedScrollHandler = debounce(function() {
  updateActiveNavigation();
}, 100);

window.addEventListener('scroll', debouncedScrollHandler);
```

**Implementation:**
```javascript
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
```

---

## 🎮 Event Handlers

### Navigation Event Handlers

#### `handleMenuToggle(event)`
Toggles the mobile navigation menu state.

**Parameters:**
- `event` (Event): The click event object

**Behavior:**
- Toggles 'active' class on navigation menu
- Updates ARIA attributes for accessibility
- Prevents default event behavior

**Example Usage:**
```javascript
const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', handleMenuToggle);
```

#### `updateActiveNavigation()`
Updates the active navigation link based on current scroll position.

**Behavior:**
- Determines which section is currently in view
- Adds 'active' class to corresponding navigation link
- Removes 'active' class from other navigation links

**Auto-execution:** Called on scroll events

---

### Interactive Element Handlers

#### `handleScenarioCardClick(event)`
Handles click events on scenario cards.

**Parameters:**
- `event` (Event): The click event object

**Behavior:**
- Extracts scenario information from clicked card
- Displays additional information (placeholder implementation)
- Provides visual feedback

#### `handleTimelineItemClick(event)`
Handles click events on timeline items.

**Parameters:**
- `event` (Event): The click event object

**Behavior:**
- Provides visual feedback (scale animation)
- Logs timeline event information
- Prepared for future detailed view implementation

---

## 🔄 Animation Controllers

### Intersection Observer API

#### `initializeScrollAnimations()`
Sets up Intersection Observer for scroll-based animations.

**Behavior:**
- Creates observer with specified options
- Applies entrance animations to components
- Handles animation triggers when elements enter viewport

**Configuration:**
```javascript
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};
```

**Target Elements:**
- `.scenario-card`
- `.timeline-item`
- `.resource-item`

#### Animation Callback
```javascript
const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);
```

---

## 🎨 DOM Manipulation

### Element Selection Utilities

#### `safeQuerySelector(selector)`
Safely queries for DOM elements with error handling.

**Parameters:**
- `selector` (string): CSS selector string

**Returns:** `Element|null` - Found element or null

**Example:**
```javascript
function safeQuerySelector(selector) {
  try {
    return document.querySelector(selector);
  } catch (error) {
    console.warn(`Invalid selector: ${selector}`, error);
    return null;
  }
}
```

### Class Management

#### `toggleClass(element, className, condition)`
Conditionally toggles a CSS class on an element.

**Parameters:**
- `element` (Element): Target DOM element
- `className` (string): CSS class name
- `condition` (boolean, optional): Force add (true) or remove (false)

**Returns:** `boolean` - Whether class was added (true) or removed (false)

---

## 🔧 Configuration Objects

### Animation Settings
```javascript
const ANIMATION_CONFIG = {
  DURATION: 300,
  EASING: 'ease-out',
  DELAY: 0,
  STAGGER: 100
};
```

### Scroll Settings
```javascript
const SCROLL_CONFIG = {
  BEHAVIOR: 'smooth',
  OFFSET: 100,
  THRESHOLD: 0.1
};
```

### Breakpoints
```javascript
const BREAKPOINTS = {
  MOBILE: 768,
  TABLET: 1024,
  DESKTOP: 1200
};
```

---

## 📱 Responsive Utilities

#### `getCurrentBreakpoint()`
Returns the current responsive breakpoint based on window width.

**Returns:** `string` - 'mobile', 'tablet', or 'desktop'

```javascript
function getCurrentBreakpoint() {
  const width = window.innerWidth;
  
  if (width < BREAKPOINTS.MOBILE) {
    return 'mobile';
  } else if (width < BREAKPOINTS.TABLET) {
    return 'tablet';
  } else {
    return 'desktop';
  }
}
```

#### `isMobile()`
Checks if current viewport is mobile size.

**Returns:** `boolean` - True if mobile viewport

```javascript
function isMobile() {
  return window.innerWidth < BREAKPOINTS.MOBILE;
}
```

---

## 🎭 Feature Detection

#### `supportsIntersectionObserver()`
Checks for Intersection Observer API support.

**Returns:** `boolean` - True if supported

```javascript
function supportsIntersectionObserver() {
  return 'IntersectionObserver' in window;
}
```

#### `supportsScrollBehavior()`
Checks for CSS scroll-behavior support.

**Returns:** `boolean` - True if supported

```javascript
function supportsScrollBehavior() {
  return 'scrollBehavior' in document.documentElement.style;
}
```

---

## 🚀 Initialization Functions

### `initializeNavigation()`
Sets up all navigation-related functionality.

**Tasks:**
- Attaches hamburger menu event listener
- Sets up navigation link click handlers
- Initializes scroll-based active link updates

### `initializeAnimations()`
Sets up all animation systems.

**Tasks:**
- Creates Intersection Observer (if supported)
- Applies initial animation states to elements
- Sets up hover and interaction animations

### `initializeInteractiveElements()`
Sets up interactive element functionality.

**Tasks:**
- Attaches click handlers to scenario cards
- Sets up timeline item interactions
- Initializes button functionality

---

## 🔍 Debug Utilities

#### `logPageInfo()`
Logs useful debugging information to console.

```javascript
function logPageInfo() {
  console.group('AltHistLearn Debug Info');
  console.log('Viewport:', `${window.innerWidth} x ${window.innerHeight}`);
  console.log('Breakpoint:', getCurrentBreakpoint());
  console.log('Scroll Position:', window.pageYOffset);
  console.log('Features:', {
    intersectionObserver: supportsIntersectionObserver(),
    scrollBehavior: supportsScrollBehavior()
  });
  console.groupEnd();
}
```

---

## 📞 Event System

### Custom Events

#### `dispatchEducationalEvent(type, data)`
Dispatches custom events for educational tracking.

**Parameters:**
- `type` (string): Event type
- `data` (object): Event data payload

**Example:**
```javascript
function dispatchEducationalEvent(type, data) {
  const event = new CustomEvent(`althistlearn:${type}`, {
    detail: data,
    bubbles: true
  });
  
  document.dispatchEvent(event);
}

// Usage
dispatchEducationalEvent('scenario-viewed', {
  title: 'What if Rome Never Fell?',
  timestamp: Date.now()
});
```

---

## 🧪 Testing Utilities

#### `runCompatibilityCheck()`
Runs a comprehensive browser compatibility check.

**Returns:** `object` - Compatibility report

```javascript
function runCompatibilityCheck() {
  return {
    browser: navigator.userAgent,
    features: {
      flexbox: CSS.supports('display', 'flex'),
      grid: CSS.supports('display', 'grid'),
      intersectionObserver: supportsIntersectionObserver(),
      scrollBehavior: supportsScrollBehavior()
    },
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      breakpoint: getCurrentBreakpoint()
    }
  };
}
```

---

## 🎯 Usage Examples

### Complete Initialization
```javascript
document.addEventListener('DOMContentLoaded', function() {
  // Initialize core features
  initializeNavigation();
  initializeAnimations();
  initializeInteractiveElements();
  
  // Log welcome message
  console.log('🏛️ AltHistLearn initialized successfully!');
  
  // Optional: Log debug info
  if (window.location.hostname === 'localhost') {
    logPageInfo();
  }
});
```

### Responsive Event Handling
```javascript
window.addEventListener('resize', debounce(function() {
  const breakpoint = getCurrentBreakpoint();
  console.log('Breakpoint changed to:', breakpoint);
  
  // Adjust features based on breakpoint
  if (isMobile()) {
    // Mobile-specific adjustments
  }
}, 250));
```

---

**Related Documentation**:
- [HTML Structure Guide](html-structure.md)
- [CSS Classes Reference](css-classes.md)
- [Component Guide](../developer/component-guide.md)