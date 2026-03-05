import "../i18n"
import { beforeEach } from "vitest"
import i18n, { languageStorageKey } from "../i18n"

beforeEach(() => {
  localStorage.setItem(languageStorageKey, "fr")
  i18n.changeLanguage("fr")
})
