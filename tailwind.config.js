/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#4A90E2',
          secondary: '#50E3C2',
          accent: '#F5A623',
        },
        background: {
          light: '#FFF8E1',
          DEFAULT: '#FFFFFF',
          dark: '#2D3748',
        },
        text: {
          light: '#4A4A4A',
          dark: '#E2E8F0',
        },
        pastel: {
          pink: '#FFD1DC',
          blue: '#AEC6CF',
          green: '#C1E1C1',
          yellow: '#FDFD96',
          purple: '#C3B1E1',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Open Sans', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        display: ['Fredoka One', 'Lilita One', 'cursive'], // Added Lilita One
      },
      animation: {
        'confetti-burst': 'confetti-burst 0.8s ease-out forwards',
        'slide-in-up': 'slideInUp 0.5s ease-out',
        'subtle-bounce': 'subtleBounce 2s infinite ease-in-out',
        'pulse-slow': 'pulseSlow 3s infinite ease-in-out alternate', // Added alternate
        'subtle-drift-right': 'subtleDrift 25s infinite linear alternate',
        'subtle-drift-left': 'subtleDrift 30s infinite linear alternate-reverse', // Use reverse for other direction
        'bounce-slow': 'bounceSlow 2.5s infinite ease-in-out',
      },
      keyframes: {
        slideInUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        subtleBounce: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-5px)' },
        },
        pulseSlow: {
          '0%': { transform: 'scale(1)', opacity: '0.9' }, // Start slightly transparent
          '100%': { transform: 'scale(1.08)', opacity: '1' }, // End slightly larger and opaque
        },
        subtleDrift: { // Single keyframe for both directions
          '0%': { transform: 'translateX(-15px) rotate(-2deg)' }, // Start position
          '100%': { transform: 'translateX(15px) rotate(2deg)' }, // End position
        },
        bounceSlow: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}