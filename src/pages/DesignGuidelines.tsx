import React, { useEffect, useState } from 'react';
import { Eye, Palette, Layout, Target, ArrowRight, CheckCircle, Info } from 'lucide-react';

const DesignGuidelines: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  const showTooltip = (tooltipId: string) => {
    setActiveTooltip(tooltipId);
  };

  const hideTooltip = () => {
    setActiveTooltip(null);
  };

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    // Trigger fade-in animation after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const tableOfContents = [
    { id: 'visual-hierarchy', title: 'Visual Hierarchy', icon: Eye },
    { id: 'color-psychology', title: 'Color Psychology', icon: Palette },
    { id: 'design-composition', title: 'Design Composition', icon: Layout },
    { id: 'email-patterns', title: 'Email Patterns', icon: Target },
    { id: 'accessibility', title: 'Accessibility', icon: CheckCircle },
    { id: 'ab-testing', title: 'A/B Testing', icon: ArrowRight }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      {/* Sticky Table of Contents */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
        <div className="bg-white rounded-lg shadow-lg border p-4 max-w-xs">
          <h3 className="font-semibold text-sm mb-3 text-gray-700">Quick Navigation</h3>
          <nav className="space-y-2">
            {tableOfContents.map(({ id, title, icon: Icon }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="flex items-center gap-2 w-full text-left text-sm p-2 rounded hover:bg-gray-100 transition-colors"
              >
                <Icon className="h-4 w-4 text-gray-500" />
                <span className="text-gray-700">{title}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

    <main className={`flex-1 ${isLoaded ? 'page-fade-in' : 'opacity-0'}`}>
      {/* Hero Section */}
      <section className="bg-radial-brand text-white py-16 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Email Design Guidelines
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-[var(--snow)]/90">
            Master the principles of effective email design that drives engagement and conversions.
          </p>
        </div>
      </section>

      {/* Visual Hierarchy Section */}
      <section id="visual-hierarchy" className="py-16 bg-bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Eye className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Visual Hierarchy & Scanning Patterns
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Guide your readers' eyes through your email with proven visual hierarchy principles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* F-Pattern */}
            <div className="card p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-xl font-bold text-text-primary">F-Pattern Reading</h3>
                <div className="relative">
                  <button
                    onMouseEnter={() => showTooltip('f-pattern')}
                    onMouseLeave={hideTooltip}
                    className="p-1 hover:bg-gray-200 rounded-full"
                  >
                    <Info className="h-4 w-4 text-gray-500" />
                  </button>
                  {activeTooltip === 'f-pattern' && (
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded shadow-lg whitespace-nowrap z-10">
                      Most effective for text-heavy emails
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
                    </div>
                  )}
                </div>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg mb-4 relative">
                <div className="absolute top-2 left-2 w-32 h-3 bg-blue-500 opacity-80 rounded"></div>
                <div className="absolute top-8 left-2 w-24 h-3 bg-blue-400 opacity-60 rounded"></div>
                <div className="absolute top-14 left-2 w-16 h-3 bg-blue-300 opacity-40 rounded"></div>
                <div className="h-32 flex items-center justify-center text-gray-500">
                  Email Content Preview
                </div>
              </div>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>• Place key information in the first two lines</li>
                <li>• Use bullet points and short paragraphs</li>
                <li>• Position CTAs where the pattern naturally ends</li>
              </ul>
            </div>

            {/* Z-Pattern */}
            <div className="card p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out">
              <h3 className="text-xl font-bold text-text-primary mb-4">Z-Pattern Layout</h3>
              <div className="bg-gray-100 p-6 rounded-lg mb-4 relative">
                <div className="absolute top-2 left-2 w-24 h-8 bg-green-500 opacity-80 rounded flex items-center justify-center text-white text-xs">Logo</div>
                <div className="absolute top-2 right-2 w-16 h-8 bg-green-400 opacity-80 rounded flex items-center justify-center text-white text-xs">Menu</div>
                <div className="absolute bottom-2 left-2 w-20 h-8 bg-green-300 opacity-80 rounded flex items-center justify-center text-white text-xs">Content</div>
                <div className="absolute bottom-2 right-2 w-16 h-8 bg-green-600 opacity-80 rounded flex items-center justify-center text-white text-xs">CTA</div>
                <div className="h-32"></div>
              </div>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>• Start with logo/brand in top-left</li>
                <li>• Place secondary navigation top-right</li>
                <li>• End with strong CTA in bottom-right</li>
              </ul>
            </div>
          </div>

          {/* CTA Placement */}
          <div className="card p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out">
            <h3 className="text-2xl font-bold text-text-primary mb-6">Call-to-Action Placement Strategy</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Target className="h-8 w-8 text-red-600" />
                </div>
                <h4 className="font-semibold mb-2">Above the Fold</h4>
                <p className="text-sm text-text-secondary">Primary CTA visible without scrolling for mobile users</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Eye className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="font-semibold mb-2">Visual Contrast</h4>
                <p className="text-sm text-text-secondary">Make CTAs stand out with contrasting colors and whitespace</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <ArrowRight className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="font-semibold mb-2">Action-Oriented</h4>
                <p className="text-sm text-text-secondary">Use specific action words: "Get," "Download," "Shop Now"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Color Psychology Section */}
      <section id="color-psychology" className="py-16 bg-bg-primary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Palette className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Color Psychology & Branding
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Use color strategically to evoke emotions and maintain brand consistency across email clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Color Emotions */}
            <div className="card p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out">
              <h3 className="text-xl font-bold text-text-primary mb-6">Color Emotional Impact</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-blue-500 rounded"></div>
                  <div>
                    <span className="font-medium">Blue</span>
                    <p className="text-sm text-text-secondary">Trust, professionalism, stability</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-red-500 rounded"></div>
                  <div>
                    <span className="font-medium">Red</span>
                    <p className="text-sm text-text-secondary">Urgency, passion, attention-grabbing</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded"></div>
                  <div>
                    <span className="font-medium">Green</span>
                    <p className="text-sm text-text-secondary">Growth, success, go-ahead signal</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-purple-500 rounded"></div>
                  <div>
                    <span className="font-medium">Purple</span>
                    <p className="text-sm text-text-secondary">Luxury, creativity, premium feel</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-orange-500 rounded"></div>
                  <div>
                    <span className="font-medium">Orange</span>
                    <p className="text-sm text-text-secondary">Energy, enthusiasm, call-to-action</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Brand Consistency */}
            <div className="card p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out">
              <h3 className="text-xl font-bold text-text-primary mb-6">Brand Consistency Tips</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <span className="font-medium block">Limit Your Palette</span>
                    <p className="text-sm text-text-secondary">Use 2-3 main colors plus neutrals</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <span className="font-medium block">Test Across Clients</span>
                    <p className="text-sm text-text-secondary">Colors may render differently in Outlook</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <span className="font-medium block">High Contrast</span>
                    <p className="text-sm text-text-secondary">Ensure text is readable on all backgrounds</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <span className="font-medium block">Dark Mode Ready</span>
                    <p className="text-sm text-text-secondary">Consider how colors appear in dark mode</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Seasonal Approaches */}
          <div className="card p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out">
            <h3 className="text-2xl font-bold text-text-primary mb-6">Seasonal Design Approaches</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🌸</span>
                </div>
                <h4 className="font-semibold mb-2">Spring</h4>
                <p className="text-sm text-text-secondary">Fresh greens, soft pastels, renewal themes</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">☀️</span>
                </div>
                <h4 className="font-semibold mb-2">Summer</h4>
                <p className="text-sm text-text-secondary">Bright colors, vacation vibes, energy</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🍂</span>
                </div>
                <h4 className="font-semibold mb-2">Fall</h4>
                <p className="text-sm text-text-secondary">Warm oranges, cozy browns, comfort</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">❄️</span>
                </div>
                <h4 className="font-semibold mb-2">Winter</h4>
                <p className="text-sm text-text-secondary">Cool blues, elegant silvers, sophistication</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Composition Section */}
      <section id="design-composition" className="py-16 bg-bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Layout className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Design Composition Principles
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Master the fundamentals of layout, spacing, and visual balance in email design.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Whitespace Usage */}
            <div className="card p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out">
              <h3 className="text-xl font-bold text-text-primary mb-4">Whitespace Mastery</h3>
              <div className="bg-gray-50 p-6 rounded-lg mb-4">
                <div className="bg-blue-100 p-4 rounded mb-4">
                  <h4 className="font-medium text-sm">Header with breathing room</h4>
                </div>
                <div className="space-y-3">
                  <div className="bg-gray-200 h-2 rounded"></div>
                  <div className="bg-gray-200 h-2 rounded w-3/4"></div>
                </div>
                <div className="bg-green-500 text-white p-2 rounded text-center text-sm font-medium mt-4">
                  Well-spaced CTA
                </div>
              </div>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>• Use padding generously around elements</li>
                <li>• Separate content blocks with consistent spacing</li>
                <li>• Give CTAs plenty of breathing room</li>
              </ul>
            </div>

            {/* Visual Flow */}
            <div className="card p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out">
              <h3 className="text-xl font-bold text-text-primary mb-4">Visual Flow Direction</h3>
              <div className="bg-gray-50 p-6 rounded-lg mb-4 relative">
                <div className="absolute top-2 left-6 right-6">
                  <ArrowRight className="h-4 w-4 text-blue-500 mx-auto" style={{transform: 'rotate(90deg)'}} />
                </div>
                <div className="space-y-4 pt-6">
                  <div className="bg-blue-200 h-8 rounded"></div>
                  <div className="bg-gray-200 h-4 rounded"></div>
                  <div className="bg-gray-200 h-4 rounded w-2/3"></div>
                  <div className="bg-green-500 h-8 rounded"></div>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>• Create clear visual path from top to bottom</li>
                <li>• Use size and color to guide attention</li>
                <li>• End with a strong call-to-action</li>
              </ul>
            </div>
          </div>

          {/* Image-to-Text Ratios */}
          <div className="card p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out">
            <h3 className="text-2xl font-bold text-text-primary mb-6">Image-to-Text Balance</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-gray-100 p-4 rounded-lg mb-3">
                  <div className="bg-blue-300 h-16 rounded mb-2"></div>
                  <div className="space-y-1">
                    <div className="bg-gray-300 h-2 rounded"></div>
                    <div className="bg-gray-300 h-2 rounded w-3/4"></div>
                  </div>
                </div>
                <h4 className="font-semibold mb-2">Text-Heavy (80/20)</h4>
                <p className="text-sm text-text-secondary">Newsletters, announcements</p>
              </div>
              <div className="text-center">
                <div className="bg-gray-100 p-4 rounded-lg mb-3">
                  <div className="bg-blue-300 h-12 rounded mb-2"></div>
                  <div className="space-y-1">
                    <div className="bg-gray-300 h-2 rounded"></div>
                    <div className="bg-gray-300 h-2 rounded"></div>
                    <div className="bg-gray-300 h-2 rounded w-2/3"></div>
                  </div>
                </div>
                <h4 className="font-semibold mb-2">Balanced (60/40)</h4>
                <p className="text-sm text-text-secondary">Product features, services</p>
              </div>
              <div className="text-center">
                <div className="bg-gray-100 p-4 rounded-lg mb-3">
                  <div className="bg-blue-300 h-20 rounded mb-2"></div>
                  <div className="bg-gray-300 h-2 rounded"></div>
                </div>
                <h4 className="font-semibold mb-2">Visual-Heavy (40/60)</h4>
                <p className="text-sm text-text-secondary">Fashion, lifestyle, events</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Email Design Patterns Section */}
      <section id="email-patterns" className="py-16 bg-bg-primary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Target className="h-12 w-12 text-orange-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Email-Specific Design Patterns
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Proven layout patterns for different types of email campaigns that drive results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Newsletter Pattern */}
            <div className="card p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out">
              <h3 className="text-xl font-bold text-text-primary mb-4">Newsletter Layout</h3>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <div className="bg-blue-500 text-white p-2 rounded text-center text-xs mb-2">Header/Logo</div>
                <div className="bg-yellow-200 p-2 rounded text-xs mb-2">Hero Article</div>
                <div className="grid grid-cols-2 gap-2 mb-2">
                  <div className="bg-gray-300 p-2 rounded text-xs">Article 2</div>
                  <div className="bg-gray-300 p-2 rounded text-xs">Article 3</div>
                </div>
                <div className="bg-green-500 text-white p-2 rounded text-center text-xs">Social Links</div>
              </div>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>• Lead with most important content</li>
                <li>• Use consistent story spacing</li>
                <li>• Include social proof and sharing</li>
              </ul>
            </div>

            {/* E-commerce Pattern */}
            <div className="card p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out">
              <h3 className="text-xl font-bold text-text-primary mb-4">E-commerce Layout</h3>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <div className="bg-red-500 text-white p-2 rounded text-center text-xs mb-2">Sale Banner</div>
                <div className="grid grid-cols-2 gap-2 mb-2">
                  <div className="bg-blue-200 p-2 rounded text-xs">Product 1</div>
                  <div className="bg-blue-200 p-2 rounded text-xs">Product 2</div>
                </div>
                <div className="bg-purple-500 text-white p-2 rounded text-center text-xs mb-2">Shop Now CTA</div>
                <div className="bg-gray-300 p-2 rounded text-xs">Testimonials</div>
              </div>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>• Highlight offers prominently</li>
                <li>• Show products with clear pricing</li>
                <li>• Include social proof and urgency</li>
              </ul>
            </div>

            {/* Welcome Series Pattern */}
            <div className="card p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out">
              <h3 className="text-xl font-bold text-text-primary mb-4">Welcome Email</h3>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <div className="bg-green-500 text-white p-2 rounded text-center text-xs mb-2">Welcome Message</div>
                <div className="bg-blue-200 p-2 rounded text-xs mb-2">Brand Story</div>
                <div className="bg-yellow-200 p-2 rounded text-xs mb-2">What to Expect</div>
                <div className="bg-purple-500 text-white p-2 rounded text-center text-xs">Get Started CTA</div>
              </div>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>• Set expectations clearly</li>
                <li>• Share your brand personality</li>
                <li>• Guide next steps explicitly</li>
              </ul>
            </div>

            {/* Promotional Pattern */}
            <div className="card p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out">
              <h3 className="text-xl font-bold text-text-primary mb-4">Promotional Email</h3>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <div className="bg-red-600 text-white p-2 rounded text-center text-xs mb-2">Limited Time Offer</div>
                <div className="bg-yellow-300 p-2 rounded text-xs mb-2">Benefit Highlights</div>
                <div className="bg-orange-500 text-white p-2 rounded text-center text-xs mb-2">Claim Now CTA</div>
                <div className="bg-gray-300 p-2 rounded text-xs">Terms & Urgency</div>
              </div>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>• Create urgency with time limits</li>
                <li>• Focus on customer benefits</li>
                <li>• Make CTA impossible to miss</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility Guidelines Section */}
      <section id="accessibility" className="py-16 bg-bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Email Accessibility Guidelines
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Ensure your emails are accessible to all users, including those using assistive technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="card p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out">
              <h3 className="text-xl font-bold text-text-primary mb-4">Text & Color Contrast</h3>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Maintain 4.5:1 contrast ratio for normal text</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Use 3:1 contrast ratio for large text (18pt+)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Don't rely solely on color to convey information</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Test with high contrast mode enabled</span>
                </li>
              </ul>
            </div>

            <div className="card p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out">
              <h3 className="text-xl font-bold text-text-primary mb-4">Structure & Navigation</h3>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Use semantic HTML headers (h1, h2, h3)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Include alt text for all images</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Use descriptive link text (avoid "click here")</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Provide skip links for lengthy content</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="card p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out">
            <h3 className="text-2xl font-bold text-text-primary mb-6">Screen Reader Optimization</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Eye className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="font-semibold mb-2">Reading Order</h4>
                <p className="text-sm text-text-secondary">Ensure logical tab and reading sequence</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Layout className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="font-semibold mb-2">Table Headers</h4>
                <p className="text-sm text-text-secondary">Use proper table markup with headers</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Target className="h-8 w-8 text-purple-600" />
                </div>
                <h4 className="font-semibold mb-2">Focus States</h4>
                <p className="text-sm text-text-secondary">Provide clear keyboard focus indicators</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A/B Testing Section */}
      <section id="ab-testing" className="py-16 bg-bg-primary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <ArrowRight className="h-12 w-12 text-orange-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              A/B Testing Best Practices
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Optimize your email designs through systematic testing and data-driven improvements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="card p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out">
              <h3 className="text-xl font-bold text-text-primary mb-4">What to Test</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-text-primary">Subject Lines</h4>
                  <p className="text-sm text-text-secondary">Length, personalization, urgency, emojis</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-text-primary">Call-to-Action</h4>
                  <p className="text-sm text-text-secondary">Button color, text, placement, size</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-text-primary">Layout & Design</h4>
                  <p className="text-sm text-text-secondary">Image placement, color schemes, layouts</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-text-primary">Content</h4>
                  <p className="text-sm text-text-secondary">Headlines, copy length, social proof</p>
                </div>
              </div>
            </div>

            <div className="card p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out">
              <h3 className="text-xl font-bold text-text-primary mb-4">Testing Framework</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Hypothesis</h4>
                    <p className="text-sm text-text-secondary">Define what you're testing and expected outcome</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Sample Size</h4>
                    <p className="text-sm text-text-secondary">Ensure statistical significance with adequate volume</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Duration</h4>
                    <p className="text-sm text-text-secondary">Run tests long enough to account for timing variations</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-orange-600 font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Analysis</h4>
                    <p className="text-sm text-text-secondary">Measure beyond opens - focus on conversions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out">
            <h3 className="text-2xl font-bold text-text-primary mb-6">Key Metrics to Track</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-lg">%</span>
                </div>
                <h4 className="font-semibold mb-2">Open Rate</h4>
                <p className="text-sm text-text-secondary">Subject line effectiveness</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-lg">→</span>
                </div>
                <h4 className="font-semibold mb-2">Click Rate</h4>
                <p className="text-sm text-text-secondary">Content and CTA performance</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-lg">$</span>
                </div>
                <h4 className="font-semibold mb-2">Conversion</h4>
                <p className="text-sm text-text-secondary">Revenue per email sent</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-lg">⏱</span>
                </div>
                <h4 className="font-semibold mb-2">Engagement</h4>
                <p className="text-sm text-text-secondary">Time spent reading</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-16 bg-radial-brand text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Apply These Guidelines?</h2>
          <p className="text-xl mb-8 text-[var(--snow)]/90">
            Remember: Great email design balances visual appeal with technical constraints. 
            Always test your designs across different email clients and devices.
          </p>
          <a 
            href="/" 
            className="inline-flex items-center gap-2 bg-[var(--snow)] text-[var(--caribbean-current)] font-semibold py-3 px-8 rounded-lg hover:bg-[var(--snow)]/90 transition-colors"
          >
            <ArrowRight className="h-5 w-5" />
            Back to Technical Constraints
          </a>
        </div>
      </section>
    </main>
    </div>
  );
};

export default DesignGuidelines;