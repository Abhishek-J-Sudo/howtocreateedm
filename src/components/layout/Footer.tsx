import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="app-footer border-t border-border-default">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-center items-center">
          <div className="text-center">
            <p>A visual guide to help designers understand email development constraints</p>
            <p className="text-sm opacity-80 mt-1">
              Built to bridge the gap between design and development
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
