import { useCases, useNonResidentialCases } from "../../hooks/useCases";
import { useFadeIn } from "../../hooks/useFadeIn";
import WorksCarousel from "./WorksCarousel";

export default function WorksTeaser() {
  const sectionRef = useFadeIn<HTMLDivElement>();
  const { cases: residentialCases } = useCases();
  const { cases: nonResidentialCases } = useNonResidentialCases();

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-warm-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 fade-in-up">
          <p className="text-xs tracking-widest text-primary uppercase mb-3">Works</p>
          <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-800">施工事例</h2>
        </div>

        <div className="space-y-16">
          <WorksCarousel
            title="住宅の施工事例"
            basePath="/case"
            cases={residentialCases}
            emptyText="現在準備中です。近日公開予定です。"
          />
          <WorksCarousel
            title="非住宅の施工事例"
            basePath="/case/nonresidential"
            cases={nonResidentialCases}
            emptyText="現在準備中です。近日公開予定です。"
          />
        </div>
      </div>
    </section>
  );
}
