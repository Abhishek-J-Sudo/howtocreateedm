# Design Theme & Color System

## Color Palette

### Base Colors
```css
/* Primary Palette */
--dark-slate-gray: #283d3b;
--caribbean-current: #197278;
--champagne-pink: #edddd4;
--persian-red: #c44536;
--burnt-umber: #772e25;
```

## Semantic Color Mapping

### Background Hierarchy
- **bg-primary**: `#edddd4` (champagne-pink) - Main page background
- **bg-surface**: Very light tint of dark-slate-gray - Card backgrounds
- **bg-elevated**: Light tint of dark-slate-gray - Modal/overlay backgrounds
- **bg-code**: Subtle variation for code snippets

### Text System
- **text-primary**: `#283d3b` (dark-slate-gray) - Main body text
- **text-secondary**: `#772e25` (burnt-umber) - Captions, labels, secondary text
- **text-accent**: `#197278` (caribbean-current) - Links, highlights, interactive text
- **text-inverse**: Light color for text on dark backgrounds

### Interactive Elements
- **btn-primary**: `#197278` (caribbean-current) - Main CTAs, primary actions
- **btn-secondary**: Variation of burnt-umber - Secondary actions
- **btn-danger**: `#c44536` (persian-red) - Destructive actions

### Educational Status Colors
- **status-good**: Success green (derive from caribbean-current)
- **status-bad**: `#c44536` (persian-red) - Bad examples, errors
- **status-warning**: Warning amber - Caution/partial support
- **status-info**: Info blue - General information

### UI Elements
- **border-default**: `#772e25` (burnt-umber) - Card borders, dividers
- **border-focus**: `#197278` (caribbean-current) - Focus rings, active states
- **border-subtle**: Light tint for minimal borders

## Dark Mode Strategy

### Approach
- Use **global CSS only** for dark mode mappings
- Components use semantic classes (e.g., `text-primary`)
- **No `dark:` prefixes** at component level
- Global CSS maps semantic classes to appropriate colors for both themes

### Dark Mode Color Adjustments
- **bg-primary**: Dark version (dark-slate-gray base)
- **bg-surface**: Slightly lighter than bg-primary
- **bg-elevated**: Lightest dark surface
- **text-primary**: Light color for readability
- **text-secondary**: Muted light color
- All other colors adjusted for dark theme contrast

## Implementation Notes

### Tailwind Configuration
- Extend Tailwind's theme with semantic color names
- Use CSS custom properties for easy theme switching
- Configure variants for hover, focus, active states

### Global CSS Structure
```css
:root {
  /* Light theme */
  --color-bg-primary: #edddd4;
  --color-text-primary: #283d3b;
  /* ... */
}

[data-theme="dark"] {
  /* Dark theme overrides */
  --color-bg-primary: #283d3b;
  --color-text-primary: #edddd4;
  /* ... */
}
```

## Usage Examples

### Components
```tsx
// Good - Semantic classes
<div className="bg-surface text-primary border-default">
  <button className="btn-primary">Learn More</button>
</div>

// Avoid - Direct color references
<div className="bg-champagne-pink text-dark-slate-gray">
```

### Status Indicators
```tsx
// Email examples
<div className="status-good">✅ Works everywhere</div>
<div className="status-bad">❌ Breaks in Outlook</div>
<div className="status-warning">⚠️ Partial support</div>
```