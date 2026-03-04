import {
  sectionCardClassName,
  sectionContainerClassName,
  sectionEyebrowClassName,
} from "../ui/sectionStyles"

type ChefProfile = {
  name: string
  role: string
  signature: string
}

const chefsSectionTitle = "Présentation des chefs"

const chefProfiles: ChefProfile[] = [
  {
    name: "Chef Antoine Morel",
    role: "Chef Exécutif",
    signature: "Cuisine française contemporaine et jus de caractère",
  },
  {
    name: "Cheffe Lina Caron",
    role: "Cheffe Pâtissière",
    signature: "Desserts équilibrés autour des fruits et des textures",
  },
]

function ChefsPresentationSection() {
  return (
    <section
      className={sectionContainerClassName}
      aria-label="Présentation des chefs"
    >
      <div className={sectionCardClassName}>
        <p className={sectionEyebrowClassName}>Équipe culinaire</p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
          {chefsSectionTitle}
        </h2>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {chefProfiles.map((chef) => (
            <article
              key={chef.name}
              className="rounded-xl border border-slate-200 bg-slate-50 p-4"
            >
              <h3 className="text-base font-semibold text-slate-900">
                {chef.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-rose-800">
                {chef.role}
              </p>
              <p className="mt-2 text-sm text-slate-700">{chef.signature}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ChefsPresentationSection
