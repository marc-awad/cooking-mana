import type { User } from "../types/user"

type UserTableProps = {
  users: User[]
  onEdit: (user: User) => void
  onDelete: (userId: string) => void
}

// Ligne individuelle du tableau
function UserRow({
  user,
  onEdit,
  onDelete,
}: {
  user: User
  onEdit: (user: User) => void
  onDelete: (userId: string) => void
}) {
  return (
    <tr className="border-b border-slate-100 hover:bg-slate-50">
      <td className="px-4 py-3 text-sm text-slate-900">{user.name}</td>
      <td className="px-4 py-3 text-sm text-slate-600">{user.email}</td>
      <td className="px-4 py-3 text-sm">
        <span
          className={`rounded-full px-2 py-0.5 text-xs font-medium ${
            user.role === "admin"
              ? "bg-orange-100 text-orange-700"
              : "bg-slate-100 text-slate-600"
          }`}
        >
          {user.role === "admin" ? "Administrateur" : "Utilisateur"}
        </span>
      </td>
      <td className="px-4 py-3 text-sm">
        <div className="flex gap-2">
          <button
            onClick={() => onEdit(user)}
            className="rounded px-2 py-1 text-xs font-medium text-orange-600 hover:bg-orange-50"
          >
            Modifier
          </button>
          <button
            onClick={() => onDelete(user.id)}
            className="rounded px-2 py-1 text-xs font-medium text-red-600 hover:bg-red-50"
          >
            Supprimer
          </button>
        </div>
      </td>
    </tr>
  )
}

// Tableau listant tous les utilisateurs
export default function UserTable({ users, onEdit, onDelete }: UserTableProps) {
  return (
    <div className="overflow-x-auto rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
      <table className="w-full">
        <thead>
          <tr className="border-b border-slate-200 bg-slate-50">
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Nom</th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Email</th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Rôle</th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserRow key={user.id} user={user} onEdit={onEdit} onDelete={onDelete} />
          ))}
        </tbody>
      </table>
    </div>
  )
}