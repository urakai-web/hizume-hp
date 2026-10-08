import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { CaseDisplay } from "../../hooks/useCases";

type Photo = CaseDisplay["gallery"][number];
type Entry = { photo: Photo; index: number };
type Row = { kind: "full" | "pair" | "portrait"; entries: Entry[] };

const isLandscape = (p: Photo) => p.width >= p.height;

// 1枚目が横長なら大きく、以降は2枚ずつ。余った最後の1枚は向きに応じて配置する。
function buildRows(photos: Photo[]): Row[] {
  const entries = photos.map((photo, index) => ({ photo, index }));
  const rows: Row[] = [];
  let i = 0;

  if (entries.length > 0 && isLandscape(entries[0].photo)) {
    rows.push({ kind: "full", entries: [entries[0]] });
    i = 1;
  }
  while (i < entries.length) {
    if (i + 1 < entries.length) {
      rows.push({ kind: "pair", entries: [entries[i], entries[i + 1]] });
      i += 2;
    } else {
      rows.push({ kind: isLandscape(entries[i].photo) ? "full" : "portrait", entries: [entries[i]] });
      i += 1;
    }
  }
  return rows;
}

function Caption({ text }: { text?: string }) {
  return text ? <figcaption className="mt-2 text-xs leading-relaxed text-gray-500">{text}</figcaption> : null;
}

type Props = { photos: Photo[]; title: string };

export default function CaseGallery({ photos: rawPhotos, title }: Props) {
  // microCMSは写真のEXIF回転を反映する前のサイズを返すことがあるため、
  // 読み込み後の実寸で縦横比を上書きする
  const [dims, setDims] = useState<Record<number, { w: number; h: number }>>({});
  const photos = rawPhotos.map((p, i) => (dims[i] ? { ...p, width: dims[i].w, height: dims[i].h } : p));
  const measure = (i: number, img: HTMLImageElement | null) => {
    if (!img || !img.naturalWidth || !img.naturalHeight) return;
    setDims((prev) => {
      const cur = prev[i];
      if (cur && cur.w === img.naturalWidth && cur.h === img.naturalHeight) return prev;
      return { ...prev, [i]: { w: img.naturalWidth, h: img.naturalHeight } };
    });
  };

  const rows = buildRows(photos);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [current, setCurrent] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);

  const open = (index: number) => setOpenIndex(index);
  const close = useCallback(() => setOpenIndex(null), []);
  const step = useCallback(
    (delta: number) =>
      setOpenIndex((i) => (i === null ? i : (i + delta + photos.length) % photos.length)),
    [photos.length],
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [openIndex, close, step]);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el || el.children.length < 2) return;
    const first = el.children[0] as HTMLElement;
    const second = el.children[1] as HTMLElement;
    const stride = second.offsetLeft - first.offsetLeft;
    if (stride > 0) setCurrent(Math.min(photos.length - 1, Math.round(el.scrollLeft / stride)));
  };

  const renderThumb = ({ photo, index }: Entry, className = "") => (
    <figure key={index} className={className}>
      <button
        type="button"
        onClick={() => open(index)}
        className="block w-full cursor-zoom-in overflow-hidden"
        aria-label={`${photo.caption ?? title} を拡大して見る`}
      >
        <img
          src={photo.image}
          alt={photo.caption ?? title}
          width={photo.width}
          height={photo.height}
          loading="lazy"
          ref={(el) => {
            if (el?.complete) measure(index, el);
          }}
          onLoad={(e) => measure(index, e.currentTarget)}
          className="block w-full h-auto transition-transform duration-500 hover:scale-[1.02]"
        />
      </button>
      <Caption text={photo.caption} />
    </figure>
  );

  const active = openIndex !== null ? photos[openIndex] : null;

  return (
    <>
      {/* PC・タブレット: 縦横比そのまま。2枚並びは高さをそろえる */}
      <div className="hidden sm:block mt-10 space-y-6">
        {rows.map((row, rowIndex) => {
          if (row.kind === "full") return renderThumb(row.entries[0]);
          if (row.kind === "portrait") return renderThumb(row.entries[0], "mx-auto w-1/2");
          return (
            <div key={rowIndex} className="flex items-start gap-6">
              {row.entries.map((entry) => (
                <div
                  key={entry.index}
                  className="min-w-0"
                  style={{ flex: `${entry.photo.width / entry.photo.height} 1 0%` }}
                >
                  {renderThumb(entry)}
                </div>
              ))}
            </div>
          );
        })}
      </div>

      {/* スマホ: 1枚ずつスワイプ。縦長は高さに上限を付けて中央に表示 */}
      <div className="sm:hidden mt-10">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex items-center gap-3 overflow-x-auto snap-x snap-mandatory -mx-6 px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {photos.map((photo, index) => (
            <figure key={index} className="flex-none w-full snap-center">
              <button
                type="button"
                onClick={() => open(index)}
                className="block w-full"
                aria-label={`${photo.caption ?? title} を拡大して見る`}
              >
                <img
                  src={photo.image}
                  alt={photo.caption ?? title}
                  width={photo.width}
                  height={photo.height}
                  loading="lazy"
                  ref={(el) => {
                    if (el?.complete) measure(index, el);
                  }}
                  onLoad={(e) => measure(index, e.currentTarget)}
                  style={{ aspectRatio: `${photo.width} / ${photo.height}` }}
                  className="mx-auto block h-auto w-auto max-w-full max-h-[70vh]"
                />
              </button>
              <Caption text={photo.caption} />
            </figure>
          ))}
        </div>
        {photos.length > 1 ? (
          <p className="mt-4 text-center text-xs tracking-widest text-gray-400">
            {current + 1} / {photos.length}
          </p>
        ) : null}
      </div>

      {/* 拡大表示。transformを持つ親の中だとfixedが効かないのでbody直下に出す */}
      {active
        ? createPortal(
            <div
              className="fixed inset-0 z-[100] flex flex-col bg-black/90"
              role="dialog"
              aria-modal="true"
              aria-label="写真の拡大表示"
              onClick={close}
            >
              <button
                type="button"
                onClick={close}
                aria-label="閉じる"
                className="absolute right-3 top-3 z-10 p-3 text-3xl leading-none text-white/90 hover:text-white"
              >
                ×
              </button>

              <div
                className="flex flex-1 items-center justify-center p-4 pt-14"
                onTouchStart={(e) => {
                  touchStartX.current = e.touches[0].clientX;
                }}
                onTouchEnd={(e) => {
                  const dx = e.changedTouches[0].clientX - touchStartX.current;
                  if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
                }}
              >
                <img
                  src={active.image}
                  alt={active.caption ?? title}
                  onClick={(e) => e.stopPropagation()}
                  className="max-h-[78vh] max-w-full object-contain"
                />
              </div>

              <div className="px-6 pb-6 text-center text-sm text-white/80" onClick={(e) => e.stopPropagation()}>
                {active.caption ? <p className="leading-relaxed">{active.caption}</p> : null}
                {photos.length > 1 ? (
                  <p className="mt-2 text-xs tracking-widest text-white/50">
                    {(openIndex ?? 0) + 1} / {photos.length}
                  </p>
                ) : null}
              </div>

              {photos.length > 1 ? (
                <>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      step(-1);
                    }}
                    aria-label="前の写真"
                    className="absolute left-2 top-1/2 h-11 w-11 -translate-y-1/2 bg-white/10 text-2xl text-white hover:bg-white/20 sm:left-6"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      step(1);
                    }}
                    aria-label="次の写真"
                    className="absolute right-2 top-1/2 h-11 w-11 -translate-y-1/2 bg-white/10 text-2xl text-white hover:bg-white/20 sm:right-6"
                  >
                    ›
                  </button>
                </>
              ) : null}
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
