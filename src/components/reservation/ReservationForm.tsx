import { useTranslation } from "react-i18next"

export default function ReservationForm() {
  const { t } = useTranslation()

  return (
    <main className="px-4 py-16">
      <div className="mx-auto max-w-lg rounded-2xl bg-white p-8 shadow-md ring-1 ring-slate-200">
        <h1 className="text-3xl font-bold text-center mb-6">
          {t("reservation.title")}
        </h1>

        <form className="flex flex-col gap-5">
          {/* Nom */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-slate-700">
              {t("reservation.form.name")}
            </label>
            <input
              type="text"
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
              defaultValue=""
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
              min="1"
              max="20"
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
      </div>
    </main>
  )
}
