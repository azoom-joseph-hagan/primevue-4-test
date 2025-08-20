import { Noir } from './theme';

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@primevue/nuxt-module'],
  primevue: {
    options: {
      theme: {
        preset: Noir,
      }
    }
  },
  css: ['primeicons/primeicons.css']
})