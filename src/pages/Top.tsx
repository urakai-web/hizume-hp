import type { CaseItem, EventItem, NewsItem } from "../lib/types";

export type TopProps = {
  recentCases: CaseItem[];
  recentNews: NewsItem[];
  upcomingEvents: EventItem[];
};

const businesses = [
  {
    href: "/case",
    title: "新築設計",
    body: "土地の声をきき、対話を重ねてつくる、世界に一つだけの注文住宅。",
  },
  {
    href: "/reform",
    title: "リフォーム",
    body: "中古物件のリフォーム・リノベーションも、新築と同じ丁寧さで。",
  },
  {
    href: "/facilities",
    title: "住宅設備・メンテナンス",
    body: "エアコン取付から水回り・電気工事まで、暮らしの困りごとに幅広く対応。",
  },
];

export function Top({ recentCases, recentNews, upcomingEvents }: TopProps) {
  return (
    <div>
      <section className="px-6 py-28 text-center sm:py-36">
        <p className="text-xs tracking-[0.2em] text-brand-light">HIZUME ARCHITECT OFFICE</p>
        <h1 className="mx-auto mt-6 max-w-2xl text-2xl font-light leading-loose tracking-wide text-brand sm:text-3xl">
          敷地の声をきき、未来をえがく。
          <br />
          住まいは人のために、人がつくる。
        </h1>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-px overflow-hidden rounded-lg border border-brand/10 bg-brand/10 sm:grid-cols-3">
          {businesses.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block bg-sand p-8 transition hover:bg-white"
            >
              <h2 className="text-base font-semibold text-brand">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-brand-light">{item.body}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-xs tracking-[0.2em] text-brand-light">CASE STUDIES</p>
        <h2 className="mt-2 text-lg font-semibold text-brand">新築の施工事例</h2>
        {recentCases.length === 0 ? (
          <p className="mt-6 text-sm text-brand-light">現在準備中です。近日公開予定。</p>
        ) : (
          <ul className="mt-8 grid gap-8 sm:grid-cols-3">
            {recentCases.map((item) => (
              <li key={item.id}>
                <a href={`/case/${item.id}`} className="block text-sm">
                  <div className="aspect-[4/3] rounded-md border border-brand/10 bg-brand/5" />
                  <p className="mt-3 font-medium text-brand">{item.title}</p>
                </a>
              </li>
            ))}
          </ul>
        )}
        <a
          href="/case"
          className="mt-8 inline-block text-sm tracking-wide text-brand-light hover:text-brand"
        >
          一覧を見る →
        </a>
      </section>

      <section className="mx-auto grid max-w-6xl gap-16 px-6 py-20 sm:grid-cols-2">
        <div>
          <p className="text-xs tracking-[0.2em] text-brand-light">NEWS &amp; BLOG</p>
          <h2 className="mt-2 text-lg font-semibold text-brand">お知らせ・コラム</h2>
          {recentNews.length === 0 ? (
            <p className="mt-6 text-sm text-brand-light">現在準備中です。</p>
          ) : (
            <ul className="mt-6 divide-y divide-brand/10">
              {recentNews.map((item) => (
                <li key={item.id} className="py-3">
                  <a href={`/news/${item.id}`} className="text-sm text-brand hover:underline">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <p className="text-xs tracking-[0.2em] text-brand-light">EVENTS</p>
          <h2 className="mt-2 text-lg font-semibold text-brand">イベント・見学会</h2>
          {upcomingEvents.length === 0 ? (
            <p className="mt-6 text-sm text-brand-light">現在開催予定のイベントはありません。</p>
          ) : (
            <ul className="mt-6 divide-y divide-brand/10">
              {upcomingEvents.map((item) => (
                <li key={item.id} className="py-3">
                  <a href={`/events/${item.id}`} className="text-sm text-brand hover:underline">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </div>
  );
}
