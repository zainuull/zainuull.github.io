/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode : 'class',
  content: ['./public/**/*.{html, js}'],
  theme: {
    extend: {
      screen: {
        sm: '480px',
      },
      spacing: {
        big: '48rem',
      },
      colors: {
        primary: '#3730a3',
        secondary: '#64748b',
        darken: '#1e293b',
      },
    },
    fontFamily: {
      nunito: ['Nunito', 'sans-serif'],
    },
  },
  plugins: [],
};
