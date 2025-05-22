import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Quiz questions for each audience
const QUIZ = {
  kid: [
    {
      q: "What does AI stand for?",
      options: ["Apple Icecream", "Artificial Intelligence", "Animal Island", "Amazing Ideas"],
      answer: "Artificial Intelligence"
    },
    {
      q: "Which of these is a robot helper?",
      options: ["Teddy Bear", "Roomba Vacuum", "Soccer Ball", "Banana"],
      answer: "Roomba Vacuum"
    },
    {
      q: "What can AI do?",
      options: ["Sing songs", "Play games", "Help with homework", "All of these!"],
      answer: "All of these!"
    }
  ],
  teen: [
    {
      q: "Which is an example of AI in daily life?",
      options: ["Google Search", "Calculator", "Ruler", "Notebook"],
      answer: "Google Search"
    },
    {
      q: "What is 'machine learning'?",
      options: [
        "Teaching machines to learn from data",
        "Learning to use a machine",
        "A type of car engine",
        "A new sport"
      ],
      answer: "Teaching machines to learn from data"
    },
    {
      q: "Which is NOT a type of AI?",
      options: ["Narrow AI", "General AI", "Super AI", "Magic AI"],
      answer: "Magic AI"
    }
  ],
  adult: [
    {
      q: "Which algorithm is commonly used for image recognition?",
      options: ["Decision Trees", "Convolutional Neural Networks", "Linear Regression", "Hash Tables"],
      answer: "Convolutional Neural Networks"
    },
    {
      q: "What is the Turing Test designed to evaluate?",
      options: [
        "A computer's speed",
        "A machine's ability to exhibit intelligent behavior indistinguishable from a human",
        "Memory size",
        "Battery life"
      ],
      answer: "A machine's ability to exhibit intelligent behavior indistinguishable from a human"
    },
    {
      q: "Which is a major ethical concern in AI?",
      options: ["Bias in data", "Color of robots", "Screen size", "Battery voltage"],
      answer: "Bias in data"
    }
  ]
};

const LEVELS = [
  { value: "kid", label: "Small Kid" },
  { value: "teen", label: "High School" },
  { value: "adult", label: "Adult" }
];

const colors = [
  "bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400",
  "bg-gradient-to-r from-blue-400 via-green-400 to-purple-400",
  "bg-gradient-to-r from-yellow-400 via-red-400 to-pink-500"
];

const AiQuiz = () => {
  const [level, setLevel] = useState("");
  const [started, setStarted] = useState(false);
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState("");
  const [feedback, setFeedback] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [colorIdx, setColorIdx] = useState(0);
  const inputRef = useRef();

  const questions = level ? QUIZ[level] : [];

  const handleStart = () => {
    setStarted(true);
    setIdx(0);
    setScore(0);
    setSelected("");
    setFeedback(null);
    setColorIdx(Math.floor(Math.random() * colors.length));
  };

  const handleAnswer = (option) => {
    setSelected(option);
    if (option === questions[idx].answer) {
      setScore(score + 1);
      setFeedback("correct");
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 900);
    } else {
      setFeedback("wrong");
    }
    setTimeout(() => {
      setFeedback(null);
      setSelected("");
      if (idx < questions.length - 1) {
        setIdx(idx + 1);
        setColorIdx((colorIdx + 1) % colors.length);
      } else {
        setStarted(false);
      }
    }, 1100);
  };

  // Animated AI icons
  const icons = ["🤖", "🧠", "💡", "🔬", "📚", "✨"];

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
        <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mb-2 animate-pulse">
          🤖 AI Quiz!
        </h1>
        {!started ? (
          <>
            {idx === questions.length && level ? (
              <div className="mb-6 text-xl font-bold text-green-700 dark:text-green-300">
                Quiz Complete! <br />
                <span className="text-2xl">Score: {score} / {questions.length}</span>
                <div className="mt-4">
                  <button
                    onClick={() => { setLevel(""); setIdx(0); setScore(0); }}
                    className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-lg font-bold shadow hover:scale-105 transition-transform mt-4"
                  >
                    Try Another Level
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="mb-6 w-full">
                  <label className="block mb-2 font-semibold text-purple-700 dark:text-purple-300">Choose Your Level:</label>
                  <select
                    value={level}
                    onChange={e => setLevel(e.target.value)}
                    className="w-full rounded-lg px-4 py-2 border-2 border-purple-400 focus:outline-none focus:ring-2 focus:ring-pink-400 text-lg"
                  >
                    <option value="">-- Select Level --</option>
                    {LEVELS.map(l => (
                      <option key={l.value} value={l.value}>{l.label}</option>
                    ))}
                  </select>
                </div>
                <button
                  disabled={!level}
                  onClick={handleStart}
                  className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-lg font-bold shadow hover:scale-105 transition-transform disabled:opacity-50"
                >
                  Start Quiz
                </button>
              </>
            )}
          </>
        ) : (
          <>
            <div className="mb-4 text-lg font-semibold text-gray-700 dark:text-gray-200">
              Score: <span className="text-pink-600 dark:text-pink-400">{score}</span>
            </div>
            <motion.div
              key={questions[idx].q}
              initial={{ x: -80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="mb-6 text-xl font-bold text-blue-700 dark:text-blue-300"
            >
              {questions[idx].q}
            </motion.div>
            <div className="grid grid-cols-1 gap-3 w-full mb-4">
              {questions[idx].options.map(option => (
                <button
                  key={option}
                  onClick={() => handleAnswer(option)}
                  disabled={!!feedback}
                  className={`w-full rounded-lg px-4 py-2 font-semibold text-lg border-2 border-purple-400 transition-colors
                    ${selected === option && feedback === "correct" ? "bg-green-400 text-white" : ""}
                    ${selected === option && feedback === "wrong" ? "bg-red-400 text-white" : ""}
                    ${selected !== option ? "bg-white dark:bg-gray-800 hover:bg-purple-100 dark:hover:bg-purple-700" : ""}
                  `}
                >
                  {option}
                </button>
              ))}
            </div>
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

export default AiQuiz;