import { useEffect, useState } from "react";
import { isMicroCmsConfigured, listCases } from "../lib/microcms";
import { cases as seedCases } from "../data/cases";
import type { CaseContent } from "../lib/types";

export type CaseDisplay = {
  id: string;
  title: string;
  image: string;
  gallery: { image: string; caption?: string }[];
  priceRange: string;
  tags: string[];
  location?: string;
  body: string;
};

function fromMicroCms(item: CaseContent): CaseDisplay {
  return {
    id: item.id,
    title: item.title,
    image: item.mainImage.url,
    gallery: (item.gallery ?? []).map((g) => ({ image: g.image.url, caption: g.caption })),
    priceRange: item.priceRange ?? "",
    tags: item.structure ?? [],
    location: item.location,
    body: item.body,
  };
}

function fromSeed(): CaseDisplay[] {
  return seedCases.map((item) => ({
    id: item.id,
    title: item.title,
    image: item.image,
    gallery: [],
    priceRange: item.priceRange,
    tags: item.tags,
    body: "施工事例の詳しい内容は近日公開予定です。",
  }));
}

/**
 * microCMSが設定されていればそちらを取得し、未設定または0件の間は
 * 仮のサンプルデータ(src/data/cases.ts)を表示する。
 */
export function useCases() {
  const [cases, setCases] = useState<CaseDisplay[]>(fromSeed);
  const [loading, setLoading] = useState(isMicroCmsConfigured);

  useEffect(() => {
    if (!isMicroCmsConfigured) return;
    let cancelled = false;

    listCases()
      .then((res) => {
        if (cancelled) return;
        if (res.contents.length > 0) {
          setCases(res.contents.map(fromMicroCms));
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { cases, loading };
}
