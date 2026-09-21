import { Link, useParams } from "react-router-dom";
import { useNews } from "../hooks/useNews";
import { useFadeIn } from "../hooks/useFadeIn";

export default function NewsDetail() {
  const { id } = useParams();
  const { news, loading } = useNews();
  const item = news.find((n) => n.id === id);
  const ref = useFadeIn<HTMLDivElement>();

  return (
    <section ref={ref} className="pt-32 pb-24 md:pt-40 px-6">
      <div className="max-w-3xl mx-auto">
        <Link to="/news" className="text-xs tracking-widest text-primary hover:text-primary-dark">
          ← お知らせ・コラム一覧へ戻る
        </Link>

        {!item ? (
          loading ? null : (
            <p className="fade-in-up mt-10 text-center text-sm text-gray-500">
              お探しの記事は見つかりませんでした。
            </p>
          )
        ) : (
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
            {item.body ? (
              <div
                className="prose prose-sm mt-8 max-w-none text-sm leading-relaxed text-gray-600"
                dangerouslySetInnerHTML={{ __html: item.body }}
              />
            ) : null}
          </div>
        )}
      </div>
    </section>
  );
}
