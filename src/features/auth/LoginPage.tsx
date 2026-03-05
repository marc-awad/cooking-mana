import { type FormEvent, useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import AuthField from "./components/AuthField"
import AuthFormContainer from "./components/AuthFormContainer"
import { createDemoJwtToken } from "./demoJwtFactory"
import { saveAuthToken } from "./jwtToken"
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

function getRoleFromEmail(email: string) {
  const trimmedEmail = email.trim().toLowerCase()
  const adminEmailSuffix = "@admin.cookingmama"
  return trimmedEmail.endsWith(adminEmailSuffix) ? "admin" : "user"
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
  const navigate = useNavigate()
  const location = useLocation()

  // Redirige vers la page demandée avant le login, sinon vers l'accueil
  const redirectPath = (location.state as { from?: string })?.from ?? "/"

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

    if (Object.keys(nextErrors).length > 0) return

    const role = getRoleFromEmail(formData.email)

    const demoToken = createDemoJwtToken({
      subject: formData.email,
      role,
    })

    saveAuthToken(demoToken)
    navigate(redirectPath, { replace: true })
  }

  return (
    <AuthFormContainer
      title="Connexion"
      subtitle="Connecte-toi à ton espace Cookingmama."
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
      </form>
    </AuthFormContainer>
  )
}

export default LoginPage