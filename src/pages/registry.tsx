import type { ComponentType } from "react";
import { Top } from "./Top";
import { Concept } from "./Concept";
import { CaseList } from "./CaseList";
import { CaseDetail } from "./CaseDetail";
import { Reform } from "./Reform";
import { ReformCaseList } from "./ReformCaseList";
import { ReformCaseDetail } from "./ReformCaseDetail";
import { Facilities } from "./Facilities";
import { Company } from "./Company";
import { EventList } from "./EventList";
import { EventDetail } from "./EventDetail";
import { NewsList } from "./NewsList";
import { NewsDetail } from "./NewsDetail";
import { Contact } from "./Contact";

/**
 * ページキー ⇔ コンポーネントの対応表。
 * サーバー(Hono)とクライアント(hydrate)の両方がこの表を参照することで、
 * SSRで出力したHTMLとクライアントのhydrate内容を一致させる。
 * props の型はページごとに異なりデータはJSONとしてシリアライズされるため、
 * ここでは意図的に any を許容している。
 */
export const pageRegistry = {
  top: Top,
  concept: Concept,
  caseList: CaseList,
  caseDetail: CaseDetail,
  reform: Reform,
  reformCaseList: ReformCaseList,
  reformCaseDetail: ReformCaseDetail,
  facilities: Facilities,
  company: Company,
  eventList: EventList,
  eventDetail: EventDetail,
  newsList: NewsList,
  newsDetail: NewsDetail,
  contact: Contact,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
} satisfies Record<string, ComponentType<any>>;

export type PageKey = keyof typeof pageRegistry;
