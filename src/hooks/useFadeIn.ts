import { useEffect, useRef } from "react";

/**
 * スクロールで要素が画面に入ったら .fade-in-up 要素に visible クラスを付与する。
 * threshold は「要素の高さのうち何%が画面内に入ったら発火するか」の割合のため、
 * 一覧ページのように画面の何倍も高さがある要素だと発火しなくなる。
 * そのため既定値は「1pxでも重なったら発火」に近い極小値にしている。
 *
 * microCMSのデータ取得のように .fade-in-up 要素が初回レンダリング後に
 * 差し替わる/追加されるケースがあるため、MutationObserverで新規要素も検知して監視する。
 */
export function useFadeIn<T extends HTMLElement>(threshold = 0.01) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold, rootMargin: "0px 0px -10% 0px" },
    );

    const observeAll = (root: ParentNode) => {
      root.querySelectorAll(".fade-in-up").forEach((el) => intersectionObserver.observe(el));
    };
    observeAll(container);

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return;
          if (node.matches(".fade-in-up")) intersectionObserver.observe(node);
          observeAll(node);
        });
      });
    });
    mutationObserver.observe(container, { childList: true, subtree: true });

    return () => {
      intersectionObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, [threshold]);

  return ref;
}
