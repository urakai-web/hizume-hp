import { Link } from "react-router-dom";
import { splitStructure, type CaseDisplay } from "../../hooks/useCases";
import { useFadeIn } from "../../hooks/useFadeIn";

type Props = {
  backPath: string;
  backLabel: string;
  notFoundText: string;
  item?: CaseDisplay;
  loading: boolean;
};

export default function CaseDetailView({ backPath, backLabel, notFoundText, item, loading }: Props) {
  const ref = useFadeIn<HTMLDivElement>();

  return (
    <section ref={ref} className="pt-32 pb-24 md:pt-40 px-6">
      <div className="max-w-4xl mx-auto">
        <Link to={backPath} className="text-xs tracking-widest text-primary hover:text-primary-dark">
          ← {backLabel}
        </Link>

        {!item ? (
          loading ? null : (
            <p className="fade-in-up mt-10 text-center text-sm text-gray-500">{notFoundText}</p>
          )
        ) : (
          <div className="fade-in-up mt-6">
            <div className="flex flex-wrap gap-1.5 mb-4">
              {splitStructure(item.structure).map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] tracking-wide border border-gray-300 text-gray-500 px-2 py-0.5"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-2xl md:text-3xl font-serif font-light text-gray-800">{item.title}</h1>
            <p className="mt-2 text-sm text-gray-500">
              {[item.location, item.priceRange && `参考価格　${item.priceRange}`]
                .filter(Boolean)
                .join(" ・ ")}
            </p>

            <div className="mt-10 aspect-[16/10] overflow-hidden">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
            </div>

            {item.body ? (
              <div
                className="prose prose-sm mt-10 max-w-none text-sm leading-relaxed text-gray-600"
                dangerouslySetInnerHTML={{ __html: item.body }}
              />
            ) : null}

            {item.gallery.length > 0 ? (
              <div className="mt-10 flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-px-6 -mx-6 px-6 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 sm:overflow-visible">
                {item.gallery.map((photo, index) => (
                  <figure key={index} className="flex-none w-full snap-center sm:w-auto">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={photo.image}
                        alt={photo.caption ?? item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {photo.caption ? (
                      <figcaption className="mt-2 text-xs text-gray-400">{photo.caption}</figcaption>
                    ) : null}
                  </figure>
                ))}
              </div>
            ) : null}
          </div>
        )}
      </div>
    </section>
  );
}
