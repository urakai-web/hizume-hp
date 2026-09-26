import PageBanner from "../components/PageBanner";
import { useFadeIn } from "../hooks/useFadeIn";
import { company } from "../data/company";

const philosophyItems = [
  {
    title: "変化を楽しむ",
    body: "家は竣工した時が完成ではありません。人とともに成熟し、過ごした歳月とともに馴染みながら愛着が深まっていく家が理想です。そのためできる限り自然素材を取り入れ、伝統的な工法を用いた家づくりを行っています。時を重ねることで存在感を放つ、経年変化を楽しめる住まいをつくります。",
    image: "/images/philosophy/philosophy-01.jpg",
  },
  {
    title: "「シンプルかつ複雑」な家を",
    body: "空間はゆとりに満ちているが、無駄なものは一切ない。一見するとシンプルだが、細やかな気配りが随所に施された複雑な家。住むほどに、四季を迎えるたびに、新たな発見がある——そんな家を目指します。",
    image: "/images/philosophy/philosophy-02.jpg",
  },
  {
    title: "楽しみながら見つめなおす",
    body: "家はたんに住むための場所ではなく、「私はこう住む・こう暮らす」という人生観の表現でもあります。その意味で家づくりは、自分の人生を確認する絶好のチャンスです。これからの人生に思いを馳せながら、出来上がっていくプロセスを楽しむ。そんな時間を共有できればと思います。",
    image: "/images/philosophy/philosophy-03.jpg",
  },
  {
    title: "不易と流行",
    body: "新たな建築技術を柔軟に取り入れながらも、人にとっての“自然”を忘れない。時代に応じて変化していくことと、変えてはいけないもの、この二つをしっかりと見つめ、自然体でシンプルに暮らせる家づくりを心がけています。",
    image: "/images/philosophy/philosophy-04.jpg",
  },
];

export default function Concept() {
  const ref = useFadeIn<HTMLDivElement>();

  return (
    <>
      <PageBanner eyebrow="Concept" title="私たちについて" />

      <section ref={ref} className="py-24 md:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="fade-in-up flex flex-col gap-10 sm:flex-row sm:items-start">
            <div className="flex-none text-center">
              <img
                src="/images/representative.jpg"
                alt={company.representative}
                className="w-48 h-48 sm:w-64 sm:h-64 rounded-full object-cover mx-auto"
              />
              <p className="mt-4 text-sm text-gray-800">
                代表取締役　<span className="font-medium">{company.representative}</span>
              </p>
            </div>
            <div className="space-y-6 text-sm leading-loose text-gray-600">
              <p>
                あなたにとって、「家」とはどんな存在でしょうか。あなたが家に求めているのは、いったい何でしょうか。おそらく、その答えは人の数だけあるはずです。たとえば「家には何より快適さが必要だ」と誰もが口にしたとしても、あなたの求める快さと、他の誰かが思う快さとは、きっと少しずつ違います。むしろ違っていて当然で、私たちの家づくりは、そのひとりひとり、ひと家族ひと家族の小さな「違い」を見つけ出すところから始まります。
              </p>
              <p>
                かつて、ある高名な建築家は「住宅は住むための機械である」と書きました。けれど、と私たちは思うのです。人は、けっして機械ではない、と。あなたがいて、家族がいる。それぞれに異なる住まい方がある。”あなた”がいなければ、そこにあるのは建物であって、”家”ではありません。家は、工業化された箱であってはならない。そう考えています。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-warm-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-title text-center mb-16">不易流行</h2>
          <div className="space-y-24">
            {philosophyItems.map((item, index) => (
              <div
                key={item.title}
                className={`isolate grid md:grid-cols-2 gap-6 md:gap-12 items-center ${
                  index % 2 === 1 ? "md:grid-flow-col-dense" : ""
                }`}
              >
                {/* モバイルでは画像より先にタイトルだけ表示する(PCでは非表示、下の見出しがPC用) */}
                <h3 className="order-1 md:hidden text-xl font-serif font-light text-gray-800 whitespace-nowrap">
                  {item.title}
                </h3>

                <div className={`order-2 md:order-none ${index % 2 === 1 ? "md:col-start-2" : ""}`}>
                  <div className="relative">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    <div
                      className={`absolute -bottom-4 w-full h-full border-2 border-accent -z-10 ${
                        index % 2 === 1 ? "-left-4" : "-right-4"
                      }`}
                    />
                  </div>
                </div>

                <div
                  className={`order-3 md:order-none ${index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}`}
                >
                  <h3 className="hidden md:block text-xl font-serif font-light mb-4 text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
