import type { Order, OrderStatus } from "../types/order"
import { useTranslation } from "react-i18next"

type OrderTableProps = {
  orders: Order[]
  onEdit: (order: Order) => void
  onDelete: (orderId: string) => void
}

// Couleurs associées à chaque statut
const STATUS_STYLES: Record<OrderStatus, string> = {
  en_attente: "bg-yellow-100 text-yellow-700",
  en_cours: "bg-blue-100 text-blue-700",
  livree: "bg-green-100 text-green-700",
  annulee: "bg-red-100 text-red-700",
}

// Ligne individuelle du tableau
function OrderRow({
  order,
  onEdit,
  onDelete,
  statusLabels,
  editLabel,
  deleteLabel,
}: {
  order: Order
  onEdit: (order: Order) => void
  onDelete: (orderId: string) => void
  statusLabels: Record<OrderStatus, string>
  editLabel: string
  deleteLabel: string
}) {
  return (
    <tr className="border-b border-slate-100 hover:bg-slate-50">
      <td className="px-4 py-3 text-sm text-slate-900">{order.clientName}</td>
      <td className="px-4 py-3 text-sm text-slate-600">{order.clientEmail}</td>
      <td className="px-4 py-3 text-sm text-slate-600">
        {order.items.join(", ")}
      </td>
      <td className="px-4 py-3 text-sm text-slate-600">
        {order.totalPrice.toFixed(2)} €
      </td>
      <td className="px-4 py-3 text-sm">
        <span
          className={`rounded-full px-2 py-0.5 text-xs font-medium ${STATUS_STYLES[order.status]}`}
        >
          {statusLabels[order.status]}
        </span>
      </td>
      <td className="px-4 py-3 text-sm">
        <div className="flex gap-2">
          <button
            onClick={() => onEdit(order)}
            className="rounded px-2 py-1 text-xs font-medium text-orange-600 hover:bg-orange-50"
          >
            {editLabel}
          </button>
          <button
            onClick={() => onDelete(order.id)}
            className="rounded px-2 py-1 text-xs font-medium text-red-600 hover:bg-red-50"
          >
            {deleteLabel}
          </button>
        </div>
      </td>
    </tr>
  )
}

// Tableau listant toutes les commandes
export default function OrderTable({
  orders,
  onEdit,
  onDelete,
}: OrderTableProps) {
  const { t } = useTranslation()

  const statusLabels: Record<OrderStatus, string> = {
    en_attente: t("admin.status.pending"),
    en_cours: t("admin.status.inProgress"),
    livree: t("admin.status.delivered"),
    annulee: t("admin.status.cancelled"),
  }

  return (
    <div className="overflow-x-auto rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
      <table className="w-full">
        <thead>
          <tr className="border-b border-slate-200 bg-slate-50">
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
              {t("admin.orders.form.clientName")}
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
              {t("admin.orders.form.clientEmail")}
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
              {t("admin.orders.table.items")}
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
              {t("admin.orders.table.total")}
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
              {t("admin.common.status")}
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
              {t("admin.common.actions")}
            </th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <OrderRow
              key={order.id}
              order={order}
              onEdit={onEdit}
              onDelete={onDelete}
              statusLabels={statusLabels}
              editLabel={t("admin.common.edit")}
              deleteLabel={t("admin.common.delete")}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}
