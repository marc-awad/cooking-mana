import { beforeEach, describe, expect, it } from "vitest"
import type { CartItem } from "./orderTypes"
import { createOrder, listOrdersByCustomer } from "./orderService"

const storageKey = "cookingmama.orders"

const demoItems: CartItem[] = [
  {
    id: "p1",
    name: "Gratin dauphinois",
    price: 12.5,
    quantity: 2,
  },
  {
    id: "p2",
    name: "Tarte aux pommes",
    price: 6.5,
    quantity: 1,
  },
]

describe("orderService", () => {
  beforeEach(() => {
    localStorage.removeItem(storageKey)
  })

  it("creates a paid order and persists order items", () => {
    const createdOrder = createOrder({
      customerEmail: "user@example.com",
      customerName: "User Demo",
      paymentIntentId: "pi_test_123",
      items: demoItems,
    })

    expect(createdOrder.status).toBe("paid")
    expect(createdOrder.totalPrice).toBe(31.5)
    expect(createdOrder.items).toHaveLength(2)
  })

  it("returns customer history sorted by most recent first", () => {
    createOrder({
      customerEmail: "user@example.com",
      customerName: "User Demo",
      paymentIntentId: "pi_test_old",
      items: demoItems,
    })

    createOrder({
      customerEmail: "other@example.com",
      customerName: "Other",
      paymentIntentId: "pi_other",
      items: demoItems,
    })

    const secondOrder = createOrder({
      customerEmail: "user@example.com",
      customerName: "User Demo",
      paymentIntentId: "pi_test_new",
      items: demoItems,
    })

    const userOrders = listOrdersByCustomer("user@example.com")

    expect(userOrders).toHaveLength(2)
    expect(userOrders[0]?.id).toBe(secondOrder.id)
  })
})
