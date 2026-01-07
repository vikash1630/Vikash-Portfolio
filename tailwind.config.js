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
        primary: {
          light: '#FFD700',
          DEFAULT: '#F7DC6F',
          dark: '#F4D03F',
        },
        secondary: {
          light: '#87CEEB',
          DEFAULT: '#4A90E2',
          dark: '#2E5C8A',
        },
        fire: {
          light: '#FF8C69',
          DEFAULT: '#FF6B35',
          dark: '#E74C3C',
        },
        grass: {
          light: '#81C784',
          DEFAULT: '#66BB6A',
          dark: '#4CAF50',
        },
      },
    },
  },
  plugins: [],
}