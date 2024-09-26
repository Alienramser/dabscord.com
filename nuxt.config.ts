// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {},

  modules: ['@tresjs/nuxt', '@nuxtjs/i18n', '@nuxtjs/tailwindcss'],

  // or false to disable SSR
  ssr: false,

  css: ['~/assets/styles/main.scss'],

  i18n: {
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'de', name: 'Deutsch', file: 'de.json' }
    ],
    defaultLocale: 'en',
    lazy: true,
    langDir: 'locales/', // Location of the JSON files
    strategy: 'no_prefix', // URL strategy, no prefix for default locale
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: true,
      fallbackLocale: 'en'
    }
  },

  tres: {
    glsl: true
  },

  devtools: { enabled: true },
  compatibilityDate: '2024-09-26'
})
