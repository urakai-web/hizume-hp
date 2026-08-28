import { Link } from "react-router-dom";
import PageBanner from "../components/PageBanner";
import { events } from "../data/events";
import { useFadeIn } from "../hooks/useFadeIn";

export default function EventList() {
  const ref = useFadeIn<HTMLDivElement>();

  return (
    <>
      <PageBanner eyebrow="Events" title="イベント・見学会" />

      <section ref={ref} className="py-24 md:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          {events.length === 0 ? (
            <p className="fade-in-up text-sm text-gray-500 text-center">
              現在開催予定のイベントはありません。
            </p>
          ) : (
            <ul className="fade-in-up space-y-6">
              {events.map((item) => (
                <li key={item.id} className="border border-gray-200 p-8">
                  <Link to={`/events/${item.id}`} className="block group">
                    {item.reservationRequired ? (
                      <span className="text-[10px] tracking-wide bg-primary text-white px-2 py-0.5">
                        予約必要です
                      </span>
                    ) : null}
                    <h2 className="mt-3 text-lg font-serif font-light text-gray-800 group-hover:text-primary transition-colors">
                      {item.title}
                    </h2>
                    <p className="mt-3 text-sm text-gray-500">
                      開催日　{item.startDate} 〜 {item.endDate}
                    </p>
                    <p className="text-sm text-gray-500">開催地　{item.location}</p>
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
