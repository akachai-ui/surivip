"use client";

import Image from "next/image";
import CursorSpotlight from "@/components/CursorSpotlight";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  const badges = [
    { icon: "✦", label: t("บริการระดับพรีเมียม", "Premium Service") },
    { icon: "◆", label: t("ปลอดภัย มั่นใจได้", "Safe & Reliable") },
    { icon: "◷", label: t("บริการตลอด 24 ชม.", "24 Hours Service") },
  ];
  return (
    <section className="relative isolate overflow-hidden bg-background">
      {/* Faded background photo */}
      <div aria-hidden className="absolute inset-0 -z-20">
        <Image
          src="/images/hero-car.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="kenburns object-cover object-[62%_top] opacity-50 sm:object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/45 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,var(--background)_100%)]" />
      </div>
      {/* Background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,rgba(212,175,55,0.18),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(212,175,55,0.10),transparent_50%)]"
      />
      {/* Interactive: gold spotlight follows the cursor */}
      <CursorSpotlight />

      <div className="mx-auto flex min-h-svh max-w-4xl items-center px-5 py-16 sm:px-6 sm:py-20 lg:px-10">
        {/* Branding */}
        <div className="w-full text-center">
          <p
            className="animate-fade-up mb-6 text-xs font-medium uppercase tracking-[0.3em] text-gold sm:text-sm sm:tracking-[0.4em]"
            style={{ "--d": "0.1s" } as React.CSSProperties}
          >
            Premium Transportation Service
          </p>

          <h1
            className="animate-fade-up font-display text-6xl font-semibold min-[400px]:text-7xl leading-none tracking-wide sm:text-8xl lg:text-9xl"
            style={{ "--d": "0.25s" } as React.CSSProperties}
          >
            <span className="text-gold-shimmer">SURI VIP</span>
          </h1>

          <div
            className="animate-fade-up mt-6 flex items-center justify-center gap-4"
            style={{ "--d": "0.4s" } as React.CSSProperties}
          >
            <span className="h-px w-8 bg-gold/60 sm:w-12" />
            <span className="font-display text-base tracking-[0.22em] text-gold-light sm:text-2xl sm:tracking-[0.35em]">
              PRIVATE TRANSFER
            </span>
            <span className="h-px w-8 bg-gold/60 sm:w-12" />
          </div>

          <p
            className="animate-fade-up mt-8 font-display text-xl italic leading-snug text-foreground/90 sm:text-3xl"
            style={{ "--d": "0.55s" } as React.CSSProperties}
          >
            Your premium transfer service
            <br />
            from the airport to anywhere
          </p>

          <p
            className="animate-fade-up mt-4 text-base text-foreground/75"
            style={{ "--d": "0.65s" } as React.CSSProperties}
          >
            {t("บริการรถเช่าพร้อมคนขับระดับ VIP เดินทางทั่วไทย", "VIP Chauffeur & Private Transfer Across Thailand")}
          </p>

          <div
            className="animate-fade-up mt-9 flex w-full flex-col items-center justify-center gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:gap-4"
            style={{ "--d": "0.8s" } as React.CSSProperties}
          >
            <a
              href="#booking"
              className="bg-gold-gradient rounded-full w-full px-8 py-4 text-center sm:w-auto sm:py-3.5 text-sm font-semibold uppercase tracking-widest text-black shadow-lg shadow-gold/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-gold/40 hover:brightness-110 active:translate-y-0 active:scale-95"
            >
              {t("จองรถทันที", "Book Now")}
            </a>
            <a
              href="#services"
              className="rounded-full border border-gold/60 w-full px-8 py-4 text-center sm:w-auto sm:py-3.5 text-sm font-semibold uppercase tracking-widest text-gold transition duration-300 hover:-translate-y-0.5 hover:bg-gold/10 active:translate-y-0 active:scale-95"
            >
              {t("บริการของเรา", "Our Services")}
            </a>
          </div>

          <ul
            className="animate-fade-up mt-10 grid grid-cols-3 gap-3 sm:mt-14 sm:gap-4 border-t border-gold/20 pt-8"
            style={{ "--d": "0.95s" } as React.CSSProperties}
          >
            {badges.map((b) => (
              <li
                key={b.label}
                className="group flex cursor-default flex-col items-center gap-2 transition duration-300 hover:-translate-y-1"
              >
                <span className="text-xl text-gold transition duration-300 group-hover:scale-125 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]">
                  {b.icon}
                </span>
                <span className="text-xs uppercase tracking-widest text-foreground/70 transition-colors group-hover:text-gold-light">
                  {b.label}
                </span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
