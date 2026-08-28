import { useEffect, useRef } from "react";

/**
 * スクロールで要素が画面に入ったら .fade-in-up 要素に visible クラスを付与する。
 * threshold は「要素の高さのうち何%が画面内に入ったら発火するか」の割合のため、
 * 一覧ページのように画面の何倍も高さがある要素だと発火しなくなる。
 * そのため既定値は「1pxでも重なったら発火」に近い極小値にしている。
 */
export function useFadeIn<T extends HTMLElement>(threshold = 0.01) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold, rootMargin: "0px 0px -10% 0px" },
    );
    ref.current?.querySelectorAll(".fade-in-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
