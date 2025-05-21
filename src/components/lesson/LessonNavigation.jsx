// src/components/lesson/LessonNavigation.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';

const LessonNavigation = ({ subjectSlug, chapterSlug, prevLesson, nextLesson }) => {
  return (
    <div className="flex justify-between items-center mt-10 max-w-3xl mx-auto">
      {prevLesson ? (
        <Link
          to={`/subjects/${subjectSlug}/chapters/${chapterSlug}/lessons/${prevLesson.slug}`}
          className="flex items-center bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 font-semibold py-2 px-4 rounded-lg transition-colors"
          aria-label={`Previous lesson: ${prevLesson.name}`}
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          Previous
        </Link>
      ) : (
        <div /> // Placeholder for spacing to keep "Next" button to the right
      )}

      {nextLesson ? (
        <Link
          to={`/subjects/${subjectSlug}/chapters/${chapterSlug}/lessons/${nextLesson.slug}`}
          className="flex items-center bg-brand-primary hover:bg-opacity-90 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
          aria-label={`Next lesson: ${nextLesson.name}`}
        >
          Next
          <ArrowRightIcon className="h-5 w-5 ml-2" />
        </Link>
      ) : (
        <div /> // Placeholder for spacing if there's no next lesson
      )}
    </div>
  );
};

export default LessonNavigation;