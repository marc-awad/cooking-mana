import { useTranslation } from "react-i18next"

// Carte de statistique individuelle
function StatCard({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-slate-500">{label}</p>
      </div>
      <p className="mt-3 text-3xl font-bold text-slate-900">{value}</p>
    </div>
  )
}

// Statistiques affichées sur le dashboard (données statiques pour l'instant)
const DASHBOARD_STATS = [
  { labelKey: "admin.nav.products", value: 24 },
  { labelKey: "admin.nav.categories", value: 6 },
  { labelKey: "admin.nav.users", value: 132 },
  { labelKey: "admin.nav.reservations", value: 18 },
  { labelKey: "admin.nav.orders", value: 47 },
]

// Page principale du dashboard admin
export default function AdminDashboardPage() {
  const { t } = useTranslation()

  return (
    <div>
      <h1 className="mb-8 text-2xl font-bold tracking-tight text-slate-900">
        {t("admin.nav.dashboard")}
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {DASHBOARD_STATS.map((stat) => (
          <StatCard
            key={stat.labelKey}
            label={t(stat.labelKey)}
            value={stat.value}
          />
        ))}
      </div>
    </div>
  )
}
