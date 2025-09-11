import React, { useEffect, useState } from 'react';
import { Mail } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed z-50 w-full max-w-6xl mx-4 app-header bg-white/90 backdrop-blur-md border border-border-default shadow-lg transition-all duration-300 ${
      isScrolled 
        ? 'top-0 left-1/2 transform -translate-x-1/2 rounded-none' 
        : 'top-4 left-1/2 transform -translate-x-1/2 rounded-lg'
    }`}>
      <div className="px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center space-x-2">
            <Mail className="h-6 w-6 text-text-accent" />
            <div>
              <h1 className="text-lg font-bold">Email Design Guide</h1>
              <p className="text-xs opacity-90">Learn email design best practices</p>
            </div>
          </div>

          <nav className="hidden md:flex space-x-4" role="navigation" aria-label="Primary">
            <a href="#grid-systems" className="text-sm transition-colors hover:underline">
              Grid Systems
            </a>
            <a href="#typography" className="text-sm transition-colors hover:underline">
              Typography
            </a>
            <a href="#images" className="text-sm transition-colors hover:underline">
              Images
            </a>
            <a href="#mobile" className="text-sm transition-colors hover:underline">
              Mobile
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
