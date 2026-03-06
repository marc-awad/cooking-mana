import { useMemo } from "react"
import { Link, Navigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { getValidAuthTokenPayload } from "../auth/jwtToken"
import { listOrdersByCustomer } from "./orderService"

function OrdersHistoryPage() {
  const { t, i18n } = useTranslation()
  const authPayload = getValidAuthTokenPayload()
  const customerEmail = authPayload?.sub ?? ""

  const orders = useMemo(
    () => listOrdersByCustomer(customerEmail),
    [customerEmail],
  )

  if (!authPayload) {
    return <Navigate to="/login" replace />
  }

  return (
    <main className="px-4 py-10">
      <div className="mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
          {t("orders.history.title")}
        </h1>
        <p className="mt-1 text-sm text-slate-600">
          {t("orders.history.subtitle")}
        </p>

        {orders.length === 0 ? (
          <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm text-slate-700">
              {t("orders.history.empty")}
            </p>
            <Link
              to="/cart"
              className="mt-3 inline-flex rounded-lg bg-rose-900 px-3 py-2 text-xs font-semibold text-white hover:bg-rose-800"
            >
              {t("orders.history.startOrder")}
            </Link>
          </div>
        ) : (
          <ul className="mt-6 space-y-4">
            {orders.map((order) => (
              <li
                key={order.id}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-slate-900">
                    {t("orders.history.orderLabel", { orderId: order.id })}
                  </p>
                  <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-700">
                    {t(`orders.status.${order.status}`)}
                  </span>
                </div>

                <p className="mt-2 text-xs text-slate-600">
                  {t("orders.history.dateLabel")}{" "}
                  {new Date(order.createdAt).toLocaleString(i18n.language)}
                </p>
                <p className="mt-1 text-xs text-slate-600">
                  {t("orders.history.paymentIntentLabel")}{" "}
                  {order.paymentIntentId}
                </p>

                <ul className="mt-3 space-y-1">
                  {order.items.map((item) => (
                    <li
                      key={`${order.id}-${item.id}`}
                      className="text-sm text-slate-700"
                    >
                      {item.name} x {item.quantity} ({item.price.toFixed(2)}{" "}
                      EUR)
                    </li>
                  ))}
                </ul>

                <p className="mt-3 text-sm font-semibold text-slate-900">
                  {t("orders.history.totalLabel")} {order.totalPrice.toFixed(2)}{" "}
                  EUR
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  )
}

export default OrdersHistoryPage
