import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import RestaurantPresentationSection from "./RestaurantPresentationSection"

describe("RestaurantPresentationSection", () => {
  it("renders title and key presentation content", () => {
    render(<RestaurantPresentationSection />)

    expect(
      screen.getByRole("heading", { name: "Présentation du restaurant" }),
    ).toBeDefined()

    expect(
      screen.getByText(
        "CookingMana propose une cuisine gastronomique moderne, pensée autour de produits frais et de saison.",
      ),
    ).toBeDefined()
  })
})
