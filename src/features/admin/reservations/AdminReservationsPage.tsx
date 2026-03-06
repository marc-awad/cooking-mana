import { useState } from "react"
import { useTranslation } from "react-i18next"
import type { Reservation } from "./types/reservation"
import { useReservations } from "./hooks/useReservations"
import ReservationTable from "./components/ReservationTable"
import ReservationForm from "./components/ReservationForm"

type ModalState =
  | { type: "closed" }
  | { type: "create" }
  | { type: "edit"; reservation: Reservation }

// Page de gestion des réservations admin
export default function AdminReservationsPage() {
  const { t } = useTranslation()
  const { reservations, addReservation, updateReservation, deleteReservation } =
    useReservations()
  const [modalState, setModalState] = useState<ModalState>({ type: "closed" })

  function openCreateModal() {
    setModalState({ type: "create" })
  }

  function openEditModal(reservation: Reservation) {
    setModalState({ type: "edit", reservation })
  }

  function closeModal() {
    setModalState({ type: "closed" })
  }

  function handleSubmit(formData: Omit<Reservation, "id">) {
    if (modalState.type === "create") {
      addReservation(formData)
    } else if (modalState.type === "edit") {
      updateReservation({ ...formData, id: modalState.reservation.id })
    }
    closeModal()
  }

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
          {t("admin.nav.reservations")}
        </h1>
        <button
          onClick={openCreateModal}
          className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600"
        >
          + {t("admin.reservations.add")}
        </button>
      </div>

      <ReservationTable
        reservations={reservations}
        onEdit={openEditModal}
        onDelete={deleteReservation}
      />

      {/* Modal formulaire */}
      {modalState.type !== "closed" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
            <h2 className="mb-4 text-lg font-semibold text-slate-900">
              {modalState.type === "create"
                ? t("admin.reservations.add")
                : t("admin.reservations.edit")}
            </h2>
            <ReservationForm
              initialData={
                modalState.type === "edit" ? modalState.reservation : undefined
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
