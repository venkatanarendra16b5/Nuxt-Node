// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  ssr: true,              // ok (default)
  nitro: { preset: 'static' }, // ensure static generation
  app: {
    baseURL: '/Nuxt-Node/'     // 👈 IMPORTANT: match your repo name exactly (case-sensitive)
  }
})
