import { Outlet, Route, Routes } from "react-router-dom"
import MainFooter from "./components/layout/MainFooter"
import MainHeader from "./components/layout/MainHeader"
import LoginPage from "./features/auth/LoginPage"
import RegisterPage from "./features/auth/RegisterPage"
import RequireAuth from "./features/auth/RequireAuth"
import HomePage from "./features/home/HomePage"

type PlaceholderPageProps = {
  title: string
  path: string
}

const adminPlaceholderRoute = {
  path: "/admin",
  title: "Admin",
}

function PlaceholderPage({ title, path }: PlaceholderPageProps) {
  return (
    <main className="px-4 py-16">
      <div className="mx-auto max-w-xl rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        <p className="mt-3 text-slate-600">Route active: {path}</p>
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
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path={adminPlaceholderRoute.path}
          element={
            <RequireAuth>
              <PlaceholderPage
                title={adminPlaceholderRoute.title}
                path={adminPlaceholderRoute.path}
              />
            </RequireAuth>
          }
        />
      </Route>
    </Routes>
  )
}

export default App
