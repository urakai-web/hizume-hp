import { Hono } from "hono";
import type { Bindings } from "./env";
import { renderPage } from "./render";
import { createMicroCmsClient } from "../lib/microcms";
import contact from "./routes/api/contact";

const app = new Hono<{ Bindings: Bindings }>();

app.route("/api/contact", contact);

app.get("/", async (c) => {
  const cms = createMicroCmsClient(c.env);
  const [cases, news, events] = await Promise.all([
    cms.listCases(),
    cms.listNews(),
    cms.listEvents(),
  ]);

  return renderPage({
    pageKey: "top",
    title: "住まいは人のために、人がつくる",
    description:
      "石川県金沢市の樋爪住宅研究所。新築設計・リフォーム・住宅設備工事まで、暮らしにまつわることを幅広く承ります。",
    props: {
      recentCases: cases.contents.slice(0, 3),
      recentNews: news.contents.slice(0, 3),
      upcomingEvents: events.contents.slice(0, 3),
    },
  });
});

app.get("/concept", () =>
  renderPage({
    pageKey: "concept",
    title: "私たちについて",
    description: "樋爪住宅研究所の家づくりへの想い・こだわりをご紹介します。",
  }),
);

app.get("/case", async (c) => {
  const cms = createMicroCmsClient(c.env);
  const cases = await cms.listCases();
  return renderPage({
    pageKey: "caseList",
    title: "新築の施工事例",
    description: "樋爪住宅研究所が手がけた新築注文住宅の施工事例をご紹介します。",
    props: { cases: cases.contents },
  });
});

app.get("/case/:id", async (c) => {
  const cms = createMicroCmsClient(c.env);
  const item = await cms.getCase(c.req.param("id"));
  return renderPage({
    pageKey: "caseDetail",
    title: item?.title ?? "施工事例",
    description: "新築の施工事例詳細です。",
    props: { item },
  });
});

app.get("/reform", () =>
  renderPage({
    pageKey: "reform",
    title: "リフォーム・リノベーション",
    description: "中古物件のリフォーム・リノベーションについてご紹介します。",
  }),
);

app.get("/reform/case", async (c) => {
  const cms = createMicroCmsClient(c.env);
  const cases = await cms.listReformCases();
  return renderPage({
    pageKey: "reformCaseList",
    title: "リフォーム施工事例",
    description: "樋爪住宅研究所が手がけたリフォームの施工事例をご紹介します。",
    props: { cases: cases.contents },
  });
});

app.get("/reform/case/:id", async (c) => {
  const cms = createMicroCmsClient(c.env);
  const item = await cms.getReformCase(c.req.param("id"));
  return renderPage({
    pageKey: "reformCaseDetail",
    title: item?.title ?? "リフォーム施工事例",
    description: "リフォームの施工事例詳細です。",
    props: { item },
  });
});

app.get("/facilities", () =>
  renderPage({
    pageKey: "facilities",
    title: "住宅設備・メンテナンス",
    description: "エアコン取付から水回り・電気工事まで、住宅設備工事について。",
  }),
);

app.get("/company", () =>
  renderPage({
    pageKey: "company",
    title: "会社概要",
    description: "樋爪住宅研究所の会社概要です。",
  }),
);

app.get("/events", async (c) => {
  const cms = createMicroCmsClient(c.env);
  const events = await cms.listEvents();
  return renderPage({
    pageKey: "eventList",
    title: "イベント・見学会",
    description: "見学会・完成内覧会などのイベント情報です。",
    props: { events: events.contents },
  });
});

app.get("/events/:id", async (c) => {
  const cms = createMicroCmsClient(c.env);
  const item = await cms.getEvent(c.req.param("id"));
  return renderPage({
    pageKey: "eventDetail",
    title: item?.title ?? "イベント",
    description: "イベント詳細です。",
    props: { item },
  });
});

app.get("/news", async (c) => {
  const cms = createMicroCmsClient(c.env);
  const news = await cms.listNews();
  return renderPage({
    pageKey: "newsList",
    title: "お知らせ・コラム",
    description: "樋爪住宅研究所からのお知らせ・コラム記事です。",
    props: { news: news.contents },
  });
});

app.get("/news/:id", async (c) => {
  const cms = createMicroCmsClient(c.env);
  const item = await cms.getNews(c.req.param("id"));
  return renderPage({
    pageKey: "newsDetail",
    title: item?.title ?? "お知らせ",
    description: "お知らせ・コラム詳細です。",
    props: { item },
  });
});

app.get("/contact", () =>
  renderPage({
    pageKey: "contact",
    title: "お問い合わせ",
    description: "新築・リフォーム・住宅設備のご相談はこちらから。",
  }),
);

app.notFound((c) => c.text("Not Found", 404));

export default app;
