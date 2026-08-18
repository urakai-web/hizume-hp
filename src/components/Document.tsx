import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export type DocumentProps = {
  title: string;
  description: string;
  pageKey: string;
  pageProps: unknown;
  cssHref?: string;
  scriptSrc: string;
  /** dev時のみ true。Vite React Fast Refreshのpreambleを注入するために必要 */
  isDev?: boolean;
  children: ReactNode;
};

const reactRefreshPreamble = `import RefreshRuntime from "/@react-refresh";
RefreshRuntime.injectIntoGlobalHook(window);
window.$RefreshReg$ = () => {};
window.$RefreshSig$ = () => (type) => type;
window.__vite_plugin_react_preamble_installed__ = true;`;

export function Document({
  title,
  description,
  pageKey,
  pageProps,
  cssHref,
  scriptSrc,
  isDev,
  children,
}: DocumentProps) {
  const bootstrap = JSON.stringify({ pageKey, pageProps, title, description }).replace(
    /</g,
    "\\u003c",
  );

  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{`${title}｜株式会社樋爪住宅研究所`}</title>
        <meta name="description" content={description} />
        {cssHref ? <link rel="stylesheet" href={cssHref} /> : null}
        {isDev ? <script type="module" dangerouslySetInnerHTML={{ __html: reactRefreshPreamble }} /> : null}
      </head>
      <body className="bg-sand text-brand antialiased">
        <div id="root">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
        <script
          id="page-data"
          type="application/json"
          dangerouslySetInnerHTML={{ __html: bootstrap }}
        />
        <script type="module" src={scriptSrc} />
      </body>
    </html>
  );
}
