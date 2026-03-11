import type { Product } from "../types/product"

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Gratin dauphinois",
    description: "La recette de maman avec de la crème fraîche et du gruyère.",
    price: 12.5,
    categoryId: "plats",
    imageUrl:
      "https://placehold.co/300x200/f3e8d0/8b4513?text=Gratin+Dauphinois",
    isAvailable: true,
  },
  {
    id: "2",
    name: "Tarte aux pommes",
    description: "Une tarte dorée comme à la maison.",
    price: 6.5,
    categoryId: "desserts",
    imageUrl:
      "https://placehold.co/300x200/f3e8d0/8b4513?text=Tarte+aux+Pommes",
    isAvailable: true,
  },
  {
    id: "3",
    name: "Soupe de légumes",
    description: "La soupe du soir mijotée longtemps.",
    price: 7.0,
    categoryId: "entrees",
    imageUrl:
      "https://placehold.co/300x200/d4edda/2d6a4f?text=Soupe+de+Legumes",
    isAvailable: false,
  },
]
