// src/pages/LessonPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

import { motion } from 'framer-motion';
import { getLessonBySlugs, getChapterBySlugs, getSubjectBySlug } from '../data/courseData'; // Adjust path if needed
import { useProgress } from '../contexts/ProgressContext'; // Adjust path if needed
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';
import NotFoundPage from './NotFoundPage';
import Sparkle from 'react-sparkle'; // npm install react-sparkle

// Heroicons for navigation
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';

// Material-UI Icon for completion
import CheckCircleIconMUI from '@mui/icons-material/CheckCircle'; // Renamed to avoid conflict if you use Heroicons CheckCircleIcon
// If you haven't installed Material-UI icons yet: npm install @mui/material @emotion/react @emotion/styled @mui/icons-material



const LessonPage = () => {
  const { subjectSlug, chapterSlug, lessonSlug } = useParams();
  const lesson = getLessonBySlugs(subjectSlug, chapterSlug, lessonSlug);
  const chapter = getChapterBySlugs(subjectSlug, chapterSlug);
  const subject = getSubjectBySlug(subjectSlug);
  const { markAsComplete, isComplete, checkAndCompleteChapter } = useProgress();
  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize();
  const navigate = useNavigate();

  useEffect(() => {
    // Auto-complete for text and video lessons on view
    if (lesson && !isComplete(lesson.id)) {
      if (lesson.type === 'text' || lesson.type === 'video') {
        markAsComplete('lesson', lesson.id);
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 3000); // Confetti duration
        if (chapter) {
          const chapterJustCompleted = checkAndCompleteChapter(chapter);
          if (chapterJustCompleted) {
            console.log("Chapter completed by finishing this lesson!");
            // Optionally trigger chapter completion confetti here too, or navigate
          }
        }
      }
    }
  }, [lesson, isComplete, markAsComplete, chapter, checkAndCompleteChapter]);
  // Removed subjectSlug, chapterSlug, lessonSlug from deps as 'lesson' already depends on them.

  if (!lesson || !chapter || !subject) {
    return <NotFoundPage message="Lesson, chapter, or subject not found." />;
  }

  const currentIndex = chapter.lessons.findIndex(l => l.id === lesson.id);
  const prevLesson = currentIndex > 0 ? chapter.lessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < chapter.lessons.length - 1 ? chapter.lessons[currentIndex + 1] : null;

  const completeAndNavigate = () => {
    if (nextLesson) {
      navigate(`/subjects/${subjectSlug}/chapters/${chapterSlug}/lessons/${nextLesson.slug}`);
    } else {
      navigate(`/subjects/${subjectSlug}/chapters/${chapterSlug}`); // Back to chapter page if no next lesson
    }
  };

  

  const handleGenericLessonCompletion = () => {
    if (!isComplete(lesson.id)) {
      markAsComplete('lesson', lesson.id);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
      if (chapter) checkAndCompleteChapter(chapter);
    }
    completeAndNavigate();
  };

  // Specific handler for typing lessons


  const renderLessonContent = () => {
    if (!lesson) return <p>Loading lesson content...</p>; // Should be caught by the guard above

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
                onClick={handleGenericLessonCompletion} // Use generic completion for quiz for now
                className="mt-6 bg-brand-primary text-white font-semibold py-2 px-4 rounded hover:bg-opacity-90"
              >
                Submit Quiz (Mark as Complete)
              </button>
            ) : (
              <p className="mt-6 text-green-600 dark:text-green-400 font-semibold flex items-center">
                <CheckCircleIconMUI className="mr-1" fontSize="small" />
                Quiz Completed!
              </p>
            )}
          </div>
        );
      
    }
  };

  const funColors = [
    "from-pink-100 via-blue-100 to-green-100",
    "from-yellow-100 via-pink-100 to-blue-100",
    "from-green-100 via-blue-100 to-purple-100"
  ];
  const randomColor = funColors[Math.floor(Math.random() * funColors.length)];

  const mascotList = [
    { emoji: "🦄", msg: "You’re magical!" },
    { emoji: "🐻", msg: "Bear hugs for learning!" },
    { emoji: "🦊", msg: "Foxy move, keep going!" },
    { emoji: "🐧", msg: "Cool as a penguin!" },
    { emoji: "🐯", msg: "Roar! You’re a math tiger!" }
  ];
  const mascot = mascotList[Math.floor(Math.random() * mascotList.length)];

  return (
    <div className={`relative pb-16 min-h-screen bg-gradient-to-br ${randomColor} transition-all duration-1000`}>
      {/* Fun floating shapes for background */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-10 left-10 w-24 h-24 bg-pink-200 rounded-full opacity-30 animate-bounce-slow" />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-200 rounded-full opacity-30 animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-yellow-200 rounded-full opacity-20 animate-spin-slow" />
      </div>

      {showConfetti && <Confetti width={width} height={height} recycle={false} numberOfPieces={150} />}
      {/* Sparkle effect when lesson is complete */}
      {isComplete(lesson.id) && (
        <Sparkle color="gold" count={30} minSize={7} maxSize={18} fadeOutSpeed={15} overflowPx={0} />
      )}

      {/* Animated mascot and motivational message */}
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, type: "spring", bounce: 0.4 }}
        className="flex flex-col items-center justify-center mt-2 mb-2 z-10"
      >
        <span className="text-5xl drop-shadow-lg animate-bounce">{mascot.emoji}</span>
        <span className="text-lg font-bold text-brand-primary mt-1">{mascot.msg}</span>
      </motion.div>

      <div className="mb-4 z-10 relative">
        <Link to={`/subjects/${subjectSlug}/chapters/${chapterSlug}`} className="text-sm text-brand-primary hover:underline">
          ← Back to {chapter.name}
        </Link>
        <h1 className="text-3xl font-bold my-2 text-center drop-shadow-md">{lesson.name}</h1>
      </div>

      <motion.div
        key={lesson.id}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.7, type: "spring", bounce: 0.2 }}
        className="mb-8 z-10 relative"
      >
        {renderLessonContent()}
      </motion.div>

      {isComplete(lesson.id) && (
        <motion.p
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center mt-6 mb-4 text-green-600 dark:text-green-400 font-semibold flex items-center justify-center z-10 relative"
        >
          <CheckCircleIconMUI className="mr-1" fontSize="small" />
          Lesson Completed! You’re a star! ⭐
        </motion.p>
      )}

      {/* --- Navigation Buttons --- */}
      <div className="flex justify-between items-center mt-10 max-w-3xl mx-auto px-4 z-10 relative">
        {prevLesson ? (
          <Link
            to={`/subjects/${subjectSlug}/chapters/${chapterSlug}/lessons/${prevLesson.slug}`}
            className="flex items-center bg-pink-300 dark:bg-pink-600 hover:bg-pink-400 dark:hover:bg-pink-700 text-gray-700 dark:text-gray-200 font-semibold py-2 px-4 rounded-lg transition-colors shadow hover:shadow-md"
            title={`Previous: ${prevLesson.name}`}
          >
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Previous
          </Link>
        ) : <div className="w-1/3" />}
        {nextLesson ? (
          <Link
            to={`/subjects/${subjectSlug}/chapters/${chapterSlug}/lessons/${nextLesson.slug}`}
            className="flex items-center bg-blue-400 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg transition-colors shadow hover:shadow-md"
            title={`Next: ${nextLesson.name}`}
          >
            Next
            <ArrowRightIcon className="h-5 w-5 ml-2" />
          </Link>
        ) : (
          isComplete(lesson.id) ? (
            <Link
              to={`/subjects/${subjectSlug}/chapters/${chapterSlug}`}
              className="flex items-center bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded-lg transition-colors shadow hover:shadow-md"
              title={`Back to chapter: ${chapter.name}`}
            >
              Back to Chapter
            </Link>
          ) : <div className="w-1/3" />
        )}
      </div>
      {/* Soft animated footer for encouragement */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="fixed bottom-2 left-0 w-full text-center z-20 pointer-events-none"
      >
        <span className="inline-block bg-white/80 dark:bg-gray-900/80 text-brand-primary font-bold px-4 py-2 rounded-full shadow-lg animate-pulse-slow">
          Keep going, Dear! Every lesson makes you smarter! 🌈
        </span>
      </motion.div>
    </div>
  );
};

export default LessonPage;