import type { ReactNode } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { getValidAuthToken } from "./jwtToken"

type RequireAuthProps = {
  children: ReactNode
}

function RequireAuth({ children }: RequireAuthProps) {
  const location = useLocation()
  const validToken = getValidAuthToken()

  if (!validToken) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />
  }

  return children
}

export default RequireAuth
