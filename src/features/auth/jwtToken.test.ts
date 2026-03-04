import { describe, expect, it } from "vitest"
import { createDemoJwtToken } from "./demoJwtFactory"
import {
  authTokenStorageKey,
  clearAuthToken,
  getAuthToken,
  hasRequiredRole,
  getValidAuthToken,
  isAuthTokenExpired,
  parseAuthTokenPayload,
  saveAuthToken,
} from "./jwtToken"

describe("jwtToken", () => {
  it("stores and retrieves token", () => {
    clearAuthToken()
    saveAuthToken("demo-token")

    expect(getAuthToken()).toBe("demo-token")
  })

  it("parses payload from token", () => {
    const token = createDemoJwtToken({
      subject: "user@example.com",
      role: "user",
    })

    const payload = parseAuthTokenPayload(token)

    expect(payload?.sub).toBe("user@example.com")
    expect(payload?.role).toBe("user")
  })

  it("flags expired token as invalid and clears storage", () => {
    const expiredToken = createDemoJwtToken({
      subject: "user@example.com",
      role: "user",
      lifetimeInSeconds: -10,
    })

    saveAuthToken(expiredToken)

    expect(isAuthTokenExpired(expiredToken)).toBe(true)
    expect(getValidAuthToken()).toBeNull()
    expect(localStorage.getItem(authTokenStorageKey)).toBeNull()
  })

  it("checks required role from valid token payload", () => {
    const userToken = createDemoJwtToken({
      subject: "user@example.com",
      role: "user",
    })

    saveAuthToken(userToken)

    expect(hasRequiredRole("user")).toBe(true)
    expect(hasRequiredRole("admin")).toBe(false)
  })
})
