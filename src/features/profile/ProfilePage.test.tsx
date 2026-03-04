import { cleanup, fireEvent, render, screen } from "@testing-library/react"
import { afterEach, describe, expect, it } from "vitest"
import { MemoryRouter } from "react-router-dom"
import { createDemoJwtToken } from "../auth/demoJwtFactory"
import { authTokenStorageKey } from "../auth/jwtToken"
import ProfilePage from "./ProfilePage"

afterEach(() => {
  cleanup()
  localStorage.clear()
})

describe("ProfilePage", () => {
  it("shows session expired message when token is missing", () => {
    render(
      <MemoryRouter>
        <ProfilePage />
      </MemoryRouter>,
    )

    expect(screen.getByText("Session expirée")).toBeDefined()
  })

  it("updates profile and displays success message", () => {
    const token = createDemoJwtToken({
      subject: "user@example.com",
      role: "user",
    })

    localStorage.setItem(authTokenStorageKey, token)

    render(
      <MemoryRouter>
        <ProfilePage />
      </MemoryRouter>,
    )

    fireEvent.change(screen.getByLabelText("Nom complet"), {
      target: { value: "Jean Dupont" },
    })
    fireEvent.change(screen.getByLabelText("Téléphone"), {
      target: { value: "0600000000" },
    })
    fireEvent.change(screen.getByLabelText("Langue préférée"), {
      target: { value: "EN" },
    })

    fireEvent.click(
      screen.getByRole("button", { name: "Mettre à jour mon profil" }),
    )

    expect(screen.getByText("Profil mis à jour avec succès.")).toBeDefined()
  })
})
