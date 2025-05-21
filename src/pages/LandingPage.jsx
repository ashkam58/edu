// src/pages/LandingPage.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { subjects } from '../data/courseData';
import HeroSection from '../components/landing/HeroSection'; // Import HeroSection

// SubjectCard component (assuming it's defined here or imported)
const SubjectCard = ({ subject }) => (
  <motion.div
    whileHover={{ scale: 1.05, y: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
    className={`p-6 rounded-xl shadow-lg text-white ${subject.color} transform transition-all duration-300`}
  >
    <Link to={`/subjects/${subject.slug}`} className="block">
      <div className="text-5xl mb-4">{subject.icon}</div>
      <h2 className="text-2xl font-bold mb-2">{subject.name}</h2>
      <p className="text-sm opacity-90">{subject.description}</p>
    </Link>
  </motion.div>
);

const LandingPage = () => {
  return (
    // Remove text-center if HeroSection handles its own text alignment
    // No overflow-hidden on this top-level div if hero section needs to "spill" for parallax.
    <div>
      <HeroSection />

      {/* This section is where the "Let's Explore!" button will scroll to */}
      <section id="subjects-section" className="py-16 md:py-24 bg-background dark:bg-gray-800"> {/* Added background for contrast */}
        <div className="container mx-auto px-4 text-center"> {/* Centering content */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }} // Animate when this scrolls into view
            viewport={{ once: true, amount: 0.3 }} // Trigger when 30% is visible
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-brand-primary dark:text-brand-secondary mb-12 md:mb-16"
          >
            Choose Your Adventure!
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }} // Stagger children when 10% of grid is visible
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } }
            }}
          >
            {subjects.map((subject) => (
              <motion.div
                key={subject.id}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.95 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" }}
                }}
              >
                 <SubjectCard subject={subject} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};
export default LandingPage;