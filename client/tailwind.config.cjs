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
      blueBorder: '#3ea6ff',
      blueSoft: '#def1ff',
      darkBlueSoft: '#263850',
      divider: '#ebebeb',
      darkDivider: '#333333',

      // Dark
      darkBgLight: '#212529',
      darkBgLighter: '#1c1f23',
      darkText: 'white',
      darkTextSoft: '#aaa',
      soft: '#282424',

      // Light
      bgLight: '#f9f9f9',
      bgLighter: 'white',
      text: 'black',
      textSoft: '#606060',
      soft: '#f5f5f5',


    },
    extend: {},
  },
  plugins: [],
}
