// src/pages/LessonPage.jsx
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getLessonBySlugs, getChapterBySlugs, getSubjectBySlug } from '../data/courseData';
import { useProgress } from '../contexts/ProgressContext';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';
import NotFoundPage from './NotFoundPage';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';

const LessonPage = () => {
  const { subjectSlug, chapterSlug, lessonSlug } = useParams();
  const lesson = getLessonBySlugs(subjectSlug, chapterSlug, lessonSlug);
  const chapter = getChapterBySlugs(subjectSlug, chapterSlug);
  const subject = getSubjectBySlug(subjectSlug);
  const { markAsComplete, isComplete, checkAndCompleteChapter } = useProgress();
  const [showConfetti, setShowConfetti] = React.useState(false);
  const { width, height } = useWindowSize();
  const navigate = useNavigate();

  useEffect(() => {
    // If lesson is completed automatically (e.g. viewed), trigger confetti
    // Or you can have a "Mark as Complete" button
    if (lesson && !isComplete(lesson.id)) {
        // For this example, let's auto-complete text/video on view
        if (lesson.type === 'text' || lesson.type === 'video') {
            markAsComplete('lesson', lesson.id);
            setShowConfetti(true);
            setTimeout(() => setShowConfetti(false), 3000);
            // Check if this completes the chapter
            if (chapter) {
                const chapterJustCompleted = checkAndCompleteChapter(chapter);
                if(chapterJustCompleted) {
                    // Optionally show more confetti or a special message for chapter completion
                    console.log("Chapter completed by finishing this lesson!");
                }
            }
        }
    }
  }, [lesson, isComplete, markAsComplete, chapter, checkAndCompleteChapter]);

  if (!lesson || !chapter || !subject) {
    return <NotFoundPage message="Lesson, chapter, or subject not found." />;
  }

  const currentIndex = chapter.lessons.findIndex(l => l.id === lesson.id);
  const prevLesson = currentIndex > 0 ? chapter.lessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < chapter.lessons.length - 1 ? chapter.lessons[currentIndex + 1] : null;

  const handleQuizSubmit = () => { // Basic quiz completion
    markAsComplete('lesson', lesson.id);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
    if (chapter) checkAndCompleteChapter(chapter);
    // Potentially navigate to next lesson or back to chapter
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
            {/* Basic quiz rendering - expand this significantly */}
            {lesson.questions?.map((q, index) => (
              <div key={index} className="mb-4 p-3 border border-gray-300 dark:border-gray-600 rounded">
                <p className="font-medium">{q.q}</p>
                {/* Add options and answer logic here */}
                <p className="text-sm text-gray-500">Answer: {q.a} (For dev only)</p>
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
                <p className="mt-6 text-green-600 font-semibold">Quiz Completed!</p>
            )}
          </div>
        );
      default:
        return <p>Unsupported lesson type.</p>;
    }
  };

  return (
    <div className="relative">
      {showConfetti && <Confetti width={width} height={height} recycle={false} numberOfPieces={isComplete(lesson.id) ? 150: 50} />} {/* Less confetti for auto-complete */}
      <div className="mb-4">
        <Link to={`/subjects/${subjectSlug}/chapters/${chapterSlug}`} className="text-sm text-brand-primary hover:underline">
          ← Back to {chapter.name}
        </Link>
        <h1 className="text-3xl font-bold my-2 text-center">{lesson.name}</h1>
      </div>

      <motion.div
        key={lesson.id} // Ensures re-render on lesson change for animations
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
        className="mb-8"
      >
        {renderLessonContent()}
      </motion.div>

      {/* Navigation */}
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
       {isComplete(lesson.id) && (
        <p className="text-center mt-4 text-green-600 dark:text-green-400 font-semibold">
            <CheckCircleIcon className="h-5 w-5 inline mr-1"/> Lesson Completed!
        </p>
      )}
    </div>
  );
};

export default LessonPage;