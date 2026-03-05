import { render, screen } from "@testing-library/react";
import MenuPdfSection from "./MenuPdfSection";
import { describe, expect, it } from "vitest";

describe("MenuPdfSection", () => {
  it("renders section title", () => {
    render(<MenuPdfSection />);

    expect(screen.getByText(/notre carte/i)).toBeInTheDocument();
  });

  it("renders download button", () => {
    render(<MenuPdfSection />);

    expect(
      screen.getByText(/télécharger la carte pdf/i)
    ).toBeInTheDocument();
  });
});