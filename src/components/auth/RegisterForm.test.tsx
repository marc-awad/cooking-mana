import { render, screen } from "@testing-library/react";
import RegisterForm from "./RegisterForm";
import { describe, expect, it } from "vitest";

describe("RegisterForm", () => {
  it("renders register title", () => {
    render(<RegisterForm />);

    expect(screen.getByText(/inscription/i)).toBeInTheDocument();
  });

  it("renders name input", () => {
    render(<RegisterForm />);

    expect(screen.getByPlaceholderText(/nom/i)).toBeInTheDocument();
  });

  it("renders email input", () => {
    render(<RegisterForm />);

    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
  });
});