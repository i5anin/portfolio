// nuxt.config.ts
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '@/assets/css/variables.css',
    '@/assets/css/global.css',
    'bootstrap/dist/css/bootstrap.min.css',
  ],
  plugins: [{ src: '~/plugins/bootstrap.client.ts', mode: 'client' }],
  runtimeConfig: {
    // Эти переменные будут доступны только на сервере
    apiSecret: process.env.API_SECRET,

    // Эти переменные будут доступны как на сервере, так и на клиенте
    public: {
      apiKey: process.env.API_KEY,
      GITHUB_TOKEN: process.env.GITHUB_TOKEN,
      YANDEX_METRIKA_ID: '98816322',
    },
  },
});
