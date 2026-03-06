import { useState } from "react"
import { useTranslation } from "react-i18next"
import type { Category } from "./types/category"
import { useCategories } from "./hooks/useCategories"
import CategoryTable from "./components/CategoryTable"
import CategoryForm from "./components/CategoryForm"

type ModalState =
  | { type: "closed" }
  | { type: "create" }
  | { type: "edit"; category: Category }

// Page CRUD des catégories admin
export default function AdminCategoriesPage() {
  const { t } = useTranslation()
  const { categories, addCategory, updateCategory, deleteCategory } =
    useCategories()
  const [modalState, setModalState] = useState<ModalState>({ type: "closed" })

  function openCreateModal() {
    setModalState({ type: "create" })
  }

  function openEditModal(category: Category) {
    setModalState({ type: "edit", category })
  }

  function closeModal() {
    setModalState({ type: "closed" })
  }

  function handleSubmit(name: string) {
    if (modalState.type === "create") {
      addCategory(name)
    } else if (modalState.type === "edit") {
      updateCategory({ id: modalState.category.id, name })
    }
    closeModal()
  }

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
          {t("admin.nav.categories")}
        </h1>
        <button
          onClick={openCreateModal}
          className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600"
        >
          + {t("admin.categories.add")}
        </button>
      </div>

      <CategoryTable
        categories={categories}
        onEdit={openEditModal}
        onDelete={deleteCategory}
      />

      {/* Modal formulaire */}
      {modalState.type !== "closed" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
            <h2 className="mb-4 text-lg font-semibold text-slate-900">
              {modalState.type === "create"
                ? t("admin.categories.add")
                : t("admin.categories.edit")}
            </h2>
            <CategoryForm
              initialData={
                modalState.type === "edit" ? modalState.category : undefined
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
