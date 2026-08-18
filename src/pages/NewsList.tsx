import type { NewsItem } from "../lib/types";

export type NewsListProps = {
  news: NewsItem[];
};

export function NewsList({ news }: NewsListProps) {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-sm tracking-widest text-brand-light">NEWS &amp; BLOG</p>
      <h1 className="mt-3 text-2xl font-semibold text-brand">お知らせ・コラム</h1>

      {news.length === 0 ? (
        <p className="mt-8 text-sm text-brand-light">現在準備中です。</p>
      ) : (
        <ul className="mt-10 divide-y divide-brand/10">
          {news.map((item) => (
            <li key={item.id} className="py-5">
              <a href={`/news/${item.id}`} className="block">
                <span className="text-xs text-brand-light">{item.category}</span>
                <h2 className="mt-1 font-medium text-brand">{item.title}</h2>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
