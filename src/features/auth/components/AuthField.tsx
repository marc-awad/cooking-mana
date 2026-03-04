type AuthFieldProps = {
  id: string
  name: string
  label: string
  type: "text" | "email" | "password"
  value: string
  autoComplete: string
  errorMessage?: string
  onChange: (fieldName: string, value: string) => void
}

function AuthField({
  id,
  name,
  label,
  type,
  value,
  autoComplete,
  errorMessage,
  onChange,
}: AuthFieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1 block text-sm font-medium text-slate-800"
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={(event) => onChange(name, event.target.value)}
        className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-rose-500 focus:ring-2 focus:ring-rose-100"
        aria-invalid={Boolean(errorMessage)}
        aria-describedby={errorMessage ? `${id}-error` : undefined}
      />
      {errorMessage ? (
        <p id={`${id}-error`} className="mt-1 text-xs font-medium text-red-600">
          {errorMessage}
        </p>
      ) : null}
    </div>
  )
}

export default AuthField
