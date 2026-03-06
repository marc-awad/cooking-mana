import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

const footerLinks = [
  { to: "/", labelKey: "nav.home" },
  { to: "/login", labelKey: "nav.login" },
  { to: "/register", labelKey: "nav.register" },
  { to: "/admin", labelKey: "nav.admin" },
]

function MainFooter() {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-600">
          © {currentYear} Cookingmama. {t("footer.rights")}
        </p>

        <nav
          className="flex flex-wrap items-center gap-3"
          aria-label={t("footer.ariaLabel")}
        >
          {footerLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-medium text-slate-700 transition-colors hover:text-rose-900"
            >
              {t(link.labelKey)}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  )
}

export default MainFooter
