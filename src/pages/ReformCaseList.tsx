import type { ReformCaseItem } from "../lib/types";

export type ReformCaseListProps = {
  cases: ReformCaseItem[];
};

export function ReformCaseList({ cases }: ReformCaseListProps) {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <p className="text-sm tracking-widest text-brand-light">REFORM CASE STUDIES</p>
      <h1 className="mt-3 text-2xl font-semibold text-brand">リフォーム施工事例</h1>

      {cases.length === 0 ? (
        <p className="mt-8 text-sm text-brand-light">
          現在準備中です。近日、リフォームの施工事例を公開予定です。
        </p>
      ) : (
        <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((item) => (
            <li key={item.id}>
              <a href={`/reform/case/${item.id}`} className="block">
                <div className="aspect-[4/3] rounded-md border border-brand/10 bg-brand/5" />
                <p className="mt-3 font-medium text-brand">{item.title}</p>
                {item.workDescription ? (
                  <p className="mt-1 text-xs text-brand-light">{item.workDescription}</p>
                ) : null}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
