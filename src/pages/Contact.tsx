import PageBanner from "../components/PageBanner";
import { company } from "../data/company";
import { useFadeIn } from "../hooks/useFadeIn";

export default function Contact() {
  const ref = useFadeIn<HTMLDivElement>();

  return (
    <>
      <PageBanner
        eyebrow="Contact"
        title="お問い合わせ"
        description="新築・リフォーム・住宅設備のご相談やお見積りのご依頼など、お気軽にお問い合わせください。"
      />

      <section ref={ref} className="py-24 md:py-32 bg-white">
        <div className="fade-in-up max-w-2xl mx-auto px-6 text-center">
          <p className="text-xs tracking-widest text-primary uppercase mb-3">LINE</p>
          <h2 className="text-2xl md:text-3xl font-serif font-light text-gray-800 mb-6">
            LINEでご相談ください
          </h2>
          <p className="text-sm leading-loose text-gray-600">
            新築・リフォーム・住宅設備のご相談は、LINEから承っています。
            <br />
            「こんなことでも相談していいのかな？」という内容でも、お気軽にメッセージをお送りください。
          </p>
          <a
            href={company.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-10 inline-block text-xs"
          >
            LINEで相談する
          </a>

          <div className="mt-20 border-t border-gray-100 pt-12 text-sm text-gray-500">
            <p>
              お電話でのお問い合わせは{" "}
              <a href={`tel:${company.tel.replace(/-/g, "")}`} className="text-primary hover:underline">
                {company.tel}
              </a>{" "}
              まで
            </p>
            <p className="mt-1">受付時間：{company.businessHours}（{company.businessHoursNote}）</p>
            <p className="mt-1">{company.meetingNote}</p>
          </div>
        </div>
      </section>
    </>
  );
}
