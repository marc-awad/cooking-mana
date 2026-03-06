import { useState } from "react"
import { useTranslation } from "react-i18next"
import type { Product } from "./types/product"
import { useProducts } from "./hooks/useProducts"
import ProductTable from "./components/ProductTable"
import ProductForm from "./components/ProductForm"

type ModalState =
  | { type: "closed" }
  | { type: "create" }
  | { type: "edit"; product: Product }

// Page CRUD des produits admin
export default function AdminProductsPage() {
  const { t } = useTranslation()
  const { products, addProduct, updateProduct, deleteProduct } = useProducts()
  const [modalState, setModalState] = useState<ModalState>({ type: "closed" })

  function openCreateModal() {
    setModalState({ type: "create" })
  }

  function openEditModal(product: Product) {
    setModalState({ type: "edit", product })
  }

  function closeModal() {
    setModalState({ type: "closed" })
  }

  function handleSubmit(formData: Omit<Product, "id">) {
    if (modalState.type === "create") {
      addProduct(formData)
    } else if (modalState.type === "edit") {
      updateProduct({ ...formData, id: modalState.product.id })
    }
    closeModal()
  }

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
          {t("admin.nav.products")}
        </h1>
        <button
          onClick={openCreateModal}
          className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600"
        >
          + {t("admin.products.add")}
        </button>
      </div>

      <ProductTable
        products={products}
        onEdit={openEditModal}
        onDelete={deleteProduct}
      />

      {/* Modal formulaire */}
      {modalState.type !== "closed" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
            <h2 className="mb-4 text-lg font-semibold text-slate-900">
              {modalState.type === "create"
                ? t("admin.products.add")
                : t("admin.products.edit")}
            </h2>
            <ProductForm
              initialData={
                modalState.type === "edit" ? modalState.product : undefined
              }
              onSubmit={handleSubmit}
              onCancel={closeModal}
            />
          </div>
        </div>
      )}
    </div>
  )
}
