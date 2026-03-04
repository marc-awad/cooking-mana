import { cleanup, fireEvent, render, screen } from "@testing-library/react"
import { afterEach, describe, expect, it } from "vitest"
import RegisterPage from "./RegisterPage"

afterEach(() => {
  cleanup()
})

describe("RegisterPage", () => {
  it("shows password mismatch error", () => {
    render(<RegisterPage />)

    fireEvent.change(screen.getByLabelText("Nom complet"), {
      target: { value: "Jean Dupont" },
    })
    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "jean@example.com" },
    })
    fireEvent.change(screen.getByLabelText("Mot de passe"), {
      target: { value: "password123" },
    })
    fireEvent.change(screen.getByLabelText("Confirmer le mot de passe"), {
      target: { value: "password321" },
    })
    fireEvent.click(screen.getByRole("button", { name: "Créer mon compte" }))

    expect(
      screen.getByText("Les mots de passe ne correspondent pas."),
    ).toBeDefined()
  })

  it("shows success message when form is valid", () => {
    render(<RegisterPage />)

    fireEvent.change(screen.getByLabelText("Nom complet"), {
      target: { value: "Jean Dupont" },
    })
    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "jean@example.com" },
    })
    fireEvent.change(screen.getByLabelText("Mot de passe"), {
      target: { value: "password123" },
    })
    fireEvent.change(screen.getByLabelText("Confirmer le mot de passe"), {
      target: { value: "password123" },
    })
    fireEvent.click(screen.getByRole("button", { name: "Créer mon compte" }))

    expect(
      screen.getByText("Inscription prête côté front-end (démo)."),
    ).toBeDefined()
  })
})
