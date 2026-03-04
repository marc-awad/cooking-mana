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
const fullMenuPdfFileName = "cookingmana-menu.pdf"
const fullMenuPdfPath = `/${fullMenuPdfFileName}`

function WeeklyMenuTable() {
  return (
    <section
      className="mx-auto w-full max-w-6xl px-4 pb-12"
      aria-label="Menu de la semaine"
    >
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          Menu de la semaine
        </h2>
        <p className="mt-2 text-sm text-slate-600">{menuAvailabilityMessage}</p>

        <div className="mt-4">
          <a
            href={fullMenuPdfPath}
            target="_blank"
            rel="noopener noreferrer"
            download={fullMenuPdfFileName}
            className="inline-flex items-center rounded-lg bg-rose-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-rose-800"
          >
            Voir le menu complet (PDF)
          </a>
        </div>

        <div className="mt-6 overflow-x-auto">
          <table
            className="min-w-full border-collapse text-left"
            aria-label="Tableau des plats par jour"
          >
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th
                  scope="col"
                  className="px-4 py-3 text-sm font-semibold text-slate-700"
                >
                  Jour
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-sm font-semibold text-slate-700"
                >
                  Plat du jour
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
