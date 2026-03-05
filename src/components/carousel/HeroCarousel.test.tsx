import { cleanup, fireEvent, render, screen } from "@testing-library/react"
import { afterEach, describe, expect, it } from "vitest"
import HeroCarousel, { type CarouselSlide } from "./HeroCarousel"

afterEach(() => {
  cleanup()
})

const testSlides: CarouselSlide[] = [
  {
    id: "slide-1",
    title: "Slide One",
    description: "Description One",
  },
  {
    id: "slide-2",
    title: "Slide Two",
    description: "Description Two",
  },
  {
    id: "slide-3",
    title: "Slide Three",
    description: "Description Three",
  },
]

describe("HeroCarousel", () => {
  it("renders the first slide by default", () => {
    render(<HeroCarousel slides={testSlides} />)

    expect(screen.getByText("Slide One")).toBeDefined()
    expect(screen.getByText("Description One")).toBeDefined()
  })

  it("goes to next and previous slide", () => {
    render(<HeroCarousel slides={testSlides} />)

    fireEvent.click(screen.getByRole("button", { name: "Suivant" }))
    expect(screen.getByText("Slide Two")).toBeDefined()

    fireEvent.click(screen.getByRole("button", { name: "Précédent" }))
    expect(screen.getByText("Slide One")).toBeDefined()
  })

  it("selects a slide from indicators", () => {
    render(<HeroCarousel slides={testSlides} />)

    fireEvent.click(screen.getByRole("button", { name: "Aller au slide 3" }))
    expect(screen.getByText("Slide Three")).toBeDefined()
  })
})
