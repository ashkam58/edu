// src/pages/LandingPage.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { subjects } from '../data/courseData';
import HeroSection from '../components/landing/HeroSection'; // Assuming HeroSection is correctly implemented for full-width

// SubjectCard component
const SubjectCard = ({ subject }) => (
  <motion.div
    // Removed whileHover from here if you want to apply it on the Link or a direct child for better hit area
    // transition is now part of the parent's variants or individual motion.div variants
    className={`p-6 rounded-xl shadow-lg text-white ${subject.color} h-full flex flex-col`} // Added h-full and flex for consistency if descriptions vary
  >
    <Link to={`/subjects/${subject.slug}`} className="block flex-grow flex flex-col hover:scale-105 transition-transform duration-300"> {/* Added hover effect here */}
      <div className="text-5xl mb-4">{subject.icon}</div>
      <h2 className="text-2xl font-bold mb-2">{subject.name}</h2>
      <p className="text-sm opacity-90 flex-grow">{subject.description}</p> {/* flex-grow for description */}
    </Link>
  </motion.div>
);

const LandingPage = () => {
  return (
    <> {/* Using React Fragment as the outer div had no specific styling */}
      <HeroSection /> {/* Ensure HeroSection handles its own full-width background and internal content alignment */}

      <section id="subjects-section" className="py-16 md:py-24 bg-background dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-primary dark:text-brand-secondary mb-12 md:mb-16" // Responsive text size
          >
            Choose Your Adventure!
          </motion.h2>
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto" // Adjusted gap for responsiveness
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: {}, // Parent variant can be empty if children define their own full animation
              visible: { transition: { staggerChildren: 0.15 } }
            }}
          >
            {subjects.map((subject) => (
              <motion.div
                key={subject.id}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.95 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.5, ease: "easeOut" }
                  }
                }}
                className="h-full" // Ensure motion.div takes full height for consistent card sizing
              >
                 <SubjectCard subject={subject} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};
export default LandingPage;