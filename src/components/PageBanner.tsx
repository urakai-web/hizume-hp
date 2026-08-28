type Props = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function PageBanner({ eyebrow, title, description }: Props) {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-primary-dark text-white text-center px-6">
      <p className="text-xs tracking-widest3 text-white/70 uppercase mb-4">{eyebrow}</p>
      <h1 className="text-3xl md:text-4xl font-serif font-light">{title}</h1>
      {description ? (
        <p className="mt-4 text-sm text-white/80 max-w-xl mx-auto leading-relaxed">{description}</p>
      ) : null}
    </section>
  );
}
