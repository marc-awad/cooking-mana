import { useState } from "react"
import { INITIAL_CATEGORIES } from "../data/categoryData"
import type { Category } from "../types/category"

// Génère un id unique basé sur le timestamp
function generateId(): string {
  return Date.now().toString()
}

export function useCategories() {
  const [categories, setCategories] = useState<Category[]>(INITIAL_CATEGORIES)

  // Ajoute une nouvelle catégorie
  function addCategory(name: string) {
    const newCategory: Category = { id: generateId(), name }
    setCategories((current) => [...current, newCategory])
  }

  // Modifie une catégorie existante
  function updateCategory(updatedCategory: Category) {
    setCategories((current) =>
      current.map((category) =>
        category.id === updatedCategory.id ? updatedCategory : category
      )
    )
  }

  // Supprime une catégorie par son id
  function deleteCategory(categoryId: string) {
    setCategories((current) =>
      current.filter((category) => category.id !== categoryId)
    )
  }

  return { categories, addCategory, updateCategory, deleteCategory }
}