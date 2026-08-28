import { Link } from "react-router-dom";
import { useFadeIn } from "../../hooks/useFadeIn";

const businesses = [
  {
    href: "/case",
    title: "新築設計",
    body: "土地の声をきき、対話を重ねてつくる、世界に一つだけの注文住宅。",
  },
  {
    href: "/reform",
    title: "リフォーム",
    body: "中古物件のリフォーム・リノベーションも、新築と同じ丁寧さで。",
  },
  {
    href: "/facilities",
    title: "住宅設備・メンテナンス",
    body: "エアコン取付から水回り・電気工事まで、暮らしの困りごとに幅広く対応。",
  },
];

export default function BusinessSection() {
  const ref = useFadeIn<HTMLDivElement>();

  return (
    <section ref={ref} className="py-20 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-px bg-gray-200 fade-in-up">
          {businesses.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="block bg-white p-10 hover:bg-warm-50 transition-colors group"
            >
              <h2 className="text-lg font-serif font-light text-gray-800 group-hover:text-primary transition-colors">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">{item.body}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
