import { render, screen } from "@testing-library/react"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import AppErrorBoundary from "./AppErrorBoundary"

let consoleErrorSpy: ReturnType<typeof vi.spyOn>

beforeEach(() => {
  consoleErrorSpy = vi
    .spyOn(console, "error")
    .mockImplementation(() => undefined)
})

afterEach(() => {
  consoleErrorSpy.mockRestore()
})

function CrashComponent(): null {
  throw new Error("Crash test")
}

describe("AppErrorBoundary", () => {
  it("renders fallback UI when a child throws", () => {
    render(
      <AppErrorBoundary>
        <CrashComponent />
      </AppErrorBoundary>,
    )

    expect(screen.getByText("Une erreur est survenue")).toBeDefined()
  })
})
