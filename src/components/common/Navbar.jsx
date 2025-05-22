import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import DarkModeToggle from "./DarkModeToggle";
import { subjects } from "../../data/courseData"; // Adjust path if needed

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [subjectsOpen, setSubjectsOpen] = useState(false);
  const [gamesOpen, setGamesOpen] = useState(false);

  // Example games array (replace with your real games)
  const games = [
    { name: "Math Game", to: "/games/math" },
    { name: "Logic Game", to: "/games/logic" },
    { name: "AI Quiz", to: "/games/ai" },
    { name: "Typing Game", to: "/games/typing" }, // <-- Add this line
  ];

  return (
    <nav className="sticky top-0 w-full bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 shadow-xl z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-3xl font-extrabold text-white"
            >
              🚀
            </motion.div>
            <motion.h1
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="text-2xl font-bold text-white"
            >
              LearnSphere
            </motion.h1>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-white font-medium px-3 py-2 rounded-md transition-colors">Home</Link>
            
            {/* Subjects Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setSubjectsOpen(true)}
              onMouseLeave={() => setSubjectsOpen(false)}
            >
              <button className="text-white font-medium px-3 py-2 rounded-md transition-colors">
                Subjects
              </button>
              <AnimatePresence>
                {subjectsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded shadow-lg z-50"
                  >
                    {subjects.map((subject) => (
                      <Link
                        key={subject.id}
                        to={`/subjects/${subject.slug}`}
                        className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                        onClick={() => setSubjectsOpen(false)}
                      >
                        {subject.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Games Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setGamesOpen(true)}
              onMouseLeave={() => setGamesOpen(false)}
            >
              <button className="text-white font-medium px-3 py-2 rounded-md transition-colors">
                Games
              </button>
              <AnimatePresence>
                {gamesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded shadow-lg z-50"
                  >
                    {games.map((game) => (
                      <Link
                        key={game.to}
                        to={game.to}
                        className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                        onClick={() => setGamesOpen(false)}
                      >
                        {game.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <DarkModeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <DarkModeToggle />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="ml-4 text-white focus:outline-none"
            >
              {menuOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  ✖️
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  ☰
                </motion.span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden overflow-hidden bg-white dark:bg-gray-800"
          >
            <div className="flex flex-col px-4 pt-2 pb-4 space-y-2">
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                Home
              </Link>

              {/* Subjects Mobile Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setSubjectsOpen(!subjectsOpen)}
                  className="flex justify-between items-center w-full text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium transition-colors"
                >
                  Subjects
                  <motion.span
                    className={`ml-2 transition-transform ${
                      subjectsOpen ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </motion.span>
                </button>
                <AnimatePresence>
                  {subjectsOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="flex flex-col space-y-2 mt-2"
                    >
                      {subjects.map((subject) => (
                        <Link
                          key={subject.id}
                          to={`/subjects/${subject.slug}`}
                          onClick={() => setMenuOpen(false)}
                          className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium transition-colors"
                        >
                          {subject.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Games Mobile Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setGamesOpen(!gamesOpen)}
                  className="flex justify-between items-center w-full text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium transition-colors"
                >
                  Games
                  <motion.span
                    className={`ml-2 transition-transform ${
                      gamesOpen ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </motion.span>
                </button>
                <AnimatePresence>
                  {gamesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="flex flex-col space-y-2 mt-2"
                    >
                      {games.map((game) => (
                        <Link
                          key={game.to}
                          to={game.to}
                          onClick={() => setMenuOpen(false)}
                          className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium transition-colors"
                        >
                          {game.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;