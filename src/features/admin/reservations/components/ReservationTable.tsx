import type { Reservation, ReservationStatus } from "../types/reservation"
import { useTranslation } from "react-i18next"

type ReservationTableProps = {
  reservations: Reservation[]
  onEdit: (reservation: Reservation) => void
  onDelete: (reservationId: string) => void
}

// Couleurs associées à chaque statut
const STATUS_STYLES: Record<ReservationStatus, string> = {
  en_attente: "bg-yellow-100 text-yellow-700",
  confirmee: "bg-green-100 text-green-700",
  annulee: "bg-red-100 text-red-700",
}

// Ligne individuelle du tableau
function ReservationRow({
  reservation,
  onEdit,
  onDelete,
  statusLabels,
  editLabel,
  deleteLabel,
}: {
  reservation: Reservation
  onEdit: (reservation: Reservation) => void
  onDelete: (reservationId: string) => void
  statusLabels: Record<ReservationStatus, string>
  editLabel: string
  deleteLabel: string
}) {
  return (
    <tr className="border-b border-slate-100 hover:bg-slate-50">
      <td className="px-4 py-3 text-sm text-slate-900">
        {reservation.clientName}
      </td>
      <td className="px-4 py-3 text-sm text-slate-600">
        {reservation.clientEmail}
      </td>
      <td className="px-4 py-3 text-sm text-slate-600">{reservation.date}</td>
      <td className="px-4 py-3 text-sm text-slate-600">
        {reservation.numberOfGuests}
      </td>
      <td className="px-4 py-3 text-sm">
        <span
          className={`rounded-full px-2 py-0.5 text-xs font-medium ${STATUS_STYLES[reservation.status]}`}
        >
          {statusLabels[reservation.status]}
        </span>
      </td>
      <td className="px-4 py-3 text-sm">
        <div className="flex gap-2">
          <button
            onClick={() => onEdit(reservation)}
            className="rounded px-2 py-1 text-xs font-medium text-orange-600 hover:bg-orange-50"
          >
            {editLabel}
          </button>
          <button
            onClick={() => onDelete(reservation.id)}
            className="rounded px-2 py-1 text-xs font-medium text-red-600 hover:bg-red-50"
          >
            {deleteLabel}
          </button>
        </div>
      </td>
    </tr>
  )
}

// Tableau listant toutes les réservations
export default function ReservationTable({
  reservations,
  onEdit,
  onDelete,
}: ReservationTableProps) {
  const { t } = useTranslation()

  const statusLabels: Record<ReservationStatus, string> = {
    en_attente: t("admin.status.pending"),
    confirmee: t("admin.status.confirmed"),
    annulee: t("admin.status.cancelled"),
  }

  return (
    <div className="overflow-x-auto rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
      <table className="w-full">
        <thead>
          <tr className="border-b border-slate-200 bg-slate-50">
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
              {t("admin.reservations.form.clientName")}
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
              {t("admin.reservations.form.clientEmail")}
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
              {t("admin.reservations.form.date")}
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
              {t("admin.reservations.form.guests")}
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
              {t("admin.common.status")}
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
              {t("admin.common.actions")}
            </th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation) => (
            <ReservationRow
              key={reservation.id}
              reservation={reservation}
              onEdit={onEdit}
              onDelete={onDelete}
              statusLabels={statusLabels}
              editLabel={t("admin.common.edit")}
              deleteLabel={t("admin.common.delete")}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}
