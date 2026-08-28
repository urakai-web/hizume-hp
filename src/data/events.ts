export type EventItem = {
  id: string;
  title: string;
  startDate: string;
  endDate: string;
  location: string;
  reservationRequired: boolean;
  description: string;
};

export const events: EventItem[] = [
  {
    id: "sumai-kengakukai",
    title: "理想の暮らしを「0」からつくる。光と心地よさに包まれる住まい見学会",
    startDate: "2026.07.01",
    endDate: "2026.07.31",
    location: "石川県河北郡津幡町太田ろ270",
    reservationRequired: true,
    description:
      "光と間取りのアイデアが詰まったモデルハウスを、じっくりとご覧いただけます。ご予約制となりますので、お気軽にお問い合わせください。",
  },
  {
    id: "rasenkaidan-modelhouse",
    title: "玄関を開ければ、空へ続く螺旋階段。光と間取りのアイデアが詰まったモデルハウスを見に行きませんか？",
    startDate: "2026.07.01",
    endDate: "2026.08.31",
    location: "石川県河北郡津幡町太田ろ270",
    reservationRequired: true,
    description:
      "玄関を開けると空へ続く螺旋階段。光と間取りのアイデアが詰まった津幡モデルハウスの見学会です。ご予約制となりますので、お気軽にお問い合わせください。",
  },
];
