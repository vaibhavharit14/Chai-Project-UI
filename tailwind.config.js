/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        chai: {
          gold: '#D4AF37',   
          brown: '#4B2E2E',  
          cream: '#FFF8E7',  
          dark: '#2C1810',   
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Lato"', 'sans-serif'],
      },
      backgroundImage: {
        'royal-pattern': "url('https://www.transparenttextures.com/patterns/black-scales.png')", // Subtle texture example
      }
    },
  },
  plugins: [],
}
