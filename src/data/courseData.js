// src/data/courseData.js
export const subjects = [
  {
    id: 'math',
    name: 'Mathematics',
    slug: 'mathematics',
    icon: '🧮', // or path to an image/SVG
    color: 'bg-blue-500', // Tailwind class for card background
    description: 'Explore the world of numbers, shapes, and logic!',
    chapters: [
      {
        id: 'math-alg-1',
        name: 'Algebra Basics',
        slug: 'algebra-basics',
        description: 'Introduction to variables and equations.',
        lessons: [
          { id: 'm-a1-l1', name: 'What is a Variable?', slug: 'what-is-a-variable', type: 'text', content: 'A variable is a symbol... <span class="highlight highlight-blue">Key Term</span> ...' },
          { id: 'm-a1-l2', name: 'Solving Simple Equations', slug: 'solving-simple-equations', type: 'video', videoUrl: 'https://www.youtube.com/embed/example' },
          { id: 'm-a1-l3', name: 'Algebra Quiz 1', slug: 'algebra-quiz-1', type: 'quiz', questions: [{ q: '...', a: '...'}] },
        ],
      },
      // ... more chapters
    ],
  },
  {
    id: 'ai',
    name: 'Artificial Intelligence',
    slug: 'artificial-intelligence',
    icon: '🤖',
    color: 'bg-purple-500',
    description: 'Learn how machines can think and learn.',
    chapters: [ /* ... */ ],
  },
  // ... more subjects
];

// Helper functions to get data (you'll need these)
export const getSubjectBySlug = (slug) => subjects.find(s => s.slug === slug);
export const getChapterBySlugs = (subjectSlug, chapterSlug) => {
  const subject = getSubjectBySlug(subjectSlug);
  return subject?.chapters.find(c => c.slug === chapterSlug);
};
export const getLessonBySlugs = (subjectSlug, chapterSlug, lessonSlug) => {
  const chapter = getChapterBySlugs(subjectSlug, chapterSlug);
  return chapter?.lessons.find(l => l.slug === lessonSlug);
};