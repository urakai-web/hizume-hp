/**
 * 会社概要の基本情報。
 * (出典: イエタッタ石川 掲載情報 https://www.xn----566as40brkc895c.com/company/12158)
 */
export const company = {
  name: "株式会社樋爪住宅研究所",
  nameShort: "樋爪住宅研究所",
  representative: "樋爪 鑑",
  address: "石川県金沢市三口町火225-1",
  tel: "076-281-6024",
  fax: "076-281-6331",
  email: "hizume-studio@nifty.com",
  /** HP経由のLINE友だち追加URL(流入元を区別するための計測付きリンク) */
  lineUrl: "https://line-harness.hizumejuutaku.workers.dev/r/HP",
  businessHours: "9:00〜18:00",
  /** 営業時間の後ろに添える注記(「土・日・祝日」と書くと含むのか除くのか読み取りにくいため) */
  businessHoursNote: "土日祝日は除く",
  closedDays: "土・日・祝日",
  /** 電話・窓口の受付時間とは別に、打ち合わせは予約制で土日祝日も可能 */
  meetingNote: "お打ち合わせは、ご予約いただければ土日祝日も対応可能です",
  serviceAreas: ["石川県全域", "県外も相談可能"],
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
