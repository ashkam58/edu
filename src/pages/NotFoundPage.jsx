// src/pages/NotFoundPage.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Optional, but good for a 404 page

const NotFoundPage = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] text-center px-4"> {/* Adjust min-height as needed */}
      <h1 className="text-6xl sm:text-8xl font-bold text-brand-primary dark:text-brand-secondary mb-4 animate-subtle-bounce">
        Oops!
      </h1>
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
        {message || "404 - Page Not Found"}
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-md">
        It seems the page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="bg-brand-primary hover:bg-opacity-90 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105"
      >
        Go to Homepage
      </Link>
    </div>
  );
};

export default NotFoundPage; // Make sure you have this default export