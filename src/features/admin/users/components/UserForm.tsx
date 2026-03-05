import { type FormEvent, useState } from "react"
import type { User, UserRole } from "../types/user"

type UserFormProps = {
  initialData?: User
  onSubmit: (user: Omit<User, "id">) => void
  onCancel: () => void
}

const EMPTY_FORM: Omit<User, "id"> = {
  name: "",
  email: "",
  role: "user",
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

// Formulaire de création et modification d'un utilisateur
export default function UserForm({ initialData, onSubmit, onCancel }: UserFormProps) {
  const [formData, setFormData] = useState<Omit<User, "id">>(
    initialData ?? EMPTY_FORM
  )

  function updateField(field: keyof Omit<User, "id">, value: string) {
    setFormData((current) => ({ ...current, [field]: value }))
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <FormField label="Nom">
        <input
          className={INPUT_CLASS}
          type="text"
          value={formData.name}
          onChange={(e) => updateField("name", e.target.value)}
          required
        />
      </FormField>

      <FormField label="Email">
        <input
          className={INPUT_CLASS}
          type="email"
          value={formData.email}
          onChange={(e) => updateField("email", e.target.value)}
          required
        />
      </FormField>

      <FormField label="Rôle">
        <select
          className={INPUT_CLASS}
          value={formData.role}
          onChange={(e) => updateField("role", e.target.value as UserRole)}
        >
          <option value="user">Utilisateur</option>
          <option value="admin">Administrateur</option>
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