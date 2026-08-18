import type { CaseItem } from "../lib/types";

export type CaseListProps = {
  cases: CaseItem[];
};

export function CaseList({ cases }: CaseListProps) {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <p className="text-sm tracking-widest text-brand-light">CASE STUDIES</p>
      <h1 className="mt-3 text-2xl font-semibold text-brand">新築の施工事例</h1>

      {cases.length === 0 ? (
        <p className="mt-8 text-sm text-brand-light">
          現在準備中です。近日、施工事例を公開予定です。
        </p>
      ) : (
        <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((item) => (
            <li key={item.id}>
              <a href={`/case/${item.id}`} className="block">
                <div className="aspect-[4/3] rounded-md border border-brand/10 bg-brand/5" />
                <p className="mt-3 font-medium text-brand">{item.title}</p>
                <p className="mt-1 text-xs text-brand-light">
                  {[item.priceRange, item.structureType?.join(" / ")].filter(Boolean).join(" ・ ")}
                </p>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
