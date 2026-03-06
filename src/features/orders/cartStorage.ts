import type { CartItem, ProductSelection } from "./orderTypes"

const cartStoragePrefix = "cookingmama.cart"
const minimumQuantity = 1

function getCartStorageKey(customerEmail: string) {
  return `${cartStoragePrefix}.${customerEmail.toLowerCase()}`
}

function parseStoredCart(value: string | null): CartItem[] {
  if (!value) {
    return []
  }

  try {
    const parsedValue = JSON.parse(value) as unknown

    if (!Array.isArray(parsedValue)) {
      return []
    }

    return parsedValue.filter(
      (item): item is CartItem =>
        typeof item === "object" &&
        item !== null &&
        typeof item.id === "string" &&
        typeof item.name === "string" &&
        typeof item.price === "number" &&
        typeof item.quantity === "number",
    )
  } catch {
    return []
  }
}

export function loadCart(customerEmail: string): CartItem[] {
  const key = getCartStorageKey(customerEmail)
  return parseStoredCart(localStorage.getItem(key))
}

export function saveCart(customerEmail: string, items: CartItem[]) {
  const key = getCartStorageKey(customerEmail)
  localStorage.setItem(key, JSON.stringify(items))
}

export function addProductToCart(
  customerEmail: string,
  product: ProductSelection,
): CartItem[] {
  const existingItems = loadCart(customerEmail)
  const existingItem = existingItems.find((item) => item.id === product.id)

  const nextItems = existingItem
    ? existingItems.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      )
    : [...existingItems, { ...product, quantity: minimumQuantity }]

  saveCart(customerEmail, nextItems)
  return nextItems
}

export function updateCartItemQuantity(
  customerEmail: string,
  productId: string,
  quantity: number,
): CartItem[] {
  const sanitizedQuantity = Math.max(minimumQuantity, Math.floor(quantity))

  const nextItems = loadCart(customerEmail).map((item) =>
    item.id === productId ? { ...item, quantity: sanitizedQuantity } : item,
  )

  saveCart(customerEmail, nextItems)
  return nextItems
}

export function removeCartItem(
  customerEmail: string,
  productId: string,
): CartItem[] {
  const nextItems = loadCart(customerEmail).filter(
    (item) => item.id !== productId,
  )
  saveCart(customerEmail, nextItems)
  return nextItems
}

export function clearCart(customerEmail: string) {
  const key = getCartStorageKey(customerEmail)
  localStorage.removeItem(key)
}

export function computeCartTotal(items: CartItem[]) {
  return items.reduce((total, item) => total + item.price * item.quantity, 0)
}
