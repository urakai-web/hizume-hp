import { useEffect } from "react";

/** 詳細ページで、記事・事例のタイトルをブラウザのタイトルとOGPに反映する */
export function useDocumentTitle(title?: string) {
  useEffect(() => {
    if (!title) return;
    const full = `${title} | 樋爪住宅研究所`;
    document.title = full;
    document.head
      .querySelector<HTMLMetaElement>('meta[property="og:title"]')
      ?.setAttribute("content", full);
  }, [title]);
}
