import type { Product } from "../types/product"

type ProductTableProps = {
  products: Product[]
  onEdit: (product: Product) => void
  onDelete: (productId: string) => void
}

// Ligne individuelle du tableau
function ProductRow({
  product,
  onEdit,
  onDelete,
}: {
  product: Product
  onEdit: (product: Product) => void
  onDelete: (productId: string) => void
}) {
  return (
    <tr className="border-b border-slate-100 hover:bg-slate-50">
      <td className="px-4 py-3 text-sm text-slate-900">{product.name}</td>
      <td className="px-4 py-3 text-sm text-slate-600">{product.categoryId}</td>
      <td className="px-4 py-3 text-sm text-slate-600">{product.price.toFixed(2)} €</td>
      <td className="px-4 py-3 text-sm">
        <span
          className={`rounded-full px-2 py-0.5 text-xs font-medium ${
            product.isAvailable
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {product.isAvailable ? "Disponible" : "Indisponible"}
        </span>
      </td>
      <td className="px-4 py-3 text-sm">
        <div className="flex gap-2">
          <button
            onClick={() => onEdit(product)}
            className="rounded px-2 py-1 text-xs font-medium text-orange-600 hover:bg-orange-50"
          >
            Modifier
          </button>
          <button
            onClick={() => onDelete(product.id)}
            className="rounded px-2 py-1 text-xs font-medium text-red-600 hover:bg-red-50"
          >
            Supprimer
          </button>
        </div>
      </td>
    </tr>
  )
}

// Tableau listant tous les produits
export default function ProductTable({ products, onEdit, onDelete }: ProductTableProps) {
  return (
    <div className="overflow-x-auto rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
      <table className="w-full">
        <thead>
          <tr className="border-b border-slate-200 bg-slate-50">
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Nom</th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Catégorie</th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Prix</th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Statut</th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <ProductRow key={product.id} product={product} onEdit={onEdit} onDelete={onDelete} />
          ))}
        </tbody>
      </table>
    </div>
  )
}