import { createI18n } from "vue-i18n"
import ja from "@/locales/ja.json"
import en from "@/locales/en.json"

export default defineNuxtPlugin(({ vueApp }) => {
  const env = useRuntimeConfig()
  const locale = (typeof window !== 'undefined' && localStorage.getItem("locale")) || env.public.NUXT_APP_I18N_LOCALE || "ja"

  const i18n = createI18n({
    locale,
    fallbackLocale: env.public.NUXT_APP_I18N_FALLBACK_LOCALE || "ja",
    messages: {
      ja,
      en
    }
  })

  vueApp.use(i18n)
})
