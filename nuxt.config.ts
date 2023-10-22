// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path"
export default defineNuxtConfig({
 alias: {
  "@": resolve(__dirname, "/"),
 },
 devtools: { enabled: true },
 css: ["animate.css/animate.min.css"],
 //  Nuxt image options for cloudinary
 image: {
  cloudinary: {
   baseURL: "https://res.cloudinary.com/dckmlqzgd/image/upload/",
  },
  format: ["webp"],
  loading: "lazy",
 },

 site: {
  url: "https://zamann.netlify.app",
  name: "Zaman Restaurant Nairobi",
  description: "Zaman Restaurant Nairobi",
  defaultLocale: "en",
  identity: {
   type: "Person",
  },
  twitter: "@mohamodjibril",
  trailingSlash: true,
 },
 modules: [
  "@nuxt/image",
  "nuxt-icon",
  "@formkit/nuxt",
  "@nuxtseo/module",
  "@nuxt/ui",
 ],

 app: {
  pageTransition: { name: "page", mode: "out-in" },
  head: {
   charset: "utf-8",
   viewport: "width=device-width, initial-scale=1",
  },
 },
})
