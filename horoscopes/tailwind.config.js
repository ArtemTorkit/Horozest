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
        purple: '#8B2CC5',
        blue: '#6986EE'
      },
      boxShadow: {
        'blink': '0 0px 20px 0px rgba(13, 50, 209, 0.8)', 
      }

    },
  },
  plugins: [],
}