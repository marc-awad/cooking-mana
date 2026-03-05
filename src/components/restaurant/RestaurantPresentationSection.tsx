import {
  sectionCardClassName,
  sectionContainerClassName,
  sectionEyebrowClassName,
} from "../ui/sectionStyles"

const sectionTitle = "Présentation du restaurant"
const sectionSubtitle = "L'élégance gastronomique au cœur de Cookingmama"

const presentationParagraphs = [
  "Cookingmama propose une cuisine gastronomique moderne, pensée autour de produits frais et de saison.",
  "Notre équipe accorde une attention particulière à l'équilibre des saveurs, au dressage des assiettes et à la qualité du service en salle.",
  "Chaque service est conçu pour offrir une expérience conviviale, raffinée et mémorable à nos clients.",
]

function RestaurantPresentationSection() {
  return (
    <section
      className={sectionContainerClassName}
      aria-label="Présentation du restaurant"
    >
      <div className={sectionCardClassName}>
        <p className={sectionEyebrowClassName}>Cookingmama</p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
          {sectionTitle}
        </h2>
        <p className="mt-2 text-sm font-medium text-slate-700">
          {sectionSubtitle}
        </p>

        <div className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
          {presentationParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RestaurantPresentationSection
