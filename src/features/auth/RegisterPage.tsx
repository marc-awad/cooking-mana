import { type FormEvent, useState } from "react"
import { useTranslation } from "react-i18next"
import AuthField from "./components/AuthField"
import AuthFormContainer from "./components/AuthFormContainer"
import { createDemoJwtToken } from "./demoJwtFactory"
import {
  isEmailValid,
  isPasswordLengthValid,
  minimumPasswordLength,
} from "./authValidation"
import { saveAuthToken } from "./jwtToken"

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

function validateRegisterForm(
  formData: RegisterFormData,
  messages: {
    requiredField: string
    invalidEmail: string
    passwordLength: string
    passwordMismatch: string
  },
): RegisterFormErrors {
  const errors: RegisterFormErrors = {}

  if (!formData.fullName.trim()) {
    errors.fullName = messages.requiredField
  }

  if (!formData.email.trim()) {
    errors.email = messages.requiredField
  } else if (!isEmailValid(formData.email)) {
    errors.email = messages.invalidEmail
  }

  if (!formData.password.trim()) {
    errors.password = messages.requiredField
  } else if (!isPasswordLengthValid(formData.password)) {
    errors.password = messages.passwordLength
  }

  if (!formData.confirmPassword.trim()) {
    errors.confirmPassword = messages.requiredField
  } else if (formData.password !== formData.confirmPassword) {
    errors.confirmPassword = messages.passwordMismatch
  }

  return errors
}

function RegisterPage() {
  const { t } = useTranslation()
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

    const nextErrors = validateRegisterForm(formData, {
      requiredField: t("auth.requiredField"),
      invalidEmail: t("auth.invalidEmail"),
      passwordLength: t("auth.passwordMinLength", {
        count: minimumPasswordLength,
      }),
      passwordMismatch: t("auth.passwordMismatch"),
    })
    setFormErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setSuccessMessage("")
      return
    }

    const demoToken = createDemoJwtToken({
      subject: formData.email,
      role: "user",
    })

    saveAuthToken(demoToken)
    setSuccessMessage(t("auth.registerSuccess"))
  }

  return (
    <AuthFormContainer
      title="Inscription"
      subtitle="Crée ton compte Cookingmama en quelques secondes."
    >
      <form className="space-y-4" onSubmit={submitRegisterForm} noValidate>
        <AuthField
          id="register-fullName"
          name="fullName"
          label={t("auth.fullName")}
          type="text"
          value={formData.fullName}
          autoComplete="name"
          errorMessage={formErrors.fullName}
          onChange={updateField}
        />

        <AuthField
          id="register-email"
          name="email"
          label={t("auth.email")}
          type="email"
          value={formData.email}
          autoComplete="email"
          errorMessage={formErrors.email}
          onChange={updateField}
        />

        <AuthField
          id="register-password"
          name="password"
          label={t("auth.password")}
          type="password"
          value={formData.password}
          autoComplete="new-password"
          errorMessage={formErrors.password}
          onChange={updateField}
        />

        <AuthField
          id="register-confirmPassword"
          name="confirmPassword"
          label={t("auth.confirmPassword")}
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
          {t("auth.signUp")}
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
