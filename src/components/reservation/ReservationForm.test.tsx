import { render, screen } from "@testing-library/react";
import ReservationForm from "./ReservationForm";
import { describe, expect, it } from "vitest";

describe("ReservationForm", () => {
  it("renders reservation title", () => {
    render(<ReservationForm />);

    expect(screen.getByText(/réservation/i)).toBeInTheDocument();
  });

  it("renders date input", () => {
    render(<ReservationForm />);

    expect(screen.getByDisplayValue("")).toBeInTheDocument();
  });
});