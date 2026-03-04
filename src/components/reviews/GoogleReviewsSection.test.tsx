import { fireEvent, render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import GoogleReviewsSection from "./GoogleReviewsSection"

describe("GoogleReviewsSection", () => {
  it("renders first review and navigates between reviews", () => {
    render(<GoogleReviewsSection />)

    expect(screen.getByRole("heading", { name: "Avis Google" })).toBeDefined()
    expect(screen.getByText("Sophie Martin")).toBeDefined()

    fireEvent.click(screen.getByRole("button", { name: "Avis suivant" }))
    expect(screen.getByText("Thomas Bernard")).toBeDefined()

    fireEvent.click(screen.getByRole("button", { name: "Avis précédent" }))
    expect(screen.getByText("Sophie Martin")).toBeDefined()
  })
})
