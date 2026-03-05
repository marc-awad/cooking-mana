import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

import HeroCarousel, {
  type CarouselSlide,
} from "../../components/carousel/HeroCarousel"
import ChefsPresentationSection from "../../components/chefs/ChefsPresentationSection"
import WeeklyMenuTable from "../../components/menu/WeeklyMenuTable"
import GoogleReviewsSection from "../../components/reviews/GoogleReviewsSection"
import RestaurantPresentationSection from "../../components/restaurant/RestaurantPresentationSection"

function HomePage() {
  const { t } = useTranslation()

  const homeSlides: CarouselSlide[] = [
    {
      id: "signature-cuisine",
      title: t("home.carousel.slides.signatureCuisine.title"),
      description: t("home.carousel.slides.signatureCuisine.description"),
    },
    {
      id: "chef-story",
      title: t("home.carousel.slides.chefStory.title"),
      description: t("home.carousel.slides.chefStory.description"),
    },
    {
      id: "booking-invitation",
      title: t("home.carousel.slides.bookingInvitation.title"),
      description: t("home.carousel.slides.bookingInvitation.description"),
    },
  ]

  return (
    <>
      <HeroCarousel slides={homeSlides} />

      {/* bouton réservation */}
      <div className="flex justify-center py-10">
        <Link
          to="/reservation"
          className="rounded-lg bg-rose-900 px-8 py-4 text-lg font-semibold text-white shadow-md transition hover:bg-rose-800"
        >
          Réserver une table
        </Link>
      </div>

      <WeeklyMenuTable />
      <RestaurantPresentationSection />
      <ChefsPresentationSection />
      <GoogleReviewsSection />
    </>
  )
}

export default HomePage
