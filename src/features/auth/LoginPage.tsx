import { type FormEvent, useState } from "react"
import AuthField from "./components/AuthField"
import AuthFormContainer from "./components/AuthFormContainer"
import {
  invalidEmailMessage,
  isEmailValid,
  requiredFieldMessage,
} from "./authValidation"

type LoginFormData = {
  email: string
  password: string
}

type LoginFormErrors = Partial<Record<keyof LoginFormData, string>>

const initialLoginFormData: LoginFormData = {
  email: "",
  password: "",
}

function validateLoginForm(formData: LoginFormData): LoginFormErrors {
  const errors: LoginFormErrors = {}

  if (!formData.email.trim()) {
    errors.email = requiredFieldMessage
  } else if (!isEmailValid(formData.email)) {
    errors.email = invalidEmailMessage
  }

  if (!formData.password.trim()) {
    errors.password = requiredFieldMessage
  }

  return errors
}

function LoginPage() {
  const [formData, setFormData] = useState<LoginFormData>(initialLoginFormData)
  const [formErrors, setFormErrors] = useState<LoginFormErrors>({})
  const [successMessage, setSuccessMessage] = useState("")

  function updateField(fieldName: string, value: string) {
    setFormData((currentFormData) => ({
      ...currentFormData,
      [fieldName]: value,
    }))
  }

  function submitLoginForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const nextErrors = validateLoginForm(formData)
    setFormErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setSuccessMessage("")
      return
    }

    setSuccessMessage("Connexion prête côté front-end (démo).")
  }

  return (
    <AuthFormContainer
      title="Connexion"
      subtitle="Connecte-toi à ton espace CookingMana."
    >
      <form className="space-y-4" onSubmit={submitLoginForm} noValidate>
        <AuthField
          id="login-email"
          name="email"
          label="Email"
          type="email"
          value={formData.email}
          autoComplete="email"
          errorMessage={formErrors.email}
          onChange={updateField}
        />

        <AuthField
          id="login-password"
          name="password"
          label="Mot de passe"
          type="password"
          value={formData.password}
          autoComplete="current-password"
          errorMessage={formErrors.password}
          onChange={updateField}
        />

        <button
          type="submit"
          className="w-full rounded-lg bg-rose-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-rose-800"
        >
          Se connecter
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

export default LoginPage
