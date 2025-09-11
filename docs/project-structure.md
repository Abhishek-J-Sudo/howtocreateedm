# Project Structure

## Folder Organization
```
email-designer/
├── docs/                     # Project documentation
├── src/
│   ├── components/
│   │   ├── common/          # Reusable UI components
│   │   ├── comparison/      # ComparisonCard, BeforeAfterSlider
│   │   ├── educational/     # GridShowcase, TypographyGuide
│   │   └── layout/         # Header, Footer, Navigation
│   ├── data/               # Content data (dos/donts, examples)
│   ├── assets/             # Images, screenshots, icons
│   ├── styles/             # Global CSS, Tailwind config
│   └── pages/              # Main page components
├── public/                 # Static assets
└── dist/                   # Build output for GitHub Pages
```

## Setup Commands
```bash
npm create vite@latest . -- --template react-ts
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install lucide-react # for icons
npm run dev
```

## GitHub Pages Deploy
```bash
npm install -D gh-pages
# Add to package.json:
# "homepage": "https://[username].github.io/email-designer"
# "scripts": { "deploy": "gh-pages -d dist" }
```

## Component Interfaces
```typescript
interface ComparisonCardProps {
  title: string;
  badExample: { image: string; description: string; };
  goodExample: { image: string; description: string; };
  explanation: string;
}

interface ClientCompatibilityProps {
  feature: string;
  support: Record<string, 'full' | 'partial' | 'none'>;
}
```