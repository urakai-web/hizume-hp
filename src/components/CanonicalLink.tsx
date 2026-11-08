import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const CANONICAL_ORIGIN = "https://hizume-archi.com";
const SITE_NAME = "樋爪住宅研究所";
const DEFAULT_TITLE = `${SITE_NAME}｜石川県金沢市の注文住宅・リフォーム`;
const DEFAULT_DESCRIPTION =
  "石川県金沢市の樋爪住宅研究所。対話を重ねてつくる新築注文住宅から、中古物件のリフォーム・リノベーション、エアコン取付をはじめとする住宅設備工事まで承ります。";

type PageMeta = { title: string; description: string };

/** パスごとのタイトルと説明文。詳細ページは一覧と同じ内容を既定にし、記事読み込み後に useDocumentTitle で上書きする */
const pageMeta: Record<string, PageMeta> = {
  "/": { title: DEFAULT_TITLE, description: DEFAULT_DESCRIPTION },
  "/concept": {
    title: `私たちについて | ${SITE_NAME}`,
    description:
      "「家は工業化された箱であってはならない」。ひとりひとり、ひと家族ひと家族の違いを見つけ出すところから始める、樋爪住宅研究所の家づくりの考え方をご紹介します。",
  },
  "/case": {
    title: `新築の施工事例 | ${SITE_NAME}`,
    description:
      "石川県金沢市の樋爪住宅研究所が手がけた、新築注文住宅の施工事例をご紹介します。自然素材と伝統的な工法を活かした家づくりの実例をご覧ください。",
  },
  "/case/nonresidential": {
    title: `非住宅の施工事例 | ${SITE_NAME}`,
    description:
      "樋爪住宅研究所が手がけた、店舗・事務所などの非住宅の施工事例をご紹介します。設計から施工まで、一貫して対応します。",
  },
  "/reform": {
    title: `リフォーム・リノベーション・住宅設備 | ${SITE_NAME}`,
    description:
      "石川県金沢市の樋爪住宅研究所のリフォーム・リノベーション。中古物件の改修から、エアコン取付・給湯器交換・水回り設備の交換まで、細かなご相談にも対応します。",
  },
  "/news": {
    title: `お知らせ・コラム | ${SITE_NAME}`,
    description: "樋爪住宅研究所からのお知らせやコラムをご紹介します。",
  },
  "/events": {
    title: `イベント・見学会 | ${SITE_NAME}`,
    description:
      "樋爪住宅研究所の無料相談会・完成見学会などのイベント情報です。ご予約もこちらから承ります。",
  },
  "/company": {
    title: `会社概要 | ${SITE_NAME}`,
    description:
      "株式会社樋爪住宅研究所の会社概要。所在地、対応エリア(石川県全域・県外も相談可能)、営業時間、保証体制、許認可などをご案内します。",
  },
  "/contact": {
    title: `お問い合わせ | ${SITE_NAME}`,
    description:
      "新築・リフォーム・住宅設備のご相談やお見積りのご依頼は、LINEまたはお電話(076-281-6024)で承っています。",
  },
};

function resolveMeta(pathname: string): PageMeta {
  if (pageMeta[pathname]) return pageMeta[pathname];
  if (pathname.startsWith("/case/nonresidential/")) return pageMeta["/case/nonresidential"];
  if (pathname.startsWith("/case/")) return pageMeta["/case"];
  if (pathname.startsWith("/news/")) return pageMeta["/news"];
  if (pathname.startsWith("/events/")) return pageMeta["/events"];
  return { title: DEFAULT_TITLE, description: DEFAULT_DESCRIPTION };
}

function upsert<T extends HTMLElement>(selector: string, create: () => T): T {
  let el = document.head.querySelector<T>(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  return el;
}

function upsertMeta(attr: "name" | "property", key: string): HTMLMetaElement {
  return upsert<HTMLMetaElement>(`meta[${attr}="${key}"]`, () => {
    const m = document.createElement("meta");
    m.setAttribute(attr, key);
    return m;
  });
}

/**
 * 表示中のページの正規URL(canonical)・タイトル・説明文を、ページごとに設定する。
 * 正規URLは常に正規ドメインで指定する。
 */
export default function CanonicalLink() {
  const { pathname } = useLocation();

  useEffect(() => {
    const href = CANONICAL_ORIGIN + (pathname === "/" ? "/" : pathname.replace(/\/$/, ""));
    const { title, description } = resolveMeta(pathname);

    upsert<HTMLLinkElement>('link[rel="canonical"]', () => {
      const l = document.createElement("link");
      l.rel = "canonical";
      return l;
    }).href = href;

    document.title = title;
    upsertMeta("name", "description").content = description;
    upsertMeta("property", "og:url").content = href;
    upsertMeta("property", "og:title").content = title;
    upsertMeta("property", "og:description").content = description;
  }, [pathname]);

  return null;
}
