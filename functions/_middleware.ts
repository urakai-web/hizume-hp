/**
 * 正規ドメイン以外(hizume-hp.pages.dev など)へのアクセスを、正規ドメインへ301転送する。
 * アクセスを1つのドメインに集約し、検索評価の分散を防ぐ。
 */
const CANONICAL_HOST = "hizume-archi.com";

export const onRequest: PagesFunction = async (context) => {
  const url = new URL(context.request.url);

  if (url.hostname.endsWith(".pages.dev")) {
    url.protocol = "https:";
    url.hostname = CANONICAL_HOST;
    url.port = "";
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
};
