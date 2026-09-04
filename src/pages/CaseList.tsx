import { Link } from "react-router-dom";
import PageBanner from "../components/PageBanner";
import { splitStructure, useCases } from "../hooks/useCases";
import { useFadeIn } from "../hooks/useFadeIn";

export default function CaseList() {
  const ref = useFadeIn<HTMLDivElement>();
  const { cases } = useCases();

  return (
    <>
      <PageBanner
        eyebrow="Works"
        title="新築の施工事例"
        description="対話を重ねてつくった、樋爪住宅研究所の施工事例をご紹介します。"
      />

      <section ref={ref} className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {cases.length === 0 ? (
            <p className="fade-in-up text-center text-sm text-gray-500">
              現在準備中です。近日、施工事例を公開予定です。
            </p>
          ) : (
          <ul className="fade-in-up grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {cases.map((item) => (
              <li key={item.id}>
                <Link to={`/case/${item.id}`} className="group block">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="mt-4">
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {splitStructure(item.structure).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] tracking-wide border border-gray-300 text-gray-500 px-2 py-0.5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-sm font-medium text-gray-800 group-hover:text-primary transition-colors">
                      {item.title}
                    </h2>
                    <p className="text-xs text-gray-400 mt-1">{item.priceRange}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          )}
        </div>
      </section>
    </>
  );
}
