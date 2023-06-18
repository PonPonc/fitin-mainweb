/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      'montserrat': ['Montserrat']
    },
    colors:{
      primary:'#3AAFA9',
      secondary:'#DEF2F1',
      tertiary:'#FEFFFF',
      accent:'#2B7A78',
      style:'#286E6F',
      dark:'#17252A'
    }
  },
  plugins: [],
}

