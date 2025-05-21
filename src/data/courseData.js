// src/data/courseData.js

// Helper function to create simple lesson IDs (optional, but can be useful)
// const createLessonId = (subjectPrefix, chapterPrefix, lessonIndex) => `${subjectPrefix}-ch${chapterPrefix}-l${lessonIndex}`;

export const subjects = [
  {
    id: 'math',
    name: 'Mathematics',
    slug: 'mathematics',
    icon: '🧮',
    color: 'bg-blue-500',
    description: 'Explore the world of numbers, shapes, and logic!',
    chapters: [
      // --- Chapter 1: Algebra Basics ---
      {
        id: 'math-ch1-algebra-basics', // Unique ID for the chapter
        name: 'Algebra Basics',
        slug: 'algebra-basics', // URL-friendly slug
        description: 'Understand the building blocks of algebra, including variables, expressions, and simple equations.',
        lessons: [
          {
            id: 'math-l1-variables', // Unique ID for the lesson
            name: 'What is a Variable?',
            slug: 'what-is-a-variable',
            type: 'text', // 'text', 'video', or 'quiz'
            // Simple HTML content for text lessons. Use <span> with highlight classes for key terms.
            content: `
              <h2 class="text-2xl font-semibold mb-3 font-sans">Understanding Variables</h2>
              <p class="mb-4">In mathematics, a <span class="highlight highlight-blue">variable</span> is a symbol, usually a letter (like x, y, or a), that represents a quantity that can change or vary. Think of it as a placeholder for a number that you don't know yet, or one that can take on different values.</p>
              <p class="mb-4">For example, if we say "Let <code class="font-mono bg-gray-200 dark:bg-gray-700 px-1 rounded">x</code> be the number of apples in a basket," <code class="font-mono bg-gray-200 dark:bg-gray-700 px-1 rounded">x</code> is a variable because the number of apples can change.</p>
              <h3 class="text-xl font-semibold mb-2 mt-5 font-sans">Why are Variables Important?</h3>
              <ul class="list-disc list-inside mb-4 pl-4">
                <li>They allow us to write general rules and formulas. (e.g., Area of a rectangle = length × width, or <code class="font-mono bg-gray-200 dark:bg-gray-700 px-1 rounded">A = l × w</code>)</li>
                <li>They help us solve for unknown values in equations.</li>
                <li>They are fundamental to understanding more advanced mathematical concepts.</li>
              </ul>
              <p>Variables are a <span class="highlight highlight-pink">core concept</span> in algebra and beyond!</p>
            `,
          },
          {
            id: 'math-l2-expressions',
            name: 'Algebraic Expressions',
            slug: 'algebraic-expressions',
            type: 'text',
            content: `
              <h2 class="text-2xl font-semibold mb-3 font-sans">What are Algebraic Expressions?</h2>
              <p class="mb-4">An <span class="highlight highlight-green">algebraic expression</span> is a combination of variables, numbers (constants), and at least one arithmetic operation (+, -, ×, ÷).</p>
              <p class="mb-4">Examples of algebraic expressions:</p>
              <ul class="list-disc list-inside mb-4 pl-4 font-mono bg-gray-100 dark:bg-gray-700 p-3 rounded">
                <li><code class="px-1">x + 5</code></li>
                <li><code class="px-1">3y - 7</code></li>
                <li><code class="px-1">2a × b</code> (often written as <code class="px-1">2ab</code>)</li>
                <li><code class="px-1">(c + d) / 4</code></li>
              </ul>
              <p class="mb-4">Unlike an <span class="highlight highlight-yellow">equation</span>, an expression does not have an equals sign. It doesn't state that two things are equal; it simply represents a value that can be calculated if you know the values of the variables.</p>
              <h3 class="text-xl font-semibold mb-2 mt-5 font-sans">Parts of an Expression</h3>
              <p class="mb-2">Consider the expression <code class="font-mono bg-gray-200 dark:bg-gray-700 px-1 rounded">4x - 9</code>:</p>
              <ul class="list-disc list-inside mb-4 pl-4">
                <li><code class="font-mono bg-gray-200 dark:bg-gray-700 px-1 rounded">x</code> is the <span class="highlight highlight-blue">variable</span>.</li>
                <li><code class="font-mono bg-gray-200 dark:bg-gray-700 px-1 rounded">4</code> is the <span class="highlight highlight-purple">coefficient</span> of x (the number multiplied by the variable).</li>
                <li><code class="font-mono bg-gray-200 dark:bg-gray-700 px-1 rounded">9</code> is a <span class="highlight highlight-pink">constant</span> (a number on its own).</li>
                <li><code class="font-mono bg-gray-200 dark:bg-gray-700 px-1 rounded">4x</code> and <code class="font-mono bg-gray-200 dark:bg-gray-700 px-1 rounded">9</code> are <span class="highlight highlight-green">terms</span> of the expression.</li>
              </ul>
            `,
          },
          {
            id: 'math-l3-simple-equations-intro-video',
            name: 'Intro to Simple Equations (Video)',
            slug: 'intro-simple-equations-video',
            type: 'video',
            videoUrl: 'https://www.youtube.com/embed/f15zA0PhSek', // Example Khan Academy video
            // Replace with a relevant video URL. The 'embed' version is usually best.
          },
          {
            id: 'math-l4-algebra-quiz-1',
            name: 'Algebra Basics Quiz',
            slug: 'algebra-basics-quiz-1',
            type: 'quiz',
            questions: [
              { q: 'What is a symbol that represents a quantity that can change?', a: 'Variable', options: ['Constant', 'Variable', 'Coefficient', 'Term'] },
              { q: 'In the expression 7y + 2, what is 7?', a: 'Coefficient', options: ['Variable', 'Constant', 'Term', 'Coefficient'] },
              { q: 'Which of these is an equation, not an expression: 3x - 5 OR 3x - 5 = 10?', a: '3x - 5 = 10', options: ['3x - 5', '3x - 5 = 10'] },
            ],
          },
        ],
      },
      // --- Chapter 2: Solving Linear Equations ---
      {
        id: 'math-ch2-linear-equations',
        name: 'Solving Linear Equations',
        slug: 'solving-linear-equations',
        description: 'Learn techniques to find the value of variables in linear equations.',
        lessons: [
          {
            id: 'math-l5-one-step-equations',
            name: 'Solving One-Step Equations',
            slug: 'solving-one-step-equations',
            type: 'text',
            content: `
              <h2 class="text-2xl font-semibold mb-3 font-sans">Solving One-Step Linear Equations</h2>
              <p class="mb-4">A one-step linear equation is an equation that can be solved in just one operation (addition, subtraction, multiplication, or division) to isolate the variable.</p>
              <p class="mb-4">The goal is to get the <span class="highlight highlight-blue">variable</span> by itself on one side of the equals sign.</p>
              <h3 class="text-xl font-semibold mb-2 mt-5 font-sans">Example 1: Using Subtraction</h3>
              <p class="mb-2">Solve: <code class="font-mono bg-gray-200 dark:bg-gray-700 px-1 rounded">x + 5 = 12</code></p>
              <p class="mb-4">To isolate <code class="font-mono bg-gray-200 dark:bg-gray-700 px-1 rounded">x</code>, we need to undo the "+ 5". The opposite of adding 5 is subtracting 5. We must do this to <span class="highlight highlight-pink">both sides</span> of the equation to keep it balanced:</p>
              <p class="font-mono bg-gray-100 dark:bg-gray-700 p-3 rounded mb-4">
                x + 5 - 5 = 12 - 5<br>
                x = 7
              </p>
              <h3 class="text-xl font-semibold mb-2 mt-5 font-sans">Example 2: Using Addition</h3>
              <p class="mb-2">Solve: <code class="font-mono bg-gray-200 dark:bg-gray-700 px-1 rounded">y - 3 = 10</code></p>
              <p class="mb-4">To isolate <code class="font-mono bg-gray-200 dark:bg-gray-700 px-1 rounded">y</code>, undo the "- 3" by adding 3 to both sides:</p>
              <p class="font-mono bg-gray-100 dark:bg-gray-700 p-3 rounded mb-4">
                y - 3 + 3 = 10 + 3<br>
                y = 13
              </p>
              <h3 class="text-xl font-semibold mb-2 mt-5 font-sans">Example 3: Using Division</h3>
              <p class="mb-2">Solve: <code class="font-mono bg-gray-200 dark:bg-gray-700 px-1 rounded">4a = 20</code></p>
              <p class="mb-4">(Remember <code class="font-mono bg-gray-200 dark:bg-gray-700 px-1 rounded">4a</code> means 4 × a). To isolate <code class="font-mono bg-gray-200 dark:bg-gray-700 px-1 rounded">a</code>, undo the "× 4" by dividing both sides by 4:</p>
              <p class="font-mono bg-gray-100 dark:bg-gray-700 p-3 rounded mb-4">
                4a / 4 = 20 / 4<br>
                a = 5
              </p>
              <h3 class="text-xl font-semibold mb-2 mt-5 font-sans">Example 4: Using Multiplication</h3>
              <p class="mb-2">Solve: <code class="font-mono bg-gray-200 dark:bg-gray-700 px-1 rounded">b / 2 = 9</code></p>
              <p class="mb-4">(Remember <code class="font-mono bg-gray-200 dark:bg-gray-700 px-1 rounded">b / 2</code> means b divided by 2). To isolate <code class="font-mono bg-gray-200 dark:bg-gray-700 px-1 rounded">b</code>, undo the "÷ 2" by multiplying both sides by 2:</p>
              <p class="font-mono bg-gray-100 dark:bg-gray-700 p-3 rounded mb-4">
                (b / 2) × 2 = 9 × 2<br>
                b = 18
              </p>
            `,
          },
          {
            id: 'math-l6-two-step-equations-video',
            name: 'Solving Two-Step Equations (Video)',
            slug: 'solving-two-step-equations-video',
            type: 'video',
            videoUrl: 'https://www.youtube.com/embed/9ITsXIZjII0', // Example Khan Academy video
          },
          // Add more lessons (text, video, quiz) for this chapter
        ],
      },
      // --- Add more chapters here for Mathematics ---
      // e.g., Geometry Basics, Fractions, Decimals, etc.
    ],
  },
  // ... (Keep your AI subject and any others)
  {
    id: 'ai',
    name: 'Artificial Intelligence',
    slug: 'artificial-intelligence',
    icon: '🤖',
    color: 'bg-purple-500',
    description: 'Learn how machines can think and learn.',
    chapters: [
      {
        id: 'ai-ch1-intro',
        name: 'Introduction to AI',
        slug: 'introduction-to-ai',
        description: 'What is AI and why is it important?',
        lessons: [
          { id: 'ai-l1-what-is-ai', name: 'What is AI?', slug: 'what-is-ai', type: 'text', content: 'AI is cool... <span class="highlight highlight-blue">Machine Learning</span> ...' },
        ],
      }
    ],
  },
];

// Helper functions (keep these as they are)
export const getSubjectBySlug = (slug) => subjects.find(s => s.slug === slug);
export const getChapterBySlugs = (subjectSlug, chapterSlug) => {
  const subject = getSubjectBySlug(subjectSlug);
  return subject?.chapters.find(c => c.slug === chapterSlug);
};
export const getLessonBySlugs = (subjectSlug, chapterSlug, lessonSlug) => {
  const chapter = getChapterBySlugs(subjectSlug, chapterSlug);
  return chapter?.lessons.find(l => l.slug === lessonSlug);
};