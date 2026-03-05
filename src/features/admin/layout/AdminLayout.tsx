import { Outlet } from "react-router-dom"
import AdminSidebar from "./AdminSidebar"

// Layout principal du panel admin : sidebar fixe + contenu à droite
export default function AdminLayout() {
  return (
    <div className="flex h-screen">
      <AdminSidebar />
      <main className="flex-1 overflow-y-auto bg-slate-50 p-8">
        <Outlet />
      </main>
    </div>
  )
}