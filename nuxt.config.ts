import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/google-fonts',
    '@nuxt/image',
  ],
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  googleFonts: {
    families: {
      'Space Grotesk': [400, 500, 700],
      Inter: [400, 500, 600, 700],
    },
    display: 'swap',
    preconnect: true,
    prefetch: true,
  },
  app: {
    head: {
      title: 'RK Elite Construction',
      titleTemplate: '%s | RK Elite Construction',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Premium residential, commercial, industrial, and turnkey construction services in Chennai with professional execution and complete transparency.',
        },
        { name: 'theme-color', content: '#061424' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
  },
  image: {
    quality: 82,
    format: ['webp', 'jpg'],
  },
  routeRules: {
    '/': { prerender: true },
    '/about': { prerender: true },
    '/services': { prerender: true },
    '/projects': { prerender: true },
    '/contact': { prerender: true },
  },
})
