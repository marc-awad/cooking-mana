export type AdminNavItem = {
  label: string
  path: string
}

export const ADMIN_NAV_ITEMS: AdminNavItem[] = [
  { label: "Dashboard", path: "/admin" },
  { label: "Produits", path: "/admin/products" },
  { label: "Catégories", path: "/admin/categories" },
  { label: "Utilisateurs", path: "/admin/users" },
  { label: "Réservations", path: "/admin/reservations" },
  { label: "Commandes", path: "/admin/orders" },
]