/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
          'texture':"url('../public/images/bg1.jpg')",
          'pattern':"url('../public/images/bg2.jpg')"
      }
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
}

