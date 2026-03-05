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
  { label: "Produits", value: 24 },
  { label: "Catégories", value: 6 },
  { label: "Utilisateurs", value: 132 },
  { label: "Réservations", value: 18 },
  { label: "Commandes", value: 47 },
]

// Page principale du dashboard admin
export default function AdminDashboardPage() {
  return (
    <div>
      <h1 className="mb-8 text-2xl font-bold tracking-tight text-slate-900">
        Dashboard
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {DASHBOARD_STATS.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>
    </div>
  )
}