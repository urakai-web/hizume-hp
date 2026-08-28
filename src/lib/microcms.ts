import { createClient } from "microcms-js-sdk";
import type { CaseContent } from "./types";

const serviceDomain = import.meta.env.VITE_MICROCMS_SERVICE_DOMAIN as string | undefined;
const apiKey = import.meta.env.VITE_MICROCMS_API_KEY as string | undefined;

export const isMicroCmsConfigured = Boolean(serviceDomain && apiKey);

const client = isMicroCmsConfigured
  ? createClient({ serviceDomain: serviceDomain!, apiKey: apiKey! })
  : null;

type ListResponse<T> = { contents: T[]; totalCount: number };

/**
 * microCMSの環境変数が未設定の間は空データを返す。
 * (サービス・APIキー発行後は VITE_MICROCMS_SERVICE_DOMAIN / VITE_MICROCMS_API_KEY を .env に設定)
 */
export async function listCases(): Promise<ListResponse<CaseContent>> {
  if (!client) return { contents: [], totalCount: 0 };
  return client.getList<CaseContent>({ endpoint: "case", queries: { limit: 100 } });
}

export async function getCase(contentId: string): Promise<CaseContent | null> {
  if (!client) return null;
  try {
    return await client.getListDetail<CaseContent>({ endpoint: "case", contentId });
  } catch {
    return null;
  }
}
