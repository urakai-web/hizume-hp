import { navItems } from "./nav";

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-brand/10 bg-sand/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="/" className="text-base font-semibold tracking-wide text-brand">
          樋爪住宅研究所
        </a>
        <nav aria-label="グローバルナビゲーション">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-xs tracking-wide text-brand-light">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition hover:text-brand">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
