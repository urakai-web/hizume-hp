import { Link } from "react-router-dom";
import { company } from "../../data/company";
import { useFadeIn } from "../../hooks/useFadeIn";

export default function ContactCta() {
  const ref = useFadeIn<HTMLDivElement>();

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <img src="/images/contact-bg.png" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="fade-in-up">
          <p className="text-xs tracking-widest text-white/60 uppercase mb-4">Contact Us</p>
          <h2 className="text-3xl md:text-4xl font-serif font-light text-white mb-6">
            まずは気軽に
            <br />
            ご相談ください
          </h2>
          <p className="text-white/80 text-sm leading-relaxed max-w-xl mx-auto">
            新築のご相談から、中古物件のリフォーム、エアコン取付などの住宅設備工事まで。どんな小さなことでもお気軽にお問い合わせください。
          </p>
        </div>

        <div className="fade-in-up mt-10 grid md:grid-cols-2 gap-6">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 text-white">
            <p className="text-xs tracking-widest text-white/60 uppercase mb-3">Phone</p>
            <a
              href={`tel:${company.tel.replace(/-/g, "")}`}
              className="text-3xl font-light tracking-wider hover:text-accent transition-colors"
            >
              {company.tel}
            </a>
            <p className="text-xs text-white/60 mt-3">
              受付時間：{company.businessHours}（{company.closedDays}）
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 text-white flex flex-col items-center justify-center">
            <p className="text-xs tracking-widest text-white/60 uppercase mb-3">Web Form</p>
            <p className="text-sm text-white/80 mb-6">24時間受付中。お気軽にどうぞ。</p>
            <Link
              to="/contact"
              className="inline-block bg-white text-primary-dark text-xs tracking-widest px-10 py-3 hover:bg-accent hover:text-white transition-colors duration-300"
            >
              お問い合わせフォームへ
            </Link>
          </div>
        </div>

        <div className="fade-in-up mt-8">
          <Link
            to="/events"
            className="inline-block border border-white/40 text-white text-xs tracking-widest px-10 py-3 hover:border-white hover:bg-white/10 transition-all duration-300"
          >
            無料相談会・見学会の予約はこちら
          </Link>
        </div>
      </div>
    </section>
  );
}
