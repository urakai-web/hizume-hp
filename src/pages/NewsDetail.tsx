import type { NewsItem } from "../lib/types";

export type NewsDetailProps = {
  item: NewsItem | null;
};

export function NewsDetail({ item }: NewsDetailProps) {
  if (!item) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-sm text-brand-light">お探しの記事は見つかりませんでした。</p>
        <a href="/news" className="mt-4 inline-block text-sm text-brand hover:underline">
          ← お知らせ・コラム一覧へ戻る
        </a>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <a href="/news" className="text-sm text-brand-light hover:text-brand">
        ← お知らせ・コラム一覧へ戻る
      </a>
      <span className="mt-4 block text-xs text-brand-light">{item.category}</span>
      <h1 className="mt-1 text-2xl font-semibold text-brand">{item.title}</h1>
      <div
        className="prose prose-sm mt-8 max-w-none text-brand-light"
        dangerouslySetInnerHTML={{ __html: item.body }}
      />
    </div>
  );
}
