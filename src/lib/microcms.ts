import { createClient } from "microcms-js-sdk";
import type { Bindings } from "../worker/env";
import type { CaseItem, EventItem, NewsItem, ReformCaseItem } from "./types";

type ListResponse<T> = { contents: T[]; totalCount: number };

/**
 * microCMSの環境変数が未設定でもサイト自体はビルド・表示できるよう、
 * 未設定時は空データを返すフォールバッククライアントにする。
 * (本番運用開始時に MICROCMS_SERVICE_DOMAIN / MICROCMS_API_KEY を wrangler secret で設定する)
 */
export function createMicroCmsClient(env: Bindings) {
  const isConfigured = Boolean(env.MICROCMS_SERVICE_DOMAIN && env.MICROCMS_API_KEY);

  if (!isConfigured) {
    return {
      isConfigured,
      listCases: async (): Promise<ListResponse<CaseItem>> => ({ contents: [], totalCount: 0 }),
      getCase: async (): Promise<CaseItem | null> => null,
      listReformCases: async (): Promise<ListResponse<ReformCaseItem>> => ({ contents: [], totalCount: 0 }),
      getReformCase: async (): Promise<ReformCaseItem | null> => null,
      listNews: async (): Promise<ListResponse<NewsItem>> => ({ contents: [], totalCount: 0 }),
      getNews: async (): Promise<NewsItem | null> => null,
      listEvents: async (): Promise<ListResponse<EventItem>> => ({ contents: [], totalCount: 0 }),
      getEvent: async (): Promise<EventItem | null> => null,
    };
  }

  const client = createClient({
    serviceDomain: env.MICROCMS_SERVICE_DOMAIN,
    apiKey: env.MICROCMS_API_KEY!,
  });

  return {
    isConfigured,
    listCases: () => client.getList<CaseItem>({ endpoint: "case" }),
    getCase: (contentId: string) => client.getListDetail<CaseItem>({ endpoint: "case", contentId }),
    listReformCases: () => client.getList<ReformCaseItem>({ endpoint: "reform-case" }),
    getReformCase: (contentId: string) =>
      client.getListDetail<ReformCaseItem>({ endpoint: "reform-case", contentId }),
    listNews: () => client.getList<NewsItem>({ endpoint: "news" }),
    getNews: (contentId: string) => client.getListDetail<NewsItem>({ endpoint: "news", contentId }),
    listEvents: () => client.getList<EventItem>({ endpoint: "event" }),
    getEvent: (contentId: string) => client.getListDetail<EventItem>({ endpoint: "event", contentId }),
  };
}

export type MicroCmsClient = ReturnType<typeof createMicroCmsClient>;
