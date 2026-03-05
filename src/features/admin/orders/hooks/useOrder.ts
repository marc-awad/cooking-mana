import { useState } from "react"
import { INITIAL_ORDERS } from "../data/orderData"
import type { Order } from "../types/order"
import { generateEntityId } from "../../shared/generateEntityId"

export function useOrders() {
  const [orders, setOrders] = useState<Order[]>(INITIAL_ORDERS)

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
