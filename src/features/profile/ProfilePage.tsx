import { type FormEvent, useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { getValidAuthTokenPayload } from "../auth/jwtToken"
import {
  loadUserProfile,
  saveUserProfile,
  type UserProfile,
} from "./profileStorage"

type ProfileFormErrors = {
  fullName?: string
}

const requiredFieldMessage = "Ce champ est requis."
const profileSaveSuccessMessage = "Profil mis à jour avec succès."

function getInitialProfile(tokenEmail: string): UserProfile {
  const savedProfile = loadUserProfile(tokenEmail)

  if (savedProfile) {
    return savedProfile
  }

  return {
    fullName: "",
    email: tokenEmail,
    phoneNumber: "",
    preferredLanguage: "FR",
  }
}

function validateProfileForm(profile: UserProfile): ProfileFormErrors {
  if (!profile.fullName.trim()) {
    return { fullName: requiredFieldMessage }
  }

  return {}
}

function ProfilePage() {
  const authPayload = getValidAuthTokenPayload()

  const userEmail = useMemo(() => authPayload?.sub ?? "", [authPayload?.sub])
  const [profile, setProfile] = useState<UserProfile>(() =>
    getInitialProfile(userEmail),
  )
  const [profileErrors, setProfileErrors] = useState<ProfileFormErrors>({})
  const [successMessage, setSuccessMessage] = useState("")

  function updateProfileField(fieldName: keyof UserProfile, value: string) {
    setProfile((currentProfile) => ({
      ...currentProfile,
      [fieldName]: value,
    }))
  }

  function submitProfileForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const nextErrors = validateProfileForm(profile)
    setProfileErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setSuccessMessage("")
      return
    }

    saveUserProfile(profile)
    setSuccessMessage(profileSaveSuccessMessage)
  }

  if (!authPayload) {
    return (
      <main className="px-4 py-16">
        <div className="mx-auto max-w-xl rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Session expirée
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Ta session n'est plus valide. Merci de te reconnecter.
          </p>
          <Link
            to="/login"
            className="mt-4 inline-flex rounded-lg bg-rose-900 px-4 py-2 text-sm font-medium text-white hover:bg-rose-800"
          >
            Aller à la connexion
          </Link>
        </div>
      </main>
    )
  }

  return (
    <section className="px-4 py-16" aria-label="Profil utilisateur">
      <div className="mx-auto max-w-xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
          Mon profil
        </h1>
        <p className="mt-2 text-sm text-slate-600">
          Mets à jour tes informations personnelles.
        </p>

        <form
          className="mt-6 space-y-4"
          onSubmit={submitProfileForm}
          noValidate
        >
          <div>
            <label
              htmlFor="profile-full-name"
              className="mb-1 block text-sm font-medium text-slate-800"
            >
              Nom complet
            </label>
            <input
              id="profile-full-name"
              type="text"
              value={profile.fullName}
              onChange={(event) =>
                updateProfileField("fullName", event.target.value)
              }
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-rose-500 focus:ring-2 focus:ring-rose-100"
              aria-invalid={Boolean(profileErrors.fullName)}
              aria-describedby={
                profileErrors.fullName ? "profile-full-name-error" : undefined
              }
            />
            {profileErrors.fullName ? (
              <p
                id="profile-full-name-error"
                className="mt-1 text-xs font-medium text-red-600"
              >
                {profileErrors.fullName}
              </p>
            ) : null}
          </div>

          <div>
            <label
              htmlFor="profile-email"
              className="mb-1 block text-sm font-medium text-slate-800"
            >
              Email
            </label>
            <input
              id="profile-email"
              type="email"
              value={profile.email}
              readOnly
              className="w-full cursor-not-allowed rounded-lg border border-slate-200 bg-slate-100 px-3 py-2 text-sm text-slate-600"
            />
          </div>

          <div>
            <label
              htmlFor="profile-phone"
              className="mb-1 block text-sm font-medium text-slate-800"
            >
              Téléphone
            </label>
            <input
              id="profile-phone"
              type="tel"
              value={profile.phoneNumber}
              onChange={(event) =>
                updateProfileField("phoneNumber", event.target.value)
              }
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-rose-500 focus:ring-2 focus:ring-rose-100"
            />
          </div>

          <div>
            <label
              htmlFor="profile-language"
              className="mb-1 block text-sm font-medium text-slate-800"
            >
              Langue préférée
            </label>
            <select
              id="profile-language"
              value={profile.preferredLanguage}
              onChange={(event) =>
                updateProfileField(
                  "preferredLanguage",
                  event.target.value as UserProfile["preferredLanguage"],
                )
              }
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-rose-500 focus:ring-2 focus:ring-rose-100"
            >
              <option value="FR">Français</option>
              <option value="EN">English</option>
              <option value="ES">Español</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-rose-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-rose-800"
          >
            Mettre à jour mon profil
          </button>

          {successMessage ? (
            <p className="text-sm font-medium text-emerald-700">
              {successMessage}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  )
}

export default ProfilePage
