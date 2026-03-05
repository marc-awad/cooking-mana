import { type FormEvent, useState } from "react"
import type { Order, OrderStatus } from "../types/order"

type OrderFormProps = {
  initialData?: Order
  onSubmit: (order: Omit<Order, "id">) => void
  onCancel: () => void
}

const EMPTY_FORM: Omit<Order, "id"> = {
  clientName: "",
  clientEmail: "",
  items: [],
  totalPrice: 0,
  status: "en_attente",
}

const INPUT_CLASS =
  "rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 w-full"

// Champ de formulaire réutilisable
function FormField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-slate-700">{label}</label>
      {children}
    </div>
  )
}

// Formulaire de création et modification d'une commande
export default function OrderForm({ initialData, onSubmit, onCancel }: OrderFormProps) {
  const [formData, setFormData] = useState<Omit<Order, "id">>(
    initialData ?? EMPTY_FORM
  )

  // Les plats sont saisis séparés par des virgules
  const [itemsInput, setItemsInput] = useState(
    initialData?.items.join(", ") ?? ""
  )

  function updateField(field: keyof Omit<Order, "id">, value: string | number | string[]) {
    setFormData((current) => ({ ...current, [field]: value }))
  }

  function handleItemsChange(value: string) {
    setItemsInput(value)
    const items = value.split(",").map((item) => item.trim()).filter(Boolean)
    updateField("items", items)
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <FormField label="Nom du client">
        <input
          className={INPUT_CLASS}
          type="text"
          value={formData.clientName}
          onChange={(e) => updateField("clientName", e.target.value)}
          required
        />
      </FormField>

      <FormField label="Email du client">
        <input
          className={INPUT_CLASS}
          type="email"
          value={formData.clientEmail}
          onChange={(e) => updateField("clientEmail", e.target.value)}
          required
        />
      </FormField>

      <FormField label="Plats commandés (séparés par des virgules)">
        <input
          className={INPUT_CLASS}
          type="text"
          value={itemsInput}
          onChange={(e) => handleItemsChange(e.target.value)}
          placeholder="Gratin dauphinois, Tarte aux pommes..."
          required
        />
      </FormField>

      <FormField label="Prix total (€)">
        <input
          className={INPUT_CLASS}
          type="number"
          step="0.01"
          min="0"
          value={formData.totalPrice}
          onChange={(e) => updateField("totalPrice", parseFloat(e.target.value))}
          required
        />
      </FormField>

      <FormField label="Statut">
        <select
          className={INPUT_CLASS}
          value={formData.status}
          onChange={(e) => updateField("status", e.target.value as OrderStatus)}
        >
          <option value="en_attente">En attente</option>
          <option value="en_cours">En cours</option>
          <option value="livree">Livrée</option>
          <option value="annulee">Annulée</option>
        </select>
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