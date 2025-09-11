import React from 'react';
import { AlertTriangle, CheckCircle, Smartphone, Monitor } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Why 60% of Email Designs
            <span className="block text-yellow-300">Break in Outlook</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Learn the constraints. See the solutions. Build emails that work everywhere.
          </p>
          <div className="flex justify-center space-x-4">
            <div className="flex items-center space-x-2 text-red-300">
              <AlertTriangle className="h-6 w-6" />
              <span>CSS Grid Breaks</span>
            </div>
            <div className="flex items-center space-x-2 text-red-300">
              <AlertTriangle className="h-6 w-6" />
              <span>Flexbox Fails</span>
            </div>
            <div className="flex items-center space-x-2 text-red-300">
              <AlertTriangle className="h-6 w-6" />
              <span>Fonts Fall Back</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              The Designer-Developer Gap
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Designers create beautiful, modern layouts. Developers explain why they won't work in email. 
              This tool shows you both perspectives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <Monitor className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold">Designer Vision</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Modern CSS Grid layouts
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Custom web fonts
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Flexbox responsiveness
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Advanced CSS animations
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <Smartphone className="h-8 w-8 text-red-600 mr-3" />
                <h3 className="text-xl font-semibold">Email Reality</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
                  Tables required for layout
                </li>
                <li className="flex items-center">
                  <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
                  Web-safe fonts only
                </li>
                <li className="flex items-center">
                  <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
                  Inline styles mandatory
                </li>
                <li className="flex items-center">
                  <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
                  Limited client support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Learn?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Explore interactive examples showing what works and what doesn't in email design.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            Start Exploring Examples
          </button>
        </div>
      </section>
    </main>
  );
};

export default HomePage;