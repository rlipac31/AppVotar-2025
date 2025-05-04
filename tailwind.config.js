
/** @type {import('tailwindcss').Config} */
module.exports = {

  cache: false,
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      /*  fontFamily: {
        roboto: ['--font-secundary'],
        monse: ['--font-primary'],
      
      },  */
    },
  },
  plugins: [],
}