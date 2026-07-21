import React from 'react';
import { Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="app-footer border-t border-border-default">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-8 md:py-10">
        <div className="flex flex-col items-start text-left md:items-center md:text-center gap-4">
          <div>
            <p>A visual guide to help designers understand email development constraints</p>
            <p className="text-sm opacity-80 mt-1">
              Built to bridge the gap between design and development
            </p>
          </div>

          <a
            href="https://www.linkedin.com/in/abhishek-jagtap23"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-[var(--salmon)]"
          >
            <Linkedin className="h-4 w-4" />
            <span>Built by Abhishek Jagtap</span>
          </a>

          <p className="text-xs opacity-70">
            © {new Date().getFullYear()} Abhishek Jagtap. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
