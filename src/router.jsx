// src/router.jsx
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import LandingPage from './pages/LandingPage';
import SubjectPage from './pages/SubjectPage';
import ChapterPage from './pages/ChapterPage';
import LessonPage from './pages/LessonPage';
import NotFoundPage from './pages/NotFoundPage';
import MathGame from './pages/games/MathGame';
import LogicGame from './pages/games/LogicGame';
import AiQuiz from './pages/games/AiQuiz';
import TypingGame from './pages/games/TypingGame';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <div style={{ padding: '50px', textAlign: 'center', fontSize: '2rem', color: 'red', backgroundColor: 'lightyellow', border: '2px solid red' }}>A routing error occurred! This is the simplified error element.</div>,
    children: [
      { index: true, element: <LandingPage /> },
      { path: 'subjects/:subjectSlug', element: <SubjectPage /> },
      { path: 'subjects/:subjectSlug/chapters/:chapterSlug', element: <ChapterPage /> },
      { path: 'subjects/:subjectSlug/chapters/:chapterSlug/lessons/:lessonSlug', element: <LessonPage /> },
      { path: 'games/math', element: <MathGame /> },
      { path: 'games/logic', element: <LogicGame /> },
      { path: 'games/ai', element: <AiQuiz /> },
      { path: 'games/typing', element: <TypingGame /> },
      { path: "*", element: <NotFoundPage /> }
    ],
  },
]);

