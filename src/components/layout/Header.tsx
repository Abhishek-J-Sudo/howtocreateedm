import React from 'react';
import { Mail } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Mail className="h-8 w-8 text-blue-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Email Design Guide</h1>
              <p className="text-sm text-gray-600">Learn email design best practices</p>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-6">
            <a href="#grid-systems" className="text-gray-700 hover:text-blue-600 transition-colors">
              Grid Systems
            </a>
            <a href="#typography" className="text-gray-700 hover:text-blue-600 transition-colors">
              Typography
            </a>
            <a href="#images" className="text-gray-700 hover:text-blue-600 transition-colors">
              Images
            </a>
            <a href="#mobile" className="text-gray-700 hover:text-blue-600 transition-colors">
              Mobile
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;