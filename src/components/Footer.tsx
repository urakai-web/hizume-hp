import { company } from "../lib/company";
import { navItems } from "./nav";

export function Footer() {
  return (
    <footer className="mt-24 bg-brand text-sand/70">
      <div className="mx-auto max-w-6xl px-6 py-16 text-sm">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div>
            <p className="text-base font-semibold text-sand">{company.name}</p>
            <p className="mt-3">{company.address}</p>
            <p className="mt-1">
              TEL: <a href={`tel:${company.tel.replace(/-/g, "")}`}>{company.tel}</a>
            </p>
          </div>
          <nav aria-label="フッターナビゲーション">
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-xs tracking-wide sm:grid-cols-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="transition hover:text-sand">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="mt-12 text-xs text-sand/40">
          &copy; {new Date().getFullYear()} {company.name}
        </p>
      </div>
    </footer>
  );
}
