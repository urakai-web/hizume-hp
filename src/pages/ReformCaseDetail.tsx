import { Link, useParams } from "react-router-dom";
import { reformCases } from "../data/reformCases";
import { useFadeIn } from "../hooks/useFadeIn";

export default function ReformCaseDetail() {
  const { id } = useParams();
  const item = reformCases.find((c) => c.id === id);
  const ref = useFadeIn<HTMLDivElement>();

  if (!item) {
    return (
      <section className="pt-40 pb-24 px-6 text-center">
        <p className="text-sm text-gray-500">お探しの施工事例は見つかりませんでした。</p>
        <Link to="/reform/case" className="btn-outline mt-8 inline-block text-xs">
          リフォーム施工事例一覧へ戻る
        </Link>
      </section>
    );
  }

  return (
    <section ref={ref} className="pt-32 pb-24 md:pt-40 px-6">
      <div className="max-w-4xl mx-auto">
        <Link to="/reform/case" className="text-xs tracking-widest text-primary hover:text-primary-dark">
          ← リフォーム施工事例一覧へ戻る
        </Link>

        <div className="fade-in-up mt-6">
          <h1 className="text-2xl md:text-3xl font-serif font-light text-gray-800">{item.title}</h1>
          <p className="mt-2 text-sm text-gray-500">{item.workDescription}</p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-xs tracking-widest text-gray-400 uppercase mb-2">Before</p>
              <div className="aspect-[4/3] overflow-hidden">
                <img src={item.beforeImage} alt="施工前" className="w-full h-full object-cover" />
              </div>
            </div>
            <div>
              <p className="text-xs tracking-widest text-gray-400 uppercase mb-2">After</p>
              <div className="aspect-[4/3] overflow-hidden">
                <img src={item.afterImage} alt="施工後" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
