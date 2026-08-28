import HeroSection from "../components/home/HeroSection";
import BusinessSection from "../components/home/BusinessSection";
import ConceptTeaser from "../components/home/ConceptTeaser";
import StyleSection from "../components/home/StyleSection";
import WorksTeaser from "../components/home/WorksTeaser";
import NewsTeaser from "../components/home/NewsTeaser";
import ContactCta from "../components/home/ContactCta";

export default function Top() {
  return (
    <>
      <HeroSection />
      <BusinessSection />
      <ConceptTeaser />
      <StyleSection />
      <WorksTeaser />
      <NewsTeaser />
      <ContactCta />
    </>
  );
}
