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

 modules: ["nuxt-medusa", "vue3-carousel-nuxt", "@nuxt/image"],
 carousel: {
  prefix: "Nuxt",
 },

 image: {
  dir: "assets/images",
 },
})
