import HeroCarousel, {
  type CarouselSlide,
} from "../../components/carousel/HeroCarousel"
import ChefsPresentationSection from "../../components/chefs/ChefsPresentationSection"
import WeeklyMenuTable from "../../components/menu/WeeklyMenuTable"
import GoogleReviewsSection from "../../components/reviews/GoogleReviewsSection"
import RestaurantPresentationSection from "../../components/restaurant/RestaurantPresentationSection"
import { useTranslation } from "react-i18next"

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
      <WeeklyMenuTable />
      <RestaurantPresentationSection />
      <ChefsPresentationSection />
      <GoogleReviewsSection />
    </>
  )
}

export default HomePage
