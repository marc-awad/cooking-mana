import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import ChefsPresentationSection from "./ChefsPresentationSection"

describe("ChefsPresentationSection", () => {
  it("renders chefs section title and chef profiles", () => {
    render(<ChefsPresentationSection />)

    expect(
      screen.getByRole("heading", { name: "Présentation des chefs" }),
    ).toBeDefined()

    expect(screen.getByText("Chef Antoine Morel")).toBeDefined()
    expect(screen.getByText("Cheffe Lina Caron")).toBeDefined()
  })
})
