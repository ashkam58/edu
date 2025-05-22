import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Generates a random pattern (arithmetic, geometric, or Fibonacci)
function generatePattern() {
  const type = Math.floor(Math.random() * 3);
  let seq = [];
  let answer = 0;
  let hint = "";
  if (type === 0) {
    // Arithmetic
    const start = Math.floor(Math.random() * 10);
    const diff = Math.floor(Math.random() * 5) + 2;
    seq = [start, start + diff, start + 2 * diff, start + 3 * diff];
    answer = start + 4 * diff;
    hint = "Look for a constant difference!";
  } else if (type === 1) {
    // Geometric
    const start = Math.floor(Math.random() * 5) + 1;
    const ratio = Math.floor(Math.random() * 3) + 2;
    seq = [start, start * ratio, start * ratio ** 2, start * ratio ** 3];
    answer = start * ratio ** 4;
    hint = "Look for a constant ratio!";
  } else {
    // Fibonacci
    const a = Math.floor(Math.random() * 5) + 1;
    const b = Math.floor(Math.random() * 5) + 1;
    seq = [a, b, a + b, a + b + b];
    seq[3] = seq[1] + seq[2];
    answer = seq[2] + seq[3];
    hint = "Each number is the sum of the previous two!";
  }
  return { seq, answer, hint };
}

const colors = [
  "bg-gradient-to-r from-green-400 via-blue-400 to-purple-400",
  "bg-gradient-to-r from-yellow-400 via-pink-400 to-red-400",
  "bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400"
];

const LogicGame = () => {
  const [game, setGame] = useState(generatePattern());
  const [user, setUser] = useState("");
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [colorIdx, setColorIdx] = useState(0);
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (parseInt(user) === game.answer) {
      setScore(score + 1);
      setFeedback("correct");
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 1200);
      setTimeout(() => {
        setGame(generatePattern());
        setUser("");
        setFeedback(null);
        setColorIdx((colorIdx + 1) % colors.length);
        inputRef.current && inputRef.current.focus();
      }, 1000);
    } else {
      setFeedback("wrong");
      setTimeout(() => setFeedback(null), 800);
    }
  };

  // Animated logic icons
  const icons = ["🧩", "🧠", "🔢", "✨", "🎲", "🔮"];

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-4 ${colors[colorIdx]} transition-all duration-700`}>
      {/* Animated floating icons */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {icons.map((icon, i) => (
          <motion.div
            key={i}
            initial={{ y: -100, x: Math.random() * window.innerWidth }}
            animate={{ y: [0, window.innerHeight + 50], x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth] }}
            transition={{ duration: 8 + Math.random() * 4, repeat: Infinity, delay: i * 1.2 }}
            className="absolute text-4xl opacity-30"
          >
            {icon}
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative z-10 w-full max-w-md bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-2xl p-8 flex flex-col items-center"
      >
        <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500 mb-2 animate-pulse">
          🧩 Logic Pattern Game!
        </h1>
        <div className="mb-4 text-lg font-semibold text-gray-700 dark:text-gray-200">
          Score: <span className="text-blue-600 dark:text-blue-400">{score}</span>
        </div>
        <div className="mb-6 text-xl font-bold text-purple-700 dark:text-purple-300">
          What comes next? <br />
          <span className="text-2xl tracking-widest">{game.seq.join(", ")} <span className="text-gray-400">?</span></span>
        </div>
        <form onSubmit={handleSubmit} className="flex items-center space-x-2 mb-4">
          <input
            ref={inputRef}
            type="number"
            value={user}
            onChange={e => setUser(e.target.value)}
            className="rounded-lg px-4 py-2 border-2 border-blue-400 focus:outline-none focus:ring-2 focus:ring-green-400 text-lg font-semibold w-32 text-center"
            autoFocus
            placeholder="Your answer"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-5 py-2 rounded-lg font-bold shadow hover:scale-105 transition-transform"
          >
            Go!
          </button>
        </form>
        <AnimatePresence>
          {feedback === "correct" && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1.2, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="text-green-600 text-xl font-bold mb-2"
            >
              🎉 Correct!
            </motion.div>
          )}
          {feedback === "wrong" && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1.2, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="text-red-600 text-xl font-bold mb-2"
            >
              ❌ Try again!
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-sm text-blue-700 dark:text-blue-300 italic"
        >
          Hint: {game.hint}
        </motion.div>
      </motion.div>

      {/* Confetti animation */}
      <AnimatePresence>
        {showConfetti && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 pointer-events-none z-50"
          >
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: -20,
                  rotate: Math.random() * 360
                }}
                animate={{
                  y: window.innerHeight + 20,
                  rotate: Math.random() * 720
                }}
                transition={{
                  duration: 1.2 + Math.random(),
                  delay: Math.random() * 0.5
                }}
                className="absolute text-2xl"
                style={{
                  color: ["#34d399", "#60a5fa", "#a78bfa", "#facc15", "#f472b6", "#f87171"][i % 6]
                }}
              >
                🎊
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LogicGame;