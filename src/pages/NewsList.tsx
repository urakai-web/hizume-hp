import { Link } from "react-router-dom";
import PageBanner from "../components/PageBanner";
import { useNews } from "../hooks/useNews";
import { upcomingEvents, useEvents } from "../hooks/useEvents";
import { useFadeIn } from "../hooks/useFadeIn";

const categoryColor: Record<string, string> = {
  お知らせ: "bg-gray-600 text-white",
  ブログ: "bg-accent text-white",
  イベント: "bg-primary text-white",
};

export default function NewsList() {
  const ref = useFadeIn<HTMLDivElement>();
  const { news } = useNews();
  const { events } = useEvents();
  const nearEvents = upcomingEvents(events, 3);

  return (
    <>
      <PageBanner eyebrow="News & Blog" title="お知らせ・コラム" />

      <section ref={ref} className="py-24 md:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          {news.length === 0 && nearEvents.length === 0 ? (
            <p className="fade-in-up text-center text-sm text-gray-500">
              現在準備中です。近日、お知らせを公開予定です。
            </p>
          ) : (
          <ul className="fade-in-up divide-y divide-gray-100">
            {nearEvents.map((item) => (
              <li key={`event-${item.id}`}>
                <Link
                  to={`/events/${item.id}`}
                  className="flex flex-col sm:flex-row sm:items-center gap-3 py-6 group hover:bg-warm-50 -mx-4 px-4 transition-colors"
                >
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <time className="text-xs text-gray-400 w-24">{item.startDate}〜</time>
                    <span
                      className={`text-[10px] tracking-wide px-2 py-0.5 ${categoryColor["イベント"]} whitespace-nowrap`}
                    >
                      イベント
                    </span>
                  </div>
                  <span className="text-sm text-gray-700 group-hover:text-primary transition-colors leading-relaxed">
                    {item.title}
                  </span>
                </Link>
              </li>
            ))}
            {news.map((item) => (
              <li key={item.id}>
                <Link
                  to={`/news/${item.id}`}
                  className="flex flex-col sm:flex-row sm:items-center gap-3 py-6 group hover:bg-warm-50 -mx-4 px-4 transition-colors"
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
      </section>
    </>
  );
}
