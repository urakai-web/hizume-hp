import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { splitStructure, type CaseDisplay } from "../../hooks/useCases";

const GAP = 24;

type Props = {
  title: string;
  basePath: string;
  cases: CaseDisplay[];
  emptyText: string;
};

export default function WorksCarousel({ title, basePath, cases, emptyText }: Props) {
  const featured = cases.slice(0, 6);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [wrapperWidth, setWrapperWidth] = useState(0);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      const ipv = w < 640 ? 1 : w < 1024 ? 2 : w < 1280 ? 3 : 4;
      setItemsPerView(ipv);
      if (wrapperRef.current) setWrapperWidth(wrapperRef.current.offsetWidth);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
    // featured.length を依存に含めるのは、データ取得前(0件)は wrapperRef が
    // 別のDOM要素(空状態のp)を指しているため、件数が確定してから再計測が必要なため
  }, [featured.length]);

  const maxIndex = Math.max(0, featured.length - itemsPerView);
  const itemWidth =
    wrapperWidth > 0 ? (wrapperWidth - GAP * (itemsPerView - 1)) / itemsPerView : 0;
  const translateX = -(activeIndex * (itemWidth + GAP));

  const goTo = (index: number) => setActiveIndex(Math.max(0, Math.min(maxIndex, index)));

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
      goTo(activeIndex + (dx < 0 ? 1 : -1));
    }
  };

  return (
    <div className="fade-in-up">
      <div className="flex items-end justify-between mb-6">
        <h3 className="text-lg font-serif font-light text-gray-800">{title}</h3>
        <Link
          to={basePath}
          className="text-xs tracking-widest text-primary border-b border-primary pb-0.5 hover:text-primary-dark hover:border-primary-dark transition-colors"
        >
          全て見る →
        </Link>
      </div>

      {featured.length === 0 ? (
        <p className="text-sm text-gray-500">{emptyText}</p>
      ) : (
        <div ref={wrapperRef} className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ gap: `${GAP}px`, transform: `translateX(${translateX}px)` }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {featured.map((work) => (
              <Link
                key={work.id}
                to={`${basePath}/${work.id}`}
                className="flex-none group"
                style={{ width: itemWidth > 0 ? `${itemWidth}px` : "100%" }}
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="mt-4">
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {splitStructure(work.structure).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] tracking-wide border border-gray-300 text-gray-500 px-2 py-0.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h4 className="text-sm font-medium text-gray-800 group-hover:text-primary transition-colors">
                    {work.title}
                  </h4>
                  <p className="text-xs text-gray-400 mt-1">{work.priceRange}</p>
                </div>
              </Link>
            ))}
          </div>

          <button
            onClick={() => goTo(activeIndex - 1)}
            disabled={activeIndex === 0}
            aria-label="前へ"
            className="absolute left-0 top-[35%] -translate-y-1/2 bg-white shadow-md w-10 h-10 flex items-center justify-center text-lg hover:bg-primary hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed z-10"
          >
            ‹
          </button>
          <button
            onClick={() => goTo(activeIndex + 1)}
            disabled={activeIndex === maxIndex}
            aria-label="次へ"
            className="absolute right-0 top-[35%] -translate-y-1/2 bg-white shadow-md w-10 h-10 flex items-center justify-center text-lg hover:bg-primary hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed z-10"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}
