import { Outlet, Route, Routes } from "react-router-dom"
import MainFooter from "./components/layout/MainFooter"
import MainHeader from "./components/layout/MainHeader"

import LoginPage from "./features/auth/LoginPage"
import RegisterPage from "./features/auth/RegisterPage"
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
import CartPage from "./features/orders/CartPage"
import CheckoutPage from "./features/orders/CheckoutPage"
import OrdersHistoryPage from "./features/orders/OrdersHistoryPage"
import ReservationForm from "./components/reservation/ReservationForm"

function NotFoundPage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center py-24 text-center">
      <p className="text-6xl font-bold text-slate-300">404</p>
      <h1 className="mt-4 text-2xl font-semibold text-slate-700">
        Page introuvable
      </h1>
      <p className="mt-2 text-slate-500">
        Cette page n'existe pas ou a été déplacée.
      </p>
      <a
        href="/"
        className="mt-6 rounded-lg bg-slate-900 px-6 py-2 text-sm text-white hover:bg-slate-700 transition"
      >
        Retour à l'accueil
      </a>
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
      {/* Routes publiques avec header/footer */}
      <Route element={<MainLayout />}>
        {/* HOME */}
        <Route path="/" element={<HomePage />} />

        {/* AUTH */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/reservation" element={<ReservationForm />} />

        {/* PROFILE (protected) */}
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <ProfilePage />
            </RequireAuth>
          }
        />

        {/* ORDER FLOW (protected) */}
        <Route
          path="/cart"
          element={
            <RequireAuth>
              <CartPage />
            </RequireAuth>
          }
        />
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <CheckoutPage />
            </RequireAuth>
          }
        />
        <Route
          path="/orders"
          element={
            <RequireAuth>
              <OrdersHistoryPage />
            </RequireAuth>
          }
        />

        <Route path="*" element={<NotFoundPage />} />
      </Route>

      {/* Routes admin — sans MainLayout, avec son propre layout */}
      <Route path="/admin" element={<AdminLayout />}>
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
