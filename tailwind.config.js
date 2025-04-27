/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#34c759',
        secondary: '#d4af37',
        neutral: '#f9f9f9',
      },
    },
  },
  plugins: [],
};
