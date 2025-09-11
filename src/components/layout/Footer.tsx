import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="app-footer border-t border-border-default">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p>A visual guide to help designers understand email development constraints</p>
            <p className="text-sm opacity-80 mt-1">
              Built to bridge the gap between design and development
            </p>
          </div>

          <div className="flex space-x-4">
            <a
              href="https://github.com"
              className="flex items-center space-x-2 transition-colors hover:text-[var(--salmon)]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
              <span>View on GitHub</span>
            </a>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Email"
              className="flex items-center space-x-2 transition-colors hover:text-[var(--salmon)]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="h-5 w-5" />
              <span>MDN Email Guide</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
