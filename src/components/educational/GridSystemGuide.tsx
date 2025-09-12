import React, { useState } from 'react';
import { Grid, Eye, EyeOff } from 'lucide-react';

// interface GridLayoutProps {
//   title: string;
//   description: string;
//   columns: number;
//   showOverlay: boolean;
//   children: React.ReactNode;
// }

// const GridLayout: React.FC<GridLayoutProps> = ({
//   title,
//   description,
//   columns,
//   showOverlay,
//   children,
// }) => {
//   const gridCols = `repeat(${columns}, 1fr)`;

//   return (
//     <div className="mb-8">
//       <div className="mb-4">
//         <h4 className="font-semibold text-text-primary text-lg">{title}</h4>
//         <p className="text-text-secondary text-sm">{description}</p>
//       </div>

//       <div className="relative bg-white border-2 border-border-default rounded-lg p-6 overflow-hidden">
//         {/* Table Grid Overlay */}
//         {showOverlay && (
//           <div
//             className="absolute inset-6 grid gap-2 pointer-events-none z-10"
//             style={{ gridTemplateColumns: gridCols }}
//           >
//             {Array.from({ length: columns }).map((_, i) => (
//               <div
//                 key={i}
//                 className="border-2 border-dashed border-blue-400 bg-blue-50/30 rounded flex items-center justify-center text-blue-600 font-mono text-xs"
//               >
//                 <td>{i + 1}</td>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Content */}
//         <div className="grid gap-4 h-32" style={{ gridTemplateColumns: gridCols }}>
//           {children}
//         </div>
//       </div>
//     </div>
//   );
// };

// const GridCell: React.FC<{ children: React.ReactNode; className?: string }> = ({
//   children,
//   className = '',
// }) => (
//   <div
//     className={`bg-bg-surface border border-border-subtle rounded p-4 flex items-center justify-center text-text-secondary text-sm font-medium ${className}`}
//   >
//     {children}
//   </div>
// );

const GridSystemGuide: React.FC = () => {
  const [showOverlays, setShowOverlays] = useState(true);

  return (
    <div className="card p-8 mb-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="flex items-center mb-2">
            <Grid className="h-6 w-6 text-text-accent mr-2" />
            <h3 className="text-2xl font-bold text-text-primary">Email Grid System</h3>
          </div>
          <p className="text-text-secondary">
            Think of your email design as a table with rows and columns. Here's how to structure
            common layouts.
          </p>
        </div>

        <button
          onClick={() => setShowOverlays(!showOverlays)}
          className="flex items-center space-x-2 btn btn-secondary text-sm"
        >
          {showOverlays ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          <span>{showOverlays ? 'Hide' : 'Show'} Grid</span>
        </button>
      </div>

      {/* Newsletter Mailer */}
      <div className="mb-8">
        <h4 className="font-semibold text-text-primary text-lg mb-2">1. Newsletter Mailer</h4>
        <p className="text-text-secondary text-sm mb-6">
          Content-focused layout with image-text pairs for easy reading and engagement
        </p>

        {/* Newsletter Header */}
        <div className="mb-4">
          <div className="relative bg-white border-2 border-border-default rounded-t-lg p-6 overflow-hidden">
            {showOverlays && (
              <div className="absolute inset-6 grid grid-cols-2 gap-2 pointer-events-none z-10">
                <div className="border-2 border-dashed border-blue-400 bg-blue-50/30 rounded flex items-center justify-center text-blue-600 font-mono text-xs">
                  Header L
                </div>
                <div className="border-2 border-dashed border-blue-400 bg-blue-50/30 rounded flex items-center justify-center text-blue-600 font-mono text-xs">
                  Header R
                </div>
              </div>
            )}
            <div className="grid grid-cols-2 gap-4 h-16">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-text-accent rounded mr-3"></div>
                <div>
                  <div className="font-bold text-lg">TechNews</div>
                  <div className="text-xs text-text-secondary">Weekly Digest</div>
                </div>
              </div>
              <div className="flex items-center justify-end space-x-4">
                <a href="#" className="text-sm hover:underline">
                  Archive
                </a>
                <a href="#" className="text-sm hover:underline">
                  Subscribe
                </a>
                <a href="#" className="text-sm hover:underline">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Hero Section */}
        <div className="mb-4">
          <div className="relative bg-white border-2 border-border-default overflow-hidden rounded-lg">
            {showOverlays && (
              <div className="absolute inset-6 grid grid-rows-2 gap-2 pointer-events-none z-10">
                <div className="border-2 border-dashed border-indigo-400 bg-indigo-50/30 rounded flex items-center justify-center text-indigo-600 font-mono text-xs">
                  Hero Image
                </div>
                <div className="border-2 border-dashed border-purple-400 bg-purple-50/30 rounded flex items-center justify-center text-purple-600 font-mono text-xs">
                  Hero Content
                </div>
              </div>
            )}
            <div className="p-6">
              {/* Hero Image Row */}
              <div className="mb-4">
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=300&fit=crop&crop=center"
                  alt="Technology workspace with code on screens"
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>

              {/* Hero Content Row */}
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-0 text-gray-800">This Week in Tech</h2>
                <p className="text-text-secondary text-lg mb-4 max-w-lg mx-auto">
                  Your weekly dose of the latest developments in web development, design, and
                  technology trends.
                </p>
                <div className="text-sm text-text-secondary">
                  Issue #47 • January 15, 2025 • 5 min read
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Body */}
        <div className="mb-4">
          <div className="relative bg-white border-2 border-border-default p-6 overflow-hidden">
            {/* Article 1 - Image Left, Text Right */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {showOverlays && (
                <div className="absolute inset-6 grid grid-cols-2 gap-2 pointer-events-none z-10">
                  <div className="border-2 border-dashed border-green-400 bg-green-50/30 rounded flex items-center justify-center text-green-600 font-mono text-xs">
                    Image L
                  </div>
                  <div className="border-2 border-dashed border-blue-400 bg-blue-50/30 rounded flex items-center justify-center text-blue-600 font-mono text-xs">
                    Content R
                  </div>
                </div>
              )}
              <div className="flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop&crop=center"
                  alt="AI and machine learning concept"
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-3">AI Revolution in Web Development</h3>
                <p className="text-sm text-text-secondary mb-4">
                  Discover how artificial intelligence is transforming the way we build websites and
                  applications. From automated code generation to intelligent design systems, AI is
                  reshaping our industry.
                </p>
                <div className="bg-text-accent text-white text-sm px-4 py-2 rounded inline-block">
                  Read More →
                </div>
              </div>
            </div>

            {/* Article 2 - Text Left, Image Right */}
            <div className="grid grid-cols-2 gap-6 mb-8 relative">
              {showOverlays && (
                <div className="absolute inset-0 grid grid-cols-2 gap-2 pointer-events-none z-10">
                  <div className="border-2 border-dashed border-blue-400 bg-blue-50/30 rounded flex items-center justify-center text-blue-600 font-mono text-xs">
                    Content L
                  </div>
                  <div className="border-2 border-dashed border-green-400 bg-green-50/30 rounded flex items-center justify-center text-green-600 font-mono text-xs">
                    Image R
                  </div>
                </div>
              )}
              <div>
                <h3 className="text-lg font-bold mb-3">2025 Design Trends to Watch</h3>
                <p className="text-sm text-text-secondary mb-4">
                  Explore the latest design trends that are shaping user experiences across web and
                  mobile platforms. From minimalism to bold typography choices that capture
                  attention.
                </p>
                <div className="bg-text-accent text-white text-sm px-4 py-2 rounded inline-block">
                  Read More →
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=250&fit=crop&crop=center"
                  alt="Modern design workspace with color palettes"
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Article 3 - Image Left, Text Right */}
            <div className="grid grid-cols-2 gap-6 relative">
              {showOverlays && (
                <div className="absolute inset-0 grid grid-cols-2 gap-2 pointer-events-none z-10">
                  <div className="border-2 border-dashed border-green-400 bg-green-50/30 rounded flex items-center justify-center text-green-600 font-mono text-xs">
                    Image L
                  </div>
                  <div className="border-2 border-dashed border-blue-400 bg-blue-50/30 rounded flex items-center justify-center text-blue-600 font-mono text-xs">
                    Content R
                  </div>
                </div>
              )}
              <div className="flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&crop=center"
                  alt="Performance analytics dashboard"
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-3">Optimizing for Core Web Vitals</h3>
                <p className="text-sm text-text-secondary mb-4">
                  Learn essential techniques to improve your website's performance metrics and user
                  experience. Speed matters more than ever in 2025 with Google's latest updates.
                </p>
                <div className="bg-text-accent text-white text-sm px-4 py-2 rounded inline-block">
                  Read More →
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Footer */}
        <div className="relative bg-gray-50 border-2 border-border-default rounded-b-lg p-4 overflow-hidden">
          {showOverlays && (
            <div className="absolute inset-4 grid grid-cols-2 gap-2 pointer-events-none z-10">
              <div className="border-2 border-dashed border-purple-400 bg-purple-50/30 rounded flex items-center justify-center text-purple-600 font-mono text-xs">
                Footer L
              </div>
              <div className="border-2 border-dashed border-purple-400 bg-purple-50/30 rounded flex items-center justify-center text-purple-600 font-mono text-xs">
                Footer R
              </div>
            </div>
          )}
          <div className="grid grid-cols-2 gap-4">
            <div className="text-xs text-text-secondary">
              © 2025 TechNews. All rights reserved.
              <br />
              123 Tech Street, San Francisco, CA 94105
            </div>
            <div className="text-right text-xs">
              <a href="#" className="text-text-accent hover:underline">
                Unsubscribe
              </a>{' '}
              |
              <a href="#" className="text-text-accent hover:underline ml-1">
                Update Preferences
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* E-commerce Mailer */}
      <div className="mb-8">
        <h4 className="font-semibold text-text-primary text-lg mb-2">2. E-commerce Mailer</h4>
        <p className="text-text-secondary text-sm mb-6">
          Product-focused layout with three-column showcase and strong CTA
        </p>

        {/* E-commerce Header */}
        <div className="mb-4">
          <div className="relative bg-white border-2 border-border-default rounded-t-lg p-4 overflow-hidden">
            {showOverlays && (
              <div className="absolute inset-4 grid grid-cols-2 gap-2 pointer-events-none z-10">
                <div className="border-2 border-dashed border-blue-400 bg-blue-50/30 rounded flex items-center justify-center text-blue-600 font-mono text-xs">
                  Brand
                </div>
                <div className="border-2 border-dashed border-blue-400 bg-blue-50/30 rounded flex items-center justify-center text-blue-600 font-mono text-xs">
                  Account
                </div>
              </div>
            )}
            <div className="grid grid-cols-2 gap-4 h-16">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-pink-500 rounded mr-3"></div>
                <div>
                  <div className="font-bold text-xl">StyleCo</div>
                  <div className="text-xs text-text-secondary">Spring Collection</div>
                </div>
              </div>
              <div className="flex items-center justify-end space-x-4">
                <div className="text-sm bg-red-100 text-red-800 px-2 py-1 rounded">50% OFF</div>
                <a href="#" className="text-sm hover:underline">
                  My Account
                </a>
                <a href="#" className="text-sm hover:underline">
                  Cart
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* E-commerce Body */}
        <div className="mb-4">
          <div className="relative bg-white border-2 border-border-default p-6 overflow-hidden">
            {showOverlays && (
              <div className="absolute inset-6 grid grid-cols-3 gap-2 pointer-events-none z-10">
                <div className="border-2 border-dashed border-purple-400 bg-purple-50/30 rounded flex items-center justify-center text-purple-600 font-mono text-xs">
                  Product 1
                </div>
                <div className="border-2 border-dashed border-purple-400 bg-purple-50/30 rounded flex items-center justify-center text-purple-600 font-mono text-xs">
                  Product 2
                </div>
                <div className="border-2 border-dashed border-purple-400 bg-purple-50/30 rounded flex items-center justify-center text-purple-600 font-mono text-xs">
                  Product 3
                </div>
              </div>
            )}
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">New Spring Arrivals</h3>
              <p className="text-text-secondary">Fresh styles for the season ahead</p>
            </div>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-full h-32 bg-pink-100 rounded mb-3 flex items-center justify-center text-pink-600">
                  Product Image
                </div>
                <h4 className="font-semibold mb-1">Floral Dress</h4>
                <p className="text-sm text-text-secondary mb-2">Perfect for spring outings</p>
                <div className="text-lg font-bold text-pink-600 mb-3">$79.99</div>
                <div className="bg-pink-500 text-white text-sm px-4 py-2 rounded">Shop Now</div>
              </div>
              <div className="text-center">
                <div className="w-full h-32 bg-blue-100 rounded mb-3 flex items-center justify-center text-blue-600">
                  Product Image
                </div>
                <h4 className="font-semibold mb-1">Summer Sandals</h4>
                <p className="text-sm text-text-secondary mb-2">Comfort meets style</p>
                <div className="text-lg font-bold text-blue-600 mb-3">$49.99</div>
                <div className="bg-blue-500 text-white text-sm px-4 py-2 rounded">Shop Now</div>
              </div>
              <div className="text-center">
                <div className="w-full h-32 bg-green-100 rounded mb-3 flex items-center justify-center text-green-600">
                  Product Image
                </div>
                <h4 className="font-semibold mb-1">Light Jacket</h4>
                <p className="text-sm text-text-secondary mb-2">Layer in style</p>
                <div className="text-lg font-bold text-green-600 mb-3">$99.99</div>
                <div className="bg-green-500 text-white text-sm px-4 py-2 rounded">Shop Now</div>
              </div>
            </div>
          </div>
        </div>

        {/* E-commerce Footer */}
        <div className="relative bg-gray-50 border-2 border-border-default rounded-b-lg p-4 overflow-hidden">
          {showOverlays && (
            <div className="absolute inset-4 grid grid-cols-2 gap-2 pointer-events-none z-10">
              <div className="border-2 border-dashed border-green-400 bg-green-50/30 rounded flex items-center justify-center text-green-600 font-mono text-xs">
                Support
              </div>
              <div className="border-2 border-dashed border-orange-400 bg-orange-50/30 rounded flex items-center justify-center text-orange-600 font-mono text-xs">
                CTA
              </div>
            </div>
          )}
          <div className="grid grid-cols-2 gap-4">
            <div className="text-left text-sm">
              <div className="mb-1">📞 Customer Service: 1-800-STYLE-CO</div>
              <div className="mb-1">📧 support@styleco.com</div>
              <div className="text-xs text-text-secondary">Free returns within 30 days</div>
            </div>
            <div className="flex items-center justify-end">
              <div className="bg-text-accent text-white font-bold px-6 py-2 rounded-lg text-lg">
                View Full Collection →
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Promotional Mailer */}
      <div className="mb-8">
        <h4 className="font-semibold text-text-primary text-lg mb-2">3. Promotional Mailer</h4>
        <p className="text-text-secondary text-sm mb-6">
          Single-column impact design with hero content and strong call-to-action
        </p>

        {/* Promotional Header */}
        <div className="mb-4">
          <div className="relative bg-gradient-to-r from-orange-500 to-red-500 border-2 border-border-default rounded-t-lg p-4 overflow-hidden text-white">
            {showOverlays && (
              <div className="absolute inset-4 grid grid-cols-2 gap-2 pointer-events-none z-10">
                <div className="border-2 border-dashed border-yellow-300 bg-yellow-100/30 rounded flex items-center justify-center text-yellow-800 font-mono text-xs">
                  Logo
                </div>
                <div className="border-2 border-dashed border-yellow-300 bg-yellow-100/30 rounded flex items-center justify-center text-yellow-800 font-mono text-xs">
                  Offer
                </div>
              </div>
            )}
            <div className="grid grid-cols-2 gap-4 h-16">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white rounded mr-3 flex items-center justify-center">
                  <div className="w-8 h-8 bg-orange-500 rounded"></div>
                </div>
                <div>
                  <div className="font-bold text-xl">FitnessPro</div>
                  <div className="text-sm opacity-90">Transform Your Life</div>
                </div>
              </div>
              <div className="flex items-center justify-end">
                <div className="bg-white text-orange-600 font-bold px-4 py-2 rounded-full text-lg">
                  LIMITED TIME: 70% OFF
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Promotional Body */}
        <div className="mb-4">
          <div className="relative bg-white border-2 border-border-default p-8 overflow-hidden">
            <div className="text-center relative z-10">
              {/* Hero Visual Row */}
              <div className="mb-6 relative">
                {showOverlays && (
                  <div className="absolute inset-0 border-2 border-dashed border-orange-400 bg-orange-50/10 rounded pointer-events-none"></div>
                )}
                {showOverlays && (
                  <div className="absolute top-2 left-2 bg-orange-100 border border-orange-400 px-2 py-1 rounded text-orange-600 font-mono text-xs z-10">
                    Hero Visual
                  </div>
                )}
                <div className="w-full h-48 bg-gradient-to-b from-orange-100 to-red-100 rounded-lg flex items-center justify-center relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=250&fit=crop&crop=center"
                    alt="Modern gym with equipment"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                  <div className="relative z-10 text-center bg-black/70 rounded-lg text-white px-4 py-2">
                    <div className="text-2xl font-bold">Transform Your Body</div>
                    <div className="text-sm">in 30 Days</div>
                  </div>
                </div>
              </div>

              {/* Main Headline Row */}
              <div className="mb-4 relative">
                {showOverlays && (
                  <div className="absolute inset-0 border-2 border-dashed border-red-400 bg-red-50/10 rounded pointer-events-none"></div>
                )}
                {showOverlays && (
                  <div className="absolute top-2 left-2 bg-red-100 border border-red-400 px-2 py-1 rounded text-red-600 font-mono text-xs z-10">
                    Main Headline
                  </div>
                )}
                <h3 className="text-3xl font-bold">Get Access to Premium Workouts</h3>
              </div>

              {/* Description Row */}
              <div className="mb-6 relative">
                {showOverlays && (
                  <div className="absolute inset-0 border-2 border-dashed border-purple-400 bg-purple-50/10 rounded pointer-events-none"></div>
                )}
                {showOverlays && (
                  <div className="absolute top-2 left-2 bg-purple-100 border border-purple-400 px-2 py-1 rounded text-purple-600 font-mono text-xs z-10">
                    Description
                  </div>
                )}
                <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                  Join thousands who've already transformed their lives with our science-backed
                  fitness programs. Personal trainers, nutrition plans, and community support
                  included.
                </p>
              </div>

              {/* CTA & Benefits Row */}
              <div className="relative">
                {showOverlays && (
                  <div className="absolute inset-0 border-2 border-dashed border-green-400 bg-green-50/10 rounded pointer-events-none"></div>
                )}
                {showOverlays && (
                  <div className="absolute top-2 left-2 bg-green-100 border border-green-400 px-2 py-1 rounded text-green-600 font-mono text-xs z-10">
                    CTA & Benefits
                  </div>
                )}
                <div className="space-y-4">
                  <div className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-12 rounded-lg text-xl inline-block transition-colors">
                    Start Your Transformation - $9/month
                  </div>
                  <div className="text-sm text-text-secondary">
                    ⏰ Offer expires in 48 hours | ✅ Cancel anytime | 🎯 30-day money-back
                    guarantee
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Promotional Footer */}
        <div className="relative bg-gray-50 border-2 border-border-default rounded-b-lg p-4 overflow-hidden">
          {showOverlays && (
            <div className="absolute inset-4 grid grid-cols-1 gap-2 pointer-events-none z-10">
              <div className="border-2 border-dashed border-gray-400 bg-gray-100/30 rounded flex items-center justify-center text-gray-600 font-mono text-xs">
                Contact & Legal
              </div>
            </div>
          )}
          <div className="text-center">
            <div className="text-xs text-text-secondary mb-2">
              Questions? Contact us at support@fitnesspro.com or 1-800-FITNESS
            </div>
            <div className="text-xs text-text-secondary">
              © 2025 FitnessPro LLC. All rights reserved. |
              <a href="#" className="text-text-accent hover:underline ml-1">
                Privacy Policy
              </a>{' '}
              |
              <a href="#" className="text-text-accent hover:underline ml-1">
                Unsubscribe
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Design Tips */}
      <div className="bg-bg-elevated border border-border-subtle rounded-lg p-6 mt-8">
        <h4 className="font-semibold text-text-primary mb-4 flex items-center">
          <div className="w-2 h-2 bg-text-accent rounded-full mr-2"></div>
          Designer Tips for Email Layouts
        </h4>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h5 className="font-medium text-text-primary mb-2">✅ Design Like This</h5>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>• Follow grid pattern while design and placing elements</li>
              <li>• Keep designs wide and spacious (600px is emailer standard)</li>
              <li>• Keep text over image limited to Key visuals only</li>
              <li>• Make buttons and text extra large (16px+ fonts)</li>
              <li>• Keep content copy separate — all key text as live text and not on images</li>
            </ul>
          </div>

          <div>
            <h5 className="font-medium text-text-primary mb-2">❌ Avoid These Mistakes</h5>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>• Avoid overlapping elements — avoid layered text/badges over other content. </li>
              <li>• Avoid text smaller than 14px</li>
              <li>
                • Avoid using gradients/blend effects behind text — keep flat, solid backgrounds
                only
              </li>
              <li>
                • Avoid complex multi-column layouts — avoid 3+ columns or dense side-by-side items.
              </li>
              <li>• Avoid diagonal design elements, strictly follow rectangle grids.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridSystemGuide;
