"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/context/LanguageContext";

interface GalleryItem {
  id: string;
  titleTh: string;
  titleEn: string;
  subtitleTh: string;
  subtitleEn: string;
  image: string;
  badgeTh: string;
  badgeEn: string;
  priceTh?: string;
  priceEn?: string;
}

export default function TourGallery() {
  const { lang, t } = useLanguage();
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: "ayutthaya",
      titleTh: "ทัวร์อยุธยา เมืองมรดกโลก",
      titleEn: "Ayutthaya Heritage Day Tour",
      subtitleTh: "วัดมหาธาตุ • วัดพระศรีสรรเพชญ์ • วัดใหญ่ชัยมงคล • วัดไชยวัฒนาราม",
      subtitleEn: "Wat Mahathat • Wat Phra Si Sanphet • Wat Yai Chai Mongkhon • Wat Chaiwatthanaram",
      image: "/images/gallery/ayutthaya-tour.jpg",
      badgeTh: "มรดกโลก UNESCO",
      badgeEn: "UNESCO World Heritage",
      priceTh: "3,500 บาท",
      priceEn: "3,500 THB",
    },
    {
      id: "samut-songkhram",
      titleTh: "ทัวร์สมุทรสงคราม ตลาดร่มหุบ & ตลาดน้ำ",
      titleEn: "Samut Songkhram Cultural Day Trip",
      subtitleTh: "ตลาดร่มหุบ • ตลาดน้ำอัมพวา/ดำเนินสะดวก • น้ำตาลมะพร้าว • ล่องเรือชมลิงแสม",
      subtitleEn: "Maeklong Railway Market • Floating Market • Coconut Sugar House • Swimming Monkeys",
      image: "/images/gallery/samut-songkhram-tour.jpg",
      badgeTh: "รวมค่าเข้า & ค่าเรือ",
      badgeEn: "All-Inclusive Package",
      priceTh: "เริ่มต้น 5,500 บาท",
      priceEn: "From 5,500 THB",
    },
    {
      id: "bangkok-safari-waterpark",
      titleTh: "ทัวร์ 3 จุดสุดมันส์ (Safari World + สวนน้ำ)",
      titleEn: "Bangkok 3 Amazing Experiences",
      subtitleTh: "Safari World • สวนน้ำ Siam Amazing Park • Chocolate Ville",
      subtitleEn: "Safari World Open Zoo • Siam Amazing Park Water World • Chocolate Ville",
      image: "/images/gallery/bangkok-3-places.jpg",
      badgeTh: "ยอดนิยมสำหรับครอบครัว",
      badgeEn: "Family Favorite",
      priceTh: "รวมรถรับ-ส่งส่วนตัว",
      priceEn: "Private Round-Trip",
    },
    {
      id: "bangkok-safari-cruise",
      titleTh: "ทัวร์ Safari World & ดินเนอร์ครูซแม่น้ำเจ้าพระยา",
      titleEn: "Bangkok Must-Do & Dinner Cruise",
      subtitleTh: "สวนสัตว์ Safari World • ถ่ายรูป Chocolate Ville • ล่องเรือดินเนอร์หรู",
      subtitleEn: "Safari World Adventure • Romantic Chocolate Ville • Luxury Chao Phraya Cruise",
      image: "/images/gallery/bangkok-safari-cruise.jpg",
      badgeTh: "โรแมนติก & ไฮไลต์",
      badgeEn: "Romantic & Highlights",
      priceTh: "รวมรถรับส่ง + ล่องเรือ",
      priceEn: "All Day Full Service",
    },
    {
      id: "dinner-cruise",
      titleTh: "Bangkok Dinner Cruise ล่องเรือดินเนอร์เจ้าพระยา",
      titleEn: "Bangkok Luxury Dinner Cruise",
      subtitleTh: "บุฟเฟต์ซีฟู้ด & นานาชาติ • ชมวิววัดอรุณยามค่ำคืน • การแสดงรำไทย",
      subtitleEn: "International Seafood Buffet • Wat Arun Night View • Traditional Thai Dance",
      image: "/images/gallery/dinner-cruise.jpg",
      badgeTh: "วิวหลักล้าน",
      badgeEn: "Scenic Night Landmark",
      priceTh: "ออกเดินทางทุกวัน 19:00",
      priceEn: "Daily Departure 7 PM",
    },
    {
      id: "samut-flyer",
      titleTh: "โปรแกรมสมุทรสงคราม All-Inclusive",
      titleEn: "Explore the Best of Samut Songkhram",
      subtitleTh: "เที่ยวครบ 4 จุดไฮไลต์ พร้อมน้ำดื่ม ผ้าเย็น ประกันภัย น้ำมัน และค่าทางด่วน",
      subtitleEn: "4 Key Destinations with Fuel, Expressways, Boat Fees & Travel Insurance Included",
      image: "/images/gallery/samut-songkhram-flyer.jpg",
      badgeTh: "บริการครบวงจร",
      badgeEn: "Full Inclusions",
      priceTh: "SUV & VIP Van",
      priceEn: "SUV & VIP Van",
    },
    {
      id: "safari-park-city",
      titleTh: "วันเดย์ทริป Safari World & Siam Park City",
      titleEn: "One Day Trip: 3 Amazing Destinations",
      subtitleTh: "เที่ยวจุใจ 3 สไตล์ สัตว์ป่า สวนน้ำ และหมู่บ้านช็อกโกแลตแสนอบอุ่น",
      subtitleEn: "Wildlife, Thrilling Water Slides, and European Village in One Unforgettable Day",
      image: "/images/gallery/bangkok-safari-waterpark.jpg",
      badgeTh: "สนุกได้ทุกวัย",
      badgeEn: "Fun For All Ages",
      priceTh: "จองล่วงหน้า",
      priceEn: "Advance Booking",
    },
    {
      id: "surivip-overview",
      titleTh: "SURI VIP Private Transfer บริการทั่วไทย",
      titleEn: "SURI VIP Executive Transfer & Tours",
      subtitleTh: "บริการรับ-ส่งสนามบินสุวรรณภูมิ ดอนเมือง เหมารายวัน เดินทางทั่วไทย 24 ชม.",
      subtitleEn: "Airport Transfers, Nationwide Charters & Sightseeing with 24/7 Professional Driver",
      image: "/images/gallery/surivip-brochure.jpg",
      badgeTh: "ใบอนุญาต & คนขับมืออาชีพ",
      badgeEn: "Licensed VIP Chauffeur",
      priceTh: "ติดต่อ 064-969-6962",
      priceEn: "Hotline +66 64 969 6962",
    },
  ];

  const handleLineBooking = (item: GalleryItem) => {
    const tourTitle = lang === "th" ? item.titleTh : item.titleEn;
    const text = lang === "th"
      ? `สวัสดีครับ สนใจสอบถาม/จองโปรแกรมทัวร์: ${tourTitle}\nจากหน้าเว็บไซต์ SURI VIP รบกวนแจ้งคิวว่างและรายละเอียดเพิ่มเติมด้วยครับ`
      : `Hello SURI VIP, I am interested in booking the tour: ${tourTitle}.\nPlease confirm availability and details. Thank you!`;

    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text).catch(() => {});
    }
    window.open("https://line.me/ti/p/~kawjung27", "_blank");
  };

  return (
    <section id="gallery" className="relative bg-[#070708] px-4 py-16 sm:px-6 sm:py-24 lg:px-10 lg:py-32 border-t border-gold/15 overflow-hidden">
      {/* Background ambient lighting */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[900px] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.06)_0%,transparent_70%)] blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <Reveal className="text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-gold-light">
            <span>✦ {t("โปสเตอร์โปรแกรม & ผลงานจริง", "Official Tour Flyers & Gallery")}</span>
          </div>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-wide sm:text-5xl lg:text-6xl">
            <span className="text-gold-gradient">{t("แกลเลอรีโปรแกรมทัวร์ยอดนิยม", "Tour Posters & Gallery")}</span>
          </h2>
          <div className="mx-auto mt-6 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-gold/60" />
            <span className="text-gold">◆</span>
            <span className="h-px w-12 bg-gold/60" />
          </div>
          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-foreground/70">
            {t(
              "รวมโปสเตอร์โปรแกรมการเดินทางจริง รายละเอียดจุดแวะ และราคาโปรโมชัน สามารถแตะที่รูปเพื่อดูภาพขยายและกดจองได้ทันที",
              "Browse our authentic tour itineraries, complete route details, and package rates. Tap any poster to view full resolution."
            )}
          </p>
        </Reveal>

        {/* Gallery Grid */}
        <div className="mt-12 grid grid-cols-2 gap-3.5 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
          {galleryItems.map((item, idx) => {
            const title = lang === "th" ? item.titleTh : item.titleEn;
            const subtitle = lang === "th" ? item.subtitleTh : item.subtitleEn;
            const badge = lang === "th" ? item.badgeTh : item.badgeEn;
            const price = lang === "th" ? item.priceTh : item.priceEn;

            return (
              <Reveal key={item.id} delay={idx * 60}>
                <article
                  onClick={() => setSelectedItem(item)}
                  className="group relative cursor-pointer overflow-hidden rounded-2xl border border-gold/25 bg-white/[0.02] shadow-lg shadow-black/50 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold hover:shadow-2xl hover:shadow-gold/15 active:scale-[0.98]"
                >
                  {/* Poster Image Container */}
                  <div className="relative aspect-[2/3] w-full overflow-hidden bg-black/60">
                    <Image
                      src={item.image}
                      alt={title}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                    {/* Top Badge */}
                    <span className="absolute left-2.5 top-2.5 max-w-[85%] truncate rounded-full border border-gold/40 bg-black/75 px-2 py-0.5 text-[10px] font-semibold text-gold-light backdrop-blur shadow-sm">
                      {badge}
                    </span>

                    {/* Magnifier Icon Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold bg-black/80 text-gold shadow-lg shadow-gold/30">
                        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="2">
                          <circle cx="11" cy="11" r="8" />
                          <path d="m21 21-4.35-4.35M11 8v6M8 11h6" />
                        </svg>
                      </span>
                    </div>

                    {/* Price Tag if available */}
                    {price && (
                      <div className="absolute bottom-2.5 right-2.5 rounded-lg border border-gold/50 bg-black/85 px-2 py-1 text-[11px] font-bold text-gold-light shadow-md backdrop-blur">
                        {price}
                      </div>
                    )}
                  </div>

                  {/* Caption */}
                  <div className="p-3 sm:p-4">
                    <h3 className="font-display text-sm sm:text-base font-semibold leading-tight text-foreground/95 group-hover:text-gold-light transition-colors line-clamp-1">
                      {title}
                    </h3>
                    <p className="mt-1 text-[11px] text-foreground/50 line-clamp-2 leading-relaxed">
                      {subtitle}
                    </p>
                    <div className="mt-3 flex items-center justify-between text-[11px] text-gold pt-2 border-t border-gold/15">
                      <span className="font-medium group-hover:underline">
                        {t("ดูภาพขยาย", "Enlarge")} ↗
                      </span>
                      <span className="text-[10px] text-foreground/40">SURI VIP</span>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Quick Booking Callout */}
        <Reveal delay={250} className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 rounded-2xl border border-gold/30 bg-gold/5 p-4 sm:px-6 backdrop-blur">
            <span className="text-xs sm:text-sm text-foreground/80">
              {t("สนใจโปรแกรมใดเป็นพิเศษ หรือต้องการจัดทริปเฉพาะกลุ่ม?", "Interested in a specific tour or customized private trip?")}
            </span>
            <a
              href="https://line.me/ti/p/~kawjung27"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2 text-xs font-bold text-black shadow-md shadow-gold/20 hover:brightness-110 active:scale-95 transition-all"
            >
              <span>{t("สอบถามคิวว่างทาง LINE", "Inquire via LINE")}</span>
              <span>→</span>
            </a>
          </div>
        </Reveal>
      </div>

      {/* Lightbox Modal for Enlarge View */}
      {selectedItem && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedItem(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-3 sm:p-6 backdrop-blur-md animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex flex-col max-h-[95vh] w-full max-w-2xl overflow-hidden rounded-2xl border border-gold/50 bg-[#0e0e12] shadow-2xl shadow-gold/15 animate-scale-up"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-gold/20 bg-black/80 px-4 py-3">
              <div className="min-w-0 pr-3">
                <h3 className="font-display text-base sm:text-lg font-bold text-gold-light truncate">
                  {lang === "th" ? selectedItem.titleTh : selectedItem.titleEn}
                </h3>
                <p className="text-[11px] text-foreground/60 truncate">
                  {lang === "th" ? selectedItem.subtitleTh : selectedItem.subtitleEn}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                aria-label="Close modal"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-white/5 text-gold hover:bg-gold hover:text-black transition active:scale-95 text-base font-bold"
              >
                ✕
              </button>
            </div>

            {/* Poster Scrollable Image Container */}
            <div className="relative flex-1 overflow-auto p-2 bg-black/90 flex items-center justify-center max-h-[72vh]">
              <div className="relative w-full aspect-[2/3] max-w-lg">
                <Image
                  src={selectedItem.image}
                  alt={lang === "th" ? selectedItem.titleTh : selectedItem.titleEn}
                  fill
                  sizes="(min-width: 768px) 600px, 95vw"
                  className="object-contain rounded-lg"
                  priority
                />
              </div>
            </div>

            {/* Modal Bottom Bar */}
            <div className="flex items-center justify-between gap-3 border-t border-gold/20 bg-black/80 p-3 sm:px-5">
              <span className="text-xs font-semibold text-gold-light">
                {selectedItem.priceTh && (lang === "th" ? selectedItem.priceTh : selectedItem.priceEn)}
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedItem(null)}
                  className="rounded-xl border border-gold/30 px-3 py-2 text-xs text-foreground/70 hover:text-foreground"
                >
                  {t("ปิด", "Close")}
                </button>
                <button
                  type="button"
                  onClick={() => handleLineBooking(selectedItem)}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-gold px-4 py-2 text-xs font-bold text-black shadow-md shadow-gold/25 hover:brightness-110 active:scale-95"
                >
                  <span>{t("จองโปรแกรมนี้ผ่าน LINE", "Book this Tour on LINE")}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
