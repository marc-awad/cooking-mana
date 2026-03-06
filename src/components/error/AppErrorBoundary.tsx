import { Component, type ErrorInfo, type ReactNode } from "react"
import i18n from "../../i18n"

type AppErrorBoundaryProps = {
  children: ReactNode
}

type AppErrorBoundaryState = {
  hasError: boolean
}

class AppErrorBoundary extends Component<
  AppErrorBoundaryProps,
  AppErrorBoundaryState
> {
  state: AppErrorBoundaryState = {
    hasError: false,
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Unhandled application error", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="min-h-screen bg-slate-50 px-4 py-16 text-slate-900">
          <div className="mx-auto max-w-xl rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h1 className="text-2xl font-bold tracking-tight">
              {i18n.t("errorBoundary.title")}
            </h1>
            <p className="mt-3 text-slate-600">
              {i18n.t("errorBoundary.message")}
            </p>
          </div>
        </main>
      )
    }

    return this.props.children
  }
}

export default AppErrorBoundary
