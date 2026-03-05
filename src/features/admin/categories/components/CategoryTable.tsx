import type { Category } from "../types/category"

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
}: {
  category: Category
  onEdit: (category: Category) => void
  onDelete: (categoryId: string) => void
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
            Modifier
          </button>
          <button
            onClick={() => onDelete(category.id)}
            className="rounded px-2 py-1 text-xs font-medium text-red-600 hover:bg-red-50"
          >
            Supprimer
          </button>
        </div>
      </td>
    </tr>
  )
}

// Tableau listant toutes les catégories
export default function CategoryTable({ categories, onEdit, onDelete }: CategoryTableProps) {
  return (
    <div className="overflow-x-auto rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
      <table className="w-full">
        <thead>
          <tr className="border-b border-slate-200 bg-slate-50">
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
              Nom
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
              Actions
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
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}