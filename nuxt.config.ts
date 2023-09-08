// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path"
export default defineNuxtConfig({
 alias: {
  "@": resolve(__dirname, "/"),
 },
 devtools: { enabled: true },
 css: ["~/assets/css/main.css", "animate.css/animate.min.css"],

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

 modules: ["@nuxt/image", "nuxt-icon", "@formkit/nuxt"],

 app: {
  pageTransition: { name: "page", mode: "out-in" },
  head: {
   charset: "utf-8",
   viewport: "width=device-width, initial-scale=1",
   title: "Zaman Restaurant",
  },
 },
})
