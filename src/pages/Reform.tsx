import PageBanner from "../components/PageBanner";
import { useFadeIn } from "../hooks/useFadeIn";

const flow = [
  { step: "01", title: "お問い合わせ・現地調査", body: "中古物件のご購入前でも、お気軽にご相談ください。現地を拝見し、可能性をご提案します。" },
  { step: "02", title: "プランのご提案・お見積り", body: "ご要望とご予算に合わせて、間取りや仕様のプランをご提案します。" },
  { step: "03", title: "ご契約・着工", body: "内容にご納得いただいたうえでご契約。工程表に沿って工事を進めます。" },
  { step: "04", title: "完成・お引き渡し", body: "完成後の確認を経て、お引き渡し。アフターメンテナンスもご相談いただけます。" },
];

export default function Reform() {
  const ref = useFadeIn<HTMLDivElement>();

  return (
    <>
      <PageBanner
        eyebrow="Reform"
        title="リフォーム・リノベーション"
        description="中古物件の購入をお考えの方から、現在お住まいの住宅の改修まで承ります。"
        noWrap
      />

      <section ref={ref} className="py-24 md:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <p className="fade-in-up text-sm leading-relaxed text-gray-600">
            新築で培った「対話を重ねてつくる」姿勢はそのままに、中古物件のリフォーム・リノベーションにも対応しています。既存の間取りや構造を活かしながら、暮らしやすさと心地よさを両立するご提案をいたします。
          </p>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-warm-50">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="section-title mb-16">ご依頼の流れ</h2>
          <ol className="space-y-10">
            {flow.map((item) => (
              <li key={item.step} className="flex gap-6">
                <span className="text-2xl font-serif font-light text-primary">{item.step}</span>
                <div>
                  <h3 className="font-medium text-gray-800">{item.title}</h3>
                  <p className="mt-1 text-sm text-gray-500">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
