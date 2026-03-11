import { useState } from "react"
import { INITIAL_PRODUCTS } from "../data/productData"
import type { Product } from "../types/product"
import { generateEntityId } from "../../shared/generateEntityId"

export function useProducts() {
  const [products, setProductsRaw] = useState<Product[]>(() => {
    try {
      const raw = localStorage.getItem("admin_products")
      if (raw) return JSON.parse(raw) as Product[]
    } catch {
      /* ignore */
    }
    return INITIAL_PRODUCTS
  })

  function setProducts(updater: (prev: Product[]) => Product[]) {
    setProductsRaw((prev) => {
      const next = updater(prev)
      localStorage.setItem("admin_products", JSON.stringify(next))
      return next
    })
  }

  // Ajoute un nouveau produit
  function addProduct(newProduct: Omit<Product, "id">) {
    const productWithId: Product = { ...newProduct, id: generateEntityId() }
    setProducts((current) => [...current, productWithId])
  }

  // Modifie un produit existant
  function updateProduct(updatedProduct: Product) {
    setProducts((current) =>
      current.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product,
      ),
    )
  }

  // Supprime un produit par son id
  function deleteProduct(productId: string) {
    setProducts((current) =>
      current.filter((product) => product.id !== productId),
    )
  }

  return { products, addProduct, updateProduct, deleteProduct }
}
