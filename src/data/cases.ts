export type CaseItem = {
  id: string;
  title: string;
  priceRange: string;
  tags: string[];
  image: string;
};

// 画像は実際の施工写真が届くまでの仮素材(public/images/works-01〜06.png を使い回し)
const placeholderImages = [
  "/images/works-01.png",
  "/images/works-02.png",
  "/images/works-03.png",
  "/images/works-04.png",
  "/images/works-05.png",
  "/images/works-06.png",
];

const raw: Omit<CaseItem, "image">[] = [
  { id: "kinomi-nuke", title: "「”木”と抜け」のあるおうち", priceRange: "2,000万円〜2,500万円", tags: ["2階建て", "店舗併用住宅"] },
  { id: "nakaniwa-doma", title: "「中庭と土間のある平屋」のおうち", priceRange: "2,500万円〜3,000万円", tags: ["平屋"] },
  { id: "court-house", title: "「コートハウス」のおうち", priceRange: "2,000万円〜2,500万円", tags: ["平屋"] },
  { id: "otona-kodawari", title: "「おとなのこだわり」のおうち", priceRange: "2,000万円〜2,500万円", tags: ["2階建て"] },
  { id: "kaiga-shakkei", title: "「絵画と借景」のおうち", priceRange: "2,000万円〜2,500万円", tags: ["2階建て"] },
  { id: "jouge-sayuu", title: "「上下左右リズミカル」のおうち", priceRange: "2,000万円〜2,500万円", tags: ["2階建て"] },
  { id: "in-and-out", title: "「IN&OUT」のおうち", priceRange: "3,000万円〜3,500万円", tags: ["2階建て"] },
  { id: "nakayoshi-hiraya", title: "「仲良し平屋」のおうち", priceRange: "2,000万円〜2,500万円", tags: ["平屋"] },
  { id: "tsunagari", title: "「つながり」のおうち", priceRange: "2,000万円〜2,500万円", tags: ["2階建て"] },
  { id: "kito", title: "KITO", priceRange: "1,000万円〜1,500万円", tags: ["平屋"] },
  { id: "ro-no-jigata", title: "「ロの字型」のおうち", priceRange: "2,500万円〜3,000万円", tags: ["2階建て", "店舗併用住宅"] },
  { id: "nuke-to-kansei", title: "「抜けと感性」のおうち", priceRange: "2,500万円〜3,000万円", tags: ["2階建て"] },
  { id: "cafe-hanare", title: "cafe hanare", priceRange: "1,000万円〜1,500万円", tags: ["平屋", "狭小地・変形地", "店舗併用住宅"] },
  { id: "shikichi-simplelife", title: "「敷地を活かしたシンプルライフ」のおうち", priceRange: "2,500万円〜3,000万円", tags: ["2階建て", "狭小地・変形地"] },
  { id: "yawaraka-hikari", title: "柔らかな光のおうち", priceRange: "2,500万円〜3,000万円", tags: ["2階建て"] },
  { id: "shikichi-ikasu", title: "「敷地を活かす」のおうち", priceRange: "2,000万円〜2,500万円", tags: ["2階建て"] },
  { id: "otona-gurashi", title: "「大人暮らし」のおうち", priceRange: "2,000万円〜2,500万円", tags: ["2階建て"] },
  { id: "the-nihonkai", title: "「THE日本海」のおうち", priceRange: "1,000万円〜1,500万円", tags: ["平屋"] },
  { id: "wa-no-teien", title: "「和の庭園」のおうち", priceRange: "価格応相談", tags: ["2階建て"] },
  { id: "atrium-ki", title: "アトリウムの木のおうち", priceRange: "2,000万円〜2,500万円", tags: ["2階建て"] },
  { id: "kanade", title: "奏のおうち", priceRange: "2,000万円〜2,500万円", tags: ["2階建て"] },
];

export const cases: CaseItem[] = raw.map((item, index) => ({
  ...item,
  image: placeholderImages[index % placeholderImages.length],
}));
