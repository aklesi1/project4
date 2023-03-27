/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
  
    extend: {
      screens:{
        md:'640px'
      },
      colors:{
      

moderateViolet:' hsl(263, 55%, 52%)',
veryDarkGrayishBlue: 'hsl(217, 19%, 35%)',
veryDarkBlackishBlue:' hsl(219, 29%, 14%)',
white: 'hsl(0, 0%, 100%)',
lightGray:' hsl(0, 0%, 81%)',
lightGrayishBlue:' hsl(210, 46%, 95%)'
      },
      fontSize:{
        fontSize:'13px'
      },
      fontFamily:{
        
      },
      backgroundImage: {
        'my': "url('/images/bg-pattern-quotation.svg') ",
      }
    },
  },
  plugins: [],
}