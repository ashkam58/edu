// src/pages/SubjectPage.jsx
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getSubjectBySlug } from '../data/courseData';
import ProgressBar from '../components/common/ProgressBar';
import { useProgress } from '../contexts/ProgressContext';
import NotFoundPage from './NotFoundPage'; // For handling invalid slugs

const ChapterTile = ({ chapter, subjectSlug, progressPercent }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
  >
    <Link to={`/subjects/${subjectSlug}/chapters/${chapter.slug}`}>
      <h3 className="text-xl font-semibold text-brand-primary dark:text-brand-secondary mb-2">{chapter.name}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{chapter.description}</p>
      <ProgressBar percentage={progressPercent} />
      {progressPercent === 100 && <span className="text-xs text-green-500 block mt-1">Completed! 🎉</span>}
    </Link>
  </motion.div>
);

const SubjectPage = () => {
  const { subjectSlug } = useParams();
  const subject = getSubjectBySlug(subjectSlug);
  const { getChapterProgress, isComplete } = useProgress();

  if (!subject) {
    return <NotFoundPage message={`Subject "${subjectSlug}" not found.`} />;
  }

  return (
    <div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-8 text-center">
        <span className="text-6xl">{subject.icon}</span>
        <h1 className="text-4xl font-bold my-4">{subject.name}</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">{subject.description}</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {subject.chapters.map((chapter) => {
          const progressPercent = getChapterProgress(chapter);
          return (
            <ChapterTile
              key={chapter.id}
              chapter={chapter}
              subjectSlug={subject.slug}
              progressPercent={progressPercent}
            />
          );
        })}
      </div>
    </div>
  );
};
export default SubjectPage;