import { createI18n } from "vue-i18n"

const messages = (window as any).AppConfig.locales
const defaultLocale = (window as any).AppConfig.defaultLocale

const i18n = createI18n({
  locale: localStorage.getItem("locale") ?? defaultLocale,
  fallbackLocale: defaultLocale,
  messages,
  legacy: false,
})

export default i18n