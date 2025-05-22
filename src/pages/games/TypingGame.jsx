import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HOME_ROW = ["a", "s", "d", "f", "j", "k", "l", ";"];
const COLORS = [
  "bg-pink-400", "bg-yellow-300", "bg-green-400", "bg-blue-400",
  "bg-purple-400", "bg-orange-300", "bg-teal-400", "bg-red-400"
];

function getRandomKey() {
  return HOME_ROW[Math.floor(Math.random() * HOME_ROW.length)];
}

const TypingGame = () => {
  const [currentKey, setCurrentKey] = useState(getRandomKey());
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [streak, setStreak] = useState(0);
  const [colorIdx, setColorIdx] = useState(0);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current && inputRef.current.focus();
  }, [currentKey]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (HOME_ROW.includes(e.key.toLowerCase())) {
        checkKey(e.key.toLowerCase());
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line
  }, [currentKey, score]);

  const checkKey = (key) => {
    if (key === currentKey) {
      setScore(score + 1);
      setStreak(streak + 1);
      setFeedback("correct");
      setColorIdx((colorIdx + 1) % COLORS.length);
      setTimeout(() => setFeedback(null), 600);
      setTimeout(() => setCurrentKey(getRandomKey()), 400);
    } else {
      setStreak(0);
      setFeedback("wrong");
      setTimeout(() => setFeedback(null), 600);
    }
  };

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-yellow-200 via-pink-200 to-blue-200 transition-all duration-700`}>
      {/* Animated floating letters */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {HOME_ROW.map((letter, i) => (
          <motion.div
            key={i}
            initial={{ y: -100, x: Math.random() * window.innerWidth }}
            animate={{ y: [0, window.innerHeight + 50], x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth] }}
            transition={{ duration: 8 + Math.random() * 4, repeat: Infinity, delay: i * 1.2 }}
            className={`absolute text-4xl opacity-20 font-extrabold ${COLORS[i]}`}
          >
            {letter.toUpperCase()}
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative z-10 w-full max-w-md bg-white/90 rounded-2xl shadow-2xl p-8 flex flex-col items-center"
      >
        <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 mb-2 animate-pulse">
          🧑‍💻 Home Row Typing Game!
        </h1>
        <div className="mb-2 text-lg font-semibold text-gray-700">
          Score: <span className="text-blue-600">{score}</span>
        </div>
        <div className="mb-4 text-md font-medium text-green-600">
          Streak: {streak}
        </div>
        <div className="mb-6">
          <span className="text-gray-600">Type the highlighted key:</span>
        </div>
        <motion.div
          key={currentKey}
          initial={{ scale: 0.5, rotate: -10, opacity: 0 }}
          animate={{ scale: 1.3, rotate: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className={`mb-8 text-7xl font-extrabold text-white px-10 py-4 rounded-2xl shadow-xl border-4 border-white ${COLORS[HOME_ROW.indexOf(currentKey)]} drop-shadow-lg`}
        >
          {currentKey.toUpperCase()}
        </motion.div>
        <div className="flex space-x-2 mb-4">
          {HOME_ROW.map((key, i) => (
            <div
              key={key}
              className={`w-12 h-12 flex items-center justify-center rounded-lg text-2xl font-bold border-2 border-white shadow ${COLORS[i]} ${currentKey === key ? "ring-4 ring-pink-400 scale-110" : ""} transition-all`}
            >
              {key.toUpperCase()}
            </div>
          ))}
        </div>
        <input
          ref={inputRef}
          className="opacity-0 absolute pointer-events-none"
          value=""
          onChange={() => {}}
          tabIndex={-1}
        />
        <AnimatePresence>
          {feedback === "correct" && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1.2, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="text-green-600 text-xl font-bold mb-2"
            >
              🎉 Great job!
            </motion.div>
          )}
          {feedback === "wrong" && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1.2, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="text-red-600 text-xl font-bold mb-2"
            >
              ❌ Oops! Try again!
            </motion.div>
          )}
        </AnimatePresence>
        <div className="mt-4 text-sm text-gray-500">
          <span className="font-bold">Tip:</span> Use your left hand for <span className="text-pink-500 font-bold">A S D F</span> and right hand for <span className="text-blue-500 font-bold">J K L ;</span>
        </div>
      </motion.div>
    </div>
  );
};

export default TypingGame;