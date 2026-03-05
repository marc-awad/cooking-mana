import { render, screen } from "@testing-library/react";
import LoginForm from "./LoginForm";
import { describe, expect, it } from "vitest";

describe("LoginForm", () => {
  it("renders login title", () => {
    render(<LoginForm />);

    expect(screen.getByText(/connexion/i)).toBeInTheDocument();
  });

  it("renders email input", () => {
    render(<LoginForm />);

    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
  });
});