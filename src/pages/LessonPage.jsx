// src/pages/LessonPage.jsx
import React, { useEffect, useState } from 'react'; // Import useState
import { useParams, Link, useNavigate } from 'react-router-dom';

import { motion } from 'framer-motion';
import { getLessonBySlugs, getChapterBySlugs, getSubjectBySlug } from '../data/courseData'; // Adjust path if needed
import { useProgress } from '../contexts/ProgressContext'; // Adjust path if needed
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';
import NotFoundPage from './NotFoundPage';

// Heroicons for navigation
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';

// Material-UI Icon for completion
// At the top of src/pages/LessonPage.jsx
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// If you haven't installed Material-UI icons yet:


// Assuming you might want to use the LessonNavigation component
// import LessonNavigation from '../../components/lesson/LessonNavigation'; // Uncomment and adjust path if using

const LessonPage = () => {
  const { subjectSlug, chapterSlug, lessonSlug } = useParams();
  const lesson = getLessonBySlugs(subjectSlug, chapterSlug, lessonSlug);
  const chapter = getChapterBySlugs(subjectSlug, chapterSlug);
  const subject = getSubjectBySlug(subjectSlug);
  const { markAsComplete, isComplete, checkAndCompleteChapter } = useProgress();
  const [showConfetti, setShowConfetti] = useState(false); // Use imported useState
  const { width, height } = useWindowSize();
  const navigate = useNavigate();

  useEffect(() => {
    if (lesson && !isComplete(lesson.id)) {
      if (lesson.type === 'text' || lesson.type === 'video') {
        markAsComplete('lesson', lesson.id);
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 3000);
        if (chapter) {
          const chapterJustCompleted = checkAndCompleteChapter(chapter);
          if (chapterJustCompleted) {
            console.log("Chapter completed by finishing this lesson!");
          }
        }
      }
    }
  }, [lesson, isComplete, markAsComplete, chapter, checkAndCompleteChapter, subjectSlug, chapterSlug, lessonSlug]); // Added more dependencies

  if (!lesson || !chapter || !subject) {
    return <NotFoundPage message="Lesson, chapter, or subject not found." />;
  }

  const currentIndex = chapter.lessons.findIndex(l => l.id === lesson.id);
  const prevLesson = currentIndex > 0 ? chapter.lessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < chapter.lessons.length - 1 ? chapter.lessons[currentIndex + 1] : null;

  const handleQuizSubmit = () => {
    markAsComplete('lesson', lesson.id);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
    if (chapter) checkAndCompleteChapter(chapter);
    if (nextLesson) {
      navigate(`/subjects/${subjectSlug}/chapters/${chapterSlug}/lessons/${nextLesson.slug}`);
    } else {
      navigate(`/subjects/${subjectSlug}/chapters/${chapterSlug}`);
    }
  };

  const renderLessonContent = () => {
    switch (lesson.type) {
      case 'text':
        return (
          <div
            className="prose dark:prose-invert lg:prose-xl max-w-none font-serif reading-content bg-background-light dark:bg-gray-800 p-6 md:p-8 rounded-lg shadow-inner"
            dangerouslySetInnerHTML={{ __html: lesson.content }}
          />
        );
      case 'video':
        return (
          <div className="aspect-w-16 aspect-h-9 max-w-3xl mx-auto bg-black rounded-lg overflow-hidden shadow-xl">
            <iframe
              src={lesson.videoUrl}
              title={lesson.name}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        );
      case 'quiz':
        return (
          <div className="reading-content bg-background-light dark:bg-gray-800 p-6 md:p-8 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4 font-sans">Quiz: {lesson.name}</h2>
            {lesson.questions?.map((q, index) => (
              <div key={index} className="mb-6 p-4 border border-gray-300 dark:border-gray-600 rounded-lg">
                <p className="font-medium text-lg mb-3">{index + 1}. {q.q}</p>
                {q.options ? (
                  <div className="space-y-2">
                    {q.options.map((option, optIndex) => (
                      <label key={optIndex} className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                        <input
                          type="radio"
                          name={`question-${index}`}
                          value={option}
                          className="mr-3 h-4 w-4 text-brand-primary focus:ring-brand-primary border-gray-300"
                          // Add onChange to handle selection state if you build full quiz logic
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-gray-500">This question needs options defined.</p>
                )}
              </div>
            ))}
            {!isComplete(lesson.id) ? (
              <button
                onClick={handleQuizSubmit}
                className="mt-6 bg-brand-primary text-white font-semibold py-2 px-4 rounded hover:bg-opacity-90"
              >
                Submit Quiz (Mark as Complete)
              </button>
            ) : (
              <p className="mt-6 text-green-600 font-semibold flex items-center"> {/* Added flex items-center for MUI icon alignment */}
                <CheckCircleIcon className="mr-1" fontSize="small" /> {/* Using MUI Icon, adjusted class and added fontSize */}
                Quiz Completed!
              </p>
            )}
          </div>
        );
      default:
        return <p>Unsupported lesson type.</p>;
    }
  };

  return (
    <div className="relative">
      {showConfetti && <Confetti width={width} height={height} recycle={false} numberOfPieces={isComplete(lesson.id) ? 150 : 50} />}
      <div className="mb-4">
        <Link to={`/subjects/${subjectSlug}/chapters/${chapterSlug}`} className="text-sm text-brand-primary hover:underline">
          ← Back to {chapter.name} {/* Changed arrow for consistency */}
        </Link>
        <h1 className="text-3xl font-bold my-2 text-center">{lesson.name}</h1>
      </div>

      <motion.div
        key={lesson.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
        className="mb-8"
      >
        {renderLessonContent()}
      </motion.div>

      {/* --- Navigation Buttons --- */}
      {/* If you are NOT using the LessonNavigation component, keep this block: */}
      <div className="flex justify-between items-center mt-10 max-w-3xl mx-auto">
        {prevLesson ? (
          <Link
            to={`/subjects/${subjectSlug}/chapters/${chapterSlug}/lessons/${prevLesson.slug}`}
            className="flex items-center bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 font-semibold py-2 px-4 rounded-lg transition-colors"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Previous
          </Link>
        ) : <div /> /* Placeholder for spacing */}
        {nextLesson ? (
          <Link
            to={`/subjects/${subjectSlug}/chapters/${chapterSlug}/lessons/${nextLesson.slug}`}
            className="flex items-center bg-brand-primary hover:bg-opacity-90 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
          >
            Next
            <ArrowRightIcon className="h-5 w-5 ml-2" />
          </Link>
        ) : <div /> /* Placeholder for spacing */}
      </div>
      {/* --- End of Navigation Buttons Block --- */}

      {/* OR, if you ARE using the LessonNavigation component: */}
      {/* <LessonNavigation
        subjectSlug={subjectSlug}
        chapterSlug={chapterSlug}
        prevLesson={prevLesson}
        nextLesson={nextLesson}
      /> */}


      {isComplete(lesson.id) && (
        <p className="text-center mt-4 text-green-600 dark:text-green-400 font-semibold flex items-center justify-center"> {/* Added flex for MUI icon alignment */}
          <CheckCircleIcon className="mr-1" fontSize="small" /> {/* Using MUI Icon */}
          Lesson Completed!
        </p>
      )}
    </div>
  );
};

export default LessonPage;