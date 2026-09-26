import { useEffect, useState } from "react";
import { isMicroCmsConfigured, listEvents } from "../lib/microcms";
import type { EventContent } from "../lib/types";

export type EventDisplay = {
  id: string;
  title: string;
  startDate: string;
  endDate: string;
  /** 「直近のイベント」の判定・並び替え用の生の日付 */
  endDateRaw?: string;
  location: string;
  reservationRequired: boolean;
  body: string;
};

function formatDate(iso?: string): string {
  if (!iso) return "";
  return new Date(iso)
    .toLocaleDateString("ja-JP", {
      timeZone: "Asia/Tokyo",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replace(/\//g, ".");
}

function fromMicroCms(item: EventContent): EventDisplay {
  return {
    id: item.id,
    title: item.title,
    startDate: formatDate(item.eventstart),
    endDate: formatDate(item.eventend),
    endDateRaw: item.eventend,
    location: item.location ?? "",
    reservationRequired: Boolean(item.reservationrequired),
    body: item.body ?? "",
  };
}

/** microCMSのイベントを取得する。未設定または0件の間は空配列を返す。 */
export function useEvents() {
  const [events, setEvents] = useState<EventDisplay[]>([]);
  const [loading, setLoading] = useState(isMicroCmsConfigured);

  useEffect(() => {
    if (!isMicroCmsConfigured) return;
    let cancelled = false;

    listEvents()
      .then((res) => {
        if (cancelled) return;
        setEvents(res.contents.map(fromMicroCms));
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { events, loading };
}

/** 終了日が今日以降(開催中・開催予定)のイベントを、開催終了日が近い順に並べる */
export function upcomingEvents(events: EventDisplay[], limit: number): EventDisplay[] {
  const now = Date.now();
  return events
    .filter((e) => !e.endDateRaw || new Date(e.endDateRaw).getTime() >= now)
    .sort((a, b) => new Date(a.endDateRaw ?? 0).getTime() - new Date(b.endDateRaw ?? 0).getTime())
    .slice(0, limit);
}
