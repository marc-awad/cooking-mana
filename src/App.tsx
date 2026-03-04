import { Outlet, Route, Routes } from "react-router-dom"
import MainHeader from "./components/layout/MainHeader"

type PlaceholderPageProps = {
  title: string
  path: string
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
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <MainHeader />
      <Outlet />
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route
          path="/"
          element={<PlaceholderPage title="Accueil" path="/" />}
        />
        <Route
          path="/login"
          element={<PlaceholderPage title="Login" path="/login" />}
        />
        <Route
          path="/register"
          element={<PlaceholderPage title="Register" path="/register" />}
        />
        <Route
          path="/admin"
          element={<PlaceholderPage title="Admin" path="/admin" />}
        />
      </Route>
    </Routes>
  )
}

export default App
