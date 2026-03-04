import type { ReactNode } from "react"

type AuthFormContainerProps = {
  title: string
  subtitle: string
  children: ReactNode
}

function AuthFormContainer({
  title,
  subtitle,
  children,
}: AuthFormContainerProps) {
  return (
    <section className="px-4 py-16" aria-label={title}>
      <div className="mx-auto max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
          {title}
        </h1>
        <p className="mt-2 text-sm text-slate-600">{subtitle}</p>
        <div className="mt-6">{children}</div>
      </div>
    </section>
  )
}

export default AuthFormContainer
