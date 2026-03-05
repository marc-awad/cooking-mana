import { cleanup, render, screen } from "@testing-library/react"
import { afterEach, describe, expect, it } from "vitest"
import ReservationForm from "./ReservationForm"

afterEach(() => {
  cleanup()
})

describe("ReservationForm", () => {
  it("renders reservation title", () => {
    render(<ReservationForm />)

    expect(screen.getByRole("heading", { name: /réservation/i })).toBeDefined()
  })

  it("renders date input", () => {
    const { container } = render(<ReservationForm />)
    const dateInput = container.querySelector('input[type="date"]')

    expect(dateInput).not.toBeNull()
  })
})
