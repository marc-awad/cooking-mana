import { generateEntityId } from "../admin/shared/generateEntityId"
import type { CartItem, CustomerOrder } from "./orderTypes"
import { computeCartTotal } from "./cartStorage"

const ordersStorageKey = "cookingmama.orders"

function parseOrders(value: string | null): CustomerOrder[] {
  if (!value) {
    return []
  }

  try {
    const parsedValue = JSON.parse(value) as unknown

    if (!Array.isArray(parsedValue)) {
      return []
    }

    return parsedValue.filter(
      (order): order is CustomerOrder =>
        typeof order === "object" &&
        order !== null &&
        typeof order.id === "string" &&
        typeof order.customerEmail === "string" &&
        typeof order.customerName === "string" &&
        Array.isArray(order.items) &&
        typeof order.totalPrice === "number" &&
        typeof order.status === "string" &&
        typeof order.paymentIntentId === "string" &&
        typeof order.createdAt === "string",
    )
  } catch {
    return []
  }
}

function saveOrders(orders: CustomerOrder[]) {
  localStorage.setItem(ordersStorageKey, JSON.stringify(orders))
}

function loadOrders(): CustomerOrder[] {
  return parseOrders(localStorage.getItem(ordersStorageKey))
}

type CreateOrderInput = {
  customerEmail: string
  customerName: string
  paymentIntentId: string
  items: CartItem[]
}

export function createOrder({
  customerEmail,
  customerName,
  paymentIntentId,
  items,
}: CreateOrderInput): CustomerOrder {
  if (!customerEmail.trim()) {
    throw new Error("Missing customer email")
  }

  if (items.length === 0) {
    throw new Error("Cannot create order from an empty cart")
  }

  const previousOrders = loadOrders()
  const createdAt = new Date(Date.now() + previousOrders.length).toISOString()

  const createdOrder: CustomerOrder = {
    id: generateEntityId(),
    customerEmail,
    customerName: customerName.trim() || "Client",
    items,
    totalPrice: computeCartTotal(items),
    status: "paid",
    paymentIntentId,
    createdAt,
  }

  saveOrders([...previousOrders, createdOrder])

  return createdOrder
}

export function listOrdersByCustomer(customerEmail: string): CustomerOrder[] {
  const normalizedEmail = customerEmail.trim().toLowerCase()

  return loadOrders()
    .filter((order) => order.customerEmail.toLowerCase() === normalizedEmail)
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    )
}

export function listAllOrders(): CustomerOrder[] {
  return loadOrders().sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  )
}
