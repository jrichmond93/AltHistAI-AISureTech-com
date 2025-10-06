# Development Environment Setup

This guide will help you set up a local development environment for the AltHistLearn project.

## 📋 Prerequisites

### Required Software
- **Web Browser**: Chrome 70+, Firefox 65+, Safari 12+, or Edge 79+
- **Text Editor/IDE**: VS Code (recommended), Sublime Text, or similar
- **Python**: Version 3.6+ (for local development server)

### Optional Tools
- **VS Code Extensions** (recommended):
  - Live Server
  - HTML CSS Support
  - JavaScript (ES6) code snippets
  - Prettier - Code formatter
  - Auto Rename Tag

## 🚀 Quick Setup

### 1. Clone/Download the Project
```bash
# If using Git
git clone <repository-url>
cd AltHistLearn

# Or download and extract the ZIP file
```

### 2. Start Development Server

#### Option A: Python HTTP Server (Recommended)
```bash
# Navigate to project root
cd AltHistLearn

# Start server on port 8000
python -m http.server 8000

# Open browser to: http://localhost:8000
```

#### Option B: VS Code Live Server
1. Open project folder in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"
4. Browser will open automatically

#### Option C: Node.js HTTP Server
```bash
# Install globally (one time)
npm install -g http-server

# Start server
http-server -p 8000

# Open browser to: http://localhost:8000
```

### 3. Verify Setup
- Navigate to `http://localhost:8000`
- You should see the AltHistLearn homepage
- Test navigation menu functionality
- Verify responsive design by resizing browser window

## 📁 Project Structure

```
AltHistLearn/
├── index.html              # Main HTML file
├── css/
│   └── styles.css         # Main stylesheet
├── js/
│   └── main.js            # JavaScript functionality
├── assets/
│   └── images/            # Image assets
├── docs/                  # Developer documentation
│   ├── developer/         # Development guides
│   ├── api/              # API documentation
│   └── assets/           # Documentation assets
├── .vscode/              # VS Code configuration
└── README.md             # Project overview
```

## 🛠️ Development Workflow

### 1. Making Changes
1. Edit files in your preferred text editor
2. Save changes
3. Refresh browser to see updates
4. Test across different screen sizes

### 2. File Watching (Auto-refresh)
- **Live Server**: Automatically refreshes on file changes
- **Python Server**: Manual refresh required
- **Browser DevTools**: Use for live CSS editing

### 3. Testing Checklist
- [ ] Test on different screen sizes (desktop, tablet, mobile)
- [ ] Verify navigation menu works on mobile
- [ ] Check smooth scrolling functionality
- [ ] Test interactive elements (buttons, hover effects)
- [ ] Validate HTML/CSS in browser DevTools

## 🎨 Development Tools

### Browser Developer Tools
- **Chrome DevTools**: F12 or Ctrl+Shift+I
- **Responsive Design Mode**: Ctrl+Shift+M
- **Console**: Check for JavaScript errors

### VS Code Setup
```json
// .vscode/settings.json (recommended)
{
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
  "editor.formatOnSave": true,
  "html.format.wrapLineLength": 80,
  "css.validate": true,
  "javascript.validate.enable": true
}
```

### Recommended VS Code Extensions
```json
// .vscode/extensions.json
{
  "recommendations": [
    "ritwickdey.liveserver",
    "ms-vscode.vscode-html-languageservice",
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode"
  ]
}
```

## 🔧 Common Development Tasks

### Adding New Sections
1. Add HTML structure to `index.html`
2. Add corresponding CSS styles to `css/styles.css`
3. Add JavaScript functionality if needed in `js/main.js`
4. Update navigation menu if necessary

### Modifying Styles
1. Edit `css/styles.css`
2. Use browser DevTools for live testing
3. Follow existing CSS organization pattern
4. Test responsive behavior

### Adding Interactivity
1. Add JavaScript to `js/main.js`
2. Follow existing code patterns
3. Use vanilla JavaScript (no frameworks)
4. Test functionality across browsers

## 📱 Testing Responsive Design

### Screen Sizes to Test
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

### Testing Method
1. Open browser DevTools
2. Enable device simulation
3. Test common device sizes:
   - iPhone SE (375x667)
   - iPad (768x1024)
   - Desktop (1200x800)

## 🐛 Troubleshooting

### Common Issues

#### Server Won't Start
```bash
# Check if port is in use
netstat -an | grep 8000

# Use different port
python -m http.server 8080
```

#### CSS Not Loading
- Check file paths in `index.html`
- Ensure server is running from project root
- Clear browser cache (Ctrl+F5)

#### JavaScript Errors
- Open browser console (F12)
- Check for syntax errors
- Verify file paths and references

#### Mobile Menu Not Working
- Check JavaScript console for errors
- Verify CSS classes are applied correctly
- Test in different browsers

### Performance Tips
- Use browser caching for static assets
- Minimize HTTP requests
- Optimize images before adding to assets folder
- Keep JavaScript lightweight

## 🔍 Code Quality

### HTML Validation
- Use [W3C HTML Validator](https://validator.w3.org/)
- Ensure semantic HTML structure
- Check accessibility attributes

### CSS Best Practices
- Follow BEM naming convention where applicable
- Group related styles together
- Use CSS custom properties for consistent theming
- Maintain responsive design principles

### JavaScript Standards
- Use modern ES6+ syntax where supported
- Comment complex functionality
- Keep functions small and focused
- Handle errors gracefully

---

**Next Steps**: After setup, review the [Architecture Guide](architecture.md) and [Coding Standards](coding-standards.md).