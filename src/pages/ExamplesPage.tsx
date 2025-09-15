import React, { useEffect, useState } from 'react';
import { Monitor, Smartphone, AlertTriangle, CheckCircle, Eye } from 'lucide-react';
import { 
  BrokenGridEmail, 
  FixedTableEmail, 
  BrokenFlexboxNav,
  FixedTableNav,
  BrokenBackgroundHero, 
  FixedVMLHero,
  ResponsiveProductGrid 
} from '../components/examples/EmailExamples';

const ExamplesPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const exampleCategories = [
    {
      id: 'broken-vs-fixed',
      title: 'Broken vs Fixed Examples',
      description: 'Real email designs that failed and how they were fixed',
      icon: AlertTriangle
    },
    {
      id: 'client-rendering',
      title: 'Client-Specific Rendering',
      description: 'Same email across different email clients',
      icon: Eye
    },
    {
      id: 'mobile-desktop',
      title: 'Mobile vs Desktop',
      description: 'Responsive design examples and failures',
      icon: Smartphone
    },
    {
      id: 'success-stories',
      title: 'Success Stories',
      description: 'Before and after redesign case studies',
      icon: CheckCircle
    }
  ];

  const brokenExamples = [
    {
      title: 'CSS Grid Layout Disaster',
      problem: 'Designer used CSS Grid for product showcase',
      solution: 'Converted to table-based 2-column layout',
      clients: ['Outlook breaks completely', 'Gmail ignores grid', 'Apple Mail works'],
      beforeDesc: 'Modern CSS Grid with overlapping product cards',
      afterDesc: 'Clean table layout with proper spacing'
    },
    {
      title: 'Flexbox Navigation Menu',
      problem: 'Horizontal navigation using flexbox',
      solution: 'Table-based navigation with proper fallbacks',
      clients: ['Outlook stacks vertically', 'Outlook.com partial support', 'Mobile clients vary'],
      beforeDesc: 'Sleek horizontal flex navigation',
      afterDesc: 'Reliable table-based menu structure'
    },
    {
      title: 'Background Image with Text Overlay',
      problem: 'Hero section with background image and centered text',
      solution: 'VML background with table-based text positioning',
      clients: ['Outlook shows no background', 'Gmail clips images', 'Apple Mail works'],
      beforeDesc: 'Beautiful hero with background image',
      afterDesc: 'Reliable design with VML fallback'
    }
  ];

  const clientComparisons = [
    {
      title: 'Newsletter Template Rendering',
      description: 'Same newsletter across 4 major email clients',
      clients: [
        { name: 'Gmail', status: 'good', note: 'Renders perfectly' },
        { name: 'Outlook 2016', status: 'bad', note: 'Broken spacing, missing fonts' },
        { name: 'Apple Mail', status: 'good', note: 'Near perfect rendering' },
        { name: 'Outlook.com', status: 'warning', note: 'Minor font differences' }
      ]
    },
    {
      title: 'E-commerce Product Grid',
      description: 'Product showcase email across different clients',
      clients: [
        { name: 'Gmail', status: 'warning', note: 'Images sometimes blocked' },
        { name: 'Outlook 2016', status: 'bad', note: 'Layout completely broken' },
        { name: 'Apple Mail', status: 'good', note: 'Perfect rendering' },
        { name: 'Yahoo Mail', status: 'warning', note: 'Spacing issues' }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good': return 'text-green-600';
      case 'warning': return 'text-yellow-600';
      case 'bad': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'good': return '✅';
      case 'warning': return '⚠️';
      case 'bad': return '❌';
      default: return '❓';
    }
  };

  return (
    <div className={`min-h-screen ${isLoaded ? 'page-fade-in' : 'opacity-0'}`}>
      {/* Hero Section */}
      <section className="bg-radial-brand text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Real-World Email Examples
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-[var(--snow)]/80">
            See how email constraints play out in actual campaigns and designs.
          </p>
          <div className="flex justify-center flex-wrap gap-4 text-[var(--snow)]">
            {exampleCategories.map(({ title, icon: Icon }) => (
              <div key={title} className="flex items-center space-x-2">
                <Icon className="h-5 w-5" />
                <span className="text-sm">{title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">
            Example Categories
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {exampleCategories.map(({ id, title, description, icon: Icon }) => (
              <div key={id} className="bg-bg-surface rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <Icon className="h-12 w-12 text-text-accent mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-text-primary mb-2">{title}</h3>
                <p className="text-text-secondary text-sm">{description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Broken vs Fixed Examples */}
        <section id="broken-vs-fixed" className="mb-16">
          <h2 className="text-3xl font-bold text-text-primary mb-8">
            Common Email Design Failures
          </h2>
          <div className="space-y-8">
            {brokenExamples.map((example, index) => (
              <div key={index} className="bg-bg-surface rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-text-primary mb-2">{example.title}</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Problem Side */}
                    <div className="border-2 border-red-200 rounded-lg p-4">
                      <div className="flex items-center mb-3">
                        <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
                        <h4 className="font-medium text-red-700">What Went Wrong</h4>
                      </div>
                      <p className="text-text-secondary mb-4">{example.problem}</p>
                      
                      {/* Actual broken email example */}
                      <div className="mb-4">
                        {index === 0 && <BrokenGridEmail />}
                        {index === 1 && <BrokenFlexboxNav />}
                        {index === 2 && <BrokenBackgroundHero />}
                      </div>

                      <div className="space-y-2">
                        {example.clients.map((client, i) => (
                          <div key={i} className="flex items-center text-sm">
                            <span className="text-red-500 mr-2">❌</span>
                            <span className="text-text-secondary">{client}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Solution Side */}
                    <div className="border-2 border-green-200 rounded-lg p-4">
                      <div className="flex items-center mb-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <h4 className="font-medium text-green-700">Email-Safe Solution</h4>
                      </div>
                      <p className="text-text-secondary mb-4">{example.solution}</p>
                      
                      {/* Actual fixed email example */}
                      <div className="mb-4">
                        {index === 0 && <FixedTableEmail />}
                        {index === 1 && <FixedTableNav />}
                        {index === 2 && <FixedVMLHero />}
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center text-sm">
                          <span className="text-green-500 mr-2">✅</span>
                          <span className="text-text-secondary">Works across all email clients</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <span className="text-green-500 mr-2">✅</span>
                          <span className="text-text-secondary">Maintains visual hierarchy</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <span className="text-green-500 mr-2">✅</span>
                          <span className="text-text-secondary">Mobile-friendly design</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Client Rendering Comparison */}
        <section id="client-rendering" className="mb-16">
          <h2 className="text-3xl font-bold text-text-primary mb-8">
            Client-Specific Rendering Examples
          </h2>
          <div className="space-y-8">
            {clientComparisons.map((comparison, index) => (
              <div key={index} className="bg-bg-surface rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-text-primary mb-2">{comparison.title}</h3>
                <p className="text-text-secondary mb-6">{comparison.description}</p>
                
                {/* Email Screenshot Placeholder */}
                <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg h-64 flex items-center justify-center mb-6">
                  <div className="text-center text-gray-500">
                    <Eye className="h-12 w-12 mx-auto mb-2" />
                    <p>Email Template Screenshot</p>
                    <p className="text-sm mt-1">[Will show actual email design]</p>
                  </div>
                </div>

                {/* Client Rendering Results */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {comparison.clients.map((client, i) => (
                    <div key={i} className="border rounded-lg p-4 text-center">
                      <h4 className="font-medium text-text-primary mb-2">{client.name}</h4>
                      <div className="text-2xl mb-2">{getStatusIcon(client.status)}</div>
                      <p className={`text-sm ${getStatusColor(client.status)}`}>
                        {client.note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Mobile vs Desktop Examples */}
        <section id="mobile-desktop" className="mb-16">
          <h2 className="text-3xl font-bold text-text-primary mb-8">
            Mobile vs Desktop Rendering
          </h2>
          <div className="space-y-8">
            <div className="bg-bg-surface rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-text-primary mb-4">
                Product Grid Email - Responsive Breakdown
              </h3>
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Desktop View */}
                <div className="border-2 border-blue-200 rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <Monitor className="h-5 w-5 text-blue-500 mr-2" />
                    <h4 className="font-medium text-blue-700">Desktop View</h4>
                  </div>
                  <div className="mb-4">
                    <ResponsiveProductGrid isMobile={false} />
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      <span>3 products per row, optimal spacing</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      <span>Rich product details visible</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      <span>Large clickable areas for CTAs</span>
                    </li>
                  </ul>
                </div>

                {/* Mobile View */}
                <div className="border-2 border-purple-200 rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <Smartphone className="h-5 w-5 text-purple-500 mr-2" />
                    <h4 className="font-medium text-purple-700">Mobile View</h4>
                  </div>
                  <div className="mb-4">
                    <ResponsiveProductGrid isMobile={true} />
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      <span>Full-width product cards for touch</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      <span>Larger fonts for readability</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      <span>Thumb-friendly button sizes (44px+)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-bg-surface rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-text-primary mb-4">
                Newsletter Header - Text Size Considerations
              </h3>
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="border-2 border-orange-200 rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <AlertTriangle className="h-5 w-5 text-orange-500 mr-2" />
                    <h4 className="font-medium text-orange-700">Mobile Problem</h4>
                  </div>
                  <div className="bg-orange-50 border-2 border-dashed border-orange-300 rounded-lg h-32 flex items-center justify-center mb-4">
                    <div className="text-center text-orange-600">
                      <p className="text-xs">Text too small to read</p>
                      <p className="text-xs mt-1">[Broken mobile view]</p>
                    </div>
                  </div>
                  <p className="text-sm text-text-secondary">14px font size that works on desktop becomes unreadable on mobile screens</p>
                </div>

                <div className="border-2 border-green-200 rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <h4 className="font-medium text-green-700">Mobile Solution</h4>
                  </div>
                  <div className="bg-green-50 border-2 border-dashed border-green-300 rounded-lg h-32 flex items-center justify-center mb-4">
                    <div className="text-center text-green-600">
                      <p className="text-sm font-medium">Clear, readable text</p>
                      <p className="text-xs mt-1">[Optimized mobile view]</p>
                    </div>
                  </div>
                  <p className="text-sm text-text-secondary">18px+ font size with proper line spacing ensures readability across all devices</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section id="success-stories" className="mb-16">
          <h2 className="text-3xl font-bold text-text-primary mb-8">
            Success Stories - Before & After Redesigns
          </h2>
          <div className="space-y-8">
            <div className="bg-bg-surface rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-text-primary mb-4">
                E-commerce Weekly Newsletter Redesign
              </h3>
              <div className="grid lg:grid-cols-2 gap-6 mb-6">
                <div className="border-2 border-red-200 rounded-lg p-4">
                  <h4 className="font-medium text-red-700 mb-3 flex items-center">
                    <AlertTriangle className="h-5 w-5 mr-2" />
                    Before: Broken in 60% of Clients
                  </h4>
                  <div className="bg-red-50 border-2 border-dashed border-red-300 rounded-lg h-40 flex items-center justify-center mb-4">
                    <div className="text-center text-red-600">
                      <p className="text-sm">Complex CSS Grid layout</p>
                      <p className="text-xs mt-1">[Original design screenshot]</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm text-red-700">
                    <li>• CSS Grid completely broken in Outlook</li>
                    <li>• Custom fonts falling back poorly</li>
                    <li>• Overlapping elements on mobile</li>
                    <li>• 12% open rate, 0.8% click-through</li>
                  </ul>
                </div>

                <div className="border-2 border-green-200 rounded-lg p-4">
                  <h4 className="font-medium text-green-700 mb-3 flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    After: Works Everywhere
                  </h4>
                  <div className="bg-green-50 border-2 border-dashed border-green-300 rounded-lg h-40 flex items-center justify-center mb-4">
                    <div className="text-center text-green-600">
                      <p className="text-sm">Table-based responsive layout</p>
                      <p className="text-xs mt-1">[Redesigned screenshot]</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm text-green-700">
                    <li>• Table layout works in all clients</li>
                    <li>• Web-safe fonts with proper fallbacks</li>
                    <li>• Mobile-optimized single column</li>
                    <li>• 18% open rate, 2.4% click-through</li>
                  </ul>
                </div>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h5 className="font-medium text-blue-800 mb-2">Key Changes Made:</h5>
                <div className="grid md:grid-cols-3 gap-4 text-sm text-blue-700">
                  <div>
                    <strong>Layout:</strong> CSS Grid → Table-based structure
                  </div>
                  <div>
                    <strong>Typography:</strong> Custom fonts → Web-safe fonts
                  </div>
                  <div>
                    <strong>Images:</strong> Background images → Inline images with VML fallback
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-bg-surface rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-text-primary mb-4">
                SaaS Welcome Series Transformation
              </h3>
              <div className="grid lg:grid-cols-2 gap-6 mb-6">
                <div className="border-2 border-red-200 rounded-lg p-4">
                  <h4 className="font-medium text-red-700 mb-3 flex items-center">
                    <AlertTriangle className="h-5 w-5 mr-2" />
                    Before: Design-Heavy, Poor Delivery
                  </h4>
                  <div className="bg-red-50 border-2 border-dashed border-red-300 rounded-lg h-40 flex items-center justify-center mb-4">
                    <div className="text-center text-red-600">
                      <p className="text-sm">Heavy graphics, text in images</p>
                      <p className="text-xs mt-1">[Original design screenshot]</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm text-red-700">
                    <li>• Most content in image files</li>
                    <li>• Poor accessibility (no alt text)</li>
                    <li>• Slow loading, high bounce rate</li>
                    <li>• 8% engagement rate</li>
                  </ul>
                </div>

                <div className="border-2 border-green-200 rounded-lg p-4">
                  <h4 className="font-medium text-green-700 mb-3 flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    After: Text-First, Accessible Design
                  </h4>
                  <div className="bg-green-50 border-2 border-dashed border-green-300 rounded-lg h-40 flex items-center justify-center mb-4">
                    <div className="text-center text-green-600">
                      <p className="text-sm">Live text, strategic images</p>
                      <p className="text-xs mt-1">[Redesigned screenshot]</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm text-green-700">
                    <li>• 80% live text, 20% strategic images</li>
                    <li>• Full accessibility compliance</li>
                    <li>• Fast loading, better engagement</li>
                    <li>• 23% engagement rate</li>
                  </ul>
                </div>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h5 className="font-medium text-purple-800 mb-2">Business Impact:</h5>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-purple-700">
                  <div>
                    <strong>User Activation:</strong> 34% → 67% completion rate
                  </div>
                  <div>
                    <strong>Support Tickets:</strong> 40% reduction in onboarding questions
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default ExamplesPage;