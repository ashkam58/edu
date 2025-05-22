// src/components/landing/HeroSection.jsx
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll'; // npm install react-scroll

// Placeholder SVGs (simple ones for demonstration)
const FluffyCloud = ({ className }) => (
  <svg viewBox="0 0 100 60" className={className} fill="white" xmlns="http://www.w3.org/2000/svg">
    <circle cx="25" cy="35" r="15"/>
    <circle cx="45" cy="30" r="20"/>
    <circle cx="70" cy="35" r="20"/>
    <circle cx="50" cy="45" r="15"/>
    <rect y="40" width="100" height="20" rx="10"/>
  </svg>
);

const CartoonSun = ({ className }) => (
  <div className={`${className} w-24 h-24 md:w-32 md:h-32 bg-yellow-400 rounded-full shadow-2xl flex items-center justify-center animate-pulse-slow overflow-hidden`}>
    <div className="w-3/4 h-3/4 bg-yellow-300 rounded-full"></div>
    {/* Rays (optional) */}
    {[...Array(8)].map((_, i) => (
      <div
        key={i}
        className="absolute w-2 h-10 md:w-3 md:h-12 bg-yellow-400 opacity-70 rounded"
        style={{ transform: `rotate(${i * 45}deg) translateY(-2.8rem) md:translateY(-3.5rem)` }}
      />
    ))}
  </div>
);


const HeroSection = () => {
  const targetRef = useRef(null);
  // We want the parallax effect to happen for the full height of the hero section
  // and a bit beyond to make it feel like the content is scrolling over it.
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end start'], // Animate from when top of section hits top of viewport, until bottom of section hits top of viewport
  });

  // Parallax transformations
  const ySun = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const yCloud1 = useTransform(scrollYProgress, [0, 1], ['0%', '80%']); // Moves faster, appears closer
  const yCloud2 = useTransform(scrollYProgress, [0, 1], ['0%', '60%']);
  const yCloud3 = useTransform(scrollYProgress, [0, 1], ['0%', '90%']);
  const yContent = useTransform(scrollYProgress, [0, 1], ['0%', '70%']);
  const opacityContent = useTransform(scrollYProgress, [0, 0.6, 1], [1, 1, 0]); // Fade out content faster
  const scaleContent = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]); // Slightly scale down content as it scrolls

  // Background gradient animation (subtle)
  // This can be tricky with pure parallax; often CSS animations are better for background gradients.
  // For now, we'll use a static gradient and focus parallax on elements.

  return (
    <section
      ref={targetRef}
      className="relative h-[180vh] md:h-[160vh] overflow-hidden 
        bg-gradient-to-br from-sky-400 via-cyan-300 to-emerald-300
        dark:from-gray-900 dark:via-indigo-900 dark:to-slate-800
      "
    >
      {/* Decorative Elements - Parallaxed */}
      <motion.div
        style={{ y: ySun }}
        className="absolute top-[5%] left-[10%] z-0 opacity-80" // z-0 to be behind clouds
      >
        <CartoonSun className="w-24 h-24 md:w-36 md:h-36" />
      </motion.div>

      <motion.div
        style={{ y: yCloud1, x: useTransform(scrollYProgress, [0, 1], ['0%', '15%']) }}
        className="absolute top-[15%] left-[5%] z-10 opacity-60 animate-subtle-drift-right"
      >
        <FluffyCloud className="w-32 h-auto md:w-48" />
      </motion.div>

      <motion.div
        style={{ y: yCloud2, x: useTransform(scrollYProgress, [0, 1], ['0%', '-20%']) }}
        className="absolute top-[10%] right-[10%] z-10 opacity-70 animate-subtle-drift-left"
      >
        <FluffyCloud className="w-40 h-auto md:w-60" />
      </motion.div>

      <motion.div
        style={{ y: yCloud3, x: useTransform(scrollYProgress, [0, 1], ['0%', '10%']) }}
        className="absolute top-[35%] left-[20%] z-10 opacity-50 animate-subtle-drift-right"
      >
        <FluffyCloud className="w-24 h-auto md:w-36" />
      </motion.div>


      {/* Main Content - Parallaxed */}
      <motion.div
        style={{ y: yContent, opacity: opacityContent, scale: scaleContent }}
        className="relative z-20 flex flex-col items-center justify-center h-screen text-center text-white px-4" // h-screen ensures it initially fills viewport
      >
        <motion.h1
          initial={{ opacity: 0, y: -50, rotate: -5 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.3, type: 'spring', stiffness: 100 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 drop-shadow-xl text-yellow-300 dark:text-indigo-300"
          style={{ fontFamily: "'Lilita One', cursive" }}
        >
          LearnSphere!
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
          className="text-xl md:text-2xl mb-10 max-w-xl md:max-w-2xl drop-shadow-lg font-medium"
        >
          Your amazing adventure into knowledge starts right here!
          Get ready for fun lessons & cool quizzes!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8, type: 'spring', damping: 10, stiffness: 120 }}
        >
          <ScrollLink
            to="subjects-section" // ID for the subject cards grid
            smooth={true}
            duration={1000} // Slower, smoother scroll
            offset={-80} // Adjust based on your navbar height
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold text-xl md:text-2xl py-4 px-10 md:px-12 rounded-full shadow-2xl transform transition-all duration-300 ease-in-out hover:scale-110 focus:outline-none focus:ring-4 focus:ring-pink-300 cursor-pointer inline-block"
          >
            Let's Explore! ✨
          </ScrollLink>
        </motion.div>
      </motion.div>

      {/* This div helps define the scrollable area for parallax if content above doesn't fill it */}
      <div className="h-[80vh] md:h-[60vh]"></div>
    </section>
  );
};

export default HeroSection;