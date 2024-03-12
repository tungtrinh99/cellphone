// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  typescript: {
    strict: true,
  },
  app: {
    head: {
      title: "Base Nuxt.js 3 TypeScript project",
      htmlAttrs: {
        lang: "ja",
      },
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0",
        },
        {
          charset: "utf-8",
        },
      ],
      link: [], //fontsize
    },
  },
  modules: ["@element-plus/nuxt", "@pinia/nuxt"],
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      "defineStore", // import { defineStore } from 'pinia'
      ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  plugins: ["@/plugins/i18n"],
  css: ["@/assets/scss/index.scss"],
  runtimeConfig: {
    public: {
      NUXT_APP_I18N_LOCALE: process.env.NUXT_APP_I18N_LOCALE,
      NUXT_APP_I18N_FALLBACK_LOCALE: process.env.NUXT_APP_I18N_FALLBACK_LOCALE,
      baseURL: process.env.NUXT_API_URL,
    },
  },
  vite: {
    server: {
      hmr: {
        protocol: "ws",
        host: "localhost",
        port: 24678,
      },
    },
  },
})
