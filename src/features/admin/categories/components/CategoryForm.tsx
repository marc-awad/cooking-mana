import { type FormEvent, useState } from "react"
import { useTranslation } from "react-i18next"
import type { Category } from "../types/category"

type CategoryFormProps = {
  initialData?: Category
  onSubmit: (name: string) => void
  onCancel: () => void
}

const INPUT_CLASS =
  "rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 w-full"

// Formulaire de création et modification d'une catégorie
export default function CategoryForm({
  initialData,
  onSubmit,
  onCancel,
}: CategoryFormProps) {
  const { t } = useTranslation()
  const [name, setName] = useState(initialData?.name ?? "")

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    onSubmit(name)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-slate-700">
          {t("admin.categories.form.name")}
        </label>
        <input
          className={INPUT_CLASS}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={onCancel}
          className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100"
        >
          {t("admin.common.cancel")}
        </button>
        <button
          type="submit"
          className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600"
        >
          {t("admin.common.save")}
        </button>
      </div>
    </form>
  )
}
