import AdvantagesSection from "./advantages";
import HomeFaqs from "./faqs";
import HomePageHero from "./hero";
import HomeSlider from "./slider";

export default function HomePage() {
  return (
    <div className="liner-background">
      <HomePageHero />
      <HomeSlider />
      <AdvantagesSection />
      <HomeFaqs />
    </div>
  );
}
