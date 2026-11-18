"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/context/LanguageContext";

export default function Fleet() {
  const { lang, t } = useLanguage();

  const fleet = [
    {
      name: "Executive Sedan",
      typeEn: "Toyota Camry / VIP Sedan",
      typeTh: "รถเก๋งซีดาน VIP (Camry)",
      image: "/images/fleet/sedan.jpg",
      alt: "รถเก๋งซีดานผู้บริหาร VIP Toyota Camry สีดำ",
      seats: "4-5",
      passengersEn: "1-3 Guests",
      passengersTh: "1-3 ท่าน (กว้างขวาง)",
      bestForEn: ["Solo / Couples VIP", "Airport Transfer", "City & Business Trips"],
      bestForTh: ["เดินทางเดี่ยว / คู่รัก VIP", "รับ-ส่งสนามบินส่วนตัว", "เดินทางในเมือง & งานธุรกิจ"],
    },
    {
      name: "Luxury SUV",
      typeEn: "7-Seater Premium SUV",
      typeTh: "รถ SUV หรู 7 ที่นั่ง",
      image: "/images/fleet/suv.jpg",
      alt: "รถ SUV หรู 7 ที่นั่ง สีดำ",
      seats: "7",
      passengersEn: "Up to 4-5 Guests",
      passengersTh: "ไม่เกิน 4-5 ท่าน",
      bestForEn: ["Couples / Small Families", "Airport Transfers", "Upcountry Travel"],
      bestForTh: ["คู่รัก / ครอบครัวเล็ก", "รับ-ส่งสนามบิน", "เดินทางต่างจังหวัด"],
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
      bestForEn: ["Large Groups / Big Families", "Nationwide Tours", "Bulky Luggage"],
      bestForTh: ["กลุ่มใหญ่ / ครอบครัวใหญ่", "ทัวร์ส่วนตัวทั่วไทย", "สัมภาระเยอะ กระเป๋าใหญ่"],
    },
  ];

  function Stat({ label, value }: { label: string; value: string }) {
    return (
      <div className="flex-1 rounded-xl border border-gold/20 bg-black/30 px-3 py-2.5 text-center">
        <p className="font-display text-xl font-semibold leading-none text-gold-light sm:text-2xl">
          {value}
        </p>
        <p className="mt-1 text-[10px] uppercase tracking-wider text-foreground/50">{label}</p>
      </div>
    );
  }

  return (
    <section id="fleet" className="relative bg-background px-4 py-16 sm:px-6 sm:py-24 lg:px-10 lg:py-32 overflow-hidden w-full max-w-full">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.07),transparent_65%)]"
      />

      <div className="relative mx-auto max-w-6xl w-full">
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

        {/* Phones: side-by-side comparison table (Fitted to screen, no horizontal overflow) */}
        <Reveal className="mt-10 md:hidden w-full max-w-full">
          <div className="w-full max-w-full overflow-hidden">
            <div className="grid grid-cols-[3.2rem_repeat(3,1fr)] gap-x-1.5 w-full">
              <div />
              {fleet.map((v) => (
                <div key={v.name} className="text-center min-w-0">
                  <div className="relative aspect-[3/2] overflow-hidden rounded-lg border border-gold/30">
                    <Image
                      src={v.image}
                      alt={v.alt}
                      fill
                      sizes="30vw"
                      className="object-cover"
                    />
                  </div>
                  <h3 className="mt-2 font-display text-[13px] font-semibold leading-tight text-gold-light truncate">
                    {v.name}
                  </h3>
                  <p className="text-[9px] text-foreground/50 truncate">{lang === "th" ? v.typeTh : v.typeEn}</p>
                </div>
              ))}

              <div className="mt-3 flex items-center border-t border-gold/15 pt-3 text-[10px] uppercase tracking-wider text-foreground/50">
                {t("ที่นั่ง", "Seats")}
              </div>
              {fleet.map((v) => (
                <div
                  key={v.name}
                  className="mt-3 flex items-center justify-center border-t border-gold/15 pt-3 min-w-0"
                >
                  <span className="font-display text-lg font-semibold text-gold-light">
                    {v.seats}
                  </span>
                </div>
              ))}

              <div className="mt-3 flex items-center border-t border-gold/15 pt-3 text-[10px] uppercase tracking-wider text-foreground/50">
                {t("ผู้โดยสาร", "Capacity")}
              </div>
              {fleet.map((v) => (
                <div
                  key={v.name}
                  className="mt-3 flex items-center justify-center border-t border-gold/15 pt-3 text-center text-[10px] text-foreground/90 font-medium leading-tight min-w-0 px-0.5"
                >
                  {lang === "th" ? v.passengersTh : v.passengersEn}
                </div>
              ))}

              <div className="mt-3 flex items-center border-t border-gold/15 pt-3 text-[10px] uppercase tracking-wider text-foreground/50">
                {t("เหมาะสำหรับ", "Best For")}
              </div>
              {fleet.map((v) => {
                const bestFor = lang === "th" ? v.bestForTh : v.bestForEn;
                return (
                  <div key={v.name} className="mt-3 flex items-start border-t border-gold/15 pt-3 min-w-0">
                    <ul className="space-y-1 text-[9px] text-foreground/75 leading-tight">
                      {bestFor.map((b) => (
                        <li key={b} className="leading-tight">• {b}</li>
                      ))}
                    </ul>
                  </div>
                );
              })}

              <div />
              {fleet.map((v) => (
                <div key={v.name} className="mt-4 min-w-0">
                  <a
                    href="#booking"
                    className="flex h-9 items-center justify-center rounded-full border border-gold/60 text-[9px] font-semibold uppercase tracking-wider text-gold transition active:scale-95 active:bg-gold/10"
                  >
                    {t("จองคันนี้", "Book")}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* md and up: 3 detailed luxury cards */}
        <ul className="mt-16 hidden gap-6 md:grid md:grid-cols-3">
          {fleet.map((v, i) => {
            const type = lang === "th" ? v.typeTh : v.typeEn;
            const passengers = lang === "th" ? v.passengersTh : v.passengersEn;
            const bestFor = lang === "th" ? v.bestForTh : v.bestForEn;

            return (
              <li key={v.name}>
                <Reveal delay={i * 120} className="h-full">
                  <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gold/25 bg-white/[0.03] transition duration-500 md:hover:-translate-y-2 md:hover:border-gold/60 md:hover:shadow-2xl md:hover:shadow-gold/10">
                    <div className="relative aspect-[3/2] overflow-hidden">
                      <Image
                        src={v.image}
                        alt={v.alt}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-cover transition duration-700 md:group-hover:scale-105"
                      />
                      <div
                        aria-hidden
                        className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"
                      />
                      <span className="absolute left-3 top-3 rounded-full border border-gold/50 bg-black/60 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-gold backdrop-blur">
                        {type}
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="font-display text-2xl font-semibold text-gold-light sm:text-3xl">
                        {v.name}
                      </h3>
                      <p className="mt-1 text-xs uppercase tracking-wider text-foreground/50">
                        {type}
                      </p>

                      <div className="mt-4 flex gap-2">
                        <Stat label={t("ที่นั่งทั้งหมด", "Total Seats")} value={v.seats} />
                        <Stat label={t("ผู้โดยสาร", "Recommended")} value={passengers} />
                      </div>

                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {bestFor.map((b) => (
                          <span
                            key={b}
                            className="rounded-full border border-gold/30 px-2.5 py-0.5 text-[11px] text-foreground/80"
                          >
                            {b}
                          </span>
                        ))}
                      </div>

                      <a
                        href="#booking"
                        className="mt-6 flex h-11 items-center justify-center rounded-full border border-gold/60 text-xs font-semibold uppercase tracking-widest text-gold transition duration-300 hover:bg-gold hover:text-black active:scale-95 md:mt-auto"
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
