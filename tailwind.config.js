/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './components/**/*.{html,js}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      colors:{
        Color1:"#FFEDD8",
        Color2:"#EABE6C",
        Color3:"#891652",
        Color4:"#240A34",
      },
      fontFamily: {
        'font1': ['GraphikCondensed-Medium-Trial', 'sans-serif'],
      },
    },  
  },
  plugins: [
    require('tailwindcss-animated')
  ],
};