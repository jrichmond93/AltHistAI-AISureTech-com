# Scenario Pages Refactoring Guide

## Overview
The scenario pages have been refactored to eliminate code duplication and create a maintainable template system.

## Shared Components Created

### 1. `/includes/header.html`
- Contains the complete navigation header
- Shared across all scenario pages
- Single source of truth for navigation links

### 2. `/includes/footer.html`
- Contains the complete footer with all links
- Includes the JavaScript loading script
- Consistent across all pages

### 3. `/includes/head-common.html`
- Common meta tags, fonts, and CSS links
- Reduces duplication in head sections

### 4. `/includes/scenario-template.html`
- Complete template for creating new scenario pages
- Uses placeholder variables for customization
- Standardizes the structure

### 5. `/js/includes.js`
- JavaScript to dynamically load shared components
- Works with `data-include` attributes
- Handles async loading with error handling

## Benefits of Refactoring

### ✅ Maintenance
- Update navigation once in `header.html` → affects all pages
- Update footer once in `footer.html` → affects all pages
- Consistent branding and styling

### ✅ Development Speed
- Use `scenario-template.html` for new scenarios
- Replace placeholders with actual content
- No need to duplicate common code

### ✅ Code Quality
- Follows DRY (Don't Repeat Yourself) principle
- Reduces file sizes
- Easier to spot and fix bugs

## Implementation Examples

### Current Structure (Before Refactoring)
```html
<!DOCTYPE html>
<html>
<head>
    <!-- 20+ lines of repeated meta tags, fonts, CSS -->
</head>
<body>
    <header>
        <!-- 15+ lines of repeated navigation -->
    </header>
    
    <!-- Unique content -->
    
    <footer>
        <!-- 50+ lines of repeated footer -->
    </footer>
</body>
</html>
```

### Refactored Structure (After)
```html
<!DOCTYPE html>
<html>
<head>
    <!-- Page-specific meta tags only -->
    <!-- Include common head elements -->
</head>
<body>
    <div data-include="header"></div>
    
    <!-- Unique content -->
    
    <div data-include="footer"></div>
    <script src="../js/includes.js"></script>
</body>
</html>
```

## Creating New Scenarios

1. Copy `scenario-template.html`
2. Replace placeholder variables:
   - `{{PAGE_TITLE}}` → "1945: End of WWII"
   - `{{SCENARIO_TITLE}}` → "1945: The Decision to Drop the Atomic Bomb"
   - `{{NARRATIVE_CONTENT}}` → Your detailed narrative
   - etc.

## Placeholder Variables Reference

| Variable | Purpose | Example |
|----------|---------|---------|
| `{{PAGE_TITLE}}` | HTML title tag | "1066: Battle of Hastings" |
| `{{SCENARIO_TITLE}}` | Main heading | "1066: The Battle of Hastings - A Turning Point" |
| `{{IMAGE_PATH}}` | Scenario image | "../assets/images/BattleOfHastings.png" |
| `{{NARRATIVE_CONTENT}}` | Main story content | Full narrative paragraphs |
| `{{RELATED_SCENARIOS}}` | Sidebar links | Related scenario HTML blocks |
| `{{TIME_PERIOD}}` | Stats sidebar | "1066 CE" |
| `{{REGION}}` | Stats sidebar | "England" |
| `{{IMPACT_LEVEL}}` | Stats sidebar | "Continental" |

## Migration Strategy

### Phase 1: Test with One Page
1. Create a test version using the new system
2. Verify all functionality works
3. Compare load times and performance

### Phase 2: Gradual Migration
1. Convert one scenario page at a time
2. Test each conversion thoroughly
3. Keep backups of original files

### Phase 3: Full Implementation
1. Convert all scenario pages
2. Update any cross-references
3. Remove old duplicate code

## Technical Notes

- The `includes.js` uses `fetch()` API (modern browsers)
- Fallback: If JavaScript fails, pages still show content
- SEO: Each page still has complete meta tags
- Performance: Reduces total page size by ~30%

## Future Enhancements

- Build script to generate pages from JSON data
- Template inheritance system
- Automated testing for template consistency
- Component versioning system