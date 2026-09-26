import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const navItems = [
  { label: "私たちについて", href: "/concept" },
  { label: "新築の施工事例", href: "/case" },
  { label: "リフォーム", href: "/reform" },
  { label: "住宅設備", href: "/facilities" },
  { label: "お知らせ", href: "/news" },
  { label: "イベント", href: "/events" },
  { label: "会社概要", href: "/company" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isTop = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const solid = isScrolled || !isTop;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/images/logo.svg"
            alt=""
            className={`h-8 w-auto transition-all duration-300 ${solid ? "" : "brightness-0 invert"}`}
          />
          <span
            className={`text-lg font-serif font-light tracking-widest transition-colors duration-300 ${
              solid ? "text-black" : "text-white"
            }`}
          >
            樋爪住宅研究所
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={`text-sm tracking-wide hover:text-primary transition-colors duration-300 ${
                solid ? "text-gray-700" : "text-white"
              }`}
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="text-sm tracking-widest bg-primary text-white px-6 py-2.5 hover:bg-primary-dark transition-colors duration-300"
          >
            お問い合わせ
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="メニューを開く"
        >
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              solid ? "bg-gray-800" : "bg-white"
            } ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              solid ? "bg-gray-800" : "bg-white"
            } ${isMenuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              solid ? "bg-gray-800" : "bg-white"
            } ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-white ${
          isMenuOpen ? "max-h-96 shadow-lg" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-4 gap-4">
          {[...navItems, { label: "お問い合わせ", href: "/contact" }].map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="text-sm text-gray-700 py-2 border-b border-gray-100 tracking-wide hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
