import { NavLink } from "react-router-dom"
import { ADMIN_NAV_ITEMS } from "./adminNav"

// Lien de navigation individuel dans la sidebar
function SidebarNavLink({ label, path }: { label: string; path: string }) {
  return (
    <NavLink
      to={path}
      end={path === "/admin"}
      className={({ isActive }) =>
        `flex items-center rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
          isActive
            ? "bg-orange-100 text-orange-700"
            : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
        }`
      }
    >
      {label}
    </NavLink>
  )
}

// Sidebar de navigation du panel admin
export default function AdminSidebar() {
  return (
    <aside className="flex h-full w-64 flex-col border-r border-slate-200 bg-white px-3 py-6">
      <p className="mb-6 px-4 text-xs font-semibold uppercase tracking-widest text-slate-400">
        Administration
      </p>
      <nav className="flex flex-col gap-1">
        {ADMIN_NAV_ITEMS.map((item) => (
          <SidebarNavLink key={item.path} label={item.label} path={item.path} />
        ))}
      </nav>
    </aside>
  )
}