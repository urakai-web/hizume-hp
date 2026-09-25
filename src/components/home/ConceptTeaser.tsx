import { Link } from "react-router-dom";
import { useFadeIn } from "../../hooks/useFadeIn";

export default function ConceptTeaser() {
  const ref = useFadeIn<HTMLDivElement>();

  return (
    <section ref={ref} className="py-24 md:py-32 bg-warm-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="fade-in-up">
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/concept.jpg"
                  alt="対話を重ねてつくる家づくり"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent -z-10" />
            </div>
          </div>

          <div className="fade-in-up" style={{ containerType: "inline-size" }}>
            <p className="text-xs tracking-widest text-primary uppercase mb-3">Our Concept</p>
            <h2
              className="font-serif font-light leading-relaxed mb-8 text-gray-800"
              style={{ fontSize: "clamp(1.05rem, 6cqw, 2.25rem)" }}
            >
              <span className="block whitespace-nowrap">「作品」でも「商品」でもない、</span>
              <span className="block whitespace-nowrap">あなたの暮らしを。</span>
            </h2>
            <div className="space-y-5 text-gray-600 leading-relaxed text-sm">
              <p>
                弊社は石川県金沢市を拠点に、対話を重ねながら家をつくる建築設計事務所です。一人ひとり、その家族の小さな「違い」を見つけ出すことから、家づくりは始まります。
              </p>
              <p className="whitespace-pre-line">
                一軒の家が完成するまでに、打ち合わせの回数はおよそ40回。{"\n"}
                土地の声を聴き、そこに暮らす方の想いを丁寧にかたちにしていきます。
              </p>
            </div>
            <Link to="/concept" className="btn-outline mt-10 inline-block text-xs">
              私たちについて詳しく →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
