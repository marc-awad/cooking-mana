import { useState } from "react"
import { useTranslation } from "react-i18next"
import type { User } from "./types/user"
import { useUsers } from "./hooks/useUsers"
import UserTable from "./components/UserTable"
import UserForm from "./components/UserForm"

type ModalState =
  | { type: "closed" }
  | { type: "create" }
  | { type: "edit"; user: User }

// Page de gestion des utilisateurs admin
export default function AdminUsersPage() {
  const { t } = useTranslation()
  const { users, addUser, updateUser, deleteUser } = useUsers()
  const [modalState, setModalState] = useState<ModalState>({ type: "closed" })

  function openCreateModal() {
    setModalState({ type: "create" })
  }

  function openEditModal(user: User) {
    setModalState({ type: "edit", user })
  }

  function closeModal() {
    setModalState({ type: "closed" })
  }

  function handleSubmit(formData: Omit<User, "id">) {
    if (modalState.type === "create") {
      addUser(formData)
    } else if (modalState.type === "edit") {
      updateUser({ ...formData, id: modalState.user.id })
    }
    closeModal()
  }

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
          {t("admin.nav.users")}
        </h1>
        <button
          onClick={openCreateModal}
          className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600"
        >
          + {t("admin.users.add")}
        </button>
      </div>

      <UserTable users={users} onEdit={openEditModal} onDelete={deleteUser} />

      {/* Modal formulaire */}
      {modalState.type !== "closed" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
            <h2 className="mb-4 text-lg font-semibold text-slate-900">
              {modalState.type === "create"
                ? t("admin.users.add")
                : t("admin.users.edit")}
            </h2>
            <UserForm
              initialData={
                modalState.type === "edit" ? modalState.user : undefined
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
