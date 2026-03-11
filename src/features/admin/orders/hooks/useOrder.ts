import { useState } from "react"
import { INITIAL_ORDERS } from "../data/orderData"
import type { Order } from "../types/order"
import { generateEntityId } from "../../shared/generateEntityId"

export function useOrders() {
  const [orders, setOrdersRaw] = useState<Order[]>(() => {
    try {
      const raw = localStorage.getItem("admin_orders")
      if (raw) return JSON.parse(raw) as Order[]
    } catch {
      /* ignore */
    }
    return INITIAL_ORDERS
  })

  function setOrders(updater: (prev: Order[]) => Order[]) {
    setOrdersRaw((prev) => {
      const next = updater(prev)
      localStorage.setItem("admin_orders", JSON.stringify(next))
      return next
    })
  }

  // Ajoute une nouvelle commande
  function addOrder(newOrder: Omit<Order, "id">) {
    const orderWithId: Order = { ...newOrder, id: generateEntityId() }
    setOrders((current) => [...current, orderWithId])
  }

  // Modifie une commande existante
  function updateOrder(updatedOrder: Order) {
    setOrders((current) =>
      current.map((order) =>
        order.id === updatedOrder.id ? updatedOrder : order,
      ),
    )
  }

  // Supprime une commande par son id
  function deleteOrder(orderId: string) {
    setOrders((current) => current.filter((order) => order.id !== orderId))
  }

  return { orders, addOrder, updateOrder, deleteOrder }
}
