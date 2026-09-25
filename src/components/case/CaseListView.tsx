import { Link } from "react-router-dom";
import PageBanner from "../PageBanner";
import { splitStructure, type CaseDisplay } from "../../hooks/useCases";
import { useFadeIn } from "../../hooks/useFadeIn";

type Props = {
  basePath: string;
  banner: { eyebrow: string; title: string; description: string };
  emptyText: string;
  cases: CaseDisplay[];
};

export default function CaseListView({ basePath, banner, emptyText, cases }: Props) {
  const ref = useFadeIn<HTMLDivElement>();

  return (
    <>
      <PageBanner eyebrow={banner.eyebrow} title={banner.title} description={banner.description} />

      <section ref={ref} className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {cases.length === 0 ? (
            <p className="fade-in-up text-center text-sm text-gray-500">{emptyText}</p>
          ) : (
            <ul className="fade-in-up grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-8 sm:gap-y-14 lg:grid-cols-3">
              {cases.map((item) => (
                <li key={item.id}>
                  <Link to={`${basePath}/${item.id}`} className="group block">
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
