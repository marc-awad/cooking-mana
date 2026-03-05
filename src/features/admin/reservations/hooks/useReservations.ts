import { useState } from "react"
import { INITIAL_RESERVATIONS } from "../data/reservationData"
import { sendConfirmationMail } from "../services/reservationMailService"
import type { Reservation } from "../types/reservation"

// Génère un id unique basé sur le timestamp
function generateId(): string {
  return Date.now().toString()
}

export function useReservations() {
  const [reservations, setReservations] = useState<Reservation[]>(INITIAL_RESERVATIONS)

  // Ajoute une nouvelle réservation
  function addReservation(newReservation: Omit<Reservation, "id">) {
    const reservationWithId: Reservation = { ...newReservation, id: generateId() }
    setReservations((current) => [...current, reservationWithId])
  }

  // Modifie une réservation et envoie un mail si confirmée
  function updateReservation(updatedReservation: Reservation) {
    const previousReservation = reservations.find((r) => r.id === updatedReservation.id)
    const isNowConfirmed =
      previousReservation?.status !== "confirmee" &&
      updatedReservation.status === "confirmee"

    if (isNowConfirmed) {
      sendConfirmationMail(updatedReservation)
    }

    setReservations((current) =>
      current.map((reservation) =>
        reservation.id === updatedReservation.id ? updatedReservation : reservation
      )
    )
  }

  // Supprime une réservation par son id
  function deleteReservation(reservationId: string) {
    setReservations((current) =>
      current.filter((reservation) => reservation.id !== reservationId)
    )
  }

  return { reservations, addReservation, updateReservation, deleteReservation }
}