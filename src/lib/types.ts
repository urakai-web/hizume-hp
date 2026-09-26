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
 * お知らせ(microCMS API: news / リスト形式)
 * セレクトフィールドは単一選択でも配列で返ってくる。日付は公開日(publishedAt)を使う。
 */
export type NewsContent = MicroCMSListContent & {
  title: string;
  category?: string[] | string;
  body?: string;
};

/**
 * イベント・見学会(microCMS API: event / リスト形式)
 */
export type EventContent = MicroCMSListContent & {
  title: string;
  eventstart?: string;
  eventend?: string;
  location?: string;
  reservationrequired?: boolean;
  body?: string;
};

/**
 * 新築の施工事例(microCMS API: case / リスト形式)
 * 下書き段階のコンテンツはフィールドが未入力のことがあるため、
 * title/id 以外は基本的に任意として扱う。
 */
export type CaseContent = MicroCMSListContent & {
  title: string;
  // microCMSのカスタムフィールドIDは大文字を使えないため、実際のAPIキーは小文字
  mainimage?: MicroCMSImage;
  // 「繰り返し可能」設定が入っていないと配列ではなく単一オブジェクトで返ってくる
  gallery?: GalleryPhoto[] | GalleryPhoto;
  pricerange?: string;
  /** 自由記述のテキストフィールド(例: 「2階建て・店舗併用住宅」) */
  structure?: string;
  location?: string;
  body?: string;
};
