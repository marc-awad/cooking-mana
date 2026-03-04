import { describe, expect, it } from "vitest"
import { loadUserProfile, saveUserProfile } from "./profileStorage"

describe("profileStorage", () => {
  it("saves and loads profile by email key", () => {
    const profile = {
      fullName: "Jean Dupont",
      email: "jean@example.com",
      phoneNumber: "0600000000",
      preferredLanguage: "FR" as const,
    }

    saveUserProfile(profile)

    expect(loadUserProfile("jean@example.com")).toEqual(profile)
  })

  it("returns null when profile does not exist", () => {
    expect(loadUserProfile("unknown@example.com")).toBeNull()
  })
})
