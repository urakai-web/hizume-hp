import { Link, useParams } from "react-router-dom";
import { events } from "../data/events";
import { useFadeIn } from "../hooks/useFadeIn";

export default function EventDetail() {
  const { id } = useParams();
  const item = events.find((e) => e.id === id);
  const ref = useFadeIn<HTMLDivElement>();

  if (!item) {
    return (
      <section className="pt-40 pb-24 px-6 text-center">
        <p className="text-sm text-gray-500">お探しのイベントは見つかりませんでした。</p>
        <Link to="/events" className="btn-outline mt-8 inline-block text-xs">
          イベント一覧へ戻る
        </Link>
      </section>
    );
  }

  return (
    <section ref={ref} className="pt-32 pb-24 md:pt-40 px-6">
      <div className="max-w-3xl mx-auto">
        <Link to="/events" className="text-xs tracking-widest text-primary hover:text-primary-dark">
          ← イベント一覧へ戻る
        </Link>

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

          <p className="mt-8 text-sm leading-relaxed text-gray-600">{item.description}</p>

          <Link to="/contact" className="btn-primary mt-10 inline-block text-xs">
            このイベントについて問い合わせる
          </Link>
        </div>
      </div>
    </section>
  );
}
