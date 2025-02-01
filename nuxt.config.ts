// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/icon", "nuxt-shiki", "@nuxt/eslint"],
  css: ["~/assets/style/app.css"],
  shiki: {
    defaultTheme: {
      dark: "github-dark",
      light: "github-dark",
    },
  },
});
