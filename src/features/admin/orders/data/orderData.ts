import type { Order } from "../types/order"

export const INITIAL_ORDERS: Order[] = [
  {
    id: "1",
    clientName: "Alice Martin",
    clientEmail: "alice@example.com",
    items: ["Gratin dauphinois", "Tarte aux pommes"],
    totalPrice: 19.0,
    status: "en_attente",
  },
  {
    id: "2",
    clientName: "Bob Dupont",
    clientEmail: "bob@example.com",
    items: ["Soupe de légumes"],
    totalPrice: 7.0,
    status: "en_cours",
  },
  {
    id: "3",
    clientName: "Claire Petit",
    clientEmail: "claire@example.com",
    items: ["Gratin dauphinois", "Soupe de légumes", "Tarte aux pommes"],
    totalPrice: 26.0,
    status: "livree",
  },
]