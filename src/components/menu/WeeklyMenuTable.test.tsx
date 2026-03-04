import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import WeeklyMenuTable from "./WeeklyMenuTable"

describe("WeeklyMenuTable", () => {
  it("renders weekdays and availability message", () => {
    render(<WeeklyMenuTable />)

    expect(
      screen.getByText(
        "Le menu du jour est disponible uniquement en semaine durant le midi.",
      ),
    ).toBeDefined()

    expect(screen.getByRole("rowheader", { name: "Lundi" })).toBeDefined()
    expect(screen.getByRole("rowheader", { name: "Mardi" })).toBeDefined()
    expect(screen.getByRole("rowheader", { name: "Mercredi" })).toBeDefined()
    expect(screen.getByRole("rowheader", { name: "Jeudi" })).toBeDefined()
    expect(screen.getByRole("rowheader", { name: "Vendredi" })).toBeDefined()
  })
})
