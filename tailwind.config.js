

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
   darkMode: 'class', // <--- IMPORTANTE: Esto le dice a Tailwind que use la clase del HTML, no el sistema
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};


