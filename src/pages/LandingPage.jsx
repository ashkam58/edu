// src/pages/LandingPage.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { subjects } from '../data/courseData';
// import MascotImage from '../assets/images/mascot.png'; // Example mascot

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
    <div className="text-center">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-12"
      >
        {/* <img src={MascotImage} alt="Friendly Mascot" className="mx-auto h-40 w-auto mb-4 animate-subtle-bounce" /> */}
        <h1 className="text-5xl font-bold text-brand-primary dark:text-brand-secondary mb-4">Welcome to LearnSphere!</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">Your fun journey to knowledge starts here.</p>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } }
        }}
      >
        {subjects.map((subject) => (
          <motion.div key={subject.id} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
             <SubjectCard subject={subject} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
export default LandingPage;