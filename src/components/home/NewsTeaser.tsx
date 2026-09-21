import { Link } from "react-router-dom";
import { useNews } from "../../hooks/useNews";
import { useFadeIn } from "../../hooks/useFadeIn";

const categoryColor: Record<string, string> = {
  お知らせ: "bg-gray-600 text-white",
  ブログ: "bg-accent text-white",
};

export default function NewsTeaser() {
  const ref = useFadeIn<HTMLDivElement>();
  const { news } = useNews();
  const items = news.slice(0, 5);

  return (
    <section ref={ref} className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="fade-in-up">
            <p className="text-xs tracking-widest text-primary uppercase mb-3">Information</p>
            <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-800 mb-6">
              お知らせ
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              最新のイベント情報・ブログ記事・会社からのお知らせをご覧いただけます。
            </p>
            <Link to="/news" className="btn-outline text-xs mt-8 inline-block">
              全て見る
            </Link>
          </div>

          <div className="md:col-span-2 fade-in-up">
            {items.length === 0 ? (
              <p className="text-sm text-gray-500">現在準備中です。近日公開予定です。</p>
            ) : (
            <ul className="divide-y divide-gray-100">
              {items.map((item) => (
                <li key={item.id}>
                  <Link
                    to={`/news/${item.id}`}
                    className="flex flex-col sm:flex-row sm:items-center gap-3 py-5 group hover:bg-warm-50 -mx-4 px-4 transition-colors"
                  >
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <time className="text-xs text-gray-400 w-24">{item.date}</time>
                      <span
                        className={`text-[10px] tracking-wide px-2 py-0.5 ${categoryColor[item.category] ?? categoryColor["お知らせ"]} whitespace-nowrap`}
                      >
                        {item.category}
                      </span>
                    </div>
                    <span className="text-sm text-gray-700 group-hover:text-primary transition-colors leading-relaxed">
                      {item.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
