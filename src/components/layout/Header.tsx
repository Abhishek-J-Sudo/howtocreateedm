import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed z-50 backdrop-blur-md border border-border-focus shadow-lg transition-all duration-300 ${
        isScrolled
          ? 'top-2 left-4 right-4 bg-bg-code/80 rounded-lg md:top-2 md:left-1/2 md:right-auto md:w-full md:max-w-6xl md:transform md:-translate-x-1/2 md:mx-0'
          : 'top-4 left-4 right-4 bg-bg-code rounded-lg md:top-4 md:left-1/2 md:right-auto md:w-full md:max-w-6xl md:transform md:-translate-x-1/2 md:mx-4'
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

          {/* Desktop Navigation */}
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
                {/* <Link to="/examples" className="text-sm transition-colors hover:underline">
                  Examples
                </Link> */}
              </>
            ) : (
              <>
                <Link to="/" className="text-sm transition-colors hover:underline">
                  Home
                </Link>
                <Link to="/guidelines" className="text-sm transition-colors hover:underline">
                  Guidelines
                </Link>
                {/* <Link to="/examples" className="text-sm transition-colors hover:underline">
                  Examples
                </Link> */}
              </>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5 text-text-primary" />
            ) : (
              <Menu className="h-5 w-5 text-text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border-default bg-bg-code/95 backdrop-blur-md">
            <nav className="px-6 py-4 space-y-3" role="navigation" aria-label="Mobile">
              {location.pathname === '/' ? (
                <>
                  <a
                    href="#grid-systems"
                    onClick={(e) => handleSmoothScroll(e, '#grid-systems')}
                    className="block text-sm py-2 transition-colors hover:text-text-accent"
                  >
                    Grid Systems
                  </a>
                  <a
                    href="#restrictions"
                    onClick={(e) => handleSmoothScroll(e, '#restrictions')}
                    className="block text-sm py-2 transition-colors hover:text-text-accent"
                  >
                    Restrictions
                  </a>
                  <Link
                    to="/guidelines"
                    className="block text-sm py-2 transition-colors hover:text-text-accent"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Guidelines
                  </Link>
                  {/* <Link
                    to="/examples"
                    className="block text-sm py-2 transition-colors hover:text-text-accent"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Examples
                  </Link> */}
                </>
              ) : (
                <>
                  <Link
                    to="/"
                    className="block text-sm py-2 transition-colors hover:text-text-accent"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    to="/guidelines"
                    className="block text-sm py-2 transition-colors hover:text-text-accent"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Guidelines
                  </Link>
                  {/* <Link
                    to="/examples"
                    className="block text-sm py-2 transition-colors hover:text-text-accent"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Examples
                  </Link> */}
                </>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
