import { act, renderHook } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { useProducts } from "./useProducts"

describe("useProducts", () => {
  it("supports create update and delete operations", () => {
    const { result } = renderHook(() => useProducts())
    const initialCount = result.current.products.length

    act(() => {
      result.current.addProduct({
        name: "Nouveau plat",
        description: "Description",
        price: 9.5,
        categoryId: "plats",
        imageUrl: "",
        isAvailable: true,
      })
    })

    expect(result.current.products).toHaveLength(initialCount + 1)

    const productToUpdate = result.current.products[0]

    act(() => {
      result.current.updateProduct({
        ...productToUpdate,
        name: "Plat modifie",
      })
    })

    expect(result.current.products[0]?.name).toBe("Plat modifie")

    const productToDeleteId = result.current.products[0]?.id

    act(() => {
      result.current.deleteProduct(productToDeleteId)
    })

    expect(
      result.current.products.some(
        (product) => product.id === productToDeleteId,
      ),
    ).toBe(false)
  })
})
