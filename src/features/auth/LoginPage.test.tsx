import { cleanup, fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { afterEach, describe, expect, it } from "vitest"
import LoginPage from "./LoginPage"
import { authTokenStorageKey } from "./jwtToken"

afterEach(() => {
  cleanup()
  localStorage.clear()
})

describe("LoginPage", () => {
  it("shows validation errors when form is empty", () => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>,
    )

    fireEvent.click(screen.getByRole("button", { name: "Se connecter" }))

    expect(screen.getAllByText("Ce champ est requis.").length).toBe(2)
  })

  it("stores token when form is valid", () => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>,
    )

    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "test@example.com" },
    })
    fireEvent.change(screen.getByLabelText("Mot de passe"), {
      target: { value: "password123" },
    })
    fireEvent.click(screen.getByRole("button", { name: "Se connecter" }))

    expect(localStorage.getItem(authTokenStorageKey)).toBeTruthy()
  })
})
