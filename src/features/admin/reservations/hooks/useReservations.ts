import { useState } from "react"
import { INITIAL_RESERVATIONS } from "../data/reservationData"
import { sendConfirmationMail } from "../services/reservationMailService"
import type { Reservation } from "../types/reservation"
import { generateEntityId } from "../../shared/generateEntityId"

export function useReservations() {
  const [reservations, setReservationsRaw] = useState<Reservation[]>(() => {
    try {
      const raw = localStorage.getItem("admin_reservations")
      if (raw) return JSON.parse(raw) as Reservation[]
    } catch {
      /* ignore */
    }
    return INITIAL_RESERVATIONS
  })

  function setReservations(updater: (prev: Reservation[]) => Reservation[]) {
    setReservationsRaw((prev) => {
      const next = updater(prev)
      localStorage.setItem("admin_reservations", JSON.stringify(next))
      return next
    })
  }

  // Ajoute une nouvelle réservation
  function addReservation(newReservation: Omit<Reservation, "id">) {
    const reservationWithId: Reservation = {
      ...newReservation,
      id: generateEntityId(),
    }
    setReservations((current) => [...current, reservationWithId])
  }

  // Modifie une réservation et envoie un mail si confirmée
  function updateReservation(updatedReservation: Reservation) {
    const previousReservation = reservations.find(
      (r) => r.id === updatedReservation.id,
    )
    const isNowConfirmed =
      previousReservation?.status !== "confirmee" &&
      updatedReservation.status === "confirmee"

    if (isNowConfirmed) {
      sendConfirmationMail(updatedReservation)
    }

    setReservations((current) =>
      current.map((reservation) =>
        reservation.id === updatedReservation.id
          ? updatedReservation
          : reservation,
      ),
    )
  }

  // Supprime une réservation par son id
  function deleteReservation(reservationId: string) {
    setReservations((current) =>
      current.filter((reservation) => reservation.id !== reservationId),
    )
  }

  return { reservations, addReservation, updateReservation, deleteReservation }
}
