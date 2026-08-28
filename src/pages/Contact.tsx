import { useState, type FormEvent } from "react";
import PageBanner from "../components/PageBanner";
import { company } from "../data/company";

const categories = ["新築", "リフォーム", "住宅設備", "その他"] as const;

export default function Contact() {
  const [category, setCategory] = useState<(typeof categories)[number]>("新築");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [message, setMessage] = useState("");

  // TODO: 現時点ではバックエンドを持たないため、メールクライアントを開く形で送信する。
  // 将来的にCloudflare Pages Functions等でフォーム送信APIを用意する場合はここを差し替える。
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const body = [
      `ご相談内容: ${category}`,
      `お名前: ${name}`,
      `メールアドレス: ${email}`,
      `電話番号: ${tel}`,
      "",
      message,
    ].join("\n");
    const mailto = `mailto:${company.email}?subject=${encodeURIComponent(
      `【HPお問い合わせ】${category}`,
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  }

  return (
    <>
      <PageBanner
        eyebrow="Contact"
        title="お問い合わせ"
        description="新築・リフォーム・住宅設備のご相談やお見積りのご依頼など、お気軽にお問い合わせください。"
      />

      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-2xl mx-auto px-6">
          <form onSubmit={handleSubmit} className="space-y-8 text-sm">
            <div>
              <label className="block text-xs tracking-widest text-gray-500 uppercase mb-3" htmlFor="category">
                ご相談内容
              </label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value as (typeof categories)[number])}
                required
                className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-primary"
              >
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs tracking-widest text-gray-500 uppercase mb-3" htmlFor="name">
                お名前
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-primary"
              />
            </div>

            <div>
              <label className="block text-xs tracking-widest text-gray-500 uppercase mb-3" htmlFor="email">
                メールアドレス
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-primary"
              />
            </div>

            <div>
              <label className="block text-xs tracking-widest text-gray-500 uppercase mb-3" htmlFor="tel">
                電話番号
              </label>
              <input
                id="tel"
                type="tel"
                value={tel}
                onChange={(e) => setTel(e.target.value)}
                className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-primary"
              />
            </div>

            <div>
              <label className="block text-xs tracking-widest text-gray-500 uppercase mb-3" htmlFor="message">
                お問い合わせ内容
              </label>
              <textarea
                id="message"
                required
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-primary"
              />
            </div>

            <button type="submit" className="btn-primary w-full text-center">
              送信する
            </button>
          </form>

          <div className="mt-16 text-center text-sm text-gray-500">
            <p>
              お電話でのお問い合わせは{" "}
              <a href={`tel:${company.tel.replace(/-/g, "")}`} className="text-primary hover:underline">
                {company.tel}
              </a>{" "}
              まで
            </p>
            <p className="mt-1">受付時間：{company.businessHours}（{company.closedDays}）</p>
          </div>
        </div>
      </section>
    </>
  );
}
