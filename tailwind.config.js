/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#4A90E2', // A friendly blue
          secondary: '#50E3C2', // A vibrant teal/green
          accent: '#F5A623', // A warm orange
        },
        background: {
          light: '#FFF8E1', // Soft beige
          DEFAULT: '#FFFFFF', // Soft white (can be same as light or slightly different)
          dark: '#2D3748', // Dark gray for dark mode
        },
        text: {
          light: '#4A4A4A', // Dark gray for light mode
          dark: '#E2E8F0', // Light gray for dark mode
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
      },
      animation: {
        'confetti-burst': 'confetti-burst 0.8s ease-out forwards',
        'slide-in-up': 'slideInUp 0.5s ease-out',
        'subtle-bounce': 'subtleBounce 2s infinite ease-in-out'
      },
      keyframes: {
        slideInUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        subtleBounce: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-5px)' },
        }
        // Keyframes for confetti can be more complex or handled by JS library
      }
    },
  },
  plugins: [],
}