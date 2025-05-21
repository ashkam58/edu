// src/contexts/ProgressContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';

const ProgressContext = createContext();
export const useProgress = () => useContext(ProgressContext);

export const ProgressProvider = ({ children }) => {
  const [progress, setProgress] = useState(() => {
    const savedProgress = localStorage.getItem('courseProgress');
    return savedProgress ? JSON.parse(savedProgress) : {}; // { lessonId: true, chapterId: 'completed' }
  });

  useEffect(() => {
    localStorage.setItem('courseProgress', JSON.stringify(progress));
  }, [progress]);

  const markAsComplete = (type, id) => { // type: 'lesson' or 'chapter'
    setProgress(prev => ({ ...prev, [id]: type === 'lesson' ? true : 'completed' }));
  };

  const isComplete = (id) => !!progress[id];

  const getChapterProgress = (chapter) => {
    if (!chapter || !chapter.lessons) return 0;
    const completedLessons = chapter.lessons.filter(lesson => isComplete(lesson.id)).length;
    return chapter.lessons.length > 0 ? (completedLessons / chapter.lessons.length) * 100 : 0;
  };
  
  // Check if all lessons in a chapter are complete
  const checkAndCompleteChapter = (chapter) => {
    if (!chapter || !chapter.lessons || chapter.lessons.length === 0) return false;
    const allLessonsDone = chapter.lessons.every(lesson => isComplete(lesson.id));
    if (allLessonsDone && !isComplete(chapter.id)) {
      markAsComplete('chapter', chapter.id);
      return true; // Chapter was just completed
    }
    return false;
  };


  return (
    <ProgressContext.Provider value={{ progress, markAsComplete, isComplete, getChapterProgress, checkAndCompleteChapter }}>
      {children}
    </ProgressContext.Provider>
  );
};