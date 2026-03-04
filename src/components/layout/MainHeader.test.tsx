import { cleanup, fireEvent, render, screen } from "@testing-library/react"
import { afterEach, describe, expect, it } from "vitest"
import { MemoryRouter } from "react-router-dom"
import { createDemoJwtToken } from "../../features/auth/demoJwtFactory"
import { authTokenStorageKey } from "../../features/auth/jwtToken"
import MainHeader from "./MainHeader"

afterEach(() => {
  cleanup()
  localStorage.clear()
})

describe("MainHeader", () => {
  it("shows logout button when token exists and clears token on click", () => {
    const token = createDemoJwtToken({
      subject: "user@example.com",
      role: "user",
    })

    localStorage.setItem(authTokenStorageKey, token)

    render(
      <MemoryRouter>
        <MainHeader />
      </MemoryRouter>,
    )

    const logoutButton = screen.getByRole("button", { name: "Déconnexion" })
    expect(logoutButton).toBeDefined()

    fireEvent.click(logoutButton)

    expect(localStorage.getItem(authTokenStorageKey)).toBeNull()
  })
})
