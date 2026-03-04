import { type FormEvent, useState } from "react"
import AuthField from "./components/AuthField"
import AuthFormContainer from "./components/AuthFormContainer"
import {
  invalidEmailMessage,
  isEmailValid,
  isPasswordLengthValid,
  minimumPasswordLength,
  requiredFieldMessage,
} from "./authValidation"

type RegisterFormData = {
  fullName: string
  email: string
  password: string
  confirmPassword: string
}

type RegisterFormErrors = Partial<Record<keyof RegisterFormData, string>>

const initialRegisterFormData: RegisterFormData = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
}

const passwordLengthMessage = `Le mot de passe doit contenir au moins ${minimumPasswordLength} caractères.`
const passwordMismatchMessage = "Les mots de passe ne correspondent pas."

function validateRegisterForm(formData: RegisterFormData): RegisterFormErrors {
  const errors: RegisterFormErrors = {}

  if (!formData.fullName.trim()) {
    errors.fullName = requiredFieldMessage
  }

  if (!formData.email.trim()) {
    errors.email = requiredFieldMessage
  } else if (!isEmailValid(formData.email)) {
    errors.email = invalidEmailMessage
  }

  if (!formData.password.trim()) {
    errors.password = requiredFieldMessage
  } else if (!isPasswordLengthValid(formData.password)) {
    errors.password = passwordLengthMessage
  }

  if (!formData.confirmPassword.trim()) {
    errors.confirmPassword = requiredFieldMessage
  } else if (formData.password !== formData.confirmPassword) {
    errors.confirmPassword = passwordMismatchMessage
  }

  return errors
}

function RegisterPage() {
  const [formData, setFormData] = useState<RegisterFormData>(
    initialRegisterFormData,
  )
  const [formErrors, setFormErrors] = useState<RegisterFormErrors>({})
  const [successMessage, setSuccessMessage] = useState("")

  function updateField(fieldName: string, value: string) {
    setFormData((currentFormData) => ({
      ...currentFormData,
      [fieldName]: value,
    }))
  }

  function submitRegisterForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const nextErrors = validateRegisterForm(formData)
    setFormErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setSuccessMessage("")
      return
    }

    setSuccessMessage("Inscription prête côté front-end (démo).")
  }

  return (
    <AuthFormContainer
      title="Inscription"
      subtitle="Crée ton compte CookingMana en quelques secondes."
    >
      <form className="space-y-4" onSubmit={submitRegisterForm} noValidate>
        <AuthField
          id="register-fullName"
          name="fullName"
          label="Nom complet"
          type="text"
          value={formData.fullName}
          autoComplete="name"
          errorMessage={formErrors.fullName}
          onChange={updateField}
        />

        <AuthField
          id="register-email"
          name="email"
          label="Email"
          type="email"
          value={formData.email}
          autoComplete="email"
          errorMessage={formErrors.email}
          onChange={updateField}
        />

        <AuthField
          id="register-password"
          name="password"
          label="Mot de passe"
          type="password"
          value={formData.password}
          autoComplete="new-password"
          errorMessage={formErrors.password}
          onChange={updateField}
        />

        <AuthField
          id="register-confirmPassword"
          name="confirmPassword"
          label="Confirmer le mot de passe"
          type="password"
          value={formData.confirmPassword}
          autoComplete="new-password"
          errorMessage={formErrors.confirmPassword}
          onChange={updateField}
        />

        <button
          type="submit"
          className="w-full rounded-lg bg-rose-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-rose-800"
        >
          Créer mon compte
        </button>

        {successMessage ? (
          <p className="text-sm font-medium text-emerald-700">
            {successMessage}
          </p>
        ) : null}
      </form>
    </AuthFormContainer>
  )
}

export default RegisterPage
