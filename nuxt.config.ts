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
 ],
 carousel: {
  prefix: "Nuxt",
 },

 app: {
  pageTransition: { name: "page", mode: "out-in" },
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
