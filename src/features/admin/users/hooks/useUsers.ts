import { useState } from "react"
import { INITIAL_USERS } from "../data/userData"
import type { User } from "../types/user"
import { generateEntityId } from "../../shared/generateEntityId"

export function useUsers() {
  const [users, setUsers] = useState<User[]>(INITIAL_USERS)

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
