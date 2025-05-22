import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Modes and difficulties
const MODES = [
  { value: "bodmas", label: "BODMAS/PEMDAS" },
  { value: "multiplication", label: "Multiplication" },
  { value: "tricks", label: "Multiplication Tricks" }
];
const DIFFICULTIES = [
  { value: "easy", label: "Easy" },
  { value: "medium", label: "Medium" },
  { value: "hard", label: "Hard" }
];

// Fun math tricks
const tricks = [
  "Any number times 9, the digits add up to 9!",
  "Multiplying by 11: 23 × 11 = 2(2+3)3 = 253!",
  "A number is divisible by 3 if its digits add up to a multiple of 3.",
  "To square a number ending in 5: (n5)² = n×(n+1)25. Try 35² = 1225!"
];

const colors = [
  "bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400",
  "bg-gradient-to-r from-yellow-400 via-red-400 to-pink-500",
  "bg-gradient-to-r from-green-400 via-blue-400 to-purple-500"
];

// Generate questions based on mode and difficulty
function generateQuestion(mode, difficulty) {
  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  let a, b, c, question, answer;

  // Difficulty scaling
  let range = { easy: [1, 10], medium: [5, 30], hard: [10, 99] }[difficulty];

  if (mode === "bodmas") {
    a = rand(...range);
    b = rand(...range);
    c = rand(...range);
    const ops = [
      { op: "+", fn: (x, y) => x + y },
      { op: "-", fn: (x, y) => x - y },
      { op: "×", fn: (x, y) => x * y }
    ];
    const op1 = ops[rand(0, 2)];
    const op2 = ops[rand(0, 2)];
    question = `(${a} ${op1.op} ${b}) ${op2.op} ${c}`;
    answer = op2.fn(op1.fn(a, b), c);
  } else if (mode === "multiplication") {
    a = rand(...range);
    b = rand(...range);
    question = `${a} × ${b}`;
    answer = a * b;
  } else if (mode === "tricks") {
    // Multiplication tricks: e.g., multiplying by 11, squaring numbers ending in 5
    if (Math.random() > 0.5) {
      // Multiply by 11 trick
      a = rand(10, 99);
      question = `${a} × 11`;
      answer = a * 11;
    } else {
      // Square a number ending in 5
      a = rand(1, 20) * 5;
      question = `${a} × ${a}`;
      answer = a * a;
    }
  }
  return { question, answer };
}

const MathGame = () => {
  const [mode, setMode] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [started, setStarted] = useState(false);

  const [q, setQ] = useState({ question: "", answer: null });
  const [user, setUser] = useState("");
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [trick, setTrick] = useState("");
  const [colorIdx, setColorIdx] = useState(0);
  const inputRef = useRef();

  // On start, generate first question
  useEffect(() => {
    if (started) {
      setQ(generateQuestion(mode, difficulty));
      setScore(0);
      setTrick(tricks[Math.floor(Math.random() * tricks.length)]);
      setColorIdx(Math.floor(Math.random() * colors.length));
    }
  }, [started, mode, difficulty]);

  // On score change, show new trick and color
  useEffect(() => {
    if (started) {
      setTrick(tricks[Math.floor(Math.random() * tricks.length)]);
      setColorIdx(Math.floor(Math.random() * colors.length));
    }
  }, [score, started]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (parseInt(user) === q.answer) {
      setScore(score + 1);
      setFeedback("correct");
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 1200);
      setTimeout(() => {
        setQ(generateQuestion(mode, difficulty));
        setUser("");
        setFeedback(null);
        inputRef.current && inputRef.current.focus();
      }, 1000);
    } else {
      setFeedback("wrong");
      setTimeout(() => setFeedback(null), 800);
    }
  };

  // Animated math symbols
  const symbols = ["➕", "➖", "✖️", "➗", "🧮", "🎲", "💡"];

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-4 ${colors[colorIdx]} transition-all duration-700`}>
      {/* Animated floating math symbols */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {symbols.map((s, i) => (
          <motion.div
            key={i}
            initial={{ y: -100, x: Math.random() * window.innerWidth }}
            animate={{ y: [0, window.innerHeight + 50], x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth] }}
            transition={{ duration: 8 + Math.random() * 4, repeat: Infinity, delay: i * 1.2 }}
            className="absolute text-4xl opacity-30"
          >
            {s}
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative z-10 w-full max-w-md bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-2xl p-8 flex flex-col items-center"
      >
        <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mb-2 animate-pulse">
          🎉 Math Game!
        </h1>
        {!started ? (
          <>
            <div className="mb-4 w-full">
              <label className="block mb-2 font-semibold text-purple-700 dark:text-purple-300">Choose Mode:</label>
              <select
                value={mode}
                onChange={e => setMode(e.target.value)}
                className="w-full rounded-lg px-4 py-2 border-2 border-purple-400 focus:outline-none focus:ring-2 focus:ring-pink-400 text-lg"
              >
                <option value="">-- Select Mode --</option>
                {MODES.map(m => (
                  <option key={m.value} value={m.value}>{m.label}</option>
                ))}
              </select>
            </div>
            <div className="mb-6 w-full">
              <label className="block mb-2 font-semibold text-purple-700 dark:text-purple-300">Choose Difficulty:</label>
              <select
                value={difficulty}
                onChange={e => setDifficulty(e.target.value)}
                className="w-full rounded-lg px-4 py-2 border-2 border-purple-400 focus:outline-none focus:ring-2 focus:ring-pink-400 text-lg"
              >
                <option value="">-- Select Difficulty --</option>
                {DIFFICULTIES.map(d => (
                  <option key={d.value} value={d.value}>{d.label}</option>
                ))}
              </select>
            </div>
            <button
              disabled={!mode || !difficulty}
              onClick={() => setStarted(true)}
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-lg font-bold shadow hover:scale-105 transition-transform disabled:opacity-50"
            >
              Start Game
            </button>
          </>
        ) : (
          <>
            <div className="mb-4 text-lg font-semibold text-gray-700 dark:text-gray-200">
              Score: <span className="text-pink-600 dark:text-pink-400">{score}</span>
            </div>
            <motion.div
              key={q.question}
              initial={{ x: -80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="mb-6 text-2xl font-bold text-blue-700 dark:text-blue-300"
            >
              {q.question}
            </motion.div>
            <form onSubmit={handleSubmit} className="flex items-center space-x-2 mb-4">
              <input
                ref={inputRef}
                type="number"
                value={user}
                onChange={e => setUser(e.target.value)}
                className="rounded-lg px-4 py-2 border-2 border-purple-400 focus:outline-none focus:ring-2 focus:ring-pink-400 text-lg font-semibold w-32 text-center"
                autoFocus
                placeholder="Your answer"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-5 py-2 rounded-lg font-bold shadow hover:scale-105 transition-transform"
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
              className="mt-4 text-sm text-purple-700 dark:text-purple-300 italic"
            >
              {trick}
            </motion.div>
            <button
              onClick={() => setStarted(false)}
              className="mt-6 text-xs text-gray-500 underline hover:text-pink-500"
            >
              Change Mode / Difficulty
            </button>
          </>
        )}
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
                  color: ["#f472b6", "#a78bfa", "#facc15", "#34d399", "#60a5fa", "#f87171"][i % 6]
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

export default MathGame;