type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  /** 長いタイトルが狭い画面で折り返さないようにする */
  noWrap?: boolean;
  /** 背景画像。省略すると共通のバナー画像を使う */
  image?: string;
  /** 背景画像の表示位置(object-position)。横長に切り取る時にどこを見せるか */
  imagePosition?: string;
};

const DEFAULT_IMAGE = "/images/banner/page-banner.jpg";

export default function PageBanner({
  eyebrow,
  title,
  description,
  noWrap,
  image = DEFAULT_IMAGE,
  imagePosition = "50% 20%",
}: Props) {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20 bg-primary-dark text-white text-center px-6">
      <img
        src={image}
        alt=""
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: imagePosition }}
      />
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage:
            "conic-gradient(rgba(255,255,255,0.09) 25%, transparent 0 50%, rgba(255,255,255,0.09) 0 75%, transparent 0)",
          backgroundSize: "16px 16px",
        }}
      />

      <div className="relative [text-shadow:0_1px_10px_rgba(0,0,0,0.35)]">
        <p className="text-xs tracking-widest3 text-white/70 uppercase mb-4">{eyebrow}</p>
        <h1
          className={`font-serif font-light ${
            noWrap ? "whitespace-nowrap text-xl sm:text-2xl md:text-3xl lg:text-4xl" : "text-3xl md:text-4xl"
          }`}
        >
          {title}
        </h1>
        {description ? (
          <p className="mt-4 text-sm text-white/80 max-w-xl mx-auto leading-relaxed whitespace-pre-line">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}
