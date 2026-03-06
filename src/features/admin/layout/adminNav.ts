export type AdminNavItem = {
  labelKey: string
  path: string
}

export const ADMIN_NAV_ITEMS: AdminNavItem[] = [
  { labelKey: "admin.nav.dashboard", path: "/admin" },
  { labelKey: "admin.nav.products", path: "/admin/products" },
  { labelKey: "admin.nav.categories", path: "/admin/categories" },
  { labelKey: "admin.nav.users", path: "/admin/users" },
  { labelKey: "admin.nav.reservations", path: "/admin/reservations" },
  { labelKey: "admin.nav.orders", path: "/admin/orders" },
]
