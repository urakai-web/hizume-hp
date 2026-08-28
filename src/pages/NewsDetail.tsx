import { Link, useParams } from "react-router-dom";
import { news } from "../data/news";
import { useFadeIn } from "../hooks/useFadeIn";

export default function NewsDetail() {
  const { id } = useParams();
  const item = news.find((n) => n.id === id);
  const ref = useFadeIn<HTMLDivElement>();

  if (!item) {
    return (
      <section className="pt-40 pb-24 px-6 text-center">
        <p className="text-sm text-gray-500">お探しの記事は見つかりませんでした。</p>
        <Link to="/news" className="btn-outline mt-8 inline-block text-xs">
          お知らせ・コラム一覧へ戻る
        </Link>
      </section>
    );
  }

  return (
    <section ref={ref} className="pt-32 pb-24 md:pt-40 px-6">
      <div className="max-w-3xl mx-auto">
        <Link to="/news" className="text-xs tracking-widest text-primary hover:text-primary-dark">
          ← お知らせ・コラム一覧へ戻る
        </Link>

        <div className="fade-in-up mt-6">
          <div className="flex items-center gap-3">
            <time className="text-xs text-gray-400">{item.date}</time>
            <span className="text-[10px] tracking-wide bg-accent text-white px-2 py-0.5">
              {item.category}
            </span>
          </div>
          <h1 className="mt-3 text-2xl md:text-3xl font-serif font-light text-gray-800">
            {item.title}
          </h1>
          <p className="mt-8 text-sm leading-relaxed text-gray-600">{item.excerpt}</p>
        </div>
      </div>
    </section>
  );
}
