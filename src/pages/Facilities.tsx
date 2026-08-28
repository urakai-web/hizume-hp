import { Link } from "react-router-dom";
import PageBanner from "../components/PageBanner";
import { useFadeIn } from "../hooks/useFadeIn";

const services = [
  { title: "エアコン取付・交換", body: "新規取付から古い機種の交換まで対応します。" },
  { title: "給湯器交換", body: "電気・ガス給湯器の交換・入れ替えに対応します。" },
  { title: "水回り設備交換", body: "キッチン・浴室・トイレなど水回り設備の交換に対応します。" },
  { title: "電気工事", body: "コンセント増設や照明交換など、暮らしの困りごとに対応します。" },
  { title: "外壁・屋根メンテナンス", body: "外壁・屋根の塗装や修繕に対応します。" },
  { title: "その他住宅設備", body: "上記以外の住宅設備についても、まずはお気軽にご相談ください。" },
];

export default function Facilities() {
  const ref = useFadeIn<HTMLDivElement>();

  return (
    <>
      <PageBanner
        eyebrow="Facilities"
        title="住宅設備・メンテナンス"
        description="エアコン取付だけでなく、家の設備に関することは幅広く承っています。"
      />

      <section ref={ref} className="py-24 md:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <p className="fade-in-up text-sm leading-relaxed text-gray-600">
            エアコンの取付だけでなく、給湯器や水回り設備の交換、電気工事、外壁・屋根のメンテナンスまで、家の設備
            に関することは幅広く承っています。「これも頼んでいいのかな？」という内容でも、まずはお気軽にご相談
            ください。
          </p>

          <ul className="fade-in-up mt-16 grid gap-6 sm:grid-cols-2">
            {services.map((item) => (
              <li key={item.title} className="border border-gray-200 p-6">
                <h2 className="font-medium text-gray-800">{item.title}</h2>
                <p className="mt-2 text-sm text-gray-500">{item.body}</p>
              </li>
            ))}
          </ul>

          <div className="mt-16 text-center">
            <Link to="/contact" className="btn-primary text-xs inline-block">
              住宅設備について相談する →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
