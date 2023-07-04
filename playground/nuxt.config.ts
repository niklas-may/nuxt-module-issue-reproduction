export default defineNuxtConfig({
  modules: ['../src/module'],
  myModule: {},
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
  }
})
