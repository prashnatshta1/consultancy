import HeaderSection from "../components/sections/header";
import HeroCarousel from "../components/sections/hero-carousel";
import SearchOptions from "../components/sections/search-options";
import WhyNavitas from "../components/sections/why-navitas";
import CollegesCarousel from "../components/sections/colleges-carousel";
import OurStory from "../components/sections/our-story";
import PartnerCards from "../components/sections/partner-cards";
import ImportantCards from "../components/sections/important-cards";
import Footer from "../components/sections/footer";
import CookieBanner from "../components/sections/cookie-banner";

export default function HomePage() {
  return (
    <>
      <HeaderSection />
      <main>
        <HeroCarousel />
        <SearchOptions />
        <WhyNavitas />
        <CollegesCarousel />
        <PartnerCards />
        <ImportantCards />
      </main>
      <Footer />
      
    </>
  );
}