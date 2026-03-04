import { cleanup, render, screen } from "@testing-library/react"
import { afterEach, describe, expect, it } from "vitest"
import { MemoryRouter, Route, Routes } from "react-router-dom"
import { createDemoJwtToken } from "./demoJwtFactory"
import RequireAdmin from "./RequireAdmin"
import { authTokenStorageKey } from "./jwtToken"

afterEach(() => {
  cleanup()
  localStorage.clear()
})

describe("RequireAdmin", () => {
  it("redirects to login when no token is present", () => {
    render(
      <MemoryRouter initialEntries={["/admin"]}>
        <Routes>
          <Route
            path="/admin"
            element={
              <RequireAdmin>
                <div>Admin Page</div>
              </RequireAdmin>
            }
          />
          <Route path="/login" element={<div>Login Page</div>} />
          <Route path="/" element={<div>Home Page</div>} />
        </Routes>
      </MemoryRouter>,
    )

    expect(screen.getByText("Login Page")).toBeDefined()
  })

  it("redirects to home when token role is not admin", () => {
    const userToken = createDemoJwtToken({
      subject: "user@example.com",
      role: "user",
    })

    localStorage.setItem(authTokenStorageKey, userToken)

    render(
      <MemoryRouter initialEntries={["/admin"]}>
        <Routes>
          <Route
            path="/admin"
            element={
              <RequireAdmin>
                <div>Admin Page</div>
              </RequireAdmin>
            }
          />
          <Route path="/login" element={<div>Login Page</div>} />
          <Route path="/" element={<div>Home Page</div>} />
        </Routes>
      </MemoryRouter>,
    )

    expect(screen.getByText("Home Page")).toBeDefined()
  })

  it("renders admin content when token role is admin", () => {
    const adminToken = createDemoJwtToken({
      subject: "admin@admin.cookingmana",
      role: "admin",
    })

    localStorage.setItem(authTokenStorageKey, adminToken)

    render(
      <MemoryRouter initialEntries={["/admin"]}>
        <Routes>
          <Route
            path="/admin"
            element={
              <RequireAdmin>
                <div>Admin Page</div>
              </RequireAdmin>
            }
          />
          <Route path="/login" element={<div>Login Page</div>} />
          <Route path="/" element={<div>Home Page</div>} />
        </Routes>
      </MemoryRouter>,
    )

    expect(screen.getByText("Admin Page")).toBeDefined()
  })
})
