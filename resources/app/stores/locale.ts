import { defineStore } from "pinia"
import i18n from "@/plugins/i18n"
export const useLocaleStore = defineStore("locale", {
  state: () => ({
    locale: localStorage.getItem("locale") || "en",
  }),

  actions: {
    setLocale(lang: string) {
    this.locale = lang
    localStorage.setItem("locale", lang)

    i18n.global.locale.value = lang
  }
  }
})