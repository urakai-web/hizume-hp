import { useEffect, useState } from "react";
import { isMicroCmsConfigured, listCases, listNonResidentialCases } from "../lib/microcms";
import type { CaseContent, MicroCMSImage } from "../lib/types";

type ListResponse<T> = { contents: T[]; totalCount: number };

export type CaseDisplay = {
  id: string;
  title: string;
  image: string;
  gallery: { image: string; caption?: string }[];
  priceRange: string;
  /** 自由記述の構造テキスト(例: 「2階建て・店舗併用住宅」) */
  structure: string;
  location?: string;
  body: string;
};

const FALLBACK_IMAGE = "/images/works-01.png";

function fromMicroCms(item: CaseContent): CaseDisplay {
  return {
    id: item.id,
    title: item.title,
    image: item.mainimage?.url ?? FALLBACK_IMAGE,
    gallery: (item.gallery ?? [])
      .filter((g): g is typeof g & { image: MicroCMSImage } => Boolean(g.image?.url))
      .map((g) => ({ image: g.image.url, caption: g.caption })),
    priceRange: item.pricerange ?? "",
    structure: item.structure ?? "",
    location: item.location,
    body: item.body ?? "",
  };
}

/** 自由記述の構造テキストを表示用に分割する(「・」区切りを想定) */
export function splitStructure(structure: string): string[] {
  return structure
    .split(/[・,、]/)
    .map((s) => s.trim())
    .filter(Boolean);
}

/** microCMSの施工事例(共通)を取得する。未設定または0件の間は空配列を返す。 */
function useCaseList(fetchList: () => Promise<ListResponse<CaseContent>>) {
  const [cases, setCases] = useState<CaseDisplay[]>([]);
  const [loading, setLoading] = useState(isMicroCmsConfigured);

  useEffect(() => {
    if (!isMicroCmsConfigured) return;
    let cancelled = false;

    fetchList()
      .then((res) => {
        if (cancelled) return;
        setCases(res.contents.map(fromMicroCms));
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [fetchList]);

  return { cases, loading };
}

/** 新築の施工事例(case) */
export function useCases() {
  return useCaseList(listCases);
}

/** 非住宅の施工事例(nonresidential) */
export function useNonResidentialCases() {
  return useCaseList(listNonResidentialCases);
}
