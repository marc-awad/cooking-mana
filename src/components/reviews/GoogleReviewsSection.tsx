import { useState } from "react"
import { useTranslation } from "react-i18next"
import {
  sectionCardClassName,
  sectionContainerClassName,
  sectionEyebrowClassName,
} from "../ui/sectionStyles"

type GoogleReview = {
  id: string
  fullName: string
  rating: 5 | 4
  review: string
}

const firstReviewIndex = 0
const step = 1

function getNextReviewIndex(currentIndex: number, reviewsCount: number) {
  return (currentIndex + step) % reviewsCount
}

function getPreviousReviewIndex(currentIndex: number, reviewsCount: number) {
  return (currentIndex - step + reviewsCount) % reviewsCount
}

function renderStars(rating: number) {
  return "★".repeat(rating)
}

function GoogleReviewsSection() {
  const { t } = useTranslation()

  const googleReviews: GoogleReview[] = [
    {
      id: "review-1",
      fullName: t("home.reviews.items.sophie.fullName"),
      rating: 5,
      review: t("home.reviews.items.sophie.review"),
    },
    {
      id: "review-2",
      fullName: t("home.reviews.items.thomas.fullName"),
      rating: 5,
      review: t("home.reviews.items.thomas.review"),
    },
    {
      id: "review-3",
      fullName: t("home.reviews.items.camille.fullName"),
      rating: 4,
      review: t("home.reviews.items.camille.review"),
    },
    {
      id: "review-4",
      fullName: t("home.reviews.items.lucas.fullName"),
      rating: 5,
      review: t("home.reviews.items.lucas.review"),
    },
  ]

  const [activeReviewIndex, setActiveReviewIndex] = useState(firstReviewIndex)
  const activeReview = googleReviews[activeReviewIndex]

  function showNextReview() {
    setActiveReviewIndex((currentIndex) =>
      getNextReviewIndex(currentIndex, googleReviews.length),
    )
  }

  function showPreviousReview() {
    setActiveReviewIndex((currentIndex) =>
      getPreviousReviewIndex(currentIndex, googleReviews.length),
    )
  }

  function selectReview(index: number) {
    setActiveReviewIndex(index)
  }

  return (
    <section
      className={sectionContainerClassName}
      aria-label={t("home.reviews.ariaLabel")}
    >
      <div className={sectionCardClassName}>
        <p className={sectionEyebrowClassName}>{t("home.reviews.eyebrow")}</p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
          {t("home.reviews.title")}
        </h2>

        <article className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <p
            className="text-lg tracking-wide text-amber-500"
            aria-label={t("home.reviews.ratingLabel")}
          >
            {renderStars(activeReview.rating)}
          </p>
          <h3 className="mt-2 text-base font-semibold text-slate-900">
            {activeReview.fullName}
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            {activeReview.review}
          </p>
        </article>

        <div className="mt-5 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={showPreviousReview}
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100"
            aria-label={t("home.reviews.previous")}
          >
            {t("home.reviews.previous")}
          </button>

          <div
            className="flex items-center gap-2"
            aria-label={t("home.reviews.navigation")}
          >
            {googleReviews.map((review, index) => {
              const isActiveReview = index === activeReviewIndex

              return (
                <button
                  key={review.id}
                  type="button"
                  onClick={() => selectReview(index)}
                  className={`h-2.5 w-2.5 rounded-full transition-all ${
                    isActiveReview
                      ? "bg-rose-900"
                      : "bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={t("home.reviews.goToReview", {
                    index: index + 1,
                  })}
                  aria-current={isActiveReview}
                />
              )
            })}
          </div>

          <button
            type="button"
            onClick={showNextReview}
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100"
            aria-label={t("home.reviews.next")}
          >
            {t("home.reviews.next")}
          </button>
        </div>
      </div>
    </section>
  )
}

export default GoogleReviewsSection
