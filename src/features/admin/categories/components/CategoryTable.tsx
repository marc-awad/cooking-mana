import type { Category } from "../types/category"
import { useTranslation } from "react-i18next"

type CategoryTableProps = {
  categories: Category[]
  onEdit: (category: Category) => void
  onDelete: (categoryId: string) => void
}

// Ligne individuelle du tableau
function CategoryRow({
  category,
  onEdit,
  onDelete,
  editLabel,
  deleteLabel,
}: {
  category: Category
  onEdit: (category: Category) => void
  onDelete: (categoryId: string) => void
  editLabel: string
  deleteLabel: string
}) {
  return (
    <tr className="border-b border-slate-100 hover:bg-slate-50">
      <td className="px-4 py-3 text-sm text-slate-900">{category.name}</td>
      <td className="px-4 py-3 text-sm">
        <div className="flex gap-2">
          <button
            onClick={() => onEdit(category)}
            className="rounded px-2 py-1 text-xs font-medium text-orange-600 hover:bg-orange-50"
          >
            {editLabel}
          </button>
          <button
            onClick={() => onDelete(category.id)}
            className="rounded px-2 py-1 text-xs font-medium text-red-600 hover:bg-red-50"
          >
            {deleteLabel}
          </button>
        </div>
      </td>
    </tr>
  )
}

// Tableau listant toutes les catégories
export default function CategoryTable({
  categories,
  onEdit,
  onDelete,
}: CategoryTableProps) {
  const { t } = useTranslation()

  return (
    <div className="overflow-x-auto rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
      <table className="w-full">
        <thead>
          <tr className="border-b border-slate-200 bg-slate-50">
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
              {t("admin.categories.form.name")}
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
              {t("admin.common.actions")}
            </th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <CategoryRow
              key={category.id}
              category={category}
              onEdit={onEdit}
              onDelete={onDelete}
              editLabel={t("admin.common.edit")}
              deleteLabel={t("admin.common.delete")}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}
