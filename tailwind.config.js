const { roboto } = require('src/lib/fonts');

/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  corePlugins: {
    preflight: false,  // Opcional: desactiva el reset CSS
  },
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
       fontFamily: {
        roboto: ['--font-secundary'],
        monse: ['--font-primary'],
      
      }, 
    },
  },
  plugins: [],
}