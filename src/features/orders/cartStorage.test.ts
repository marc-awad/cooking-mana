import { beforeEach, describe, expect, it } from "vitest"
import {
  addProductToCart,
  clearCart,
  computeCartTotal,
  loadCart,
  removeCartItem,
  updateCartItemQuantity,
} from "./cartStorage"

const email = "user@example.com"

describe("cartStorage", () => {
  beforeEach(() => {
    clearCart(email)
  })

  it("adds product and increments quantity for same item", () => {
    addProductToCart(email, { id: "p1", name: "Gratin", price: 12.5 })
    const updatedItems = addProductToCart(email, {
      id: "p1",
      name: "Gratin",
      price: 12.5,
    })

    expect(updatedItems).toHaveLength(1)
    expect(updatedItems[0]?.quantity).toBe(2)
  })

  it("updates quantity and removes item", () => {
    addProductToCart(email, { id: "p1", name: "Gratin", price: 12.5 })
    updateCartItemQuantity(email, "p1", 4)

    const afterUpdate = loadCart(email)
    expect(afterUpdate[0]?.quantity).toBe(4)

    const afterRemove = removeCartItem(email, "p1")
    expect(afterRemove).toHaveLength(0)
  })

  it("computes total price from items", () => {
    const totalPrice = computeCartTotal([
      { id: "p1", name: "Gratin", price: 12.5, quantity: 2 },
      { id: "p2", name: "Tarte", price: 6.5, quantity: 1 },
    ])

    expect(totalPrice).toBe(31.5)
  })
})
