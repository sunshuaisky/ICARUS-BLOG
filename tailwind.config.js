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
    extend: {},
    extend: {
      colors: {
        dark: "#16171a",
      },
    },
  },
  plugins: [],
}