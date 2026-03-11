import { useState } from "react"
import { INITIAL_USERS } from "../data/userData"
import type { User } from "../types/user"
import { generateEntityId } from "../../shared/generateEntityId"

export function useUsers() {
  const [users, setUsersRaw] = useState<User[]>(() => {
    try {
      const raw = localStorage.getItem("admin_users")
      if (raw) return JSON.parse(raw) as User[]
    } catch {
      /* ignore */
    }
    return INITIAL_USERS
  })

  function setUsers(updater: (prev: User[]) => User[]) {
    setUsersRaw((prev) => {
      const next = updater(prev)
      localStorage.setItem("admin_users", JSON.stringify(next))
      return next
    })
  }

  // Ajoute un nouvel utilisateur
  function addUser(newUser: Omit<User, "id">) {
    const userWithId: User = { ...newUser, id: generateEntityId() }
    setUsers((current) => [...current, userWithId])
  }

  // Modifie un utilisateur existant
  function updateUser(updatedUser: User) {
    setUsers((current) =>
      current.map((user) => (user.id === updatedUser.id ? updatedUser : user)),
    )
  }

  // Supprime un utilisateur par son id
  function deleteUser(userId: string) {
    setUsers((current) => current.filter((user) => user.id !== userId))
  }

  return { users, addUser, updateUser, deleteUser }
}
