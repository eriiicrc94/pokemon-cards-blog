// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  app: {
    baseURL: '/pokemon-cards-blog/',
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap',
        },
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/pokemon-cards-blog/favicon.ico'
        },
      ],
      meta: [
        { name: 'robots', content: 'noindex, nofollow' },
      ]
    },
  },
  modules: ['@nuxtjs/i18n', '@nuxt/image'],
  i18n: {
    locales: [
      {
        code: 'es',
        name: 'Español',
        iso: 'es-ES',
        file: 'es.json',
      }
    ],
    defaultLocale: 'es', 
    lazy: true,   
  },
  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    },
  },
})