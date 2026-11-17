"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/context/LanguageContext";

export default function Services() {
  const { lang, t } = useLanguage();

  const services = [
    {
      titleEn: "Airport Transfer",
      titleTh: "รับ-ส่งสนามบิน",
      image: "/images/services/airport-transfer.jpg",
      alt: "พนักงานขับรถ VIP เปิดประตูรถให้ผู้โดยสารที่สนามบิน",
      descEn: "Punctual, comfortable 24/7 airport transfer service across Thailand with real-time flight tracking.",
      descTh: "บริการรับ-ส่งสนามบินทั่วประเทศ ตรงเวลา สะดวกสบาย พร้อมให้บริการตลอด 24 ชั่วโมง",
      pointsEn: ["All Airports in Thailand", "Flight Tracking", "24/7 Service"],
      pointsTh: ["ทุกสนามบินทั่วไทย", "ติดตามเที่ยวบิน", "บริการ 24 ชั่วโมง"],
      icon: (
        <path d="M2.5 19h19M3.4 13.2l1.9-1.1 3.5.6 4.1-3.9-6.4-3.2 1.3-1.2 8.6 1.7 2.9-2.7a2 2 0 0 1 2.8 2.8l-2.7 2.9 1.7 8.6-1.2 1.3-3.2-6.4-3.9 4.1.6 3.5-1.1 1.9-2.6-3.8-3.8-2.6Z" />
      ),
    },
    {
      titleEn: "Private Charter",
      titleTh: "เหมารถส่วนตัว",
      image: "/images/services/private-charter.jpg",
      alt: "ภายในรถตู้ VIP เบาะหนังหรูสำหรับเหมารถส่วนตัว",
      descEn: "Private vehicle with professional chauffeur. Travel anywhere nationwide on your own schedule and itinerary.",
      descTh: "เหมารถพร้อมคนขับ เดินทางได้ทั่วประเทศ ทั้งในเมืองและข้ามจังหวัด ตามเวลาและเส้นทางที่คุณกำหนด",
      pointsEn: ["Nationwide Travel", "Daily / Cross-Province Charter", "Custom Itinerary"],
      pointsTh: ["เดินทางได้ทั่วประเทศ", "เหมารายวัน / ข้ามจังหวัด", "ยืดหยุ่นตามแผนเดินทาง"],
      icon: (
        <path d="M5 16V11l1.6-4.3A2 2 0 0 1 8.5 5.4h7a2 2 0 0 1 1.9 1.3L19 11v5M3 16h18v2.5a1 1 0 0 1-1 1h-1.5a1 1 0 0 1-1-1V18h-9v.5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V16Zm4-3h.01M17 13h.01" />
      ),
    },
    {
      titleEn: "One Day Trip",
      titleTh: "ทัวร์เที่ยววันเดียว",
      image: "/images/services/one-day-trip.jpg",
      alt: "ทริปท่องเที่ยววันเดียว วัดโบราณ ตลาดน้ำ และวิวพระอาทิตย์ตก",
      descEn: "Curated private round-trip day tours. Culture, nature, and entertainment with gas and expressway tolls included.",
      descTh: "แพ็กเกจทัวร์ส่วนตัวแบบไป-กลับในวันเดียว ครบทั้งวัฒนธรรม ธรรมชาติ และความบันเทิง รวมค่าน้ำมันและทางด่วน",
      pointsEn: ["All Provinces", "Custom Tour Options", "Tolls & Fuel Included"],
      pointsTh: ["ไปได้ทุกจังหวัด", "จัดแพ็กเกจตามความสนใจ", "รวมน้ำมัน + ทางด่วน"],
      icon: (
        <path d="M12 21s-7-5.6-7-11a7 7 0 1 1 14 0c0 5.4-7 11-7 11Zm0-8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
      ),
    },
  ];

  return (
    <section id="services" className="relative bg-background px-5 py-16 sm:px-6 sm:py-24 lg:px-10 lg:py-32 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <Reveal className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.4em] text-gold sm:text-sm">
            {t("สิ่งที่เรามอบให้", "What We Offer")}
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-wide sm:text-6xl">
            <span className="text-gold-gradient">{t("บริการของเรา", "Our Services")}</span>
          </h2>
          <div className="mx-auto mt-6 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-gold/60" />
            <span className="text-gold">◆</span>
            <span className="h-px w-12 bg-gold/60" />
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-foreground/70">
            {t(
              "บริการเดินทางส่วนตัวระดับพรีเมียม ปลอดภัย สะดวกสบาย ดูแลทุกการเดินทางของคุณตลอด 24 ชั่วโมง",
              "Premium private transfer service. Safe, comfortable, and tailored to your journey 24/7."
            )}
          </p>
        </Reveal>

        {/* Phones: poster cards (full-image, compact) */}
        <ul className="mt-10 space-y-4 md:hidden">
          {services.map((s, i) => {
            const title = lang === "th" ? s.titleTh : s.titleEn;
            const subtitle = lang === "th" ? s.titleEn : s.titleTh;
            const points = lang === "th" ? s.pointsTh : s.pointsEn;

            return (
              <li key={s.titleEn}>
                <Reveal delay={i * 100}>
                  <article className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-gold/30 shadow-lg shadow-black/40">
                    <Image
                      src={s.image}
                      alt={s.alt}
                      fill
                      sizes="100vw"
                      className="object-cover"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-4">
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/60 bg-black/30 text-gold backdrop-blur">
                          <svg
                            viewBox="0 0 24 24"
                            className="h-5 w-5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden
                          >
                            {s.icon}
                          </svg>
                        </span>
                        <div>
                          <h3 className="font-display text-2xl font-semibold leading-none text-gold-light">
                            {title}
                          </h3>
                          <p className="mt-1 text-[11px] uppercase tracking-widest text-foreground/60">
                            {subtitle}
                          </p>
                        </div>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {points.map((p) => (
                          <span
                            key={p}
                            className="rounded-full border border-gold/40 bg-black/40 px-2.5 py-1 text-[11px] text-foreground/85 backdrop-blur"
                          >
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ul>

        {/* md and up: detailed cards */}
        <ul className="mt-16 hidden gap-6 md:grid md:grid-cols-3">
          {services.map((s, i) => {
            const title = lang === "th" ? s.titleTh : s.titleEn;
            const subtitle = lang === "th" ? s.titleEn : s.titleTh;
            const desc = lang === "th" ? s.descTh : s.descEn;
            const points = lang === "th" ? s.pointsTh : s.pointsEn;

            return (
              <li key={s.titleEn}>
                <Reveal delay={i * 150} className="h-full">
                  <article className="group relative h-full overflow-hidden rounded-2xl border border-gold/20 bg-white/[0.03] transition duration-500 hover:-translate-y-2 hover:border-gold/60 hover:bg-gold/[0.06] hover:shadow-2xl hover:shadow-gold/10">
                    <div className="relative aspect-[3/2] overflow-hidden">
                      <Image
                        src={s.image}
                        alt={s.alt}
                        fill
                        sizes="33vw"
                        className="object-cover transition duration-700 group-hover:scale-110"
                      />
                      <div
                        aria-hidden
                        className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"
                      />
                    </div>

                    <div className="relative p-8 pt-0">
                      <div className="relative -mt-7 flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-background text-gold transition duration-500 group-hover:scale-110 group-hover:border-gold group-hover:bg-gold/10">
                        <svg
                          viewBox="0 0 24 24"
                          className="h-7 w-7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden
                        >
                          {s.icon}
                        </svg>
                      </div>

                      <h3 className="relative mt-6 font-display text-3xl font-semibold text-gold-light">
                        {title}
                      </h3>
                      <p className="relative mt-1 text-sm uppercase tracking-widest text-foreground/50">
                        {subtitle}
                      </p>
                      <p className="relative mt-5 leading-relaxed text-foreground/70">{desc}</p>

                      <ul className="relative mt-6 space-y-2 border-t border-gold/15 pt-6">
                        {points.map((p) => (
                          <li key={p} className="flex items-center gap-3 text-sm text-foreground/80">
                            <span className="text-xs text-gold">✦</span>
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
