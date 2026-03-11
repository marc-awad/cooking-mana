import { type FormEvent, useState } from "react"
import { useTranslation } from "react-i18next"

type ReservationFormData = {
  name: string
  email: string
  date: string
  time: string
  guests: string
  message: string
}

const ADMIN_RESERVATIONS_KEY = "admin_reservations"
const today = new Date().toISOString().split("T")[0]

export default function ReservationForm() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState<ReservationFormData>({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(field: keyof ReservationFormData, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const newReservation = {
      id: crypto.randomUUID(),
      clientName: formData.name,
      clientEmail: formData.email,
      date: formData.date,
      numberOfGuests: parseInt(formData.guests, 10),
      status: "en_attente",
    }
    try {
      const stored = localStorage.getItem(ADMIN_RESERVATIONS_KEY)
      const existing = stored ? JSON.parse(stored) : []
      localStorage.setItem(
        ADMIN_RESERVATIONS_KEY,
        JSON.stringify([...existing, newReservation]),
      )
    } catch {
      /* ignore */
    }
    setSubmitted(true)
  }

  function handleNewReservation() {
    setFormData({
      name: "",
      email: "",
      date: "",
      time: "",
      guests: "",
      message: "",
    })
    setSubmitted(false)
  }

  return (
    <main className="px-4 py-16">
      <div className="mx-auto max-w-lg rounded-2xl bg-white p-8 shadow-md ring-1 ring-slate-200">
        <h1 className="text-3xl font-bold text-center mb-6">
          {t("reservation.title")}
        </h1>

        {submitted ? (
          <div className="flex flex-col items-center gap-6 py-4">
            <p className="rounded-lg bg-emerald-50 px-4 py-4 text-center text-emerald-700 font-medium w-full">
              {t("reservation.form.success")}
            </p>
            <button
              onClick={handleNewReservation}
              className="rounded-lg border border-slate-300 px-6 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition"
            >
              {t("reservation.bookTableCta")}
            </button>
          </div>
        ) : (
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            {/* Nom */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-slate-700">
                {t("reservation.form.name")}
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder={t("reservation.form.placeholders.name")}
                className="mt-1 rounded-lg border border-slate-300 p-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-slate-700">
                {t("reservation.form.email")}
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder={t("reservation.form.placeholders.email")}
                className="mt-1 rounded-lg border border-slate-300 p-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
              />
            </div>

            {/* Date */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-slate-700">
                {t("reservation.form.date")}
              </label>
              <input
                type="date"
                required
                min={today}
                value={formData.date}
                onChange={(e) => handleChange("date", e.target.value)}
                className="mt-1 rounded-lg border border-slate-300 p-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
              />
            </div>

            {/* Heure */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-slate-700">
                {t("reservation.form.time")}
              </label>
              <input
                type="time"
                required
                min="12:00"
                max="22:00"
                value={formData.time}
                onChange={(e) => handleChange("time", e.target.value)}
                className="mt-1 rounded-lg border border-slate-300 p-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
              />
            </div>

            {/* Nombre de personnes */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-slate-700">
                {t("reservation.form.guests")}
              </label>
              <input
                type="number"
                required
                min="1"
                max="20"
                value={formData.guests}
                onChange={(e) => handleChange("guests", e.target.value)}
                placeholder={t("reservation.form.placeholders.guests")}
                className="mt-1 rounded-lg border border-slate-300 p-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-slate-700">
                {t("reservation.form.messageOptional")}
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
                placeholder={t("reservation.form.placeholders.message")}
                rows={3}
                className="mt-1 rounded-lg border border-slate-300 p-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
              />
            </div>

            {/* Bouton */}
            <button
              type="submit"
              className="mt-4 rounded-lg bg-slate-900 text-white py-2 font-medium hover:bg-slate-700 transition"
            >
              {t("reservation.bookTableCta")}
            </button>
          </form>
        )}
      </div>
    </main>
  )
}
