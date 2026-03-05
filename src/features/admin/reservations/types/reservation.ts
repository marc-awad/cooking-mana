export type ReservationStatus = "en_attente" | "confirmee" | "annulee"

export type Reservation = {
  id: string
  clientName: string
  clientEmail: string
  date: string
  numberOfGuests: number
  status: ReservationStatus
}