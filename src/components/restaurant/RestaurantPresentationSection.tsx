import { useTranslation } from "react-i18next"
import {
  sectionCardClassName,
  sectionContainerClassName,
  sectionEyebrowClassName,
} from "../ui/sectionStyles"

function RestaurantPresentationSection() {
  const { t } = useTranslation()

  const presentationParagraphs = [
    t("home.restaurant.paragraphs.p1"),
    t("home.restaurant.paragraphs.p2"),
    t("home.restaurant.paragraphs.p3"),
  ]

  return (
    <section
      className={sectionContainerClassName}
      aria-label={t("home.restaurant.ariaLabel")}
    >
      <div className={sectionCardClassName}>
        <p className={sectionEyebrowClassName}>{t("common.appName")}</p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
          {t("home.restaurant.title")}
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          {t("home.restaurant.subtitle")}
        </p>

        <div className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
          {presentationParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RestaurantPresentationSection
