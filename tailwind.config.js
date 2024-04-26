/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{vue,js,jsx,ts,tsx}'],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#0692f1',
          DEFAULT: '#0692f1',
          dark: '#b8e0ff'
        },
        secondary: {
          light: '#6d6d6d',
          DEFAULT: '#6d6d6d',
          dark: '#d1d1d1'
        },
        success: {
          light: '#22c55e',
          DEFAULT: '#22c55e',
          dark: '#bbf7d1'
        },
        error: {
          light: '#FF3333',
          DEFAULT: '#FF3333',
          dark: '#ffc5c5'
        }
      }
    }
  },
  plugins: []
}
