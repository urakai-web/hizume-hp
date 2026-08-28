import { Link, useParams } from "react-router-dom";
import { cases } from "../data/cases";
import { useFadeIn } from "../hooks/useFadeIn";

export default function CaseDetail() {
  const { id } = useParams();
  const item = cases.find((c) => c.id === id);
  const ref = useFadeIn<HTMLDivElement>();

  if (!item) {
    return (
      <section className="pt-40 pb-24 px-6 text-center">
        <p className="text-sm text-gray-500">お探しの施工事例は見つかりませんでした。</p>
        <Link to="/case" className="btn-outline mt-8 inline-block text-xs">
          施工事例一覧へ戻る
        </Link>
      </section>
    );
  }

  return (
    <section ref={ref} className="pt-32 pb-24 md:pt-40 px-6">
      <div className="max-w-4xl mx-auto">
        <Link to="/case" className="text-xs tracking-widest text-primary hover:text-primary-dark">
          ← 施工事例一覧へ戻る
        </Link>

        <div className="fade-in-up mt-6">
          <div className="flex flex-wrap gap-1.5 mb-4">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] tracking-wide border border-gray-300 text-gray-500 px-2 py-0.5"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-2xl md:text-3xl font-serif font-light text-gray-800">{item.title}</h1>
          <p className="mt-2 text-sm text-gray-500">参考価格　{item.priceRange}</p>

          <div className="mt-10 aspect-[16/10] overflow-hidden">
            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
