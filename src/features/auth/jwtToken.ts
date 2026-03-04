export type AuthTokenPayload = {
  sub: string
  role: string
  iat: number
  exp: number
}

export const authTokenStorageKey = "cookingmana.auth.token"

export function saveAuthToken(token: string) {
  localStorage.setItem(authTokenStorageKey, token)
}

export function getAuthToken() {
  return localStorage.getItem(authTokenStorageKey)
}

export function clearAuthToken() {
  localStorage.removeItem(authTokenStorageKey)
}

function decodeBase64Url(base64UrlValue: string) {
  const normalizedValue = base64UrlValue
    .replace(/-/g, "+")
    .replace(/_/g, "/")
    .padEnd(Math.ceil(base64UrlValue.length / 4) * 4, "=")

  return atob(normalizedValue)
}

export function parseAuthTokenPayload(token: string) {
  try {
    const [, payload] = token.split(".")

    if (!payload) {
      return null
    }

    const decodedPayload = decodeBase64Url(payload)
    return JSON.parse(decodedPayload) as AuthTokenPayload
  } catch {
    return null
  }
}

export function isAuthTokenExpired(
  token: string,
  currentEpochSeconds: number = Math.floor(Date.now() / 1000),
) {
  const payload = parseAuthTokenPayload(token)

  if (!payload || typeof payload.exp !== "number") {
    return true
  }

  return payload.exp <= currentEpochSeconds
}

export function getValidAuthToken() {
  const token = getAuthToken()

  if (!token) {
    return null
  }

  if (isAuthTokenExpired(token)) {
    clearAuthToken()
    return null
  }

  return token
}
