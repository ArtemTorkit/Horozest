/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'raleway': ["Raleway", "sans-serif"],
        'radlay': ["Radley", "serif"],
      },
      colors: {
        purple: '#8B2CC5'
      }
    },
  },
  plugins: [],
}