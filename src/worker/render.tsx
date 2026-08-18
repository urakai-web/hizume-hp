import { renderToString } from "react-dom/server";
import { Document } from "../components/Document";
import { pageRegistry, type PageKey } from "../pages/registry";

const clientScript = import.meta.env.DEV ? "/src/client/entry-client.tsx" : "/assets/client.js";
const clientStyles = import.meta.env.DEV ? undefined : "/assets/client.css";

export function renderPage(opts: {
  pageKey: PageKey;
  title: string;
  description: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props?: any;
}) {
  const { pageKey, title, description, props = {} } = opts;
  const PageComponent = pageRegistry[pageKey];

  const html = renderToString(
    <Document
      title={title}
      description={description}
      pageKey={pageKey}
      pageProps={props}
      cssHref={clientStyles}
      scriptSrc={clientScript}
      isDev={import.meta.env.DEV}
    >
      <PageComponent {...props} />
    </Document>,
  );

  return new Response(`<!DOCTYPE html>${html}`, {
    headers: { "Content-Type": "text/html; charset=UTF-8" },
  });
}
