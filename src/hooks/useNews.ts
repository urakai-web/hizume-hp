import { useEffect, useState } from "react";
import { isMicroCmsConfigured, listNews } from "../lib/microcms";
import type { NewsContent } from "../lib/types";

export type NewsDisplay = {
  id: string;
  date: string;
  category: string;
  title: string;
  body: string;
};

const DEFAULT_CATEGORY = "お知らせ";

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

function fromMicroCms(item: NewsContent): NewsDisplay {
  const category = Array.isArray(item.category) ? item.category[0] : item.category;
  return {
    id: item.id,
    date: formatDate(item.publishedAt),
    category: category || DEFAULT_CATEGORY,
    title: item.title,
    body: item.body ?? "",
  };
}

/** microCMSのお知らせを取得する。未設定または0件の間は空配列を返す。 */
export function useNews() {
  const [news, setNews] = useState<NewsDisplay[]>([]);
  const [loading, setLoading] = useState(isMicroCmsConfigured);

  useEffect(() => {
    if (!isMicroCmsConfigured) return;
    let cancelled = false;

    listNews()
      .then((res) => {
        if (cancelled) return;
        setNews(res.contents.map(fromMicroCms));
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { news, loading };
}
