import type { ReactNode } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { getValidAuthTokenPayload } from "./jwtToken"

type RequireAdminProps = {
  children: ReactNode
}

function RequireAdmin({ children }: RequireAdminProps) {
  const location = useLocation()
  const validTokenPayload = getValidAuthTokenPayload()

  if (!validTokenPayload) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />
  }

  if (validTokenPayload.role !== "admin") {
    return <Navigate to="/" replace />
  }

  return children
}

export default RequireAdmin
