import { cleanup, render, screen } from "@testing-library/react"
import { afterEach, describe, expect, it } from "vitest"
import { MemoryRouter, Route, Routes } from "react-router-dom"
import { createDemoJwtToken } from "./demoJwtFactory"
import RequireAuth from "./RequireAuth"
import { authTokenStorageKey } from "./jwtToken"

afterEach(() => {
  cleanup()
  localStorage.clear()
})

describe("RequireAuth", () => {
  it("redirects to login when no token is present", () => {
    render(
      <MemoryRouter initialEntries={["/private"]}>
        <Routes>
          <Route
            path="/private"
            element={
              <RequireAuth>
                <div>Private Page</div>
              </RequireAuth>
            }
          />
          <Route path="/login" element={<div>Login Page</div>} />
        </Routes>
      </MemoryRouter>,
    )

    expect(screen.getByText("Login Page")).toBeDefined()
  })

  it("renders protected content when token is valid", () => {
    const token = createDemoJwtToken({
      subject: "user@example.com",
      role: "user",
    })

    localStorage.setItem(authTokenStorageKey, token)

    render(
      <MemoryRouter initialEntries={["/private"]}>
        <Routes>
          <Route
            path="/private"
            element={
              <RequireAuth>
                <div>Private Page</div>
              </RequireAuth>
            }
          />
          <Route path="/login" element={<div>Login Page</div>} />
        </Routes>
      </MemoryRouter>,
    )

    expect(screen.getByText("Private Page")).toBeDefined()
  })
})
