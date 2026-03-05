import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { describe, expect, it } from "vitest"
import MainFooter from "./MainFooter"

describe("MainFooter", () => {
  it("renders footer brand text and navigation links", () => {
    render(
      <MemoryRouter>
        <MainFooter />
      </MemoryRouter>,
    )

    expect(screen.getByText(/Cookingmama/)).toBeDefined()
    expect(screen.getByRole("link", { name: "Accueil" })).toBeDefined()
    expect(screen.getByRole("link", { name: "Login" })).toBeDefined()
    expect(screen.getByRole("link", { name: "Register" })).toBeDefined()
    expect(screen.getByRole("link", { name: "Admin" })).toBeDefined()
  })
})
