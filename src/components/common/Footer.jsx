// src/components/common/Footer.jsx
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-center py-6 border-t border-gray-200 dark:border-gray-700 mt-auto">
      <div className="container mx-auto px-4">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © {currentYear} LearnSphere. All rights reserved.
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
          Made with <span role="img" aria-label="heart">❤️</span> for learning.
        </p>
        {/* You can add more links or information here if needed */}
      </div>
    </footer>
  );
};

export default Footer; // Default export