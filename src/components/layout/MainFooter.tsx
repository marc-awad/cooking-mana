import { Link } from "react-router-dom"

const footerLinks = [
  { to: "/", label: "Accueil" },
  { to: "/login", label: "Login" },
  { to: "/register", label: "Register" },
  { to: "/admin", label: "Admin" },
]

function MainFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-600">
          © {currentYear} CookingMana. Tous droits réservés.
        </p>

        <nav
          className="flex flex-wrap items-center gap-3"
          aria-label="Liens du pied de page"
        >
          {footerLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-medium text-slate-700 transition-colors hover:text-rose-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  )
}

export default MainFooter
