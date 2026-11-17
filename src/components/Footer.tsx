"use client";

import Reveal from "@/components/Reveal";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = 2026;

  const links = [
    { href: "#", label: t("หน้าแรก (Home)", "Home") },
    { href: "#services", label: t("บริการของเรา (Services)", "Our Services") },
    { href: "#coverage", label: t("เส้นทางทั่วไทย (Coverage)", "Service Coverage") },
    { href: "#fleet", label: t("ยานพาหนะ (Our Fleet)", "Premium Fleet") },
    { href: "#tours", label: t("แพ็กเกจทัวร์ (Tour Packages)", "Tour Packages") },
    { href: "#gallery", label: t("แกลเลอรีภาพ (Gallery)", "Tour Gallery") },
    { href: "#contact", label: t("ติดต่อเรา (Contact Us)", "Contact Us") },
  ];

  return (
    <footer className="relative border-t border-gold/20 bg-[#070708] px-5 pt-16 pb-24 sm:px-6 sm:pt-20 sm:pb-16 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-4 sm:gap-8">
          {/* Brand Info */}
          <div className="md:col-span-2">
            <Reveal>
              <h2 className="font-display text-3xl font-bold tracking-wide sm:text-4xl">
                <span className="text-gold-gradient">SURI VIP</span>
              </h2>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.25em] text-gold-light">
                Private Transfer & Tour Service
              </p>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-foreground/65">
                {t(
                  "บริการรถยนต์และรถตู้ VIP พร้อมคนขับระดับพรีเมียม รับ-ส่งสนามบินสุวรรณภูมิ ดอนเมือง เหมารายวัน เดินทางทั่วไทย ปลอดภัย สะดวกสบาย ตลอด 24 ชั่วโมง",
                  "Premium executive chauffeur and private transfer service in Thailand. Suvarnabhumi & Don Mueang airport transfers, daily charters, and nationwide tours 24/7."
                )}
              </p>

              <div className="mt-6 flex flex-wrap gap-2 text-xs text-foreground/75">
                <span className="rounded-full border border-gold/30 bg-white/[0.02] px-3 py-1">
                  ✦ {t("บริการตลอด 24 ชั่วโมง", "24/7 Service")}
                </span>
                <span className="rounded-full border border-gold/30 bg-white/[0.02] px-3 py-1">
                  ✦ {t("ปลอดภัย ตรงเวลา 100%", "Safe & Reliable")}
                </span>
                <span className="rounded-full border border-gold/30 bg-white/[0.02] px-3 py-1">
                  ✦ {t("รวมน้ำมัน + ทางด่วน", "All-Inclusive Pricing")}
                </span>
              </div>
            </Reveal>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <Reveal delay={100}>
              <h3 className="font-display text-lg font-semibold uppercase tracking-wider text-gold-light">
                {t("เมนูด่วน", "Quick Links")}
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm text-foreground/70">
                {links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="transition hover:text-gold">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Contact Summary */}
          <div>
            <Reveal delay={150}>
              <h3 className="font-display text-lg font-semibold uppercase tracking-wider text-gold-light">
                {t("ติดต่อด่วน", "Fast Contact")}
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-foreground/70">
                <li>
                  <a href="tel:+66649696962" className="flex items-center gap-2 hover:text-gold transition">
                    <span className="text-gold font-bold">Tel:</span>
                    <span>064-969-6962</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://line.me/ti/p/~kawjung27"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-gold transition"
                  >
                    <span className="text-gold font-bold">LINE:</span>
                    <span>kawjung27</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/66649696962"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-gold transition"
                  >
                    <span className="text-gold font-bold">WhatsApp:</span>
                    <span>+66 64 969 6962</span>
                  </a>
                </li>
                <li className="flex items-center gap-2 text-foreground/60">
                  <span className="text-gold font-bold">WeChat:</span>
                  <span>Kaew</span>
                </li>
              </ul>
            </Reveal>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 border-t border-gold/15 pt-8 text-center text-xs text-foreground/45 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {currentYear} SURI VIP (Suriya Habantaen). {t("สงวนลิขสิทธิ์ทุกประการ", "All rights reserved.")}</p>
          <p className="text-[11px] text-gold/60">
            {t("บริการรถ VIP และทัวร์ส่วนตัวอันดับ 1 ในไทย", "Premium VIP Transfer & Private Tour Service Thailand")}
          </p>
        </div>
      </div>
    </footer>
  );
}
