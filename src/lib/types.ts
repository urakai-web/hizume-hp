export type MicroCMSImage = {
  url: string;
  width: number;
  height: number;
};

export type MicroCMSListContent = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
  revisedAt?: string;
};

/** 新築の施工事例 */
export type CaseItem = MicroCMSListContent & {
  title: string;
  image: MicroCMSImage;
  priceRange?: string;
  structureType?: string[];
  body: string;
};

/** リフォームの施工事例 */
export type ReformCaseItem = MicroCMSListContent & {
  title: string;
  beforeImage?: MicroCMSImage;
  afterImage: MicroCMSImage;
  workDescription?: string;
  body: string;
};

export type NewsCategory = "新築" | "リフォーム" | "住宅設備" | "お知らせ";

/** お知らせ・コラム */
export type NewsItem = MicroCMSListContent & {
  title: string;
  category: NewsCategory;
  body: string;
};

/** イベント・見学会 */
export type EventItem = MicroCMSListContent & {
  title: string;
  startAt: string;
  endAt?: string;
  location?: string;
  reservationRequired: boolean;
  body: string;
};
