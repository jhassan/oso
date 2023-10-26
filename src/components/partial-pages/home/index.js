import AdvantagesSection from "./advantages";
import HomeFaqs from "./faqs";
import HomePageHero from "./hero";
import HomeSlider from "./slider";

export default function HomePage() {
  return (
    <div className="bg-[url('/assets/purple-gradiant.webp')] bg-no-repeat bg-contain">
      <HomePageHero />
      <HomeSlider />
      <AdvantagesSection />
      <HomeFaqs />
    </div>
  );
}
