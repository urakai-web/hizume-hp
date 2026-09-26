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
    <footer className="bg-primary-dark text-gray-300">
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
                href="https://www.instagram.com/_hizume_/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 border border-gray-700 flex items-center justify-center hover:border-white hover:text-white transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                  <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.256 1.216.6 1.772 1.153a4.9 4.9 0 0 1 1.153 1.772c.248.637.415 1.363.465 2.428.048 1.066.06 1.405.06 4.122s-.01 3.056-.06 4.122c-.05 1.065-.217 1.79-.465 2.428a4.9 4.9 0 0 1-1.153 1.772 4.9 4.9 0 0 1-1.772 1.153c-.637.248-1.363.415-2.428.465-1.066.048-1.405.06-4.122.06s-3.056-.01-4.122-.06c-1.065-.05-1.79-.217-2.428-.465a4.9 4.9 0 0 1-1.772-1.153 4.9 4.9 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12s.01-3.056.06-4.122c.05-1.065.217-1.79.465-2.428A4.9 4.9 0 0 1 3.678 3.678a4.9 4.9 0 0 1 1.772-1.153c.637-.248 1.363-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.25a3.25 3.25 0 1 1 0-6.5 3.25 3.25 0 0 1 0 6.5zm5.25-8.7a1.15 1.15 0 1 0 0-2.3 1.15 1.15 0 0 0 0 2.3z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/hizume.archi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 border border-gray-700 flex items-center justify-center hover:border-white hover:text-white transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                  <path d="M22 12.06C22 6.505 17.523 2 12 2S2 6.505 2 12.06c0 5.02 3.657 9.184 8.438 9.94v-7.03H7.898v-2.91h2.54V9.845c0-2.522 1.492-3.915 3.777-3.915 1.094 0 2.238.196 2.238.196v2.475h-1.26c-1.243 0-1.63.775-1.63 1.57v1.89h2.773l-.443 2.91h-2.33V22c4.78-.756 8.437-4.92 8.437-9.94z" />
                </svg>
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
