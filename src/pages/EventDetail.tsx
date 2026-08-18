import type { EventItem } from "../lib/types";

export type EventDetailProps = {
  item: EventItem | null;
};

function formatDateRange(startAt: string, endAt?: string) {
  const start = new Date(startAt).toLocaleDateString("ja-JP");
  if (!endAt) return start;
  return `${start} 〜 ${new Date(endAt).toLocaleDateString("ja-JP")}`;
}

export function EventDetail({ item }: EventDetailProps) {
  if (!item) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-sm text-brand-light">お探しのイベントは見つかりませんでした。</p>
        <a href="/events" className="mt-4 inline-block text-sm text-brand hover:underline">
          ← イベント一覧へ戻る
        </a>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <a href="/events" className="text-sm text-brand-light hover:text-brand">
        ← イベント一覧へ戻る
      </a>
      {item.reservationRequired ? (
        <p className="mt-4 text-xs text-brand-light">予約必要です</p>
      ) : null}
      <h1 className="mt-1 text-2xl font-semibold text-brand">{item.title}</h1>
      <p className="mt-4 text-sm text-brand-light">
        開催日　{formatDateRange(item.startAt, item.endAt)}
      </p>
      {item.location ? <p className="text-sm text-brand-light">開催地　{item.location}</p> : null}
      <div
        className="prose prose-sm mt-8 max-w-none text-brand-light"
        dangerouslySetInnerHTML={{ __html: item.body }}
      />
      <a
        href="/contact"
        className="mt-10 inline-block rounded-md bg-brand px-6 py-3 text-sm text-white hover:bg-brand-light"
      >
        このイベントについて問い合わせる
      </a>
    </div>
  );
}
