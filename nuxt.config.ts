// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path"
export default defineNuxtConfig({
 alias: {
  "@": resolve(__dirname, "/"),
 },
 devtools: { enabled: true },
 css: ["~/assets/css/main.css"],

 postcss: {
  plugins: {
   tailwindcss: {},
   autoprefixer: {},
  },
 },

 //  Nuxt image options for cloudinary
 image: {
  cloudinary: {
   baseURL: "https://res.cloudinary.com/dckmlqzgd/image/upload/",
  },
  format: ["webp"],
  loading: "lazy",
 },

 modules: [
  "nuxt-medusa",
  "vue3-carousel-nuxt",
  "@nuxt/image",
  "nuxt-icon",
  "@formkit/nuxt",
  "@nuxtjs/google-fonts",
 ],

 //  carousel options
 carousel: {
  prefix: "Nuxt",
 },

 //  google fonts options
 googleFonts: {
  families: {
   "Cormorant+Garamond": [400, 500, 700],
   Jost: [400, 500, 600, 700],
   Lexend: [400, 500, 700],
  },
 },

 app: {
  pageTransition: { name: "page", mode: "out-in" },
  head: {
   title: "Zaman Restaurant",
   link: [
    //  animate.css
    // googleFonts
   ],
  },
 },
})
