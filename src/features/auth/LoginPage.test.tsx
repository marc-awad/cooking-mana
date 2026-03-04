import { cleanup, fireEvent, render, screen } from "@testing-library/react"
import { afterEach, describe, expect, it } from "vitest"
import LoginPage from "./LoginPage"

afterEach(() => {
  cleanup()
})

describe("LoginPage", () => {
  it("shows validation errors when form is empty", () => {
    render(<LoginPage />)

    fireEvent.click(screen.getByRole("button", { name: "Se connecter" }))

    expect(screen.getAllByText("Ce champ est requis.").length).toBe(2)
  })

  it("shows success message when form is valid", () => {
    render(<LoginPage />)

    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "test@example.com" },
    })
    fireEvent.change(screen.getByLabelText("Mot de passe"), {
      target: { value: "password123" },
    })
    fireEvent.click(screen.getByRole("button", { name: "Se connecter" }))

    expect(
      screen.getByText("Connexion prête côté front-end (démo)."),
    ).toBeDefined()
  })
})
