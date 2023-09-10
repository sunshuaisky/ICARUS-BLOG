/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/components/**/*.{js,vue,ts}",
    "./src/layouts/**/*.vue",
    "./src/pages/**/*.vue",
    "./nuxt.config.{js,ts}",
    "./src/app.vue",
  ],
  theme: {
    extend: {
      colors: {
        'light': '#e0e5ec',
        'dark': "#16171a",
      },
      height: {
        '90vh': '90vh',
      },
      borderRadius: {
        '20': '20px',
      }
    },
  },
  plugins: [],
}