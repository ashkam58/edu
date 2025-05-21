// src/pages/ChapterPage.jsx
import React, { useEffect, useState } from 'react'; // Make sure React and useState are imported
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getChapterBySlugs, getSubjectBySlug } from '../data/courseData';
import { PlayCircleIcon, DocumentTextIcon, QuestionMarkCircleIcon, CheckCircleIcon as OutlineCheckCircleIcon } from '@heroicons/react/24/outline';
import { CheckCircleIcon as SolidCheckCircleIcon } from '@heroicons/react/24/solid';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';
import NotFoundPage from './NotFoundPage';
import { useProgress } from '../contexts/ProgressContext';

// ... (iconMap and LessonListItem component remain the same) ...
const iconMap = {
  video: <PlayCircleIcon className="h-6 w-6 text-brand-primary" />,
  text: <DocumentTextIcon className="h-6 w-6 text-brand-accent" />,
  quiz: <QuestionMarkCircleIcon className="h-6 w-6 text-purple-500" />,
};

const LessonListItem = ({ lesson, subjectSlug, chapterSlug, isCompleted }) => {
  // Add a log inside LessonListItem as well
  // console.log('LessonListItem rendering lesson:', lesson?.name, 'isCompleted:', isCompleted);
  if (!lesson || !lesson.slug) {
    console.error("LessonListItem received invalid lesson data:", lesson);
    return <div className="text-red-500 p-4">Error: Invalid lesson data.</div>;
  }
  return (
    <motion.div /* ... */ >
      <Link
        to={`/subjects/${subjectSlug}/chapters/${chapterSlug}/lessons/${lesson.slug}`}
        className="flex items-center justify-between p-4 mb-3 bg-white dark:bg-gray-700 rounded-lg shadow hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
      >
        <div className="flex items-center">
          {iconMap[lesson.type] || <DocumentTextIcon className="h-6 w-6 text-gray-500" />}
          <span className="ml-3 font-medium text-gray-800 dark:text-gray-100">{lesson.name || "Unnamed Lesson"}</span>
        </div>
        {isCompleted && <OutlineCheckCircleIcon className="h-6 w-6 text-green-500" />}
      </Link>
    </motion.div>
  );
};


const ChapterPage = () => {
  const { subjectSlug, chapterSlug } = useParams();

  // --- ADD DETAILED LOGS HERE ---
  console.log('ChapterPage PARAMS:', { subjectSlug, chapterSlug });

  const subject = getSubjectBySlug(subjectSlug);
  console.log('ChapterPage - Found subject:', subject ? subject.name : 'Subject NOT FOUND');

  const chapter = getChapterBySlugs(subjectSlug, chapterSlug);
  console.log('ChapterPage - Found chapter:', chapter ? chapter.name : 'Chapter NOT FOUND');
  if (chapter) {
    console.log('ChapterPage - Chapter lessons:', chapter.lessons);
  }
  // --- END OF DETAILED LOGS ---

  const { isComplete, markAsComplete, checkAndCompleteChapter } = useProgress();
  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize();
  // const navigate = useNavigate(); // Not used in the current snippet, remove if not needed elsewhere

  useEffect(() => {
    if (chapter) {
      const chapterJustCompleted = checkAndCompleteChapter(chapter);
      if (chapterJustCompleted) {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 5000);
      }
    }
  }, [chapter, isComplete, checkAndCompleteChapter]);


  if (!subject) {
    return <NotFoundPage message={`Subject "${subjectSlug}" not found.`} />;
  }
  if (!chapter) {
    // This is a crucial check. If chapter is not found, it will render NotFoundPage.
    return <NotFoundPage message={`Chapter "${chapterSlug}" under subject "${subject.name}" not found.`} />;
  }
  // Add a check for chapter.lessons
  if (!chapter.lessons || !Array.isArray(chapter.lessons)) {
    console.error("Chapter data is missing or has an invalid 'lessons' array:", chapter);
    return <NotFoundPage message={`Error: Chapter "${chapter.name}" has invalid lesson data.`} />;
  }


  const allLessonsDone = chapter.lessons.every(lesson => isComplete(lesson.id));

  const handleMarkChapterComplete = () => {
    if (!isComplete(chapter.id) && allLessonsDone) {
      markAsComplete('chapter', chapter.id);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000);
    } else if (!allLessonsDone) {
        alert("Please complete all lessons in this chapter first!");
    }
  };

  return (
    <div>
      {showConfetti && <Confetti width={width} height={height} recycle={false} numberOfPieces={300} />}
      <div className="mb-6">
        <Link to={`/subjects/${subjectSlug}`} className="text-sm text-brand-primary hover:underline">← Back to {subject.name}</Link>
        <h1 className="text-3xl font-bold mt-2">{chapter.name}</h1>
        <p className="text-gray-600 dark:text-gray-400">{chapter.description}</p>
      </div>

      <div className="mb-6">
        {/* Defensive mapping: check if chapter.lessons is an array */}
        {Array.isArray(chapter.lessons) && chapter.lessons.map((lesson) => {
          // Add a null check for lesson itself and key properties before rendering LessonListItem
          if (!lesson || !lesson.id || !lesson.slug || !lesson.name) {
            console.error("Skipping rendering of an invalid lesson object:", lesson, "in chapter:", chapter.name);
            return null; // Skip rendering this malformed lesson
          }
          return (
            <LessonListItem
              key={lesson.id} // Ensure lesson.id is unique and present
              lesson={lesson}
              subjectSlug={subjectSlug}
              chapterSlug={chapterSlug}
              isCompleted={isComplete(lesson.id)}
            />
          );
        })}
         {(!Array.isArray(chapter.lessons) || chapter.lessons.length === 0) && (
            <p className="text-gray-500 dark:text-gray-400">No lessons available in this chapter yet.</p>
        )}
      </div>

      {!isComplete(chapter.id) && allLessonsDone && (
        <motion.button
            onClick={handleMarkChapterComplete}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-brand-secondary text-white font-semibold py-2 px-6 rounded-lg shadow hover:bg-opacity-90 transition-all"
        >
            Mark Chapter as Complete & Get Confetti!
        </motion.button>
      )}
       {isComplete(chapter.id) && (
        <p className="text-lg font-semibold text-green-600 dark:text-green-400 flex items-center">
          <SolidCheckCircleIcon className="h-6 w-6 mr-2"/> Chapter Completed! Well done!
        </p>
      )}
    </div>
  );
};
export default ChapterPage;