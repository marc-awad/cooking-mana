import { useTranslation } from "react-i18next"
import { supportedLanguages } from "../../i18n/resources"

function LanguageSwitcher() {
  const { i18n, t } = useTranslation()

  function changeLanguage(nextLanguage: string) {
    i18n.changeLanguage(nextLanguage)
  }

  return (
    <label className="flex items-center gap-2 text-sm text-slate-700">
      <span>{t("common.languageLabel")}</span>
      <select
        value={i18n.language}
        onChange={(event) => changeLanguage(event.target.value)}
        className="rounded-md border border-slate-300 bg-white px-2 py-1 text-sm text-slate-800"
      >
        {supportedLanguages.map((language) => (
          <option key={language} value={language}>
            {t(`profile.languages.${language}`)}
          </option>
        ))}
      </select>
    </label>
  )
}

export default LanguageSwitcher
