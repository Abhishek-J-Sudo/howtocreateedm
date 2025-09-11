# Email Design Dos and Don'ts - 2025 Edition

## ✅ DOS

### Layout & Structure
- **Use HTML tables for layout** - Tables offer proven stability and render consistently across all clients
- **Keep width between 600-640px** - Fits preview panes without horizontal scrolling
- **Design single-column layouts** - Mobile-first approach (70%+ opens on mobile)
- **Nest tables for complex structures** - Build layouts systematically with nested table elements

### CSS Best Practices
- **Use inline styles** - Many clients strip `<style>` tags or ignore external stylesheets
- **Keep CSS simple** - Stick to basic properties (font-size, color, background-color)
- **Write out CSS properties separately** - Avoid shorthand properties
- **Use element attributes** - Set table dimensions with cellpadding, valign, width attributes

### Mobile Optimization
- **Minimum 14-16px font sizes** - Ensure readability on mobile devices
- **44x44px minimum touch targets** - Thumb-friendly tap areas for buttons
- **Single-column responsive design** - Stack content vertically on mobile
- **Large, contrasting CTA buttons** - Make calls-to-action prominent and tappable

### Images & Accessibility
- **Always include alt text** - Describe images for accessibility and when images are blocked
- **Use absolute image URLs** - Host on reliable servers, no relative paths
- **Assume images will be blocked initially** - Design works without images
- **Optimize for dark mode** - Use transparent backgrounds, test color inversions

### Testing & Quality
- **Test across multiple clients** - Use Litmus, Email on Acid, or real email accounts
- **Keep email size under 102kb** - Gmail will clip larger emails
- **Preview in Outlook specifically** - Most problematic client for rendering

## ❌ DON'TS

### Avoid Unsupported Technologies
- **No JavaScript** - Completely unsupported across email clients
- **No Flash** - Deprecated and blocked by most clients
- **No HTML5/CSS3 advanced features** - Limited support, causes rendering issues
- **No external stylesheets** - Use inline styles instead

### Layout Limitations
- **Don't use CSS Grid or Flexbox** - Not supported in Outlook (major client)
- **Avoid CSS positioning** - Properties like float, clear, position break layouts
- **No div-based layouts for Outlook** - Outlook ignores most div styling
- **Don't create image-only emails** - Accessibility issues and deliverability problems

### Outlook-Specific Issues
- **No custom web fonts** - Outlook shows Times New Roman if custom fonts fail
- **No CSS background images** - Desktop Outlook versions don't support them
- **No advanced CSS selectors** - Keep selectors simple and direct
- **No CSS transforms or animations** - Not supported and can break rendering

### Design & Content Mistakes
- **Don't overload with CTAs** - One primary CTA, minimal secondary links
- **Avoid complex nested structures** - Keep HTML structure simple
- **No tiny fonts or low contrast** - Ensure readability across all devices
- **Don't rely on hover effects** - Limited support, especially on mobile

## 🚨 Critical Outlook Constraints

### Why Outlook is Different
- **Uses Microsoft Word rendering engine** - Not a web browser engine
- **Limited CSS support** - Many modern CSS properties ignored
- **Table-based layout required** - Divs don't work reliably
- **Inline styles mandatory** - External and embedded styles often stripped

### Outlook Workarounds
- **Use VML for background images** - Vector Markup Language for advanced features
- **Conditional comments for Outlook** - Target specific Outlook versions
- **MSO properties** - Microsoft Office-specific CSS properties
- **Image width/height attributes** - CSS sizing doesn't work

## 📱 2025 Trends & Considerations

### Mobile-First Approach
- **70%+ mobile opens** - Design for mobile, enhance for desktop
- **Touch-friendly interfaces** - Large buttons, easy navigation
- **Readable fonts** - 16px+ for body text on mobile

### Dark Mode Support
- **Test color inversions** - Ensure readability in dark mode
- **Use transparent backgrounds** - Avoid white backgrounds in images
- **Provide fallback colors** - Some clients don't support dark mode CSS

### Accessibility Focus
- **Semantic HTML structure** - Use proper heading hierarchy
- **High contrast ratios** - Meet WCAG guidelines
- **Keyboard navigation** - Ensure all interactive elements are accessible