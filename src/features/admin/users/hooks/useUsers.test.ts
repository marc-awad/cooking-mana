import { act, renderHook } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { useUsers } from "./useUsers"

describe("useUsers", () => {
  it("supports create update and delete operations", () => {
    const { result } = renderHook(() => useUsers())
    const initialCount = result.current.users.length

    act(() => {
      result.current.addUser({
        name: "New User",
        email: "new.user@example.com",
        role: "user",
      })
    })

    expect(result.current.users).toHaveLength(initialCount + 1)

    const userToUpdate = result.current.users[0]

    act(() => {
      result.current.updateUser({
        ...userToUpdate,
        role: "admin",
      })
    })

    expect(result.current.users[0]?.role).toBe("admin")

    const userToDeleteId = result.current.users[0]?.id

    act(() => {
      result.current.deleteUser(userToDeleteId)
    })

    expect(
      result.current.users.some((user) => user.id === userToDeleteId),
    ).toBe(false)
  })
})
