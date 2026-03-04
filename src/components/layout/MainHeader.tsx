import { Link, NavLink } from "react-router-dom"

function MainHeader() {
  const navLinkClassName = ({ isActive }: { isActive: boolean }) =>
    `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
      isActive
        ? "bg-rose-900 text-white"
        : "text-slate-700 hover:bg-rose-50 hover:text-rose-900"
    }`

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link
          to="/"
          className="text-lg font-semibold tracking-wide text-rose-900"
        >
          CookingMana
        </Link>

        <nav className="flex items-center gap-2">
          <NavLink to="/" className={navLinkClassName} end>
            Accueil
          </NavLink>
          <NavLink to="/admin" className={navLinkClassName}>
            Admin
          </NavLink>
          <NavLink to="/login" className={navLinkClassName}>
            Login
          </NavLink>
          <NavLink to="/register" className={navLinkClassName}>
            Register
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default MainHeader
