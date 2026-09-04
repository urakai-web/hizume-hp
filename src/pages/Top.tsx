import HeroSection from "../components/home/HeroSection";
import ConceptTeaser from "../components/home/ConceptTeaser";
import StyleSection from "../components/home/StyleSection";
import WorksTeaser from "../components/home/WorksTeaser";
import NewsTeaser from "../components/home/NewsTeaser";
import ContactCta from "../components/home/ContactCta";

export default function Top() {
  return (
    <>
      <HeroSection />
      <ConceptTeaser />
      <StyleSection />
      <WorksTeaser />
      <NewsTeaser />
      <ContactCta />
    </>
  );
}
