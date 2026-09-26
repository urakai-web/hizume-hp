import { Link, useParams } from "react-router-dom";
import { useEvents } from "../hooks/useEvents";
import { useFadeIn } from "../hooks/useFadeIn";

export default function EventDetail() {
  const { id } = useParams();
  const { events, loading } = useEvents();
  const item = events.find((e) => e.id === id);
  const ref = useFadeIn<HTMLDivElement>();

  return (
    <section ref={ref} className="pt-32 pb-24 md:pt-40 px-6">
      <div className="max-w-3xl mx-auto">
        <Link to="/events" className="text-xs tracking-widest text-primary hover:text-primary-dark">
          ← イベント一覧へ戻る
        </Link>

        {!item ? (
          loading ? null : (
            <p className="fade-in-up mt-10 text-center text-sm text-gray-500">
              お探しのイベントは見つかりませんでした。
            </p>
          )
        ) : (
          <div className="fade-in-up mt-6">
            {item.reservationRequired ? (
              <span className="text-[10px] tracking-wide bg-primary text-white px-2 py-0.5">
                予約必要です
              </span>
            ) : null}
            <h1 className="mt-3 text-2xl md:text-3xl font-serif font-light text-gray-800">
              {item.title}
            </h1>
            <p className="mt-4 text-sm text-gray-500">
              開催日　{item.startDate} 〜 {item.endDate}
            </p>
            <p className="text-sm text-gray-500">開催地　{item.location}</p>

            {item.body ? (
              <div
                className="prose prose-sm mt-8 max-w-none text-sm leading-relaxed text-gray-600"
                dangerouslySetInnerHTML={{ __html: item.body }}
              />
            ) : null}

            <Link to="/contact" className="btn-primary mt-10 inline-block text-xs">
              このイベントについて問い合わせる
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
