import type { AuthTokenPayload } from "./jwtToken"

type DemoTokenInput = {
  subject: string
  role: "user" | "admin"
  lifetimeInSeconds?: number
}

const defaultLifetimeInSeconds = 60 * 60

function encodeBase64Url(value: string) {
  return btoa(value).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "")
}

export function createDemoJwtToken({
  subject,
  role,
  lifetimeInSeconds = defaultLifetimeInSeconds,
}: DemoTokenInput) {
  const now = Math.floor(Date.now() / 1000)

  const payload: AuthTokenPayload = {
    sub: subject,
    role,
    iat: now,
    exp: now + lifetimeInSeconds,
  }

  const header = { alg: "none", typ: "JWT" }

  const encodedHeader = encodeBase64Url(JSON.stringify(header))
  const encodedPayload = encodeBase64Url(JSON.stringify(payload))

  return `${encodedHeader}.${encodedPayload}.`
}
