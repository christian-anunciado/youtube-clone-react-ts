/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#fff',
      bgLight: '#f8f9fa',
      bgDark: '#212529',
    },
    extend: {},
  },
  plugins: [],
}
