// src/data/courseData.js
export const subjects = [
  {
    id: 'math',
    name: 'Mathematics',
    slug: 'mathematics',
    icon: '🧮',
    color: 'bg-blue-500',
    description: 'Explore the world of numbers, shapes, logic, and their applications!',
    chapters: [
      {
        id: 'math-alg-1',
        name: 'Algebra Basics',
        slug: 'algebra-basics',
        description: 'Introduction to variables, expressions, equations, and inequalities.',
        lessons: [
          {
            id: 'm-a1-l1',
            name: 'What is a Variable?',
            slug: 'what-is-a-variable',
            type: 'text',
            content: 'A variable is a symbol, often a letter like 𝑥 or 𝑦, used to represent a number that is not yet known or can change. It\'s a placeholder in mathematical expressions. For example, in the equation <span class="highlight highlight-blue">𝑥 + 5 = 10</span>, \'𝑥\' is the variable. Variables are fundamental to algebra, allowing us to write general rules, model situations, and solve for unknown quantities. Understanding them is the first step to unlocking algebraic thinking.'
          },
          {
            id: 'm-a1-l2',
            name: 'Understanding Expressions and Equations',
            slug: 'expressions-vs-equations',
            type: 'text',
            content: 'An <span class="highlight highlight-blue">algebraic expression</span> is a combination of variables, numbers, and at least one operation (e.g., 2𝑥 + 3). It represents a value. An <span class="highlight highlight-blue">equation</span>, on the other hand, states that two expressions are equal (e.g., 2𝑥 + 3 = 7). The goal with an equation is often to find the value of the variable that makes the statement true. Equations have an equals sign, expressions do not.'
          },
          {
            id: 'm-a1-l3',
            name: 'Solving Simple Linear Equations',
            slug: 'solving-simple-linear-equations',
            type: 'video',
            videoUrl: 'https://www.youtube.com/embed/LkoOc_j2y0I' // Original video
          },
          {
            id: 'm-a1-l4',
            name: 'Introduction to Inequalities',
            slug: 'intro-to-inequalities',
            type: 'text',
            content: 'Inequalities compare two values, showing if one is less than (<), greater than (>), less than or equal to (≤), or greater than or equal to (≥) another. For example, <span class="highlight highlight-blue">𝑥 + 2 > 5</span> is an inequality. Solving inequalities is similar to solving equations, but with a key difference: multiplying or dividing by a negative number reverses the inequality sign.'
          },
          {
            id: 'm-a1-l5',
            name: 'Algebra Basics Quiz',
            slug: 'algebra-basics-quiz',
            type: 'quiz',
            questions: [
              { q: 'If 𝑥 + 3 = 7, what is the value of 𝑥?', options: ['3', '4', '7', '10'], correctAnswer: '4' },
              { q: 'A symbol that represents an unknown value is called a:', options: ['Constant', 'Equation', 'Variable', 'Operator'], correctAnswer: 'Variable' },
              { q: 'Which of these is an expression: 3𝑦 − 5 or 3𝑦 − 5 = 10?', options: ['3𝑦 − 5', '3𝑦 − 5 = 10', 'Neither', 'Both'], correctAnswer: '3𝑦 − 5' },
              { q: 'If 2𝑥 < 8, which of the following is true for 𝑥?', options: ['𝑥 < 4', '𝑥 > 4', '𝑥 = 4', '𝑥 < -4'], correctAnswer: '𝑥 < 4'}
            ]
          },
        ],
      },
      {
        id: 'math-adv-alg-1',
        name: 'Advanced Algebra Concepts',
        slug: 'advanced-algebra-concepts',
        description: 'Dive deeper into systems of equations, polynomials, and functions.',
        lessons: [
            {
                id: 'm-aa1-l1',
                name: 'Systems of Linear Equations',
                slug: 'systems-of-linear-equations',
                type: 'text',
                content: 'A <span class="highlight highlight-blue">system of linear equations</span> consists of two or more linear equations with the same variables. The solution to a system is the set of values for the variables that satisfy all equations simultaneously. Common methods for solving include substitution, elimination, and graphical methods. For example, 𝑥 + 𝑦 = 5 and 2𝑥 − 𝑦 = 4 form a system.'
            },
            {
                id: 'm-aa1-l2',
                name: 'Introduction to Polynomials',
                slug: 'intro-to-polynomials',
                type: 'video',
                videoUrl: 'https://www.youtube.com/embed/Pq0S9VI2lqY' // Example video
            },
            {
                id: 'm-aa1-l3',
                name: 'Understanding Functions',
                slug: 'understanding-functions',
                type: 'text',
                content: 'A <span class="highlight highlight-blue">function</span> is a rule that assigns to each input value exactly one output value. We often use notation like 𝑓(𝑥) (read "f of x") to represent a function. For example, if 𝑓(𝑥) = 2𝑥 + 1, then 𝑓(3) = 2(3) + 1 = 7. Functions are a cornerstone of higher mathematics and describe relationships between quantities.'
            },
            {
                id: 'm-aa1-l4',
                name: 'Advanced Algebra Quiz',
                slug: 'advanced-algebra-quiz',
                type: 'quiz',
                questions: [
                    { q: 'What is the solution to the system: 𝑥 + 𝑦 = 3 and 𝑥 − 𝑦 = 1?', options: ['𝑥=1, 𝑦=2', '𝑥=2, 𝑦=1', '𝑥=0, 𝑦=3', '𝑥=3, 𝑦=0'], correctAnswer: '𝑥=2, 𝑦=1' },
                    { q: 'Which of the following is a polynomial? 𝑥²+2𝑥+1, √𝑥+3, 1/𝑥 + 5', options: ['𝑥²+2𝑥+1', '√𝑥+3', '1/𝑥 + 5', 'All of them'], correctAnswer: '𝑥²+2𝑥+1' },
                    { q: 'If 𝑔(𝑥) = 𝑥² − 3, what is 𝑔(4)?', options: ['1', '13', '5', '19'], correctAnswer: '13' }
                ]
            }
        ]
      },
      {
        id: 'math-geo-1',
        name: 'Introduction to Geometry',
        slug: 'intro-to-geometry',
        description: 'Learn about fundamental geometric shapes, lines, angles, and their properties.',
        lessons: [
          {
            id: 'm-g1-l1',
            name: 'Points, Lines, and Planes',
            slug: 'points-lines-planes',
            type: 'text',
            content: 'Geometry starts with three fundamental concepts: a <span class="highlight highlight-blue">point</span> is a specific location in space with no dimension (no size, no width, no length, no depth). A <span class="highlight highlight-blue">line</span> is a straight one-dimensional figure that extends infinitely in both directions. A <span class="highlight highlight-blue">plane</span> is a flat, two-dimensional surface that extends infinitely far. These are the building blocks for all other geometric figures.'
          },
          {
            id: 'm-g1-l2',
            name: 'Types of Angles',
            slug: 'types-of-angles',
            type: 'video',
            videoUrl: 'https://www.youtube.com/embed/DGKwdHMiqCg' // Original video
          },
          {
            id: 'm-g1-l3',
            name: 'Triangles and Their Properties',
            slug: 'triangles-properties',
            type: 'text',
            content: 'A <span class="highlight highlight-blue">triangle</span> is a polygon with three edges and three vertices. Key properties include: the sum of angles in a triangle is always 180 degrees. Triangles can be classified by their sides (equilateral, isosceles, scalene) or by their angles (acute, obtuse, right-angled). The <span class="highlight highlight-blue">Pythagorean theorem</span> (a² + b² = c²) is crucial for right-angled triangles.'
          },
          {
            id: 'm-g1-l4',
            name: 'Quadrilaterals and Circles',
            slug: 'quadrilaterals-circles',
            type: 'text',
            content: 'A <span class="highlight highlight-blue">quadrilateral</span> is a polygon with four sides (e.g., squares, rectangles, parallelograms, trapezoids). A <span class="highlight highlight-blue">circle</span> is a shape consisting of all points in a plane that are a given distance (the radius) from a given point (the center). Key terms for circles include radius, diameter, circumference (2πr), and area (πr²).'
          },
          {
            id: 'm-g1-l5',
            name: 'Geometry Fundamentals Quiz',
            slug: 'geometry-quiz-1',
            type: 'quiz',
            questions: [
              { q: 'What is the sum of angles in any triangle?', options: ['90°', '180°', '270°', '360°'], correctAnswer: '180°' },
              { q: 'A flat surface that extends infinitely is a:', options: ['Point', 'Line', 'Plane', 'Angle'], correctAnswer: 'Plane' },
              { q: 'If a right-angled triangle has two shorter sides of length 3 and 4, what is the length of the hypotenuse?', options: ['5', '6', '7', '2.5'], correctAnswer: '5' },
              { q: 'The distance around a circle is called its:', options: ['Radius', 'Diameter', 'Area', 'Circumference'], correctAnswer: 'Circumference' }
            ]
          }
        ],
      },
      {
        id: 'math-calc-intro',
        name: 'Introduction to Calculus Concepts',
        slug: 'intro-to-calculus',
        description: 'Grasp the foundational ideas of limits, derivatives, and integrals.',
        lessons: [
            {
                id: 'm-ci-l1',
                name: 'What are Limits?',
                slug: 'what-are-limits',
                type: 'text',
                content: 'In calculus, a <span class="highlight highlight-blue">limit</span> describes the value that a function or sequence "approaches" as the input or index approaches some value. Limits are essential for defining continuity, derivatives, and integrals. For example, as 𝑥 gets closer and closer to 2, the function 𝑓(𝑥) = 𝑥 + 3 gets closer and closer to 5. We say the limit of 𝑓(𝑥) as 𝑥 approaches 2 is 5.'
            },
            {
                id: 'm-ci-l2',
                name: 'Understanding Derivatives (Rate of Change)',
                slug: 'understanding-derivatives',
                type: 'video',
                videoUrl: 'https://www.youtube.com/embed/N2Y291eG2tE' // Example video
            },
            {
                id: 'm-ci-l3',
                name: 'Introduction to Integrals (Area Under a Curve)',
                slug: 'intro-to-integrals',
                type: 'text',
                content: 'An <span class="highlight highlight-blue">integral</span> can be thought of as a way to sum up infinitely many small quantities. Geometrically, a definite integral represents the <span class="highlight highlight-blue">area under the curve</span> of a function between two points. Integration is the reverse process of differentiation. It has applications in finding areas, volumes, and solving differential equations.'
            },
            {
                id: 'm-ci-l4',
                name: 'Calculus Concepts Quiz',
                slug: 'calculus-concepts-quiz',
                type: 'quiz',
                questions: [
                    { q: 'A derivative fundamentally measures:', options: ['Area under a curve', 'The sum of a series', 'Rate of change', 'The average value'], correctAnswer: 'Rate of change' },
                    { q: 'The concept of a limit is crucial for defining:', options: ['Only derivatives', 'Only integrals', 'Both derivatives and integrals', 'Neither'], correctAnswer: 'Both derivatives and integrals' },
                    { q: 'Geometrically, a definite integral can represent:', options: ['Slope of a tangent line', 'Maximum value of a function', 'Area under a curve', 'A point of inflection'], correctAnswer: 'Area under a curve'}
                ]
            }
        ]
      },
      {
        id: 'math-stats-prob',
        name: 'Basic Statistics and Probability',
        slug: 'basic-stats-probability',
        description: 'Understand data analysis, central tendency, and the likelihood of events.',
        lessons: [
            {
                id: 'm-sp-l1',
                name: 'Measures of Central Tendency',
                slug: 'central-tendency',
                type: 'text',
                content: '<span class="highlight highlight-blue">Mean</span> (average), <span class="highlight highlight-blue">median</span> (middle value), and <span class="highlight highlight-blue">mode</span> (most frequent value) are measures of central tendency. They describe the "center" of a dataset. For example, for the data set {2, 3, 3, 5, 7, 10}, the mean is (2+3+3+5+7+10)/6 = 5, the median is (3+5)/2 = 4, and the mode is 3.'
            },
            {
                id: 'm-sp-l2',
                name: 'Introduction to Probability',
                slug: 'intro-to-probability',
                type: 'video',
                videoUrl: 'https://www.youtube.com/embed/KzfWUEJjG18' // Example Video
            },
            {
                id: 'm-sp-l3',
                name: 'Understanding Data Distributions',
                slug: 'data-distributions',
                type: 'text',
                content: 'A <span class="highlight highlight-blue">data distribution</span> shows how often different values occur in a dataset. Common distributions include the normal distribution (bell curve), binomial distribution, and uniform distribution. Visual tools like histograms and bar charts help visualize distributions. Understanding distributions is key for statistical inference.'
            },
            {
                id: 'm-sp-l4',
                name: 'Statistics & Probability Quiz',
                slug: 'stats-probability-quiz',
                type: 'quiz',
                questions: [
                    { q: 'What is the median of the numbers: 1, 5, 2, 8, 3?', options: ['2', '3', '3.8', '5'], correctAnswer: '3' },
                    { q: 'If you flip a fair coin, what is the probability of getting heads?', options: ['0', '0.25', '0.5', '1'], correctAnswer: '0.5' },
                    { q: 'Which measure of central tendency is most affected by outliers?', options: ['Mean', 'Median', 'Mode', 'Range'], correctAnswer: 'Mean'}
                ]
            }
        ]
      }
    ],
  },
  {
    id: 'ai',
    name: 'Artificial Intelligence',
    slug: 'artificial-intelligence',
    icon: '🤖',
    color: 'bg-purple-500',
    description: 'Discover how machines can simulate human-like thinking, learning, and problem-solving.',
    chapters: [
      {
        id: 'ai-intro-1',
        name: 'Foundations of AI',
        slug: 'foundations-of-ai',
        description: 'Understanding the core concepts, history, and categories of Artificial Intelligence.',
        lessons: [
          {
            id: 'ai-i1-l1',
            name: 'Defining AI',
            slug: 'defining-ai',
            type: 'text',
            content: 'Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think like humans and mimic their actions. The term may also be applied to any machine that exhibits traits associated with a human mind such as <span class="highlight highlight-purple">learning</span> (acquiring information and rules for using the information), <span class="highlight highlight-purple">reasoning</span> (using rules to reach approximate or definite conclusions) and <span class="highlight highlight-purple">self-correction</span>. AI encompasses a wide range of technologies and approaches.'
          },
          {
            id: 'ai-i1-l2',
            name: 'A Brief History of AI',
            slug: 'history-of-ai',
            type: 'text',
            content: 'AI\'s journey began in the mid-20th century with pioneers like Alan Turing. Key milestones include the <span class="highlight highlight-purple">Dartmouth Workshop</span> in 1956, which coined the term "Artificial Intelligence." Early AI focused on problem-solving and symbolic reasoning. After periods of "AI winters" (reduced funding and interest), AI experienced a resurgence with advancements in machine learning, computing power, and big data in the 21st century.'
          },
          {
            id: 'ai-i1-l3',
            name: 'Types of AI: Narrow vs. General vs. Superintelligence',
            slug: 'types-of-ai',
            type: 'video',
            videoUrl: 'https://www.youtube.com/embed/ad79nYk2keg' // Original video
          },
          {
            id: 'ai-i1-l4',
            name: 'Key AI Concepts: Agents and Environments',
            slug: 'ai-agents-environments',
            type: 'text',
            content: 'An <span class="highlight highlight-purple">AI agent</span> is anything that can be viewed as perceiving its environment through sensors and acting upon that environment through actuators. A rational agent is one that acts to achieve the best expected outcome. The <span class="highlight highlight-purple">environment</span> is the context in which the agent operates. For example, a self-driving car (agent) perceives its surroundings (environment) using cameras and LiDAR, and acts by steering, accelerating, or braking.'
          },
          {
            id: 'ai-i1-l5',
            name: 'Foundations of AI Quiz',
            slug: 'foundations-ai-quiz',
            type: 'quiz',
            questions: [
              { q: 'Which of the following is an example of Narrow AI (Weak AI)?', options: ['A human-like robot with consciousness', 'A spam filter for email', 'A system that can perform any intellectual task a human can', 'HAL 9000'], correctAnswer: 'A spam filter for email' },
              { q: 'The event that coined the term "Artificial Intelligence" was:', options: ['Turing Test proposal', 'Deep Blue vs Kasparov', 'Dartmouth Workshop', 'AlphaGo vs Lee Sedol'], correctAnswer: 'Dartmouth Workshop'},
              { q: 'An AI system that perceives its environment and acts upon it is called an:', options: ['Algorithm', 'Model', 'Agent', 'Dataset'], correctAnswer: 'Agent'}
            ]
          },
        ],
      },
      {
        id: 'ai-ml-1',
        name: 'Machine Learning Fundamentals',
        slug: 'machine-learning-fundamentals',
        description: 'Explore how AI systems learn from data without explicit programming.',
        lessons: [
            {
                id: 'ai-ml1-l1',
                name: 'What is Machine Learning?',
                slug: 'what-is-ml',
                type: 'text',
                content: '<span class="highlight highlight-purple">Machine Learning (ML)</span> is a subfield of AI that gives computers the ability to learn without being explicitly programmed. ML algorithms build a model based on sample data, known as <span class="highlight highlight-purple">training data</span>, in order to make predictions or decisions without being explicitly programmed to perform the task. It\'s about recognizing patterns in data.'
            },
            {
                id: 'ai-ml1-l2',
                name: 'Supervised Learning: Regression & Classification',
                slug: 'supervised-learning',
                type: 'video',
                videoUrl: 'https://www.youtube.com/embed/UKhX2KPM_2s' // Example video
            },
            {
                id: 'ai-ml1-l3',
                name: 'Unsupervised Learning: Clustering & Association',
                slug: 'unsupervised-learning',
                type: 'text',
                content: '<span class="highlight highlight-purple">Unsupervised learning</span> is used when the information used to train is neither classified nor labeled. The algorithm works on its own to discover information. It mainly deals with the unlabelled data. <span class="highlight highlight-purple">Clustering</span> (grouping similar data points) and <span class="highlight highlight-purple">association rule learning</span> (discovering relationships between variables in large datasets) are common unsupervised tasks.'
            },
            {
                id: 'ai-ml1-l4',
                name: 'Introduction to Reinforcement Learning',
                slug: 'reinforcement-learning-intro',
                type: 'text',
                content: '<span class="highlight highlight-purple">Reinforcement Learning (RL)</span> is an area of machine learning concerned with how intelligent agents ought to take actions in an environment in order to maximize the notion of cumulative reward. An agent learns by trial and error, receiving <span class="highlight highlight-purple">rewards or penalties</span> for its actions. This is often used in robotics, game playing (like AlphaGo), and navigation systems.'
            },
            {
                id: 'ai-ml1-l5',
                name: 'Machine Learning Concepts Quiz',
                slug: 'ml-concepts-quiz',
                type: 'quiz',
                questions: [
                    { q: 'Which type of ML uses labeled training data?', options: ['Supervised Learning', 'Unsupervised Learning', 'Reinforcement Learning', 'Semi-Supervised Learning'], correctAnswer: 'Supervised Learning' },
                    { q: 'Predicting house prices based on features like size and location is an example of:', options: ['Classification', 'Clustering', 'Regression', 'Reinforcement Learning'], correctAnswer: 'Regression' },
                    { q: 'An AI learning to play chess by receiving rewards for good moves is using:', options: ['Supervised Learning', 'Unsupervised Learning', 'Reinforcement Learning', 'Genetic Algorithms'], correctAnswer: 'Reinforcement Learning'}
                ]
            }
        ]
      },
      {
        id: 'ai-dl-1',
        name: 'Deep Learning and Neural Networks',
        slug: 'deep-learning-neural-networks',
        description: 'Delve into the architecture of neural networks and their role in deep learning.',
        lessons: [
            {
                id: 'ai-dl1-l1',
                name: 'What are Neural Networks?',
                slug: 'what-are-neural-networks',
                type: 'text',
                content: '<span class="highlight highlight-purple">Artificial Neural Networks (ANNs)</span> are computing systems vaguely inspired by the biological neural networks that constitute animal brains. An ANN is based on a collection of connected units or nodes called <span class="highlight highlight-purple">artificial neurons</span>, which loosely model the neurons in a biological brain. Each connection, like the synapses in a biological brain, can transmit a signal from one artificial neuron to another. An artificial neuron that receives a signal can process it and then signal additional artificial neurons connected to it.'
            },
            {
                id: 'ai-dl1-l2',
                name: 'Introduction to Deep Learning',
                slug: 'intro-to-deep-learning',
                type: 'video',
                videoUrl: 'https://www.youtube.com/embed/6M5VXKLf4D4' // Example video (3Blue1Brown)
            },
            {
                id: 'ai-dl1-l3',
                name: 'Activation Functions and Layers',
                slug: 'activation-functions-layers',
                type: 'text',
                content: 'In a neural network, <span class="highlight highlight-purple">layers</span> are groups of neurons that process information. Common types include input, hidden, and output layers. <span class="highlight highlight-purple">Activation functions</span> decide whether a neuron should be activated or not by calculating a weighted sum and further adding bias to it. They introduce non-linearity into the output of a neuron, which is crucial for learning complex patterns. Examples include Sigmoid, ReLU, and Tanh.'
            },
            {
                id: 'ai-dl1-l4',
                name: 'Convolutional Neural Networks (CNNs) for Vision',
                slug: 'cnns-for-vision',
                type: 'text',
                content: '<span class="highlight highlight-purple">Convolutional Neural Networks (CNNs)</span> are a class of deep neural networks, most commonly applied to analyzing visual imagery. They use a special kind of linear operation called convolution. CNNs have layers like convolutional layers, pooling layers, and fully connected layers, making them highly effective for tasks like image recognition and object detection.'
            },
            {
                id: 'ai-dl1-l5',
                name: 'Deep Learning Quiz',
                slug: 'deep-learning-quiz',
                type: 'quiz',
                questions: [
                    { q: 'What is the basic processing unit of a Neural Network?', options: ['Pixel', 'Layer', 'Neuron', 'Synapse'], correctAnswer: 'Neuron' },
                    { q: 'Deep Learning typically refers to Neural Networks with many:', options: ['Inputs', 'Outputs', 'Hidden Layers', 'Activation Functions'], correctAnswer: 'Hidden Layers' },
                    { q: 'Which type of Neural Network is particularly good for image recognition?', options: ['Recurrent Neural Network (RNN)', 'Convolutional Neural Network (CNN)', 'Feedforward Neural Network', 'Autoencoder'], correctAnswer: 'Convolutional Neural Network (CNN)'}
                ]
            }
        ]
      },
      {
        id: 'ai-subfields-1',
        name: 'Key AI Subfields and Applications',
        slug: 'ai-subfields-applications',
        description: 'Explore major areas within AI like NLP, Computer Vision, and Robotics.',
        lessons: [
            {
                id: 'ai-sf1-l1',
                name: 'Natural Language Processing (NLP)',
                slug: 'natural-language-processing',
                type: 'text',
                content: '<span class="highlight highlight-purple">Natural Language Processing (NLP)</span> is a subfield of AI that focuses on enabling computers to understand, interpret, and generate human language. Applications include <span class="highlight highlight-purple">chatbots</span>, machine translation (e.g., Google Translate), sentiment analysis, and text summarization. NLP combines computational linguistics with statistical, machine learning, and deep learning models.'
            },
            {
                id: 'ai-sf1-l2',
                name: 'Computer Vision (CV)',
                slug: 'computer-vision',
                type: 'video',
                videoUrl: 'https://www.youtube.com/embed/PGLsA4Z12n4' // Example video
            },
            {
                id: 'ai-sf1-l3',
                name: 'Robotics and AI',
                slug: 'robotics-and-ai',
                type: 'text',
                content: '<span class="highlight highlight-purple">Robotics</span> involves the design, construction, operation, and use of robots. AI plays a crucial role in making robots intelligent, enabling them to perceive their environment, make decisions, and perform tasks autonomously. This includes areas like robot navigation, manipulation, human-robot interaction, and swarm robotics. Examples range from industrial robots to autonomous drones and humanoid robots.'
            },
            {
                id: 'ai-sf1-l4',
                name: 'Expert Systems and Knowledge Representation',
                slug: 'expert-systems',
                type: 'text',
                content: '<span class="highlight highlight-purple">Expert Systems</span> were an early form of AI designed to solve complex problems in a particular domain, at a level comparable to a human expert. They rely on a <span class="highlight highlight-purple">knowledge base</span> (facts and rules) and an <span class="highlight highlight-purple">inference engine</span> (applies rules to facts to deduce new information). While less prominent now, their principles influenced modern AI systems.'
            },
            {
                id: 'ai-sf1-l5',
                name: 'AI Subfields Quiz',
                slug: 'ai-subfields-quiz',
                type: 'quiz',
                questions: [
                    { q: 'Which AI subfield deals with enabling computers to understand human language?', options: ['Computer Vision', 'Robotics', 'Natural Language Processing', 'Expert Systems'], correctAnswer: 'Natural Language Processing' },
                    { q: 'Facial recognition technology primarily falls under:', options: ['Natural Language Processing', 'Computer Vision', 'Reinforcement Learning', 'Knowledge Representation'], correctAnswer: 'Computer Vision' },
                    { q: 'An AI system that provides medical diagnosis based on symptoms and patient data could be considered a modern form of:', options: ['Robotics Control System', 'Expert System', 'Clustering Algorithm', 'NLP Parser'], correctAnswer: 'Expert System'}
                ]
            }
        ]
      },
      {
        id: 'ai-ethics-future',
        name: 'AI Ethics and The Future',
        slug: 'ai-ethics-future',
        description: 'Discussing the ethical implications, challenges, and future prospects of AI.',
        lessons: [
            {
                id: 'ai-ef-l1',
                name: 'Bias and Fairness in AI',
                slug: 'bias-fairness-ai',
                type: 'text',
                content: 'AI systems learn from data. If this data reflects existing societal biases (e.g., gender, race), the AI can perpetuate or even amplify these biases. Ensuring <span class="highlight highlight-purple">fairness</span> and mitigating <span class="highlight highlight-purple">bias</span> in AI algorithms and datasets is a critical ethical challenge. This involves careful data collection, model auditing, and diverse development teams.'
            },
            {
                id: 'ai-ef-l2',
                name: 'Accountability and Transparency in AI',
                slug: 'accountability-transparency-ai',
                type: 'video',
                videoUrl: 'https://www.youtube.com/embed/4x0E4N50EXs' // Example video on Explainable AI
            },
            {
                id: 'ai-ef-l3',
                name: 'The Societal Impact of AI',
                slug: 'societal-impact-ai',
                type: 'text',
                content: 'AI is transforming industries from healthcare to finance to transportation. While it offers immense benefits like improved efficiency and new capabilities, it also poses challenges such as <span class="highlight highlight-purple">job displacement</span> due to automation, privacy concerns from data collection, and the potential misuse of AI technologies (e.g., autonomous weapons, surveillance). Responsible development and deployment are key.'
            },
            {
                id: 'ai-ef-l4',
                name: 'The Future: Artificial General Intelligence (AGI) and Beyond',
                slug: 'future-agi',
                type: 'text',
                content: 'Current AI is mostly "Narrow AI," excelling at specific tasks. <span class="highlight highlight-purple">Artificial General Intelligence (AGI)</span> refers to AI with human-like cognitive abilities, capable of understanding, learning, and implementing knowledge across a wide range of tasks. AGI is still theoretical but is a long-term goal for many researchers. Discussions around AGI also involve potential <span class="highlight highlight-purple">superintelligence</span> and the profound implications it would have for humanity.'
            },
            {
                id: 'ai-ef-l5',
                name: 'AI Ethics & Future Quiz',
                slug: 'ai-ethics-future-quiz',
                type: 'quiz',
                questions: [
                    { q: 'If an AI used for loan applications disproportionately rejects applicants from a certain demographic, this could be an issue of:', options: ['Lack of data', 'Computational cost', 'Bias and Fairness', 'Overfitting'], correctAnswer: 'Bias and Fairness' },
                    { q: 'The concept of AI that can perform any intellectual task a human can is known as:', options: ['Narrow AI', 'Artificial Superintelligence', 'Artificial General Intelligence', 'Machine Learning'], correctAnswer: 'Artificial General Intelligence' },
                    { q: '"Explainable AI" (XAI) primarily addresses which ethical concern?', options: ['Job displacement', 'Data privacy', 'Accountability and Transparency', 'Energy consumption'], correctAnswer: 'Accountability and Transparency'}
                ]
            }
        ]
      }
    ],
  },
  {
    id: 'cs-fundamentals',
    name: 'Computer Science Fundamentals',
    slug: 'computer-science-fundamentals',
    icon: '💻',
    color: 'bg-green-500',
    description: 'Discover the core concepts of computing, programming, algorithms, and problem-solving.',
    chapters: [
      {
        id: 'cs-intro-prog',
        name: 'Introduction to Programming',
        slug: 'intro-to-programming',
        description: 'Learn what programming is, its basic building blocks, and write your first simple programs.',
        lessons: [
          {
            id: 'cs-ip-l1',
            name: 'What is Programming?',
            slug: 'what-is-programming',
            type: 'text',
            content: 'Programming, at its core, is the process of designing and building an executable computer program to accomplish a specific computing result or to perform a particular task. It involves tasks such as analysis, generating algorithms, profiling algorithms\' accuracy and resource consumption, and the implementation of algorithms in a chosen <span class="highlight highlight-pink">programming language</span> (commonly referred to as coding). Think of it as writing a very precise recipe for a computer to follow, where every step must be unambiguous.'
          },
          {
            id: 'cs-ip-l2',
            name: 'Algorithms: The Recipe for Code',
            slug: 'what-is-an-algorithm',
            type: 'text',
            content: 'An <span class="highlight highlight-pink">algorithm</span> is a step-by-step set of instructions or rules designed to perform a specific task or solve a particular problem. Before writing code, programmers often first design an algorithm. For example, an algorithm to find the largest number in a list would involve: 1. Assume the first number is the largest. 2. Compare it with the next number. 3. If the next number is larger, make it the new largest. 4. Repeat for all numbers. 5. The final "largest" is your answer.'
          },
          {
            id: 'cs-ip-l3',
            name: 'Your First "Hello, World!" (Conceptual)',
            slug: 'hello-world',
            type: 'video',
            videoUrl: 'https://www.youtube.com/embed/NKeagy_PP_M' // Original video
          },
          {
            id: 'cs-ip-l4',
            name: 'Basic Programming Concepts: Variables, Data Types, Control Flow',
            slug: 'basic-programming-concepts',
            type: 'text',
            content: 'Key programming concepts include: <span class="highlight highlight-pink">Variables</span>: Named storage locations for data. <span class="highlight highlight-pink">Data Types</span>: Classifications of data (e.g., numbers, text, booleans). <span class="highlight highlight-pink">Control Flow</span>: The order in which instructions are executed (e.g., using `if` statements for decisions, `for` or `while` loops for repetition).'
          },
          {
            id: 'cs-ip-l5',
            name: 'Basic Programming Concepts Quiz',
            slug: 'basic-concepts-quiz',
            type: 'quiz',
            questions: [
              { q: 'What is a common first program many beginners write?', options: ['Calculator', 'Hello, World!', 'Web Browser', 'Operating System'], correctAnswer: 'Hello, World!' },
              { q: 'Which of these is NOT typically considered a high-level programming language?', options: ['Python', 'JavaScript', 'Assembly', 'Java'], correctAnswer: 'Assembly' },
              { q: 'A step-by-step procedure for solving a problem is called an:', options: ['Compiler', 'Variable', 'Algorithm', 'Debugger'], correctAnswer: 'Algorithm'},
              { q: 'What programming construct is used to repeat a block of code multiple times?', options: ['If-statement', 'Function', 'Loop', 'Variable'], correctAnswer: 'Loop'}
            ]
          }
        ]
      },
      {
        id: 'cs-data-struct',
        name: 'Basic Data Structures',
        slug: 'basic-data-structures',
        description: 'Understanding how data is organized and manipulated efficiently in programming.',
        lessons: [
          {
            id: 'cs-ds-l1',
            name: 'What are Arrays?',
            slug: 'what-are-arrays',
            type: 'text',
            content: 'An <span class="highlight highlight-pink">array</span> is a fundamental data structure that stores a collection of elements of the same type in contiguous memory locations. Each element is identified by at least one array index or key. Arrays are often used to store lists of items, like a list of student names, scores, or daily temperatures. The size of an array is typically fixed when it is created.'
          },
          {
            id: 'cs-ds-l2',
            name: 'Introduction to Lists and Linked Lists',
            slug: 'intro-to-lists-linkedlists',
            type: 'video',
            videoUrl: 'https://www.youtube.com/embed/N6dFTTe7GqA' // Original video
          },
          {
            id: 'cs-ds-l3',
            name: 'Stacks and Queues',
            slug: 'stacks-queues',
            type: 'text',
            content: '<span class="highlight highlight-pink">Stacks</span> are LIFO (Last-In, First-Out) data structures. Think of a stack of plates: you add to the top and remove from the top. Operations include push (add) and pop (remove). <span class="highlight highlight-pink">Queues</span> are FIFO (First-In, First-Out) data structures, like a line at a store. Operations include enqueue (add to back) and dequeue (remove from front).'
          },
          {
            id: 'cs-ds-l4',
            name: 'Introduction to Trees and Graphs (Conceptual)',
            slug: 'intro-trees-graphs',
            type: 'text',
            content: '<span class="highlight highlight-pink">Trees</span> are hierarchical data structures with a root node and child nodes (e.g., file systems). <span class="highlight highlight-pink">Graphs</span> consist of nodes (vertices) connected by edges, representing relationships (e.g., social networks, road maps). These are more complex but very powerful for modeling various problems.'
          },
          {
            id: 'cs-ds-l5',
            name: 'Data Structures Quiz',
            slug: 'data-structures-quiz',
            type: 'quiz',
            questions: [
              { q: 'Which data structure operates on a LIFO principle?', options: ['Queue', 'Array', 'Stack', 'Linked List'], correctAnswer: 'Stack' },
              { q: 'Which data structure is best suited for representing a network of cities and roads?', options: ['Array', 'Stack', 'Tree', 'Graph'], correctAnswer: 'Graph' },
              { q: 'Accessing an element in an array by its index is typically:', options: ['Very slow (O(n))', 'Very fast (O(1))', 'Moderately fast (O(log n))', 'Depends on array size'], correctAnswer: 'Very fast (O(1))'}
            ]
          }
        ]
      }
      // Future CS chapters could include: Algorithms & Complexity, Web Development Basics, Databases, etc.
    ]
  }
];

// Helper functions to get data (keep these as they are useful)
export const getSubjectBySlug = (slug) => subjects.find(s => s.slug === slug);

export const getChapterBySlugs = (subjectSlug, chapterSlug) => {
  const subject = getSubjectBySlug(subjectSlug);
  if (!subject) return null;
  return subject.chapters.find(c => c.slug === chapterSlug);
};

export const getLessonBySlugs = (subjectSlug, chapterSlug, lessonSlug) => {
  const chapter = getChapterBySlugs(subjectSlug, chapterSlug);
  if (!chapter) return null;
  return chapter.lessons.find(l => l.slug === lessonSlug);
};