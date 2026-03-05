import type { Reservation } from "../types/reservation"

export const INITIAL_RESERVATIONS: Reservation[] = [
  {
    id: "1",
    clientName: "Alice Martin",
    clientEmail: "alice@example.com",
    date: "2026-03-10",
    numberOfGuests: 4,
    status: "en_attente",
  },
  {
    id: "2",
    clientName: "Bob Dupont",
    clientEmail: "bob@example.com",
    date: "2026-03-12",
    numberOfGuests: 2,
    status: "confirmee",
  },
  {
    id: "3",
    clientName: "Claire Petit",
    clientEmail: "claire@example.com",
    date: "2026-03-15",
    numberOfGuests: 6,
    status: "annulee",
  },
]