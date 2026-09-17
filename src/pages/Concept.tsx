import PageBanner from "../components/PageBanner";
import { useFadeIn } from "../hooks/useFadeIn";
import { company } from "../data/company";

const styleItems = [
  {
    title: "どこでもない「その場所」に",
    body: "二つと同じものがない土地。その土地の「特徴」を読み取り、家の「特長」へと変換すること。現地に立ち、土地の声を聴く。太陽の運行や風の流れを観る。地域の歴史や風土を学び、設計に活かす。変わった形状の土地ほど、私たちは燃えます。",
  },
  {
    title: "対話重視の打ち合わせ",
    body: "一軒の家が完成するまでに、だいたい40回ほどの打ち合わせを行っています。設計段階だけでなく、施工段階でも打ち合わせをしながら進めます。実際の出来上がり具合を見ることで、図面だけでは見えてこないもの、新たなアイデアや修正点も出てくるからです。家づくりは施主さまと対話を通して二人三脚で進めるもの。話をすればするほど、方向性が明確になっていきます。",
  },
  {
    title: "「作品」と「商品」はつくらない",
    body: "家は建築家にとっての「作品」でもなければ、店頭で買う既成の「商品」でもありません。ひとりひとり、ひと家族ひと家族、まったく異なる来歴と個性、考えと好みを反映させながら丁寧につくり上げていくものだと考えます。じっくりと話をしながら、お客様が気づいていない潜在的な思いや要望もカタチにしながら進めていくものだと思います。",
  },
  {
    title: "職人の技を活かす",
    body: "建築現場で実際に家をつくっていくのは、大工さんや左官屋さん、電気工事など職人さんたちです。樋爪住宅研究所では、地元でも指折りの確かな腕を持つエキスパートと契約し、余裕をもって丁寧につくってもらう家づくりを行っています。そのため工期は、一般的な住宅と比べて若干長め。すべては「いい家」のため。細部の仕上げにもこだわった確かな品質の住まいです。",
  },
];

const philosophyItems = [
  {
    title: "変化を楽しむ",
    body: "家は竣工した時が完成ではありません。人とともに成熟し、過ごした歳月とともに馴染みながら愛着が深まっていく家が理想です。そのためできる限り自然素材を取り入れ、伝統的な工法を用いた家づくりを行っています。時を重ねることで存在感を放つ、経年変化を楽しめる住まいをつくります。",
  },
  {
    title: "「シンプルかつ複雑」な家を",
    body: "空間はゆとりに満ちているが、無駄なものは一切ない。一見するとシンプルだが、細やかな気配りが随所に施された複雑な家。住むほどに、四季を迎えるたびに、新たな発見がある——そんな家を目指します。",
  },
  {
    title: "楽しみながら見つめなおす",
    body: "家はたんに住むための場所ではなく、「私はこう住む・こう暮らす」という人生観の表現でもあります。その意味で家づくりは、自分の人生を確認する絶好のチャンスです。これからの人生に思いを馳せながら、出来上がっていくプロセスを楽しむ。そんな時間を共有できればと思います。",
  },
  {
    title: "不易と流行",
    body: "新たな建築技術を柔軟に取り入れながらも、人にとっての“自然”を忘れない。時代に応じて変化していくことと、変えてはいけないもの、この二つをしっかりと見つめ、自然体でシンプルに暮らせる家づくりを心がけています。",
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
            <img
              src="/images/representative.jpg"
              alt={company.representative}
              className="w-48 h-48 sm:w-64 sm:h-64 rounded-full object-cover mx-auto sm:mx-0 flex-none"
            />
            <div className="space-y-6 text-sm leading-loose text-gray-600">
              <p>
                あなたにとって、「家」とはどんな存在でしょうか。あなたが家に求めているのは、いったい何でしょうか。おそらく、その答えは人の数だけあるはずです。たとえば「家には何より快適さが必要だ」と誰もが口にしたとしても、あなたの求める快さと、他の誰かが思う快さとは、きっと少しずつ違います。むしろ違っていて当然で、私たちの家づくりは、そのひとりひとり、ひと家族ひと家族の小さな「違い」を見つけ出すところから始まります。
              </p>
              <p>
                かつて、ある高名な建築家は「住宅は住むための機械である」と書きました。けれど、と私たちは思うのです。人は、けっして機械ではない、と。あなたがいて、家族がいる。それぞれに異なる住まい方がある。”あなた”がいなければ、そこにあるのは建物であって、”家”ではありません。家は、工業化された箱であってはならない。そう考えています。
              </p>
              <p className="text-right text-gray-800 font-medium">代表取締役　{company.representative}</p>
            </div>
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
