import { useState, type FormEvent } from "react";

const categories = ["新築", "リフォーム", "住宅設備", "その他"] as const;

type Status = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const formData = new FormData(event.currentTarget);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="mx-auto max-w-2xl px-6 py-16">
        <h1 className="text-2xl font-semibold text-brand">お問い合わせありがとうございました</h1>
        <p className="mt-4 text-sm text-brand-light">
          内容を確認のうえ、担当者よりご連絡いたします。今しばらくお待ちください。
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <p className="text-sm tracking-widest text-brand-light">CONTACT</p>
      <h1 className="mt-3 text-2xl font-semibold text-brand">お問い合わせ</h1>
      <p className="mt-4 text-sm text-brand-light">
        新築・リフォーム・住宅設備のご相談やお見積りのご依頼など、お気軽にお問い合わせください。
      </p>

      <form onSubmit={handleSubmit} className="mt-10 space-y-6 text-sm">
        <div>
          <label className="block font-medium text-brand" htmlFor="category">
            ご相談内容
          </label>
          <select
            id="category"
            name="category"
            required
            className="mt-2 w-full rounded-md border border-brand/20 px-3 py-2"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block font-medium text-brand" htmlFor="name">
            お名前
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-2 w-full rounded-md border border-brand/20 px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium text-brand" htmlFor="email">
            メールアドレス
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2 w-full rounded-md border border-brand/20 px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium text-brand" htmlFor="tel">
            電話番号
          </label>
          <input
            id="tel"
            name="tel"
            type="tel"
            className="mt-2 w-full rounded-md border border-brand/20 px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium text-brand" htmlFor="message">
            お問い合わせ内容
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            className="mt-2 w-full rounded-md border border-brand/20 px-3 py-2"
          />
        </div>

        {status === "error" ? (
          <p className="text-red-600">送信に失敗しました。時間をおいて再度お試しください。</p>
        ) : null}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="rounded-md bg-brand px-8 py-3 text-white hover:bg-brand-light disabled:opacity-50"
        >
          {status === "submitting" ? "送信中…" : "送信する"}
        </button>
      </form>
    </div>
  );
}
