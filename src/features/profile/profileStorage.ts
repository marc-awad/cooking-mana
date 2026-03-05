export type UserProfile = {
  fullName: string
  email: string
  phoneNumber: string
  preferredLanguage: "FR" | "EN" | "ES"
}

const profileStoragePrefix = "cookingmama.user.profile"

function buildProfileStorageKey(email: string) {
  return `${profileStoragePrefix}.${email.toLowerCase()}`
}

export function loadUserProfile(email: string) {
  const profileStorageKey = buildProfileStorageKey(email)
  const profileValue = localStorage.getItem(profileStorageKey)

  if (!profileValue) {
    return null
  }

  try {
    return JSON.parse(profileValue) as UserProfile
  } catch {
    return null
  }
}

export function saveUserProfile(profile: UserProfile) {
  const profileStorageKey = buildProfileStorageKey(profile.email)
  localStorage.setItem(profileStorageKey, JSON.stringify(profile))
}
