import { Outlet, Route, Routes } from "react-router-dom"
import MainFooter from "./components/layout/MainFooter"
import MainHeader from "./components/layout/MainHeader"

import LoginPage from "./features/auth/LoginPage"
import RegisterPage from "./features/auth/RegisterPage"
import RequireAdmin from "./features/auth/RequireAdmin"
import RequireAuth from "./features/auth/RequireAuth"
import AdminLayout from "./features/admin/layout/AdminLayout"
import AdminDashboardPage from "./features/admin/dashboard/AdminDashboardPage"
import AdminProductsPage from "./features/admin/products/AdminProductsPage"
import AdminCategoriesPage from "./features/admin/categories/AdminCategoriesPage"
import AdminUsersPage from "./features/admin/users/AdminUsersPage"
import AdminReservationsPage from "./features/admin/reservations/AdminReservationsPage"
import AdminOrdersPage from "./features/admin/orders/AdminOrdersPage"
import HomePage from "./features/home/HomePage"
import ProfilePage from "./features/profile/ProfilePage"

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
      {/* Routes publiques avec header/footer */}
      <Route element={<MainLayout />}>
        {/* HOME */}
        <Route path="/" element={<HomePage />} />

        {/* AUTH */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* PROFILE (protected) */}
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <ProfilePage />
            </RequireAuth>
          }
        />
      </Route>

      {/* Routes admin — sans MainLayout, avec son propre layout */}
      <Route
        path="/admin"
        element={
          <RequireAdmin>
            <AdminLayout />
          </RequireAdmin>
        }
      >
        <Route index element={<AdminDashboardPage />} />
        <Route path="products" element={<AdminProductsPage />} />
        <Route path="categories" element={<AdminCategoriesPage />} />
        <Route path="users" element={<AdminUsersPage />} />
        <Route path="reservations" element={<AdminReservationsPage />} />
        <Route path="orders" element={<AdminOrdersPage />} />
      </Route>
    </Routes>
  )
}

export default App
