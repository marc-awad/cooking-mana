import { useState } from "react"
import { useTranslation } from "react-i18next"

export type CarouselSlide = {
  id: string
  title: string
  description: string
}

type HeroCarouselProps = {
  slides: CarouselSlide[]
}

const FIRST_SLIDE_INDEX = 0
const SINGLE_STEP = 1

function getNextIndex(currentIndex: number, slidesCount: number) {
  return (currentIndex + SINGLE_STEP) % slidesCount
}

function getPreviousIndex(currentIndex: number, slidesCount: number) {
  return (currentIndex - SINGLE_STEP + slidesCount) % slidesCount
}

function HeroCarousel({ slides }: HeroCarouselProps) {
  const { t } = useTranslation()

  if (slides.length === 0) {
    throw new Error("HeroCarousel requires at least one slide")
  }

  const [activeSlideIndex, setActiveSlideIndex] = useState(FIRST_SLIDE_INDEX)
  const activeSlide = slides[activeSlideIndex]

  function showNextSlide() {
    setActiveSlideIndex((currentIndex) =>
      getNextIndex(currentIndex, slides.length),
    )
  }

  function showPreviousSlide() {
    setActiveSlideIndex((currentIndex) =>
      getPreviousIndex(currentIndex, slides.length),
    )
  }

  function selectSlide(index: number) {
    setActiveSlideIndex(index)
  }

  return (
    <section
      className="mx-auto w-full max-w-6xl px-4 py-10"
      aria-label={t("home.carousel.ariaLabel")}
    >
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <div className="rounded-xl bg-gradient-to-r from-rose-900 via-rose-800 to-amber-600 px-6 py-16 text-white md:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
            Cookingmama
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            {activeSlide.title}
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-rose-50 md:text-base">
            {activeSlide.description}
          </p>
        </div>

        <div className="mt-6 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={showPreviousSlide}
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100"
            aria-label={t("home.carousel.previous")}
          >
            {t("home.carousel.previous")}
          </button>

          <div
            className="flex items-center gap-2"
            aria-label={t("home.carousel.navigation")}
          >
            {slides.map((slide, index) => {
              const isActiveSlide = index === activeSlideIndex

              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => selectSlide(index)}
                  className={`h-2.5 w-2.5 rounded-full transition-all ${
                    isActiveSlide
                      ? "bg-rose-900"
                      : "bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={t("home.carousel.goToSlide", {
                    index: index + 1,
                  })}
                  aria-current={isActiveSlide}
                />
              )
            })}
          </div>

          <button
            type="button"
            onClick={showNextSlide}
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100"
            aria-label={t("home.carousel.next")}
          >
            {t("home.carousel.next")}
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroCarousel
