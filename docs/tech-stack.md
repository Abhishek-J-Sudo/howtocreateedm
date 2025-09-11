# Tech Stack Decision

## Recommended Stack

### Frontend Framework
**Vite + React + TypeScript**
- Fast development and build process
- Component-based architecture for reusable demo sections
- TypeScript for better development experience

### Styling
**Tailwind CSS**
- Rapid styling for demo layouts
- Easy to create side-by-side comparisons
- Responsive design utilities

**CSS Strategy**
- Use **global CSS only** for custom colors and dark mode mappings
- Components use semantic Tailwind classes (e.g., `text-primary`)
- Avoid `dark:` prefixes at component level
- Global CSS maps semantic classes to actual colors for both light/dark modes
- This allows global color scheme changes without touching components

### Core Features
- **Visual Comparisons**: Image-based before/after demonstrations
- **Static Content**: No need for dynamic functionality
- **Responsive Design**: Works on all devices
- **Image Optimization**: Fast loading of comparison images

### Deployment
**GitHub Pages**
- Free hosting for static educational sites
- Simple deployment process
- Easy access for designers (no signup required)
- Version control integration

## Why This Stack?

### What We DON'T Need
- ❌ Code editors (Monaco) - designers don't code
- ❌ Live email sending - unnecessary complexity
- ❌ Backend/database - static content is sufficient
- ❌ Complex state management - simple showcase site

### What We DO Need
- ✅ Fast loading visual content
- ✅ Clean, professional presentation
- ✅ Mobile-friendly interface
- ✅ Easy maintenance and updates
- ✅ Cost-effective hosting

## Content Structure
- Visual before/after galleries
- Screenshot comparisons across email clients
- Simple explanations with visual aids
- Downloadable best practices checklists
- Interactive examples (hover effects, toggles)