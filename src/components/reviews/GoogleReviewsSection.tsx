import { useState } from "react"
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

const googleReviews: GoogleReview[] = [
  {
    id: "review-1",
    fullName: "Sophie Martin",
    rating: 5,
    review:
      "Une expérience magnifique du début à la fin. Les saveurs sont précises et le service est irréprochable.",
  },
  {
    id: "review-2",
    fullName: "Thomas Bernard",
    rating: 5,
    review:
      "Cadre élégant, équipe attentionnée et menu parfaitement maîtrisé. Je recommande pour une soirée spéciale.",
  },
  {
    id: "review-3",
    fullName: "Camille Dubois",
    rating: 4,
    review:
      "Très belle découverte. Les plats sont fins et bien présentés, avec une excellente sélection de vins.",
  },
  {
    id: "review-4",
    fullName: "Lucas Petit",
    rating: 5,
    review:
      "Cuisine inventive et gourmande. Mention spéciale pour le dessert signature et l'accueil chaleureux.",
  },
]

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
    <section className={sectionContainerClassName} aria-label="Avis Google">
      <div className={sectionCardClassName}>
        <p className={sectionEyebrowClassName}>Avis clients</p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
          Avis Google
        </h2>

        <article className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <p className="text-lg tracking-wide text-amber-500" aria-label="Note">
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
            aria-label="Avis précédent"
          >
            Précédent
          </button>

          <div
            className="flex items-center gap-2"
            aria-label="Navigation des avis"
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
                  aria-label={`Aller à l'avis ${index + 1}`}
                  aria-current={isActiveReview}
                />
              )
            })}
          </div>

          <button
            type="button"
            onClick={showNextReview}
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100"
            aria-label="Avis suivant"
          >
            Suivant
          </button>
        </div>
      </div>
    </section>
  )
}

export default GoogleReviewsSection
