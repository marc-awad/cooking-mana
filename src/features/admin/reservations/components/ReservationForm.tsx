import { type FormEvent, useState } from "react"
import { useTranslation } from "react-i18next"
import type { Reservation, ReservationStatus } from "../types/reservation"

type ReservationFormProps = {
  initialData?: Reservation
  onSubmit: (reservation: Omit<Reservation, "id">) => void
  onCancel: () => void
}

const EMPTY_FORM: Omit<Reservation, "id"> = {
  clientName: "",
  clientEmail: "",
  date: "",
  numberOfGuests: 1,
  status: "en_attente",
}

const MIN_GUESTS = 1
const INPUT_CLASS =
  "rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 w-full"

function parseGuestCountInput(inputValue: string) {
  const parsedValue = Number.parseInt(inputValue, 10)
  return Number.isInteger(parsedValue) && parsedValue >= MIN_GUESTS
    ? parsedValue
    : MIN_GUESTS
}

function FormField({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-slate-700">{label}</label>
      {children}
    </div>
  )
}

export default function ReservationForm({
  initialData,
  onSubmit,
  onCancel,
}: ReservationFormProps) {
  const { t } = useTranslation()
  const [formData, setFormData] = useState<Omit<Reservation, "id">>(
    initialData ?? EMPTY_FORM,
  )

  function updateField(
    field: keyof Omit<Reservation, "id">,
    value: string | number,
  ) {
    setFormData((current) => ({ ...current, [field]: value }))
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <FormField label={t("admin.reservations.form.clientName")}>
        <input
          className={INPUT_CLASS}
          type="text"
          value={formData.clientName}
          onChange={(event) => updateField("clientName", event.target.value)}
          required
        />
      </FormField>

      <FormField label={t("admin.reservations.form.clientEmail")}>
        <input
          className={INPUT_CLASS}
          type="email"
          value={formData.clientEmail}
          onChange={(event) => updateField("clientEmail", event.target.value)}
          required
        />
      </FormField>

      <FormField label={t("admin.reservations.form.date")}>
        <input
          className={INPUT_CLASS}
          type="date"
          value={formData.date}
          onChange={(event) => updateField("date", event.target.value)}
          required
        />
      </FormField>

      <FormField label={t("admin.reservations.form.guests")}>
        <input
          className={INPUT_CLASS}
          type="number"
          min="1"
          value={formData.numberOfGuests}
          onChange={(event) =>
            updateField(
              "numberOfGuests",
              parseGuestCountInput(event.target.value),
            )
          }
          required
        />
      </FormField>

      <FormField label={t("admin.common.status")}>
        <select
          className={INPUT_CLASS}
          value={formData.status}
          onChange={(event) =>
            updateField("status", event.target.value as ReservationStatus)
          }
        >
          <option value="en_attente">{t("admin.status.pending")}</option>
          <option value="confirmee">{t("admin.status.confirmed")}</option>
          <option value="annulee">{t("admin.status.cancelled")}</option>
        </select>
      </FormField>

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
