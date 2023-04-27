/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      safelist: ['animate-[fade-in_1s_ease-in-out]', 'animate-[fade-in-down_1s_ease-in-out]'],
    },
    
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class",
}

