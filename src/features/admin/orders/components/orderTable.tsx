import type { Order, OrderStatus } from "../types/order"

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

// Labels associés à chaque statut
const STATUS_LABELS: Record<OrderStatus, string> = {
  en_attente: "En attente",
  en_cours: "En cours",
  livree: "Livrée",
  annulee: "Annulée",
}

// Ligne individuelle du tableau
function OrderRow({
  order,
  onEdit,
  onDelete,
}: {
  order: Order
  onEdit: (order: Order) => void
  onDelete: (orderId: string) => void
}) {
  return (
    <tr className="border-b border-slate-100 hover:bg-slate-50">
      <td className="px-4 py-3 text-sm text-slate-900">{order.clientName}</td>
      <td className="px-4 py-3 text-sm text-slate-600">{order.clientEmail}</td>
      <td className="px-4 py-3 text-sm text-slate-600">{order.items.join(", ")}</td>
      <td className="px-4 py-3 text-sm text-slate-600">{order.totalPrice.toFixed(2)} €</td>
      <td className="px-4 py-3 text-sm">
        <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${STATUS_STYLES[order.status]}`}>
          {STATUS_LABELS[order.status]}
        </span>
      </td>
      <td className="px-4 py-3 text-sm">
        <div className="flex gap-2">
          <button
            onClick={() => onEdit(order)}
            className="rounded px-2 py-1 text-xs font-medium text-orange-600 hover:bg-orange-50"
          >
            Modifier
          </button>
          <button
            onClick={() => onDelete(order.id)}
            className="rounded px-2 py-1 text-xs font-medium text-red-600 hover:bg-red-50"
          >
            Supprimer
          </button>
        </div>
      </td>
    </tr>
  )
}

// Tableau listant toutes les commandes
export default function OrderTable({ orders, onEdit, onDelete }: OrderTableProps) {
  return (
    <div className="overflow-x-auto rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
      <table className="w-full">
        <thead>
          <tr className="border-b border-slate-200 bg-slate-50">
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Client</th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Email</th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Plats</th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Total</th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Statut</th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <OrderRow key={order.id} order={order} onEdit={onEdit} onDelete={onDelete} />
          ))}
        </tbody>
      </table>
    </div>
  )
}