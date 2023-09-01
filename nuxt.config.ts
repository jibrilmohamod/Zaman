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

 modules: ["nuxt-medusa", "vue3-carousel-nuxt", "@nuxt/image", "nuxt-icon"],
 carousel: {
  prefix: "Nuxt",
 },

 app: {
  name: "Zaman Restaurant",
  head: {
   title: "Zaman Restaurant",
   link: [
    {
     rel: "stylesheet",
     href:
      "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
    },
   ],
  },
 },
})
