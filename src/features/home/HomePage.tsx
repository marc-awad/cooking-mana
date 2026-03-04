import HeroCarousel, {
  type CarouselSlide,
} from "../../components/carousel/HeroCarousel"
import ChefsPresentationSection from "../../components/chefs/ChefsPresentationSection"
import WeeklyMenuTable from "../../components/menu/WeeklyMenuTable"
import RestaurantPresentationSection from "../../components/restaurant/RestaurantPresentationSection"

const homeSlides: CarouselSlide[] = [
  {
    id: "signature-cuisine",
    title: "Cuisine gastronomique et créative",
    description:
      "Découvrez une expérience culinaire raffinée pensée autour de produits de saison et d'accords subtils.",
  },
  {
    id: "chef-story",
    title: "Rencontrez notre brigade de chefs",
    description:
      "Une équipe passionnée qui sublime chaque assiette avec précision, exigence et élégance.",
  },
  {
    id: "booking-invitation",
    title: "Réservez votre table en quelques clics",
    description:
      "Planifiez votre prochaine soirée au restaurant CookingMana et profitez d'un service d'exception.",
  },
]

function HomePage() {
  return (
    <>
      <HeroCarousel slides={homeSlides} />
      <WeeklyMenuTable />
      <RestaurantPresentationSection />
      <ChefsPresentationSection />
    </>
  )
}

export default HomePage
