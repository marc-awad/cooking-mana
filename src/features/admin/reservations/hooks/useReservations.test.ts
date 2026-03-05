import { act, renderHook } from "@testing-library/react"
import { beforeEach, describe, expect, it, vi } from "vitest"
import { sendConfirmationMail } from "../services/reservationMailService"
import { useReservations } from "./useReservations"

vi.mock("../services/reservationMailService", () => ({
  sendConfirmationMail: vi.fn(),
}))

describe("useReservations", () => {
  beforeEach(() => {
    vi.mocked(sendConfirmationMail).mockReset()
  })

  it("supports create update and delete operations", () => {
    const { result } = renderHook(() => useReservations())
    const initialCount = result.current.reservations.length

    act(() => {
      result.current.addReservation({
        clientName: "Client test",
        clientEmail: "client.test@example.com",
        date: "2026-05-01",
        numberOfGuests: 3,
        status: "en_attente",
      })
    })

    expect(result.current.reservations).toHaveLength(initialCount + 1)

    const reservationToUpdate = result.current.reservations.find(
      (reservation) => reservation.status === "en_attente",
    )

    if (!reservationToUpdate) {
      throw new Error("Expected at least one pending reservation")
    }

    act(() => {
      result.current.updateReservation({
        ...reservationToUpdate,
        status: "confirmee",
      })
    })

    expect(vi.mocked(sendConfirmationMail)).toHaveBeenCalledTimes(1)

    const reservationToDeleteId = result.current.reservations[0]?.id

    act(() => {
      result.current.deleteReservation(reservationToDeleteId)
    })

    expect(
      result.current.reservations.some(
        (reservation) => reservation.id === reservationToDeleteId,
      ),
    ).toBe(false)
  })
})
