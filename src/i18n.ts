import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import {
  defaultLanguage,
  resources,
  supportedLanguages,
  type SupportedLanguage,
} from "./i18n/resources"

const languageStorageKey = "cookingmana.language"

function getInitialLanguage() {
  const savedLanguage = localStorage.getItem(languageStorageKey)

  if (
    savedLanguage &&
    supportedLanguages.includes(savedLanguage as SupportedLanguage)
  ) {
    return savedLanguage
  }

  const browserLanguage = navigator.language.split("-")[0]

  if (supportedLanguages.includes(browserLanguage as SupportedLanguage)) {
    return browserLanguage
  }

  return defaultLanguage
}

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources,
    lng: getInitialLanguage(),
    fallbackLng: defaultLanguage,
    interpolation: {
      escapeValue: false,
    },
  })

  i18n.on("languageChanged", (language) => {
    localStorage.setItem(languageStorageKey, language)
  })
}

export { languageStorageKey }
export default i18n
