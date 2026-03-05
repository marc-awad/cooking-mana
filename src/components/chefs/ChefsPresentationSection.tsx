import {
  sectionCardClassName,
  sectionContainerClassName,
  sectionEyebrowClassName,
} from "../ui/sectionStyles"
import { useTranslation } from "react-i18next"

type ChefProfile = {
  name: string
  role: string
  signature: string
}

function ChefsPresentationSection() {
  const { t } = useTranslation()

  const chefProfiles: ChefProfile[] = [
    {
      name: t("home.chefs.profiles.antoine.name"),
      role: t("home.chefs.profiles.antoine.role"),
      signature: t("home.chefs.profiles.antoine.signature"),
    },
    {
      name: t("home.chefs.profiles.lina.name"),
      role: t("home.chefs.profiles.lina.role"),
      signature: t("home.chefs.profiles.lina.signature"),
    },
  ]

  return (
    <section
      className={sectionContainerClassName}
      aria-label={t("home.chefs.ariaLabel")}
    >
      <div className={sectionCardClassName}>
        <p className={sectionEyebrowClassName}>{t("home.chefs.eyebrow")}</p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
          {t("home.chefs.title")}
        </h2>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {chefProfiles.map((chef) => (
            <article
              key={chef.name}
              className="rounded-xl border border-slate-200 bg-slate-50 p-4"
            >
              <h3 className="text-base font-semibold text-slate-900">
                {chef.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-rose-800">
                {chef.role}
              </p>
              <p className="mt-2 text-sm text-slate-700">{chef.signature}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ChefsPresentationSection
