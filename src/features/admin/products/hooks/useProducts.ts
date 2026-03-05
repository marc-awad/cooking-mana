import { useState } from "react"
import { INITIAL_PRODUCTS } from "../data/productData"
import type { Product } from "../types/product"

// Génère un id unique simple basé sur le timestamp
function generateId(): string {
  return Date.now().toString()
}

export function useProducts() {
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS)

  // Ajoute un nouveau produit
  function addProduct(newProduct: Omit<Product, "id">) {
    const productWithId: Product = { ...newProduct, id: generateId() }
    setProducts((current) => [...current, productWithId])
  }

  // Modifie un produit existant
  function updateProduct(updatedProduct: Product) {
    setProducts((current) =>
      current.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    )
  }

  // Supprime un produit par son id
  function deleteProduct(productId: string) {
    setProducts((current) =>
      current.filter((product) => product.id !== productId)
    )
  }

  return { products, addProduct, updateProduct, deleteProduct }
}