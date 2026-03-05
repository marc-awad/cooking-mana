import { useState } from "react"
import type { Order } from "./types/order"
import { useOrders } from "./hooks/useOrders"
import OrderTable from "./components/OrderTable"
import OrderForm from "./components/OrderForm"

type ModalState =
  | { type: "closed" }
  | { type: "create" }
  | { type: "edit"; order: Order }

// Page de gestion des commandes admin
export default function AdminOrdersPage() {
  const { orders, addOrder, updateOrder, deleteOrder } = useOrders()
  const [modalState, setModalState] = useState<ModalState>({ type: "closed" })

  function openCreateModal() {
    setModalState({ type: "create" })
  }

  function openEditModal(order: Order) {
    setModalState({ type: "edit", order })
  }

  function closeModal() {
    setModalState({ type: "closed" })
  }

  function handleSubmit(formData: Omit<Order, "id">) {
    if (modalState.type === "create") {
      addOrder(formData)
    } else if (modalState.type === "edit") {
      updateOrder({ ...formData, id: modalState.order.id })
    }
    closeModal()
  }

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
          Commandes
        </h1>
        <button
          onClick={openCreateModal}
          className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600"
        >
          + Ajouter une commande
        </button>
      </div>

      <OrderTable
        orders={orders}
        onEdit={openEditModal}
        onDelete={deleteOrder}
      />

      {/* Modal formulaire */}
      {modalState.type !== "closed" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
            <h2 className="mb-4 text-lg font-semibold text-slate-900">
              {modalState.type === "create" ? "Ajouter une commande" : "Modifier la commande"}
            </h2>
            <OrderForm
              initialData={modalState.type === "edit" ? modalState.order : undefined}
              onSubmit={handleSubmit}
              onCancel={closeModal}
            />
          </div>
        </div>
      )}
    </div>
  )
}