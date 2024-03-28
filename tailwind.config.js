/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{vue,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0089ED',
        secondary: '#8D8D8D',
        success: '#16a34a',
        error: '#FF3333'
      }
    }
  },
  plugins: []
}
