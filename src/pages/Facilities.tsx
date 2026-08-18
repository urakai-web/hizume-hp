const services = [
  { title: "エアコン取付・交換", body: "新規取付から古い機種の交換まで対応します。" },
  { title: "給湯器交換", body: "電気・ガス給湯器の交換・入れ替えに対応します。" },
  { title: "水回り設備交換", body: "キッチン・浴室・トイレなど水回り設備の交換に対応します。" },
  { title: "電気工事", body: "コンセント増設や照明交換など、暮らしの困りごとに対応します。" },
  { title: "外壁・屋根メンテナンス", body: "外壁・屋根の塗装や修繕に対応します。" },
  { title: "その他住宅設備", body: "上記以外の住宅設備についても、まずはお気軽にご相談ください。" },
];

export function Facilities() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-sm tracking-widest text-brand-light">FACILITIES</p>
      <h1 className="mt-3 text-2xl font-semibold text-brand">住宅設備・メンテナンス</h1>
      <p className="mt-6 text-sm leading-relaxed text-brand-light">
        エアコンの取付だけでなく、給湯器や水回り設備の交換、電気工事、外壁・屋根のメンテナンスまで、家の設備に関
        することは幅広く承っています。「これも頼んでいいのかな？」という内容でも、まずはお気軽にご相談ください。
      </p>

      <ul className="mt-12 grid gap-6 sm:grid-cols-2">
        {services.map((item) => (
          <li key={item.title} className="rounded-lg border border-brand/10 p-6">
            <h2 className="font-semibold text-brand">{item.title}</h2>
            <p className="mt-2 text-sm text-brand-light">{item.body}</p>
          </li>
        ))}
      </ul>

      <div className="mt-16">
        <a href="/contact" className="text-sm text-brand hover:underline">
          住宅設備について相談する →
        </a>
      </div>
    </div>
  );
}
