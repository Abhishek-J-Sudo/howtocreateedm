import React from 'react';
import { AlertTriangle, CheckCircle, Smartphone, Monitor } from 'lucide-react';
import GridSystemGuide from '../components/educational/GridSystemGuide';
import DesignRestrictions from '../components/educational/DesignRestrictions';

const HomePage: React.FC = () => {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-radial-brand text-white py-16 pt-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Why 60% of Email Designs
            <span className="block text-[var(--snow)]">Break in Outlook</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-[var(--snow)]/80">
            Learn the constraints. See the solutions. Build emails that work everywhere.
          </p>
          <div className="flex justify-center space-x-4">
            <div className="flex items-center space-x-2 text-[var(--snow)]">
              <AlertTriangle className="h-6 w-6" />
              <span>CSS Grid Breaks</span>
            </div>
            <div className="flex items-center space-x-2 text-[var(--snow)]">
              <AlertTriangle className="h-6 w-6" />
              <span>Flexbox Fails</span>
            </div>
            <div className="flex items-center space-x-2 text-[var(--snow)]">
              <AlertTriangle className="h-6 w-6" />
              <span>Fonts Fall Back</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              The Designer-Developer Gap
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Designers create beautiful, modern layouts. Developers explain why they won't work in
              email. This tool shows you both perspectives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-bg-surface rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <Monitor className="h-8 w-8 text-text-accent mr-3" />
                <h3 className="text-xl font-semibold">Designer Vision</h3>
              </div>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-[var(--color-status-good)] mr-2" />
                  Rich, poster-style graphics with heavy artwork
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-[var(--color-status-good)] mr-2" />
                  Custom typography & decorative fonts
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-[var(--color-status-good)] mr-2" />
                  Overlapping elements, badges, and layered effects
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-[var(--color-status-good)] mr-2" />
                  Text baked into images for exact styling
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-[var(--color-status-good)] mr-2" />
                  Bold gradients, textures, and blend modes across backgrounds
                </li>
              </ul>
            </div>

            <div className="bg-bg-surface rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <Smartphone className="h-8 w-8 text-[var(--salmon)] mr-3" />
                <h3 className="text-xl font-semibold">Email Reality</h3>
              </div>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-center">
                  <AlertTriangle className="h-5 w-5 text-[var(--salmon)] mr-2" />
                  Tables required for layout (1–2 columns, ~600px wide)
                </li>
                <li className="flex items-center">
                  <AlertTriangle className="h-5 w-5 text-[var(--salmon)] mr-2" />
                  Web-safe fonts only; decorative fonts won’t render consistently
                </li>
                <li className="flex items-center">
                  <AlertTriangle className="h-5 w-5 text-[var(--salmon)] mr-2" />
                  No overlapping layers and using flat bg colors - No images
                </li>
                <li className="flex items-center">
                  <AlertTriangle className="h-5 w-5 text-[var(--salmon)] mr-2" />
                  Live text separate from images for accessibility and clarity
                </li>
                <li className="flex items-center">
                  <AlertTriangle className="h-5 w-5 text-[var(--salmon)] mr-2" />
                  Limited email client support (Outlook)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Guide Section */}
      <section id="grid-systems" className="py-16 bg-bg-primary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Design with Email-Safe Grids
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Learn to structure your designs using table-based layouts that work across all email
              clients.
            </p>
          </div>

          <GridSystemGuide />
        </div>
      </section>

      {/* Design Restrictions Section */}
      <section id="restrictions" className="py-1 pt-0 bg-bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-primary mb-4">What to avoid in Designs</h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Common design patterns that look amazing in mockups but can't be implemented in HTML
              emails.
            </p>
          </div>

          <DesignRestrictions />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-text-primary mb-4">Ready to Learn More?</h2>
          <p className="text-lg text-text-secondary mb-8">
            Explore more interactive examples covering images, mobile design, and client
            compatibility.
          </p>
          <button className="bg-[var(--caribbean-current)] hover:brightness-90 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            View All Examples
          </button>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
