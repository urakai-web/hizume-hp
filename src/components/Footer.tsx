import { Link } from "react-router-dom";
import { company } from "../data/company";

const footerNav = [
  {
    heading: "会社情報",
    links: [
      { label: "私たちについて", href: "/concept" },
      { label: "会社概要", href: "/company" },
      { label: "お問い合わせ", href: "/contact" },
    ],
  },
  {
    heading: "事業案内",
    links: [
      { label: "新築の施工事例", href: "/case" },
      { label: "リフォーム", href: "/reform" },
      { label: "住宅設備・メンテナンス", href: "/facilities" },
    ],
  },
  {
    heading: "実績・お知らせ",
    links: [
      { label: "施工事例", href: "/case" },
      { label: "お知らせ・コラム", href: "/news" },
      { label: "イベント・見学会", href: "/events" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company info */}
          <div>
            <div className="mb-6">
              <p className="text-white font-serif font-light text-xl tracking-widest">
                {company.nameShort}
              </p>
              <p className="text-gray-500 text-[10px] tracking-widest mt-1">
                HIZUME ARCHITECT OFFICE
              </p>
            </div>
            <address className="not-italic text-sm leading-8 space-y-1">
              <p>{company.address}</p>
              <p>
                TEL:{" "}
                <a
                  href={`tel:${company.tel.replace(/-/g, "")}`}
                  className="hover:text-white transition-colors"
                >
                  {company.tel}
                </a>
              </p>
              <p>
                FAX:{" "}
                <a
                  href={`tel:${company.fax.replace(/-/g, "")}`}
                  className="hover:text-white transition-colors"
                >
                  {company.fax}
                </a>
              </p>
            </address>
            <div className="mt-6 text-xs space-y-1">
              <p>営業時間：{company.businessHours}</p>
              <p>定休日：{company.closedDays}</p>
            </div>

            {/* SNS */}
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                aria-label="Instagram"
                className="w-8 h-8 border border-gray-700 flex items-center justify-center hover:border-white hover:text-white transition-colors text-sm"
              >
                IG
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-8 h-8 border border-gray-700 flex items-center justify-center hover:border-white hover:text-white transition-colors text-sm"
              >
                FB
              </a>
            </div>
          </div>

          {/* Nav columns */}
          {footerNav.map((col) => (
            <div key={col.heading}>
              <h3 className="text-white text-xs tracking-widest uppercase mb-6 pb-3 border-b border-gray-700">
                {col.heading}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} {company.name} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
