// src/components/common/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle"; // Assuming DarkModeToggle is in the same 'common' folder

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand Name */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-2xl font-bold text-brand-primary dark:text-brand-secondary"
            >
              LearnSphere {/* Or your app name */}
            </Link>
          </div>

          {/* Navigation Links (Example) */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/"
              className="text-gray-700 dark:text-gray-300 hover:text-brand-primary dark:hover:text-brand-secondary px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Home
            </Link>
            {/* Add more links as needed, e.g., to subjects if you have a few static ones */}

            <Link
              to="/subjects/mathematics"
              className="text-gray-700 dark:text-gray-300 hover:text-brand-primary dark:hover:text-brand-secondary px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Math
            </Link>
          </div>

          {/* Right side items - Dark Mode Toggle */}
          <div className="flex items-center">
            <DarkModeToggle />
            {/* You can add other items here like User Profile, Login/Logout button etc. */}
          </div>

          {/* Mobile menu button (optional, for responsiveness) */}
           <div className="md:hidden">
            <button type="button" className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open main menu</span>
              {/* Icon for menu (e.g., Bars3Icon from Heroicons) */}
           </button>
          </div> 
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state (optional) */}
       <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/" className="text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Home</Link>
          {/* More mobile links */}
       </div>
      </div> 
    </nav>
  );
};

export default Navbar; // Default export
