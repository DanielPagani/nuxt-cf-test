// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: { enabled: true },

  modules: ['@nuxt/image', '@nuxt/ui', '@vueuse/nuxt'],

  image: {
    cloudflare: {
      baseURL: 'https://nuxt-cf-cache.danielpagani.com.br/',
      quality: 80,
      format: ['webp'],
      domains: ['nuxt-cf-cache.danielpagani.com.br'],
    },
  },

  ssr: false,
});
