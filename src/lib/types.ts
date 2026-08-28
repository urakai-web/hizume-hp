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
  image: MicroCMSImage;
  caption?: string;
};

/** 新築の施工事例(microCMS API: case / リスト形式) */
export type CaseContent = MicroCMSListContent & {
  title: string;
  mainImage: MicroCMSImage;
  gallery?: GalleryPhoto[];
  priceRange?: string;
  structure?: string[];
  location?: string;
  body: string;
};
