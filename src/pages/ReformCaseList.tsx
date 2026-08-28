import { Link } from "react-router-dom";
import PageBanner from "../components/PageBanner";
import { reformCases } from "../data/reformCases";
import { useFadeIn } from "../hooks/useFadeIn";

export default function ReformCaseList() {
  const ref = useFadeIn<HTMLDivElement>();

  return (
    <>
      <PageBanner eyebrow="Reform Works" title="リフォーム施工事例" />

      <section ref={ref} className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {reformCases.length === 0 ? (
            <div className="fade-in-up text-center">
              <p className="text-sm text-gray-500">現在準備中です。近日、リフォームの施工事例を公開予定です。</p>
              <Link to="/reform" className="btn-outline text-xs mt-8 inline-block">
                リフォームについて詳しく見る
              </Link>
            </div>
          ) : (
            <ul className="fade-in-up grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {reformCases.map((item) => (
                <li key={item.id}>
                  <Link to={`/reform/case/${item.id}`} className="group block">
                    <div className="relative overflow-hidden aspect-[4/3]">
                      <img
                        src={item.afterImage}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <h2 className="mt-4 text-sm font-medium text-gray-800 group-hover:text-primary transition-colors">
                      {item.title}
                    </h2>
                    <p className="text-xs text-gray-400 mt-1">{item.workDescription}</p>
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
