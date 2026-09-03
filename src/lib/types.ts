export type MicroCMSImage = {
  url: string;
  width: number;
  height: number;
};

export type MicroCMSListContent = {
  id: string;
  publishedAt?: string;
  revisedAt?: string;
};

export type GalleryPhoto = {
  // 未入力の状態で保存されると image 自体が欠けることがあるため任意にしている
  image?: MicroCMSImage;
  caption?: string;
};

/**
 * 新築の施工事例(microCMS API: case / リスト形式)
 * 下書き段階のコンテンツはフィールドが未入力のことがあるため、
 * title/id 以外は基本的に任意として扱う。
 */
export type CaseContent = MicroCMSListContent & {
  title: string;
  mainImage?: MicroCMSImage;
  gallery?: GalleryPhoto[];
  priceRange?: string;
  /** 自由記述のテキストフィールド(例: 「2階建て・店舗併用住宅」) */
  structure?: string;
  location?: string;
  body?: string;
};
