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
 image: {
  format: ["webp"],
  screens: {
   xs: 320,
   sm: 640,
   md: 768,
   lg: 1024,
   xl: 1280,
   xxl: 1536,
   "2xl": 1536,
  },
 },

 modules: [
  "nuxt-medusa",
  "vue3-carousel-nuxt",
  "@nuxt/image",
  "nuxt-icon",
  "@formkit/nuxt",
 ],
 carousel: {
  prefix: "Nuxt",
 },

 app: {
  head: {
   title: "Zaman Restaurant",

   link: [
    //  animate.css
    {
     rel: "stylesheet",
     href:
      "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
    },
   ],
  },
 },
})
