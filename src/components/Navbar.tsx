"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

function ThailandFlag({ className = "h-3.5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 900 600"
      className={`${className} overflow-hidden rounded-[2px] shadow-sm flex-shrink-0`}
      aria-hidden="true"
    >
      <rect width="900" height="600" fill="#A51931" />
      <rect y="100" width="900" height="400" fill="#FFFFFF" />
      <rect y="200" width="900" height="200" fill="#2D2A4A" />
    </svg>
  );
}

function UKFlag({ className = "h-3.5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 30"
      className={`${className} overflow-hidden rounded-[2px] shadow-sm flex-shrink-0`}
      aria-hidden="true"
    >
      <rect width="60" height="30" fill="#012169" />
      <path d="M0 0 L60 30 M60 0 L0 30" stroke="#FFFFFF" strokeWidth="6" />
      <path d="M0 0 L60 30 M60 0 L0 30" stroke="#C8102E" strokeWidth="3.5" />
      <path d="M30 0 V30 M0 15 H60" stroke="#FFFFFF" strokeWidth="10" />
      <path d="M30 0 V30 M0 15 H60" stroke="#C8102E" strokeWidth="6" />
    </svg>
  );
}

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#services", label: t("บริการของเรา", "Services") },
    { href: "#coverage", label: t("เส้นทางทั่วไทย", "Coverage") },
    { href: "#fleet", label: t("ยานพาหนะ", "Fleet") },
    { href: "#tours", label: t("แพ็กเกจทัวร์", "Tour Packages") },
    { href: "#contact", label: t("ติดต่อเรา", "Contact") },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-black/85 backdrop-blur-md border-b border-gold/25 py-3 shadow-lg shadow-black/50"
          : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-4 sm:py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-gold/50 bg-gradient-to-br from-gold/30 to-gold/5 text-gold font-display text-lg font-bold shadow-md shadow-gold/15 group-hover:scale-105 transition-transform">
            S
          </span>
          <div>
            <span className="font-display text-xl sm:text-2xl font-bold tracking-wider text-gold-gradient block leading-none">
              SURI VIP
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-foreground/60 block mt-0.5">
              Private Transfer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-widest text-foreground/75 hover:text-gold transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action Cluster: Language Switcher + Call Button */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Language Switcher Pill (Flags + Code) */}
          <div
            role="group"
            aria-label="Language selection"
            className="flex items-center rounded-full border border-gold/40 bg-black/70 p-1 backdrop-blur shadow-inner shadow-black gap-1"
          >
            <button
              type="button"
              onClick={() => setLang("th")}
              title="ภาษาไทย (Thai)"
              aria-label="เปลี่ยนเป็นภาษาไทย"
              className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold transition-all duration-200 ${
                lang === "th"
                  ? "bg-gold text-black shadow-md shadow-gold/25 font-extrabold"
                  : "text-foreground/70 hover:text-foreground hover:bg-white/10 opacity-75 hover:opacity-100"
              }`}
            >
              <ThailandFlag className="h-3.5 w-5" />
              <span>TH</span>
            </button>
            <button
              type="button"
              onClick={() => setLang("en")}
              title="English (UK/International)"
              aria-label="Switch to English"
              className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold transition-all duration-200 ${
                lang === "en"
                  ? "bg-gold text-black shadow-md shadow-gold/25 font-extrabold"
                  : "text-foreground/70 hover:text-foreground hover:bg-white/10 opacity-75 hover:opacity-100"
              }`}
            >
              <UKFlag className="h-3.5 w-5" />
              <span>EN</span>
            </button>
          </div>

          {/* Call / Book Button */}
          <a
            href="tel:+66649696962"
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-gold/50 bg-gold/10 px-4 py-1.5 text-xs font-semibold text-gold-light hover:bg-gold hover:text-black hover:border-gold transition-all duration-300"
          >
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current">
              <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
            </svg>
            <span>064-969-6962</span>
          </a>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex h-9 w-9 items-center justify-center rounded-xl border border-gold/30 bg-black/50 text-gold active:scale-95"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-gold/25 bg-black/95 px-6 py-5 backdrop-blur-xl animate-fade-in">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-foreground/85 hover:text-gold py-1.5 border-b border-gold/10"
              >
                {link.label}
              </a>
            ))}
            {/* Language Selector in Mobile Drawer */}
            <div className="pt-3 flex items-center justify-between border-t border-gold/15">
              <span className="text-xs text-foreground/70">{t("ภาษา / Language", "Language")}</span>
              <div className="flex items-center rounded-full border border-gold/40 bg-black/70 p-1 gap-1">
                <button
                  type="button"
                  onClick={() => setLang("th")}
                  className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold transition-all ${
                    lang === "th"
                      ? "bg-gold text-black shadow-md shadow-gold/25 font-extrabold"
                      : "text-foreground/70 hover:text-foreground opacity-75"
                  }`}
                >
                  <ThailandFlag className="h-3.5 w-5" />
                  <span>ไทย</span>
                </button>
                <button
                  type="button"
                  onClick={() => setLang("en")}
                  className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold transition-all ${
                    lang === "en"
                      ? "bg-gold text-black shadow-md shadow-gold/25 font-extrabold"
                      : "text-foreground/70 hover:text-foreground opacity-75"
                  }`}
                >
                  <UKFlag className="h-3.5 w-5" />
                  <span>EN</span>
                </button>
              </div>
            </div>

            <div className="pt-1 flex items-center justify-between">
              <span className="text-xs text-foreground/50">24/7 Hotline:</span>
              <a href="tel:+66649696962" className="text-xs font-bold text-gold">
                +66 64 969 6962
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
