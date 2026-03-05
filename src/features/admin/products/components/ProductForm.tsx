import { type FormEvent, useState } from "react"
import type { Product } from "../types/product"

type ProductFormProps = {
  initialData?: Product
  onSubmit: (product: Omit<Product, "id">) => void
  onCancel: () => void
}

const EMPTY_FORM: Omit<Product, "id"> = {
  name: "",
  description: "",
  price: 0,
  categoryId: "",
  imageUrl: "",
  isAvailable: true,
}

// Champ de formulaire réutilisable
function FormField({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-slate-700">{label}</label>
      {children}
    </div>
  )
}

const INPUT_CLASS =
  "rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"

// Formulaire de création et modification d'un produit
export default function ProductForm({ initialData, onSubmit, onCancel }: ProductFormProps) {
  const [formData, setFormData] = useState<Omit<Product, "id">>(
    initialData ?? EMPTY_FORM
  )

  function updateField(field: keyof Omit<Product, "id">, value: string | boolean | number) {
    setFormData((current) => ({ ...current, [field]: value }))
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <FormField label="Nom du plat">
        <input
          className={INPUT_CLASS}
          type="text"
          value={formData.name}
          onChange={(e) => updateField("name", e.target.value)}
          required
        />
      </FormField>

      <FormField label="Description">
        <textarea
          className={INPUT_CLASS}
          value={formData.description}
          onChange={(e) => updateField("description", e.target.value)}
          rows={3}
          required
        />
      </FormField>

      <FormField label="Prix (€)">
        <input
          className={INPUT_CLASS}
          type="number"
          step="0.01"
          min="0"
          value={formData.price}
          onChange={(e) => updateField("price", parseFloat(e.target.value))}
          required
        />
      </FormField>

      <FormField label="Catégorie">
        <input
          className={INPUT_CLASS}
          type="text"
          value={formData.categoryId}
          onChange={(e) => updateField("categoryId", e.target.value)}
          required
        />
      </FormField>

      <FormField label="URL de l'image">
        <input
          className={INPUT_CLASS}
          type="text"
          value={formData.imageUrl}
          onChange={(e) => updateField("imageUrl", e.target.value)}
        />
      </FormField>

      <FormField label="Disponible">
        <input
          type="checkbox"
          checked={formData.isAvailable}
          onChange={(e) => updateField("isAvailable", e.target.checked)}
          className="h-4 w-4 accent-orange-500"
        />
      </FormField>

      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={onCancel}
          className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100"
        >
          Annuler
        </button>
        <button
          type="submit"
          className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600"
        >
          Enregistrer
        </button>
      </div>
    </form>
  )
}