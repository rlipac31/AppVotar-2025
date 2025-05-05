

/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  corePlugins: {
    preflight: false, // Opcional
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./ui/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}", // Agregando src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};