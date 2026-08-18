import type { CaseItem } from "../lib/types";

export type CaseDetailProps = {
  item: CaseItem | null;
};

export function CaseDetail({ item }: CaseDetailProps) {
  if (!item) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-sm text-brand-light">お探しの施工事例は見つかりませんでした。</p>
        <a href="/case" className="mt-4 inline-block text-sm text-brand hover:underline">
          ← 施工事例一覧へ戻る
        </a>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <a href="/case" className="text-sm text-brand-light hover:text-brand">
        ← 施工事例一覧へ戻る
      </a>
      <h1 className="mt-4 text-2xl font-semibold text-brand">{item.title}</h1>
      <p className="mt-2 text-sm text-brand-light">
        {[item.priceRange, item.structureType?.join(" / ")].filter(Boolean).join(" ・ ")}
      </p>
      <div className="mt-8 aspect-[4/3] rounded-md border border-brand/10 bg-brand/5" />
      <div
        className="prose prose-sm mt-8 max-w-none text-brand-light"
        dangerouslySetInnerHTML={{ __html: item.body }}
      />
    </div>
  );
}
