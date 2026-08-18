import type { EventItem } from "../lib/types";

export type EventListProps = {
  events: EventItem[];
};

function formatDateRange(startAt: string, endAt?: string) {
  const start = new Date(startAt).toLocaleDateString("ja-JP");
  if (!endAt) return start;
  return `${start} 〜 ${new Date(endAt).toLocaleDateString("ja-JP")}`;
}

export function EventList({ events }: EventListProps) {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-sm tracking-widest text-brand-light">EVENTS</p>
      <h1 className="mt-3 text-2xl font-semibold text-brand">イベント・見学会</h1>

      {events.length === 0 ? (
        <p className="mt-8 text-sm text-brand-light">現在開催予定のイベントはありません。</p>
      ) : (
        <ul className="mt-10 space-y-6">
          {events.map((item) => (
            <li key={item.id} className="rounded-lg border border-brand/10 p-6">
              <a href={`/events/${item.id}`} className="block">
                {item.reservationRequired ? (
                  <span className="text-xs text-brand-light">予約必要です</span>
                ) : null}
                <h2 className="mt-1 font-semibold text-brand">{item.title}</h2>
                <p className="mt-2 text-sm text-brand-light">
                  開催日　{formatDateRange(item.startAt, item.endAt)}
                </p>
                {item.location ? (
                  <p className="text-sm text-brand-light">開催地　{item.location}</p>
                ) : null}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
