import type { Reservation } from "../types/reservation"

export function sendConfirmationMail(reservation: Reservation): void {
  console.log("Mail de confirmation envoyé à :", reservation.clientEmail)
  console.log("Détails de la réservation :", {
    client: reservation.clientName,
    date: reservation.date,
    nombreDePersonnes: reservation.numberOfGuests,
  })
}