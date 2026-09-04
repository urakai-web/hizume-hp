import { useFadeIn } from "../../hooks/useFadeIn";

const items = [
  {
    icon: "🗺️",
    title: "どこでもない「その場所」に",
    subtitle: "Read the Site",
    description:
      "世界に二つとして同じ土地はありません。\nその土地の「特徴」を丁寧に読み取り、家の「特長」へと昇華していきます。",
    image: "/images/style/style-01.jpg",
  },
  {
    icon: "💬",
    title: "対話重視の打ち合わせ",
    subtitle: "Dialogue",
    description:
      "一軒の家が完成するまでに、打ち合わせの回数はおよそ40回。\n対話を重ねるほどに、あなたの未来の暮らしを形にしていきます。",
    image: "/images/style/style-02.jpg",
  },
  {
    icon: "🖋️",
    title: "「作品」と「商品」はつくらない",
    subtitle: "Not a Product",
    description: "一人ひとり、その家族ごとにまったく異なる歩みと個性を映しながら、丁寧につくり上げていきます。",
    image: "/images/style/style-03.jpg",
  },
  {
    icon: "🔨",
    title: "職人の技を活かす",
    subtitle: "Craftsmanship",
    description: "地元でも指折りの確かな腕を持つ職人たちと契約し、余裕を持って、細部にまでこだわった家づくりに取り組んでいます。",
    image: "/images/style/style-04.jpg",
  },
];

export default function StyleSection() {
  const ref = useFadeIn<HTMLDivElement>();

  return (
    <section ref={ref} className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <p className="text-xs tracking-widest text-primary uppercase mb-3">Our Style</p>
          <h2 className="section-title">家づくりのこだわり</h2>
          <p className="text-sm text-gray-500 mt-4 max-w-xl mx-auto leading-relaxed">
            樋爪住宅研究所が大切にしている4つのスタイル。
          </p>
        </div>

        <div className="space-y-24">
          {items.map((item, index) => (
            <div
              key={item.title}
              className={`fade-in-up grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "md:grid-flow-col-dense" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  <div
                    className={`absolute -bottom-3 w-24 h-1 bg-accent ${
                      index % 2 === 1 ? "right-4" : "left-4"
                    }`}
                  />
                </div>
              </div>

              <div className={index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}>
                <p className="text-xs tracking-widest text-accent uppercase mb-2">{item.subtitle}</p>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-light mb-6 text-gray-800 whitespace-nowrap md:whitespace-normal">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm whitespace-pre-line">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
