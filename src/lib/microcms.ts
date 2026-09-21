import { createClient } from "microcms-js-sdk";
import type { CaseContent, NewsContent } from "./types";

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
const RETRY_COUNT = 3;
const RETRY_DELAY_MS = 600;

// 接続リセットなど一時的な通信エラーで、再読み込みするまで「準備中」のままになるのを防ぐ
async function withRetry<T>(fn: () => Promise<T>): Promise<T> {
  for (let attempt = 1; ; attempt++) {
    try {
      return await fn();
    } catch (error) {
      const isClientError = error instanceof Error && /status: 4\d\d/.test(error.message);
      if (isClientError || attempt >= RETRY_COUNT) throw error;
      await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY_MS * attempt));
    }
  }
}

async function listContents<T>(endpoint: string): Promise<ListResponse<T>> {
  if (!client) return { contents: [], totalCount: 0 };
  return withRetry(() => client.getList<T>({ endpoint, queries: { limit: 100 } }));
}

async function getContent<T>(endpoint: string, contentId: string): Promise<T | null> {
  if (!client) return null;
  try {
    return await client.getListDetail<T>({ endpoint, contentId });
  } catch {
    return null;
  }
}

export function listCases(): Promise<ListResponse<CaseContent>> {
  return listContents<CaseContent>("case");
}

export function getCase(contentId: string): Promise<CaseContent | null> {
  return getContent<CaseContent>("case", contentId);
}

export function listNonResidentialCases(): Promise<ListResponse<CaseContent>> {
  return listContents<CaseContent>("nonresidential");
}

export function listNews(): Promise<ListResponse<NewsContent>> {
  return listContents<NewsContent>("news");
}

export function getNonResidentialCase(contentId: string): Promise<CaseContent | null> {
  return getContent<CaseContent>("nonresidential", contentId);
}
