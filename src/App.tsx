import { Outlet, Route, Routes } from "react-router-dom"
import MainFooter from "./components/layout/MainFooter"
import MainHeader from "./components/layout/MainHeader"
import HomePage from "./features/home/HomePage"

type PlaceholderPageProps = {
  title: string
  path: string
}

type PlaceholderRoute = {
  path: string
  title: string
}

const placeholderRoutes: PlaceholderRoute[] = [
  { path: "/login", title: "Login" },
  { path: "/register", title: "Register" },
  { path: "/admin", title: "Admin" },
]

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
        {placeholderRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<PlaceholderPage title={route.title} path={route.path} />}
          />
        ))}
      </Route>
    </Routes>
  )
}

export default App
