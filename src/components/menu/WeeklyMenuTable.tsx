import { useTranslation } from "react-i18next"
import {
  sectionCardClassName,
  sectionContainerClassName,
} from "../ui/sectionStyles"

type DailyMenuItem = {
  day: string
  dish: string
}

const weekdayMenu: DailyMenuItem[] = [
  { day: "Lundi", dish: "Suprême de volaille, purée de panais et jus réduit" },
  { day: "Mardi", dish: "Risotto crémeux aux cèpes et copeaux de parmesan" },
  { day: "Mercredi", dish: "Saumon rôti, légumes glacés et beurre citronné" },
  {
    day: "Jeudi",
    dish: "Bœuf braisé, écrasé de pommes de terre à l'huile d'olive",
  },
  {
    day: "Vendredi",
    dish: "Pavé de cabillaud, quinoa aux herbes et sauce vierge",
  },
]

const menuAvailabilityMessage =
  "Le menu du jour est disponible uniquement en semaine durant le midi."
const fullMenuPdfFileName = "cookingmama-menu.pdf"
const fullMenuPdfPath = `/${fullMenuPdfFileName}`

function WeeklyMenuTable() {
  const { t } = useTranslation()

  const weekdayMenu: DailyMenuItem[] = [
    {
      day: t("home.weeklyMenu.days.monday"),
      dish: t("home.weeklyMenu.dishes.monday"),
    },
    {
      day: t("home.weeklyMenu.days.tuesday"),
      dish: t("home.weeklyMenu.dishes.tuesday"),
    },
    {
      day: t("home.weeklyMenu.days.wednesday"),
      dish: t("home.weeklyMenu.dishes.wednesday"),
    },
    {
      day: t("home.weeklyMenu.days.thursday"),
      dish: t("home.weeklyMenu.dishes.thursday"),
    },
    {
      day: t("home.weeklyMenu.days.friday"),
      dish: t("home.weeklyMenu.dishes.friday"),
    },
  ]

  return (
    <section
      className={sectionContainerClassName}
      aria-label={t("home.weeklyMenu.ariaLabel")}
    >
      <div className={sectionCardClassName}>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          {t("home.weeklyMenu.title")}
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          {t("home.weeklyMenu.availability")}
        </p>

        <div className="mt-4">
          <a
            href={fullMenuPdfPath}
            target="_blank"
            rel="noopener noreferrer"
            download={fullMenuPdfFileName}
            className="inline-flex items-center rounded-lg bg-rose-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-rose-800"
          >
            {t("home.weeklyMenu.fullMenuPdf")}
          </a>
        </div>

        <div className="mt-6 overflow-x-auto">
          <table
            className="min-w-full border-collapse text-left"
            aria-label={t("home.weeklyMenu.tableAria")}
          >
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th
                  scope="col"
                  className="px-4 py-3 text-sm font-semibold text-slate-700"
                >
                  {t("home.weeklyMenu.dayHeader")}
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-sm font-semibold text-slate-700"
                >
                  {t("home.weeklyMenu.dishHeader")}
                </th>
              </tr>
            </thead>
            <tbody>
              {weekdayMenu.map((menuItem) => (
                <tr
                  key={menuItem.day}
                  className="border-b border-slate-100 last:border-b-0"
                >
                  <th
                    scope="row"
                    className="px-4 py-3 text-sm font-medium text-slate-900"
                  >
                    {menuItem.day}
                  </th>
                  <td className="px-4 py-3 text-sm text-slate-700">
                    {menuItem.dish}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default WeeklyMenuTable
