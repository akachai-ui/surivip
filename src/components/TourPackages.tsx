"use client";

import Image from "next/image";
import { useState } from "react";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/context/LanguageContext";

type Price = { labelTh: string; labelEn: string; value: string };

export default function TourPackages() {
  const { lang, t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const packages = [
    {
      titleEn: "Ayutthaya Heritage Tour",
      titleTh: "ทัวร์อยุธยา เมืองมรดกโลก",
      image: "/images/tours/ayutthaya.jpg",
      alt: "โบราณสถานอยุธยา พระพุทธรูปและเจดีย์ยามพระอาทิตย์ตก",
      durationTh: "8-10 ชม.",
      durationEn: "8-10 Hours",
      placesTh: ["วัดมหาธาตุ", "วัดพระศรีสรรเพชญ์", "วัดใหญ่ชัยมงคล", "วัดไชยวัฒนาราม"],
      placesEn: ["Wat Mahathat", "Wat Phra Si Sanphet", "Wat Yai Chai Mongkhon", "Wat Chaiwatthanaram"],
      includesTh: ["รถพร้อมคนขับ VIP", "ค่าน้ำมัน", "ค่าทางด่วนทุกสาย"],
      includesEn: ["Private VIP vehicle + Chauffeur", "Fuel included", "All expressway tolls"],
      prices: [{ labelTh: "เหมารถไป-กลับ", labelEn: "Charter Rate", value: "3,500" }],
    },
    {
      titleEn: "Samut Songkhram Cultural Tour",
      titleTh: "ทัวร์สมุทรสงคราม ตลาดร่มหุบ & ตลาดน้ำ",
      image: "/images/tours/samut-songkhram.jpg",
      alt: "ตลาดร่มหุบแม่กลอง รถไฟวิ่งผ่านตลาด",
      durationTh: "8-10 ชม.",
      durationEn: "8-10 Hours",
      placesTh: [
        "ตลาดร่มหุบแม่กลอง",
        "ตลาดน้ำดำเนินสะดวก (นั่งเรือ)",
        "บ้านเตาตาลมะพร้าว",
        "ล่องเรือชมลิงแสม คลองโคน",
      ],
      placesEn: [
        "Maeklong Railway Market",
        "Damnoen Saduak Floating Market",
        "Traditional Coconut Sugar Farm",
        "Khlong Khon Mangrove Monkey Boat",
      ],
      includesTh: ["ค่าเข้าชม", "ค่าเรือพาย", "ค่าน้ำมัน", "ค่าทางด่วน", "ค่าจอดรถ"],
      includesEn: ["Admission tickets", "Private boat fee", "Fuel", "Expressway tolls", "Parking fee"],
      prices: [
        { labelTh: "SUV 7 ที่นั่ง (ไม่เกิน 4-5 ท่าน)", labelEn: "SUV 7-Seater (1-5 Guests)", value: "5,500" },
        { labelTh: "VIP Van (6-8 ท่าน)", labelEn: "VIP Van (6-8 Guests)", value: "6,500 - 7,000" },
      ],
    },
    {
      titleEn: "Bangkok Family Fun Tour",
      titleTh: "ทัวร์สนุกทั้งครอบครัว กรุงเทพฯ",
      image: "/images/tours/bangkok-family-fun.jpg",
      alt: "ซาฟารีเวิลด์ สวนน้ำ และหมู่บ้านช็อกโกแลต",
      durationTh: "1 วันเต็ม",
      durationEn: "Full Day",
      placesTh: ["Safari World ซาฟารีปาร์ค", "Siam Amazing Park สวนสยาม", "Chocolate Ville ถ่ายรูปดินเนอร์"],
      placesEn: ["Safari World & Marine Park", "Siam Amazing Park Theme Park", "Chocolate Ville Dining"],
      includesTh: ["รถรับ-ส่งไป-กลับตลอดวัน", "น้ำดื่มบริการฟรี", "ประกันภัยการเดินทาง"],
      includesEn: ["Full-day private roundtrip transfer", "Complimentary drinking water", "Travel passenger insurance"],
      prices: null,
    },
    {
      titleEn: "Bangkok Must-Do & Dinner Cruise",
      titleTh: "ทัวร์ไฮไลต์กรุงเทพฯ & ล่องเรือดินเนอร์",
      image: "/images/tours/bangkok-must-do.jpg",
      alt: "เรือดินเนอร์ครูซแม่น้ำเจ้าพระยา และวัดอรุณยามค่ำคืน",
      durationTh: "1 วันเต็ม",
      durationEn: "Full Day",
      placesTh: ["Safari World หรือ ช้อปปิ้งไอคอนสยาม", "Chocolate Ville", "Dinner Cruise ล่องเรือแม่น้ำเจ้าพระยา"],
      placesEn: ["Safari World or ICONSIAM", "Chocolate Ville", "Chao Phraya River Luxury Dinner Cruise"],
      includesTh: ["รถรับ-ส่ง VIP ไป-กลับ", "บุฟเฟต์ดินเนอร์ซีฟู้ดบนเรือ", "การแสดงดนตรีสด"],
      includesEn: ["Private VIP roundtrip transfer", "Seafood buffet dinner cruise", "Live music performance"],
      prices: null,
    },
  ];

  return (
    <section
      id="tours"
      className="relative bg-background px-5 py-16 sm:px-6 sm:py-24 lg:px-10 lg:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"
      />

      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold sm:text-sm sm:tracking-[0.4em]">
            {t("แพ็กเกจทัวร์วันเดียว", "One Day Trips & Excursions")}
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-wide sm:text-6xl">
            <span className="text-gold-gradient">{t("แพ็กเกจทัวร์ยอดนิยม", "Tour Packages")}</span>
          </h2>
          <div className="mx-auto mt-6 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-gold/60" />
            <span className="text-gold">◆</span>
            <span className="h-px w-12 bg-gold/60" />
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-foreground/70">
            {t(
              "ตัวอย่างแพ็กเกจทัวร์ส่วนตัวแบบไป-กลับในวัน สนใจเส้นทางอื่น แจ้งความต้องการได้ตลอด 24 ชั่วโมง",
              "Curated private day tour packages. Custom routes, flexible stops, and personalized itineraries available."
            )}
          </p>
        </Reveal>

        {/* ---------- Phones: Compact List (Accordion) ---------- */}
        <div className="mt-10 space-y-3.5 md:hidden">
          {packages.map((p, i) => {
            const isOpen = openIndex === i;
            const title = lang === "th" ? p.titleTh : p.titleEn;
            const sub = lang === "th" ? p.titleEn : p.titleTh;
            const duration = lang === "th" ? p.durationTh : p.durationEn;
            const places = lang === "th" ? p.placesTh : p.placesEn;
            const includes = lang === "th" ? p.includesTh : p.includesEn;

            return (
              <Reveal key={p.titleEn} delay={i * 80}>
                <article
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "border-gold/60 bg-gold/[0.06] shadow-lg shadow-gold/5"
                      : "border-gold/20 bg-white/[0.03]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center gap-3.5 p-3.5 text-left transition active:bg-gold/10"
                  >
                    <div className="relative h-18 w-22 shrink-0 overflow-hidden rounded-xl border border-gold/30">
                      <Image
                        src={p.image}
                        alt={p.alt}
                        fill
                        sizes="90px"
                        className="object-cover"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="font-display text-lg font-semibold leading-tight text-gold-light truncate">
                        {title}
                      </h3>
                      <p className="text-xs text-foreground/50 truncate mt-0.5">{sub}</p>

                      <div className="mt-1.5 flex items-baseline justify-between gap-1">
                        <span className="rounded-full border border-gold/30 bg-black/40 px-2 py-0.5 text-[10px] text-gold">
                          ◷ {duration}
                        </span>

                        <span className="text-xs text-gold">
                          {p.prices ? (
                            <>
                              <span className="text-[10px] text-foreground/60 mr-1">{t("เริ่ม", "From")}</span>
                              <strong className="text-sm font-semibold">{p.prices[0].value}</strong>
                              <span className="text-[10px] ml-0.5">{t("บ.", "THB")}</span>
                            </>
                          ) : (
                            <span className="text-[11px] text-gold-light">{t("สอบถามราคา", "Inquire Price")}</span>
                          )}
                        </span>
                      </div>
                    </div>

                    <span
                      aria-hidden
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gold/40 text-xs text-gold transition-transform duration-300 ${
                        isOpen ? "rotate-180 bg-gold/20" : ""
                      }`}
                    >
                      ▾
                    </span>
                  </button>

                  {/* Expanded Accordion Body */}
                  {isOpen && (
                    <div className="border-t border-gold/15 bg-black/40 p-4 space-y-3.5 animate-fade-in">
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-gold-light">
                          {t("สถานที่ท่องเที่ยวในทริป", "Key Attractions")}
                        </p>
                        <div className="mt-1.5 flex flex-wrap gap-1.5">
                          {places.map((place) => (
                            <span
                              key={place}
                              className="rounded-full border border-gold/25 bg-black/50 px-2.5 py-0.5 text-xs text-foreground/85"
                            >
                              • {place}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-gold-light">
                          {t("ราคารวมแล้ว", "Package Inclusions")}
                        </p>
                        <div className="mt-1.5 flex flex-wrap gap-1.5">
                          {includes.map((inc) => (
                            <span
                              key={inc}
                              className="rounded-full border border-gold/25 bg-gold/10 px-2.5 py-0.5 text-xs text-foreground/80"
                            >
                              ✓ {inc}
                            </span>
                          ))}
                        </div>
                      </div>

                      {p.prices && (
                        <div className="rounded-xl border border-gold/20 bg-black/50 p-2.5">
                          <p className="text-[10px] uppercase tracking-wider text-foreground/50">
                            {t("อัตราค่าบริการ", "Rate")}
                          </p>
                          <div className="mt-1 space-y-1">
                            {p.prices.map((pr) => (
                              <div
                                key={pr.labelEn}
                                className="flex items-center justify-between text-xs"
                              >
                                <span className="text-foreground/75">
                                  {lang === "th" ? pr.labelTh : pr.labelEn}
                                </span>
                                <span className="font-semibold text-gold">
                                  {pr.value} {t("บาท", "THB")}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <a
                        href="#booking"
                        className="bg-gold-gradient flex h-10 w-full items-center justify-center rounded-full text-xs font-bold uppercase tracking-wider text-black shadow-md shadow-gold/20 transition active:scale-95"
                      >
                        {t("จองทัวร์นี้", "Book This Tour")}
                      </a>
                    </div>
                  )}
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* ---------- Desktop: 2 Columns Cards Grid ---------- */}
        <div className="mt-16 hidden md:grid md:grid-cols-2 gap-8">
          {packages.map((p, i) => {
            const title = lang === "th" ? p.titleTh : p.titleEn;
            const sub = lang === "th" ? p.titleEn : p.titleTh;
            const duration = lang === "th" ? p.durationTh : p.durationEn;
            const places = lang === "th" ? p.placesTh : p.placesEn;
            const includes = lang === "th" ? p.includesTh : p.includesEn;

            return (
              <Reveal key={p.titleEn} delay={i * 120} className="h-full">
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gold/25 bg-white/[0.03] transition duration-500 hover:-translate-y-2 hover:border-gold/60 hover:shadow-2xl hover:shadow-gold/10">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.alt}
                      fill
                      sizes="50vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"
                    />
                    <span className="absolute left-4 top-4 rounded-full border border-gold/50 bg-black/60 px-3 py-1 text-xs font-semibold text-gold backdrop-blur">
                      ◷ {duration}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6 sm:p-8">
                    <h3 className="font-display text-2xl sm:text-3xl font-semibold text-gold-light">
                      {title}
                    </h3>
                    <p className="mt-1 text-xs uppercase tracking-widest text-foreground/50">
                      {sub}
                    </p>

                    <div className="mt-5 space-y-4 flex-1">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-gold">
                          {t("สถานที่ท่องเที่ยว", "Key Sights")}
                        </p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {places.map((place) => (
                            <span
                              key={place}
                              className="rounded-full border border-gold/20 bg-black/40 px-3 py-1 text-xs text-foreground/80"
                            >
                              • {place}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-gold">
                          {t("ราคารวมแล้ว", "Included in Package")}
                        </p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {includes.map((inc) => (
                            <span
                              key={inc}
                              className="rounded-full border border-gold/20 bg-gold/10 px-3 py-1 text-xs text-foreground/80"
                            >
                              ✓ {inc}
                            </span>
                          ))}
                        </div>
                      </div>

                      {p.prices && (
                        <div className="rounded-xl border border-gold/20 bg-black/40 p-3 mt-4">
                          <p className="text-xs uppercase tracking-wider text-foreground/50">
                            {t("อัตราค่าบริการ", "Rate")}
                          </p>
                          <div className="mt-1 space-y-1">
                            {p.prices.map((pr) => (
                              <div
                                key={pr.labelEn}
                                className="flex items-center justify-between text-sm"
                              >
                                <span className="text-foreground/80">
                                  {lang === "th" ? pr.labelTh : pr.labelEn}
                                </span>
                                <span className="font-semibold text-gold">
                                  {pr.value} {t("บาท", "THB")}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <a
                      href="#booking"
                      className="mt-6 flex h-12 items-center justify-center rounded-full border border-gold/60 text-sm font-semibold uppercase tracking-widest text-gold transition duration-300 hover:bg-gold/10 active:scale-95"
                    >
                      {t("จองทริปนี้", "Book This Tour")}
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
