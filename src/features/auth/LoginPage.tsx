import { type FormEvent, useState } from "react"
import { useTranslation } from "react-i18next"
import { useNavigate, useLocation } from "react-router-dom"
import AuthField from "./components/AuthField"
import AuthFormContainer from "./components/AuthFormContainer"
import { createDemoJwtToken } from "./demoJwtFactory"
import { saveAuthToken } from "./jwtToken"
import { isEmailValid } from "./authValidation"

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

function validateLoginForm(
  formData: LoginFormData,
  messages: { requiredField: string; invalidEmail: string },
): LoginFormErrors {
  const errors: LoginFormErrors = {}

  if (!formData.email.trim()) {
    errors.email = messages.requiredField
  } else if (!isEmailValid(formData.email)) {
    errors.email = messages.invalidEmail
  }

  if (!formData.password.trim()) {
    errors.password = messages.requiredField
  }

  return errors
}

function LoginPage() {
  const { t } = useTranslation()
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

    const nextErrors = validateLoginForm(formData, {
      requiredField: t("auth.requiredField"),
      invalidEmail: t("auth.invalidEmail"),
    })
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
      title={t("auth.loginTitle")}
      subtitle={t("auth.loginSubtitle")}
    >
      <form className="space-y-4" onSubmit={submitLoginForm} noValidate>
        <AuthField
          id="login-email"
          name="email"
          label={t("auth.email")}
          type="email"
          value={formData.email}
          autoComplete="email"
          errorMessage={formErrors.email}
          onChange={updateField}
        />

        <AuthField
          id="login-password"
          name="password"
          label={t("auth.password")}
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
          {t("auth.signIn")}
        </button>
      </form>
    </AuthFormContainer>
  )
}

export default LoginPage
