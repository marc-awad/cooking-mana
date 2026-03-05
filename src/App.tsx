import { Outlet, Route, Routes } from "react-router-dom"
import { useTranslation } from "react-i18next"
import MainFooter from "./components/layout/MainFooter"
import MainHeader from "./components/layout/MainHeader"
import LoginPage from "./features/auth/LoginPage"
import RegisterPage from "./features/auth/RegisterPage"
import RequireAdmin from "./features/auth/RequireAdmin"
import RequireAuth from "./features/auth/RequireAuth"
import HomePage from "./features/home/HomePage"
import ProfilePage from "./features/profile/ProfilePage"

type PlaceholderPageProps = {
  title: string
  path: string
}

const adminPlaceholderRoute = {
  path: "/admin",
  titleKey: "nav.admin",
}

function PlaceholderPage({ title, path }: PlaceholderPageProps) {
  const { t } = useTranslation()

  return (
    <main className="px-4 py-16">
      <div className="mx-auto max-w-xl rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        <p className="mt-3 text-slate-600">{t("app.activeRoute", { path })}</p>
      </div>
    </main>
  )
}

function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
      <MainHeader />
      <div className="flex-1">
        <Outlet />
      </div>
      <MainFooter />
    </div>
  )
}

function App() {
  const { t } = useTranslation()

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <ProfilePage />
            </RequireAuth>
          }
        />
        <Route
          path={adminPlaceholderRoute.path}
          element={
            <RequireAdmin>
              <PlaceholderPage
                title={t(adminPlaceholderRoute.titleKey)}
                path={adminPlaceholderRoute.path}
              />
            </RequireAdmin>
          }
        />
      </Route>
    </Routes>
  )
}

export default App
