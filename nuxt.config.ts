export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    // Эти переменные будут доступны только на сервере
    apiSecret: process.env.API_SECRET,

    // Эти переменные будут доступны как на сервере, так и на клиенте
    public: {
      apiKey: process.env.API_KEY,
      GITHUB_TOKEN: process.env.GITHUB_TOKEN
    }
  }
})
