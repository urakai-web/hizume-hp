import { hydrateRoot } from "react-dom/client";
import { Document } from "../components/Document";
import { pageRegistry, type PageKey } from "../pages/registry";
import "../styles/index.css";

type Bootstrap = {
  pageKey: PageKey;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pageProps: any;
  title: string;
  description: string;
};

const dataEl = document.getElementById("page-data");
if (!dataEl?.textContent) {
  throw new Error("page bootstrap data is missing");
}

const { pageKey, pageProps, title, description } = JSON.parse(dataEl.textContent) as Bootstrap;
const PageComponent = pageRegistry[pageKey];

const clientScript = import.meta.env.DEV ? "/src/client/entry-client.tsx" : "/assets/client.js";
const clientStyles = import.meta.env.DEV ? undefined : "/assets/client.css";

hydrateRoot(
  document,
  <Document
    title={title}
    description={description}
    pageKey={pageKey}
    pageProps={pageProps}
    cssHref={clientStyles}
    scriptSrc={clientScript}
    isDev={import.meta.env.DEV}
  >
    <PageComponent {...pageProps} />
  </Document>,
);
