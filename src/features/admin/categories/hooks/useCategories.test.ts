import { act, renderHook } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { useCategories } from "./useCategories"

describe("useCategories", () => {
  it("supports create update and delete operations", () => {
    const { result } = renderHook(() => useCategories())
    const initialCount = result.current.categories.length

    act(() => {
      result.current.addCategory("Test category")
    })

    expect(result.current.categories).toHaveLength(initialCount + 1)

    const categoryToUpdate = result.current.categories[0]

    act(() => {
      result.current.updateCategory({
        ...categoryToUpdate,
        name: "Updated category",
      })
    })

    expect(result.current.categories[0]?.name).toBe("Updated category")

    const categoryToDeleteId = result.current.categories[0]?.id

    act(() => {
      result.current.deleteCategory(categoryToDeleteId)
    })

    expect(
      result.current.categories.some(
        (category) => category.id === categoryToDeleteId,
      ),
    ).toBe(false)
  })
})
