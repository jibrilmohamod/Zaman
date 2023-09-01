/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
  "./components/**/*.{js,vue,ts}",
  "./layouts/**/*.vue",
  "./pages/**/*.vue",
  "./plugins/**/*.{js,ts}",
  "./nuxt.config.{js,ts}",
  "./app.vue",
 ],
 theme: {
  extend: {
   fontFamily: {
    Lexend: ["Lexend", "sans-serif"],
    "Cormorant Garamond": ["Cormorant Garamond", "sans-serif"],
   },
  },
 },
 plugins: [],
}
