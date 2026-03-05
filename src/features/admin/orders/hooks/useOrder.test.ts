import { act, renderHook } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { useOrders } from "./useOrder"

describe("useOrders", () => {
  it("supports create update and delete operations", () => {
    const { result } = renderHook(() => useOrders())
    const initialCount = result.current.orders.length

    act(() => {
      result.current.addOrder({
        clientName: "Test client",
        clientEmail: "test.client@example.com",
        items: ["Product A"],
        totalPrice: 12,
        status: "en_attente",
      })
    })

    expect(result.current.orders).toHaveLength(initialCount + 1)

    const orderToUpdate = result.current.orders[0]

    act(() => {
      result.current.updateOrder({
        ...orderToUpdate,
        status: "livree",
      })
    })

    expect(result.current.orders[0]?.status).toBe("livree")

    const orderToDeleteId = result.current.orders[0]?.id

    act(() => {
      result.current.deleteOrder(orderToDeleteId)
    })

    expect(
      result.current.orders.some((order) => order.id === orderToDeleteId),
    ).toBe(false)
  })
})
