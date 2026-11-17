"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/context/LanguageContext";

export default function Fleet() {
  const { lang, t } = useLanguage();

  const fleet = [
    {
      name: "Luxury SUV",
      typeEn: "7-Seater SUV",
      typeTh: "รถ SUV หรู 7 ที่นั่ง",
      image: "/images/fleet/suv.jpg",
      alt: "รถ SUV หรู 7 ที่นั่ง สีดำ",
      seats: "7",
      passengersEn: "Up to 4-5 Guests",
      passengersTh: "ไม่เกิน 4-5 ท่าน",
      bestForEn: ["Couples / Small Families", "Airport Transfers", "Business Travel"],
      bestForTh: ["คู่รัก / ครอบครัวเล็ก", "รับ-ส่งสนามบิน", "เดินทางธุรกิจ VIP"],
    },
    {
      name: "VIP Van",
      typeEn: "10-Seater VIP Van",
      typeTh: "รถตู้ VIP 10 ที่นั่ง",
      image: "/images/fleet/vip-van.jpg",
      alt: "รถตู้ VIP 10 ที่นั่ง สีเงิน",
      seats: "10",
      passengersEn: "6-9 Guests",
      passengersTh: "6-9 ท่าน",
      bestForEn: ["Large Groups / Big Families", "Private Nationwide Tours", "Bulky Luggage"],
      bestForTh: ["กลุ่มใหญ่ / ครอบครัวใหญ่", "ทัวร์ส่วนตัวทั่วไทย", "สัมภาระเยอะ กระเป๋าใหญ่"],
    },
  ];

  function Stat({ label, value }: { label: string; value: string }) {
    return (
      <div className="flex-1 rounded-xl border border-gold/20 bg-black/30 px-4 py-3 text-center">
        <p className="font-display text-2xl font-semibold leading-none text-gold-light sm:text-3xl">
          {value}
        </p>
        <p className="mt-1.5 text-[11px] uppercase tracking-widest text-foreground/50">{label}</p>
      </div>
    );
  }

  return (
    <section id="fleet" className="relative bg-background px-5 py-16 sm:px-6 sm:py-24 lg:px-10 lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.07),transparent_65%)]"
      />

      <div className="relative mx-auto max-w-6xl">
        <Reveal className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold sm:text-sm sm:tracking-[0.4em]">
            {t("ยานพาหนะระดับผู้บริหาร", "Our Fleet")}
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-wide sm:text-6xl">
            <span className="text-gold-gradient">{t("ยานพาหนะของเรา", "Premium Vehicles")}</span>
          </h2>
          <div className="mx-auto mt-6 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-gold/60" />
            <span className="text-gold">◆</span>
            <span className="h-px w-12 bg-gold/60" />
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-foreground/70">
            {t(
              "รถสะอาด ตรวจเช็กสภาพสม่ำเสมอ พร้อมคนขับมืออาชีพ เลือกขนาดที่เหมาะกับการเดินทางของคุณ",
              "Impeccably clean, meticulously maintained VIP vehicles with licensed professional chauffeurs."
            )}
          </p>
        </Reveal>

        {/* Phones: side-by-side comparison table */}
        <Reveal className="mt-10 md:hidden">
          <div className="grid grid-cols-[4.5rem_1fr_1fr] gap-x-2">
            <div />
            {fleet.map((v) => (
              <div key={v.name} className="text-center">
                <div className="relative aspect-[3/2] overflow-hidden rounded-xl border border-gold/30">
                  <Image
                    src={v.image}
                    alt={v.alt}
                    fill
                    sizes="40vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-2 font-display text-lg font-semibold leading-tight text-gold-light">
                  {v.name}
                </h3>
                <p className="text-[10px] text-foreground/50">{lang === "th" ? v.typeTh : v.typeEn}</p>
              </div>
            ))}

            <div className="mt-3 flex items-center border-t border-gold/15 pt-3 text-[11px] uppercase tracking-widest text-foreground/50">
              {t("ที่นั่ง", "Seats")}
            </div>
            {fleet.map((v) => (
              <div
                key={v.name}
                className="mt-3 flex items-center justify-center border-t border-gold/15 pt-3"
              >
                <span className="font-display text-2xl font-semibold text-gold-light">
                  {v.seats}
                </span>
              </div>
            ))}

            <div className="mt-3 flex items-center border-t border-gold/15 pt-3 text-[11px] uppercase tracking-widest text-foreground/50">
              {t("ผู้โดยสาร", "Capacity")}
            </div>
            {fleet.map((v) => (
              <div
                key={v.name}
                className="mt-3 flex items-center justify-center border-t border-gold/15 pt-3 text-center text-xs text-foreground/90 font-medium"
              >
                {lang === "th" ? v.passengersTh : v.passengersEn}
              </div>
            ))}

            <div className="mt-3 flex items-center border-t border-gold/15 pt-3 text-[11px] uppercase tracking-widest text-foreground/50">
              {t("เหมาะสำหรับ", "Best For")}
            </div>
            {fleet.map((v) => {
              const bestFor = lang === "th" ? v.bestForTh : v.bestForEn;
              return (
                <div key={v.name} className="mt-3 flex items-center border-t border-gold/15 pt-3">
                  <ul className="space-y-1.5 text-xs text-foreground/75">
                    {bestFor.map((b) => (
                      <li key={b}>• {b}</li>
                    ))}
                  </ul>
                </div>
              );
            })}

            <div />
            {fleet.map((v) => (
              <div key={v.name} className="mt-4">
                <a
                  href="#booking"
                  className="flex h-11 items-center justify-center rounded-full border border-gold/60 text-[11px] font-semibold uppercase tracking-widest text-gold transition active:scale-95 active:bg-gold/10"
                >
                  {t("จองรถคันนี้", "Book Vehicle")}
                </a>
              </div>
            ))}
          </div>
        </Reveal>

        {/* md and up: detailed cards */}
        <ul className="mt-16 hidden gap-8 md:grid md:grid-cols-2">
          {fleet.map((v, i) => {
            const type = lang === "th" ? v.typeTh : v.typeEn;
            const passengers = lang === "th" ? v.passengersTh : v.passengersEn;
            const bestFor = lang === "th" ? v.bestForTh : v.bestForEn;

            return (
              <li key={v.name}>
                <Reveal delay={i * 150} className="h-full">
                  <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gold/25 bg-white/[0.03] transition duration-500 md:hover:-translate-y-2 md:hover:border-gold/60 md:hover:shadow-2xl md:hover:shadow-gold/10">
                    <div className="relative aspect-[3/2] overflow-hidden">
                      <Image
                        src={v.image}
                        alt={v.alt}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover transition duration-700 md:group-hover:scale-105"
                      />
                      <div
                        aria-hidden
                        className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"
                      />
                      <span className="absolute left-4 top-4 rounded-full border border-gold/50 bg-black/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-gold backdrop-blur">
                        {type}
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col p-5 sm:p-7">
                      <h3 className="font-display text-3xl font-semibold text-gold-light sm:text-4xl">
                        {v.name}
                      </h3>
                      <p className="mt-1 text-sm uppercase tracking-widest text-foreground/50">
                        {type}
                      </p>

                      <div className="mt-5 flex gap-3">
                        <Stat label={t("ที่นั่งทั้งหมด", "Total Seats")} value={v.seats} />
                        <Stat label={t("จำนวนผู้โดยสาร", "Recommended")} value={passengers} />
                      </div>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {bestFor.map((b) => (
                          <span
                            key={b}
                            className="rounded-full border border-gold/30 px-3 py-1 text-xs text-foreground/80"
                          >
                            {b}
                          </span>
                        ))}
                      </div>

                      <a
                        href="#booking"
                        className="mt-6 flex h-12 items-center justify-center rounded-full border border-gold/60 text-sm font-semibold uppercase tracking-widest text-gold transition duration-300 hover:bg-gold/10 active:scale-95 md:mt-auto md:pt-0"
                      >
                        {t("จองรถคันนี้", "Book This Vehicle")}
                      </a>
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
