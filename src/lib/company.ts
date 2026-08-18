/**
 * 会社概要の基本情報。更新頻度が低いためコード内定数として保持する。
 * (出典: イエタッタ石川 掲載情報 https://www.xn----566as40brkc895c.com/company/12158)
 */
export const company = {
  name: "株式会社樋爪住宅研究所",
  representative: "樋爪 鑑",
  address: "石川県金沢市三口町火225-1",
  tel: "076-281-6024",
  fax: "076-281-6331",
  email: "hizume-studio@nifty.com",
  businessHours: "9:00〜18:00",
  closedDays: "土・日・祝日",
  serviceAreas: [
    "石川県全域",
    "加賀市",
    "小松市",
    "能美市・川北町",
    "白山市",
    "野々市市",
    "金沢市",
    "かほく市・内灘町・津幡町",
    "羽咋市・宝達志水町・志賀町",
    "七尾市・中能登町",
    "輪島市・穴水町・能登町",
    "珠洲市",
  ],
  constructionMethod: "木造軸組",
  pricePerTsuboRange: "70万円〜90万円",
  warranty: ["住宅瑕疵担保責任保険", "地盤保証", "しろあり保証"],
  afterService: ["半年点検", "1年点検", "3年点検", "5年点検", "10年点検"],
  capital: "1,930万円",
  licenses: [
    "設計事務所登録 石川県知事登録1級 第13662号",
    "一般建設業 石川県知事許可(般-5) 第17902号",
  ],
} as const;
