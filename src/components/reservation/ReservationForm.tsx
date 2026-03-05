export default function ReservationForm() {
  return (
    <main className="px-4 py-16">
      <div className="mx-auto max-w-lg rounded-2xl bg-white p-8 shadow-md ring-1 ring-slate-200">

        <h1 className="text-3xl font-bold text-center mb-6">
          Réservation
        </h1>

        <form className="flex flex-col gap-5">

          {/* Nom */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-slate-700">
              Nom
            </label>
            <input
              type="text"
              placeholder="Votre nom"
              className="mt-1 rounded-lg border border-slate-300 p-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-slate-700">
              Email
            </label>
            <input
              type="email"
              placeholder="votre@email.com"
              className="mt-1 rounded-lg border border-slate-300 p-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
            />
          </div>

          {/* Date */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-slate-700">
              Date
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
              Heure
            </label>
            <input
              type="time"
              className="mt-1 rounded-lg border border-slate-300 p-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
            />
          </div>

          {/* Nombre de personnes */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-slate-700">
              Nombre de personnes
            </label>
            <input
              type="number"
              min="1"
              max="20"
              placeholder="Ex: 4"
              className="mt-1 rounded-lg border border-slate-300 p-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-slate-700">
              Message (optionnel)
            </label>
            <textarea
              placeholder="Allergies, demande spéciale..."
              rows={3}
              className="mt-1 rounded-lg border border-slate-300 p-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
            />
          </div>

          {/* Bouton */}
          <button
            type="submit"
            className="mt-4 rounded-lg bg-slate-900 text-white py-2 font-medium hover:bg-slate-700 transition"
          >
            Réserver une table
          </button>

        </form>
      </div>
    </main>
  )
}