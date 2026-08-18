import type { ReformCaseItem } from "../lib/types";

export type ReformCaseDetailProps = {
  item: ReformCaseItem | null;
};

export function ReformCaseDetail({ item }: ReformCaseDetailProps) {
  if (!item) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-sm text-brand-light">お探しの施工事例は見つかりませんでした。</p>
        <a href="/reform/case" className="mt-4 inline-block text-sm text-brand hover:underline">
          ← リフォーム施工事例一覧へ戻る
        </a>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <a href="/reform/case" className="text-sm text-brand-light hover:text-brand">
        ← リフォーム施工事例一覧へ戻る
      </a>
      <h1 className="mt-4 text-2xl font-semibold text-brand">{item.title}</h1>
      {item.workDescription ? (
        <p className="mt-2 text-sm text-brand-light">{item.workDescription}</p>
      ) : null}

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div>
          <p className="text-xs text-brand-light">Before</p>
          <div className="mt-2 aspect-[4/3] rounded-md border border-brand/10 bg-brand/5" />
        </div>
        <div>
          <p className="text-xs text-brand-light">After</p>
          <div className="mt-2 aspect-[4/3] rounded-md border border-brand/10 bg-brand/5" />
        </div>
      </div>

      <div
        className="prose prose-sm mt-8 max-w-none text-brand-light"
        dangerouslySetInnerHTML={{ __html: item.body }}
      />
    </div>
  );
}
