import PageBanner from "../components/PageBanner";
import { useFadeIn } from "../hooks/useFadeIn";
import { company } from "../data/company";

const styleItems = [
  {
    title: "どこでもない「その場所」に",
    body: "世界に二つとして同じ土地はありません。その土地の「特徴」を丁寧に読み取り、家の「特長」へと変えていくこと。地域の歴史や風土を学び、太陽の動きと風の流れを観察する。地形に立ち、周囲の環境に耳を澄ませ、その土地が語りかけてくる声を聴くこと。むしろ、個性的な形の土地であるほど、私たちの心は躍ります。",
  },
  {
    title: "対話重視の打ち合わせ",
    body: "一軒の家が完成するまでに、打ち合わせの回数はおよそ40回。設計の段階だけでなく、施工が始まってからも対話を重ねながら計画を進めます。図面だけでは見えてこないものが、実際に家のかたちが立ち上がっていく過程で見えてくることがあるからです。そこから新しいアイデアや修正点が生まれ、対話を重ねるほどに、目指す方向がはっきりと見えてきます。",
  },
  {
    title: "「作品」と「商品」はつくらない",
    body: "家は、建築家にとっての「作品」でも、店先に並ぶ既製の「商品」でもありません。ひとりひとり、ひと家族ひと家族、まったく異なる歩みと個性、考え方や好みを映しながら、丁寧につくり上げていくもの。お客様ご自身もまだ気づいていない、潜在的な想いや要望まで丁寧にかたちにしながら、家づくりを進めていきます。",
  },
  {
    title: "職人の技を活かす",
    body: "建築の現場で、実際に家をかたちにしていくのは、大工、左官、電気工事士といった職人たちです。樋爪住宅研究所では、地元でも指折りの確かな腕を持つ職人たちと契約し、余裕を持って家づくりに取り組んでいます。そのぶん工期は一般的な住宅より少し長めになりますが、それは細部にまでこだわり抜いた、確かな品質の住まいをお届けするためです。",
  },
];

const philosophyItems = [
  {
    title: "変化を楽しむ",
    body: "家にとって、竣工の日が完成の日ではありません。そこに暮らす人とともに歳月を重ね、少しずつ成熟しながら愛着を深めていく——それが私たちの理想とする家づくりです。そのために、できる限り自然素材を用い、伝統的な工法を取り入れながら住まいをつくります。時を重ねるほどに存在感を増し、経年変化そのものを楽しめる住まいを目指しています。",
  },
  {
    title: "「シンプルかつ複雑」な家を",
    body: "空間にはゆとりがありながら、無駄なものは一切ない。一見するとシンプルでありながら、随所に細やかな気配りが施された、奥行きのある家。住むほどに、季節を重ねるほどに、新しい発見がある——そんな住まいを目指しています。",
  },
  {
    title: "楽しみながら見つめなおす",
    body: "家は、ただ住むための場所ではなく、「私はこう住み、こう暮らす」という人生観そのものの表現でもあります。家づくりは、自分自身の人生を見つめ直す絶好の機会です。これからの暮らしに想いを馳せながら、かたちになっていく過程そのものを、楽しみながら味わっていただければと思います。",
  },
  {
    title: "不易と流行",
    body: "新しい建築技術は柔軟に取り入れながらも、人にとっての「自然」であることを忘れない。時代とともに変えていくべきものと、決して変えてはならないもの。そのふたつをしっかりと見つめながら、自然体でシンプルに暮らせる家づくりを心がけています。",
  },
];

export default function Concept() {
  const ref = useFadeIn<HTMLDivElement>();

  return (
    <>
      <PageBanner eyebrow="Concept" title="私たちについて" />

      <section ref={ref} className="py-24 md:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="fade-in-up space-y-6 text-sm leading-loose text-gray-600">
            <p>
              あなたにとって、「家」とはどんな存在でしょうか。あなたが家に求めているのは、いったい何でしょうか。
              おそらく、その答えは人の数だけあるはずです。たとえば「家には何より快適さが必要だ」と誰もが口にした
              としても、あなたの求める快さと、他の誰かが思う快さとは、きっと少しずつ違います。むしろ違っていて当
              然で、私たちの家づくりは、そのひとりひとり、ひと家族ひと家族の小さな「違い」を見つけ出すところから
              始まります。
            </p>
            <p>
              かつて、ある高名な建築家は「住宅は住むための機械である」と書きました。けれど、と私たちは思うので
              す。人は、けっして機械ではない、と。あなたがいて、家族がいる。それぞれに異なる住まい方がある。
              ”あなた”がいなければ、そこにあるのは建物であって、”家”ではありません。家は、工業化された箱であって
              はならない。そう考えています。
            </p>
            <p className="text-right text-gray-800 font-medium">代表取締役　{company.representative}</p>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-warm-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="section-title mb-16">Style</h2>
          <div className="space-y-16">
            {styleItems.map((item) => (
              <div key={item.title}>
                <h3 className="text-xl font-serif font-light text-gray-800 mb-4">{item.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="section-title mb-16">不易流行</h2>
          <div className="space-y-16">
            {philosophyItems.map((item) => (
              <div key={item.title}>
                <h3 className="text-xl font-serif font-light text-gray-800 mb-4">{item.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
