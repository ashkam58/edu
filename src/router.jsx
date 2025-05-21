// src/router.jsx
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import LandingPage from './pages/LandingPage';
import SubjectPage from './pages/SubjectPage';
import ChapterPage from './pages/ChapterPage';
import LessonPage from './pages/LessonPage';
import NotFoundPage from './pages/NotFoundPage'; // Keep this import for now

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    // TEMPORARY TEST:
    errorElement: <div style={{ padding: '50px', textAlign: 'center', fontSize: '2rem', color: 'red', backgroundColor: 'lightyellow', border: '2px solid red' }}>A routing error occurred! This is the simplified error element.</div>,
    children: [
      { index: true, element: <LandingPage /> },
      { path: 'subjects/:subjectSlug', element: <SubjectPage /> },
      { path: 'subjects/:subjectSlug/chapters/:chapterSlug', element: <ChapterPage /> },
      { path: 'subjects/:subjectSlug/chapters/:chapterSlug/lessons/:lessonSlug', element: <LessonPage /> },
      // IMPORTANT: Add a catch-all for truly unmatched routes if you don't have one,
      // to ensure NotFoundPage is explicitly rendered by a route.
      // However, the root errorElement should still catch errors even without this.
       { path: "*", element: <NotFoundPage /> } // Add this within the children of MainLayout
    ],
  },
]);