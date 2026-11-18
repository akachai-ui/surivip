"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/context/LanguageContext";

export default function Fleet() {
  const { lang, t } = useLanguage();
  const [activeMobileIdx, setActiveMobileIdx] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const [touchStartY, setTouchStartY] = useState<number | null>(null);
  const [touchEndY, setTouchEndY] = useState<number | null>(null);

  const fleet = [
    {
      name: "Executive Sedan",
      tabTh: "ซีดาน VIP",
      tabEn: "VIP Sedan",
      icon: "🚘",
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
      tabTh: "SUV หรู",
      tabEn: "Luxury SUV",
      icon: "🚙",
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
      tabTh: "รถตู้ VIP",
      tabEn: "VIP Van",
      icon: "🚐",
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

  const currentVehicle = fleet[activeMobileIdx];

  const goToNext = () => {
    setActiveMobileIdx((prev) => (prev + 1) % fleet.length);
  };

  const goToPrev = () => {
    setActiveMobileIdx((prev) => (prev - 1 + fleet.length) % fleet.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEndX(null);
    setTouchEndY(null);
    setTouchStartX(e.targetTouches[0].clientX);
    setTouchStartY(e.targetTouches[0].clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
    setTouchEndY(e.targetTouches[0].clientY);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;
    const diffX = touchStartX - touchEndX;
    const diffY = touchStartY !== null && touchEndY !== null ? Math.abs(touchStartY - touchEndY) : 0;

    // Trigger swipe if horizontal movement is dominant and > 35px
    if (Math.abs(diffX) > 35 && Math.abs(diffX) > diffY) {
      if (diffX > 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }
    setTouchStartX(null);
    setTouchEndX(null);
    setTouchStartY(null);
    setTouchEndY(null);
  };

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
    <section id="fleet" className="relative bg-background px-5 py-16 sm:px-6 sm:py-24 lg:px-10 lg:py-32 overflow-hidden w-full max-w-full">
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

        {/* Mobile View: Luxury Interactive Tabbed & Swipeable Cards (md:hidden) */}
        <Reveal className="mt-8 md:hidden w-full max-w-full">
          {/* Top Vehicle Selector Tabs */}
          <div className="grid grid-cols-3 gap-1 rounded-2xl border border-gold/25 bg-black/40 p-1.5 backdrop-blur">
            {fleet.map((v, idx) => {
              const isActive = activeMobileIdx === idx;
              return (
                <button
                  key={v.name}
                  type="button"
                  onClick={() => setActiveMobileIdx(idx)}
                  className={`flex flex-col items-center justify-center rounded-xl py-2 px-1 text-center transition-all duration-300 ${
                    isActive
                      ? "bg-gold text-black shadow-lg shadow-gold/20 font-bold"
                      : "text-foreground/70 hover:text-gold hover:bg-white/[0.04]"
                  }`}
                >
                  <span className="text-base leading-none mb-1">{v.icon}</span>
                  <span className="text-[11px] leading-tight">
                    {lang === "th" ? v.tabTh : v.tabEn}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Card with Touch Swipe */}
          <div
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="mt-4 touch-pan-y"
          >
            <article className="overflow-hidden rounded-2xl border border-gold/30 bg-white/[0.03] shadow-xl">
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={currentVehicle.image}
                  alt={currentVehicle.alt}
                  fill
                  sizes="100vw"
                  className="object-cover transition-all duration-500"
                  priority
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-[#0b0b0c] via-black/25 to-transparent"
                />
                <span className="absolute left-3 top-3 rounded-full border border-gold/50 bg-black/75 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-gold backdrop-blur">
                  {lang === "th" ? currentVehicle.typeTh : currentVehicle.typeEn}
                </span>
                <span className="absolute right-3 top-3 rounded-full border border-gold/30 bg-black/75 px-2 py-0.5 text-[10px] font-mono text-gold-light">
                  {activeMobileIdx + 1} / {fleet.length}
                </span>
              </div>

              <div className="p-4 sm:p-5">
                <div>
                  <h3 className="font-display text-2xl font-semibold text-gold-light">
                    {currentVehicle.name}
                  </h3>
                  <p className="mt-0.5 text-xs text-foreground/60">
                    {lang === "th" ? currentVehicle.typeTh : currentVehicle.typeEn}
                  </p>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-2">
                  <div className="rounded-xl border border-gold/20 bg-black/40 px-3 py-2.5 text-center">
                    <p className="font-display text-2xl font-bold leading-none text-gold-light">
                      {currentVehicle.seats}
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-wider text-foreground/50">
                      {t("ที่นั่งทั้งหมด", "Total Seats")}
                    </p>
                  </div>
                  <div className="rounded-xl border border-gold/20 bg-black/40 px-3 py-2.5 text-center">
                    <p className="font-display text-sm font-semibold leading-tight text-gold-light sm:text-base">
                      {lang === "th" ? currentVehicle.passengersTh : currentVehicle.passengersEn}
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-wider text-foreground/50">
                      {t("ผู้โดยสารแนะนำ", "Recommended")}
                    </p>
                  </div>
                </div>

                <div className="mt-4">
                  <p className="text-[11px] font-medium uppercase tracking-wider text-gold/80 mb-2">
                    {t("เหมาะสำหรับ", "Best For")}:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {(lang === "th" ? currentVehicle.bestForTh : currentVehicle.bestForEn).map((b) => (
                      <span
                        key={b}
                        className="rounded-full border border-gold/30 bg-gold/5 px-2.5 py-1 text-[11px] text-foreground/85"
                      >
                        ✓ {b}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href="#booking"
                  className="mt-5 flex h-11 w-full items-center justify-center rounded-full bg-gradient-to-r from-gold via-gold-light to-gold text-xs font-bold uppercase tracking-widest text-black shadow-lg shadow-gold/20 transition active:scale-95"
                >
                  {t("จองรถคันนี้", "Book This Vehicle")}
                </a>
              </div>
            </article>

            {/* Bottom Controls: Prev / Indicators / Next */}
            <div className="mt-4 flex items-center justify-between px-1">
              <button
                type="button"
                onClick={goToPrev}
                aria-label="Previous vehicle"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/30 bg-black/40 text-gold transition active:scale-90"
              >
                ←
              </button>

              <div className="flex items-center gap-2">
                {fleet.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveMobileIdx(i)}
                    aria-label={`Go to vehicle ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeMobileIdx === i ? "w-6 bg-gold" : "w-2 bg-white/20"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={goToNext}
                aria-label="Next vehicle"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/30 bg-black/40 text-gold transition active:scale-90"
              >
                →
              </button>
            </div>

            <p className="mt-2 text-center text-[10px] text-foreground/40">
              {t("← ปัดซ้าย-ขวา เพื่อดูรุ่นอื่น →", "← Swipe left / right to browse →")}
            </p>
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
