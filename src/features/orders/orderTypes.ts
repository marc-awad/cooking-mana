export type ProductSelection = {
  id: string
  name: string
  price: number
}

export type CartItem = ProductSelection & {
  quantity: number
}

export type CustomerOrderStatus = "paid" | "pending"

export type CustomerOrder = {
  id: string
  customerEmail: string
  customerName: string
  items: CartItem[]
  totalPrice: number
  status: CustomerOrderStatus
  paymentIntentId: string
  createdAt: string
}
