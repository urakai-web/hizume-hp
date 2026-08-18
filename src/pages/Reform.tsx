const flow = [
  { step: "01", title: "お問い合わせ・現地調査", body: "中古物件のご購入前でも、お気軽にご相談ください。現地を拝見し、可能性をご提案します。" },
  { step: "02", title: "プランのご提案・お見積り", body: "ご要望とご予算に合わせて、間取りや仕様のプランをご提案します。" },
  { step: "03", title: "ご契約・着工", body: "内容にご納得いただいたうえでご契約。工程表に沿って工事を進めます。" },
  { step: "04", title: "完成・お引き渡し", body: "完成後の確認を経て、お引き渡し。アフターメンテナンスもご相談いただけます。" },
];

export function Reform() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-sm tracking-widest text-brand-light">REFORM</p>
      <h1 className="mt-3 text-2xl font-semibold text-brand">リフォーム・リノベーション</h1>
      <p className="mt-6 text-sm leading-relaxed text-brand-light">
        中古物件の購入をお考えの方から、現在お住まいの住宅の改修まで。新築で培った「対話を重ねてつくる」姿勢はそ
        のままに、中古物件のリフォーム・リノベーションにも対応しています。既存の間取りや構造を活かしながら、暮
        らしやすさと心地よさを両立するご提案をいたします。
      </p>

      <section className="mt-16">
        <h2 className="text-lg font-semibold text-brand">ご依頼の流れ</h2>
        <ol className="mt-6 space-y-6">
          {flow.map((item) => (
            <li key={item.step} className="flex gap-4">
              <span className="text-sm font-semibold text-brand-light">{item.step}</span>
              <div>
                <h3 className="font-medium text-brand">{item.title}</h3>
                <p className="mt-1 text-sm text-brand-light">{item.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <div className="mt-16">
        <a href="/reform/case" className="text-sm text-brand hover:underline">
          リフォームの施工事例を見る →
        </a>
      </div>
    </div>
  );
}
