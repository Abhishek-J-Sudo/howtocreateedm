import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId.replace('#', ''));
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <header
      className={`fixed z-50 w-full max-w-6xl backdrop-blur-md border border-border-focus shadow-lg transition-all duration-300 ${
        isScrolled
          ? 'top-2 left-1/2 transform -translate-x-1/2 mx-0 rounded-lg bg-bg-code/80'
          : 'top-4 left-1/2 transform -translate-x-1/2 mx-4 rounded-lg bg-bg-code'
      }`}
    >
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
            {location.pathname === '/' ? (
              <>
                <a 
                  href="#grid-systems" 
                  onClick={(e) => handleSmoothScroll(e, '#grid-systems')}
                  className="text-sm transition-colors hover:underline"
                >
                  Grid Systems
                </a>
                <a 
                  href="#restrictions" 
                  onClick={(e) => handleSmoothScroll(e, '#restrictions')}
                  className="text-sm transition-colors hover:underline"
                >
                  Restrictions
                </a>
                <Link to="/guidelines" className="text-sm transition-colors hover:underline">
                  Guidelines
                </Link>
              </>
            ) : (
              <>
                <Link to="/" className="text-sm transition-colors hover:underline">
                  Home
                </Link>
                <Link to="/guidelines" className="text-sm transition-colors hover:underline">
                  Guidelines
                </Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
