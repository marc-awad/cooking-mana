export type OrderStatus = "en_attente" | "en_cours" | "livree" | "annulee"

export type Order = {
  id: string
  clientName: string
  clientEmail: string
  items: string[]
  totalPrice: number
  status: OrderStatus
}