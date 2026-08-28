import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useCases } from "../../hooks/useCases";
import { useFadeIn } from "../../hooks/useFadeIn";

const GAP = 24;

export default function WorksTeaser() {
  const sectionRef = useFadeIn<HTMLDivElement>();
  const { cases } = useCases();
  const featured = cases.slice(0, 6);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [wrapperWidth, setWrapperWidth] = useState(0);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  useEffect(() => {
    const update = () => {
      const ipv = window.innerWidth < 768 ? 1 : 3;
      setItemsPerView(ipv);
      if (wrapperRef.current) setWrapperWidth(wrapperRef.current.offsetWidth);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

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
    <section ref={sectionRef} className="py-24 md:py-32 bg-warm-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 fade-in-up">
          <div>
            <p className="text-xs tracking-widest text-primary uppercase mb-3">Works</p>
            <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-800">施工事例</h2>
          </div>
          <Link
            to="/case"
            className="text-xs tracking-widest text-primary border-b border-primary pb-0.5 mt-4 md:mt-0 hover:text-primary-dark hover:border-primary-dark transition-colors self-start md:self-auto"
          >
            全ての施工事例を見る →
          </Link>
        </div>

        <div className="fade-in-up">
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
                  to={`/case/${work.id}`}
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
                      {work.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] tracking-wide border border-gray-300 text-gray-500 px-2 py-0.5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-sm font-medium text-gray-800 group-hover:text-primary transition-colors">
                      {work.title}
                    </h3>
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
        </div>
      </div>
    </section>
  );
}
