import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-16 text-slate-900">
      <div className="mx-auto max-w-xl rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
        <h1 className="text-3xl font-bold tracking-tight">
          Vite + React + TypeScript + Tailwind
        </h1>
        <p className="mt-3 text-slate-600">Ton projet est prêt ✅</p>
        <button
          onClick={() => setCount((current) => current + 1)}
          className="mt-6 rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700"
        >
          count is {count}
        </button>
      </div>
    </main>
  )
}

export default App
