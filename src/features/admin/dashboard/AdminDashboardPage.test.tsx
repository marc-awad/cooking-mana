import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import AdminDashboardPage from "./AdminDashboardPage"

describe("AdminDashboardPage", () => {
  it("renders dashboard title and admin stat cards", () => {
    render(<AdminDashboardPage />)

    expect(screen.getByRole("heading", { name: "Dashboard" })).toBeDefined()
    expect(screen.getByText("Produits")).toBeDefined()
    expect(screen.getByText("Catégories")).toBeDefined()
    expect(screen.getByText("Utilisateurs")).toBeDefined()
    expect(screen.getByText("Réservations")).toBeDefined()
    expect(screen.getByText("Commandes")).toBeDefined()
  })
})
