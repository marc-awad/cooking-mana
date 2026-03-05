import { Link, NavLink, useNavigate } from "react-router-dom"
import { clearAuthToken, getValidAuthToken } from "../../features/auth/jwtToken"
import { useTranslation } from "react-i18next"
import LanguageSwitcher from "./LanguageSwitcher"

function MainHeader() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const hasValidAuthToken = Boolean(getValidAuthToken())

  const navLinkClassName = ({ isActive }: { isActive: boolean }) =>
    `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
      isActive
        ? "bg-rose-900 text-white"
        : "text-slate-700 hover:bg-rose-50 hover:text-rose-900"
    }`

  function logoutUser() {
    clearAuthToken()
    navigate("/login")
  }

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link
          to="/"
          className="text-lg font-semibold tracking-wide text-rose-900"
        >
          Cookingmama
        </Link>

        <nav className="flex items-center gap-2">
          <NavLink to="/" className={navLinkClassName} end>
            {t("nav.home")}
          </NavLink>

          {/* bouton réservation */}
          <NavLink to="/reservation" className={navLinkClassName}>
            Réserver
          </NavLink>

          <NavLink to="/admin" className={navLinkClassName}>
            {t("nav.admin")}
          </NavLink>

          <NavLink to="/login" className={navLinkClassName}>
            {t("nav.login")}
          </NavLink>

          <NavLink to="/register" className={navLinkClassName}>
            {t("nav.register")}
          </NavLink>

          {hasValidAuthToken ? (
            <NavLink to="/profile" className={navLinkClassName}>
              {t("nav.profile")}
            </NavLink>
          ) : null}

          <LanguageSwitcher />

          {hasValidAuthToken ? (
            <button
              type="button"
              onClick={logoutUser}
              className="rounded-md bg-slate-900 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-700"
            >
              {t("nav.logout")}
            </button>
          ) : null}
        </nav>
      </div>
    </header>
  )
}

export default MainHeader