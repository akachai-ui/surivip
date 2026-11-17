"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/context/LanguageContext";

interface BookingData {
  serviceType: string;
  vehicle: string;
  pickup: string;
  destination: string;
  date: string;
  time: string;
  passengers: number;
  luggage: number;
  name: string;
  phone: string;
  note: string;
}

export default function BookingForm() {
  const { lang, t } = useLanguage();

  const serviceOptions = [
    { th: "รับ-ส่งสนามบิน (Airport Transfer)", en: "Airport Transfer" },
    { th: "เหมารถรายวัน / เดินทางต่างจังหวัด (Private Charter)", en: "Private Charter (Daily / Cross-Province)" },
    { th: "ทัวร์อยุธยา เมืองมรดกโลก (Ayutthaya Tour)", en: "Ayutthaya Heritage Tour" },
    { th: "ทัวร์สมุทรสงคราม ตลาดร่มหุบ (Samut Songkhram)", en: "Samut Songkhram Cultural Tour" },
    { th: "ทัวร์ Safari World & สวนน้ำ (Family Fun)", en: "Bangkok Family Fun Tour" },
    { th: "ทัวร์ Safari World & ดินเนอร์ครูซ (Dinner Cruise)", en: "Bangkok Must-Do & Dinner Cruise" },
    { th: "เส้นทางอื่นๆ กำหนดเอง (Custom Route)", en: "Custom Route / Tailored Journey" },
  ];

  const vehicleOptions = [
    { th: "Luxury SUV 7 ที่นั่ง (1-5 ท่าน)", en: "Luxury SUV (1-5 Guests)" },
    { th: "VIP Van 10 ที่นั่ง (6-9 ท่าน)", en: "VIP Van (6-9 Guests)" },
  ];

  const [formData, setFormData] = useState<BookingData>({
    serviceType: serviceOptions[0].en,
    vehicle: vehicleOptions[0].en,
    pickup: "",
    destination: "",
    date: "",
    time: "",
    passengers: 2,
    luggage: 2,
    name: "",
    phone: "",
    note: "",
  });

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const generateMessageText = () => {
    if (lang === "th") {
      return (
        `สวัสดีครับ สนใจจองรถ SURI VIP\n` +
        `━━━━━━━━━━━━━━━━━━━━\n` +
        `• บริการ: ${formData.serviceType}\n` +
        `• รถ: ${formData.vehicle}\n` +
        `• จุดรับ: ${formData.pickup || "ยังไม่ระบุ"}\n` +
        `• จุดส่ง: ${formData.destination || "ยังไม่ระบุ"}\n` +
        `• วันที่: ${formData.date || "ยังไม่ระบุ"}\n` +
        `• เวลา: ${formData.time || "ยังไม่ระบุ"}\n` +
        `• ผู้โดยสาร: ${formData.passengers} ท่าน | สัมภาระ: ${formData.luggage} ใบ\n` +
        `• ผู้ติดต่อ: ${formData.name || "ยังไม่ระบุ"}\n` +
        `• เบอร์โทร: ${formData.phone || "ยังไม่ระบุ"}\n` +
        (formData.note ? `• หมายเหตุ/เที่ยวบิน: ${formData.note}\n` : "") +
        `━━━━━━━━━━━━━━━━━━━━\n` +
        `รบกวนตรวจสอบคิวและประเมินราคาให้ด้วยครับ ขอบคุณครับ`
      );
    } else {
      return (
        `Hello SURI VIP, I would like to book a private VIP transfer:\n` +
        `━━━━━━━━━━━━━━━━━━━━\n` +
        `• Service: ${formData.serviceType}\n` +
        `• Vehicle: ${formData.vehicle}\n` +
        `• Pick-up: ${formData.pickup || "Not specified"}\n` +
        `• Drop-off: ${formData.destination || "Not specified"}\n` +
        `• Date: ${formData.date || "Not specified"}\n` +
        `• Time: ${formData.time || "Not specified"}\n` +
        `• Passengers: ${formData.passengers} Guests | Luggage: ${formData.luggage} Bags\n` +
        `• Contact Name: ${formData.name || "Not specified"}\n` +
        `• Phone/WhatsApp: ${formData.phone || "Not specified"}\n` +
        (formData.note ? `• Flight No. / Note: ${formData.note}\n` : "") +
        `━━━━━━━━━━━━━━━━━━━━\n` +
        `Please confirm availability and price quote. Thank you!`
      );
    }
  };

  const handleSendToLine = () => {
    const text = generateMessageText();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      showToast(
        lang === "th"
          ? "คัดลอกข้อมูลสรุปแล้ว! กำลังเปิด LINE เพื่อส่งแอดมิน"
          : "Booking summary copied! Opening LINE chat..."
      );
    }

    const lineChatUrl = "https://line.me/ti/p/~kawjung27";
    setTimeout(() => {
      window.open(lineChatUrl, "_blank");
    }, 400);
  };

  const handleSendToWhatsApp = () => {
    const text = generateMessageText();
    const encoded = encodeURIComponent(text);
    const waUrl = `https://wa.me/66649696962?text=${encoded}`;
    window.open(waUrl, "_blank");
  };

  return (
    <section id="booking" className="relative bg-background px-5 py-16 sm:px-6 sm:py-24 lg:px-10">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.06),transparent_60%)]"
      />

      <div className="relative mx-auto max-w-4xl">
        <Reveal className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold sm:text-sm sm:tracking-[0.4em]">
            {t("จองรถสะดวกรวดเร็ว", "Easy Online Reservation")}
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-wide sm:text-6xl">
            <span className="text-gold-gradient">{t("จองบริการรถ VIP", "Book Your Ride")}</span>
          </h2>
          <div className="mx-auto mt-6 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-gold/60" />
            <span className="text-gold">◆</span>
            <span className="h-px w-12 bg-gold/60" />
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-foreground/70 text-sm sm:text-base">
            {t(
              "กรอกข้อมูลการเดินทางเบื้องต้น ระบบจะสรุปข้อมูลและส่งต่อไปยังแอดมินทาง LINE หรือ WhatsApp ทันที",
              "Enter your trip details below. Our system will format and send your request directly to our team via LINE or WhatsApp."
            )}
          </p>
        </Reveal>

        <Reveal delay={150} className="mt-10 sm:mt-14">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendToLine();
            }}
            className="rounded-3xl border border-gold/30 bg-white/[0.02] p-4 sm:p-8 backdrop-blur-sm shadow-2xl shadow-black/60 overflow-hidden w-full max-w-full"
          >
            <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 min-w-0">
              {/* Service Type */}
              <div className="sm:col-span-2 min-w-0">
                <label className="block text-xs font-semibold uppercase tracking-wider text-gold-light mb-2">
                  1. {t("เลือกประเภทบริการ", "Service Type")}
                </label>
                <select
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full min-w-0 rounded-xl border border-gold/30 bg-black/60 px-4 py-3 text-sm text-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                >
                  {serviceOptions.map((opt) => {
                    const label = lang === "th" ? opt.th : opt.en;
                    return (
                      <option key={opt.en} value={label} className="bg-neutral-900 text-foreground">
                        {label}
                      </option>
                    );
                  })}
                </select>
              </div>

              {/* Vehicle Selection */}
              <div className="sm:col-span-2 min-w-0">
                <label className="block text-xs font-semibold uppercase tracking-wider text-gold-light mb-2">
                  2. {t("เลือกรถที่ต้องการ", "Vehicle Selection")}
                </label>
                <div className="grid gap-2.5 sm:grid-cols-2">
                  {vehicleOptions.map((veh) => {
                    const label = lang === "th" ? veh.th : veh.en;
                    const isSelected = formData.vehicle === label;
                    return (
                      <button
                        key={veh.en}
                        type="button"
                        onClick={() => setFormData({ ...formData, vehicle: label })}
                        className={`flex items-center justify-between rounded-xl border p-3.5 text-left text-xs transition duration-200 ${
                          isSelected
                            ? "border-gold bg-gold/15 text-gold-light font-semibold shadow-sm"
                            : "border-gold/25 bg-black/40 text-foreground/75 hover:border-gold/50"
                        }`}
                      >
                        <span>{label}</span>
                        {isSelected && <span className="text-gold">✓</span>}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Pickup Location */}
              <div className="min-w-0">
                <label className="block text-xs font-semibold uppercase tracking-wider text-gold-light mb-2">
                  3. {t("จุดรับ", "Pick-up Location")}
                </label>
                <input
                  type="text"
                  placeholder={t("เช่น สนามบินสุวรรณภูมิ / โรงแรม...", "e.g. Suvarnabhumi Airport / Hotel name...")}
                  value={formData.pickup}
                  onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
                  className="w-full min-w-0 rounded-xl border border-gold/30 bg-black/60 px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                />
              </div>

              {/* Destination */}
              <div className="min-w-0">
                <label className="block text-xs font-semibold uppercase tracking-wider text-gold-light mb-2">
                  4. {t("จุดหมายปลายทาง", "Destination")}
                </label>
                <input
                  type="text"
                  placeholder={t("เช่น พัทยา / หัวหิน / โรงแรม...", "e.g. Pattaya / Hua Hin / Hotel name...")}
                  value={formData.destination}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                  className="w-full min-w-0 rounded-xl border border-gold/30 bg-black/60 px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                />
              </div>

              {/* 5. Date (iOS Safari Overflow Protected) */}
              <div className="min-w-0 w-full">
                <label className="block text-xs font-semibold uppercase tracking-wider text-gold-light mb-2">
                  5. {t("วันที่เดินทาง", "Date")}
                </label>
                <div className="relative w-full min-w-0 overflow-hidden rounded-xl border border-gold/30 bg-black/60 transition-colors focus-within:border-gold focus-within:ring-1 focus-within:ring-gold">
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="block w-full min-w-0 max-w-full appearance-none border-0 bg-transparent px-3.5 py-3 text-sm text-foreground focus:outline-none [color-scheme:dark] box-border"
                  />
                </div>
              </div>

              {/* 6. Time (iOS Safari Overflow Protected) */}
              <div className="min-w-0 w-full">
                <label className="block text-xs font-semibold uppercase tracking-wider text-gold-light mb-2">
                  6. {t("เวลาที่ต้องการให้รับ", "Pick-up Time")}
                </label>
                <div className="relative w-full min-w-0 overflow-hidden rounded-xl border border-gold/30 bg-black/60 transition-colors focus-within:border-gold focus-within:ring-1 focus-within:ring-gold">
                  <input
                    type="time"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="block w-full min-w-0 max-w-full appearance-none border-0 bg-transparent px-3.5 py-3 text-sm text-foreground focus:outline-none [color-scheme:dark] box-border"
                  />
                </div>
              </div>

              {/* Passengers & Luggage */}
              <div className="min-w-0">
                <label className="block text-xs font-semibold uppercase tracking-wider text-gold-light mb-2">
                  7. {t("จำนวนผู้โดยสาร", "Passengers")}
                </label>
                <div className="flex items-center rounded-xl border border-gold/30 bg-black/60 p-1 min-w-0">
                  <button
                    type="button"
                    onClick={() =>
                      setFormData({
                        ...formData,
                        passengers: Math.max(1, formData.passengers - 1),
                      })
                    }
                    className="flex h-9 w-10 items-center justify-center rounded-lg text-lg font-bold text-gold hover:bg-gold/10"
                  >
                    -
                  </button>
                  <span className="flex-1 text-center font-display text-lg font-semibold text-gold-light">
                    {formData.passengers} {t("ท่าน", "Guests")}
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      setFormData({
                        ...formData,
                        passengers: Math.min(10, formData.passengers + 1),
                      })
                    }
                    className="flex h-9 w-10 items-center justify-center rounded-lg text-lg font-bold text-gold hover:bg-gold/10"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="min-w-0">
                <label className="block text-xs font-semibold uppercase tracking-wider text-gold-light mb-2">
                  8. {t("จำนวนสัมภาระ/กระเป๋า", "Luggage")}
                </label>
                <div className="flex items-center rounded-xl border border-gold/30 bg-black/60 p-1 min-w-0">
                  <button
                    type="button"
                    onClick={() =>
                      setFormData({
                        ...formData,
                        luggage: Math.max(0, formData.luggage - 1),
                      })
                    }
                    className="flex h-9 w-10 items-center justify-center rounded-lg text-lg font-bold text-gold hover:bg-gold/10"
                  >
                    -
                  </button>
                  <span className="flex-1 text-center font-display text-lg font-semibold text-gold-light">
                    {formData.luggage} {t("ใบ", "Bags")}
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      setFormData({
                        ...formData,
                        luggage: Math.min(10, formData.luggage + 1),
                      })
                    }
                    className="flex h-9 w-10 items-center justify-center rounded-lg text-lg font-bold text-gold hover:bg-gold/10"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Name */}
              <div className="min-w-0">
                <label className="block text-xs font-semibold uppercase tracking-wider text-gold-light mb-2">
                  9. {t("ชื่อผู้ติดต่อ", "Contact Name")}
                </label>
                <input
                  type="text"
                  placeholder={t("เช่น คุณสมชาย", "e.g. John Smith")}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full min-w-0 rounded-xl border border-gold/30 bg-black/60 px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                />
              </div>

              {/* Phone */}
              <div className="min-w-0">
                <label className="block text-xs font-semibold uppercase tracking-wider text-gold-light mb-2">
                  10. {t("เบอร์โทรศัพท์ / WhatsApp", "Phone / WhatsApp")}
                </label>
                <input
                  type="tel"
                  placeholder={t("เช่น 081-234-5678", "+66 ... / your country code")}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full min-w-0 rounded-xl border border-gold/30 bg-black/60 px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                />
              </div>

              {/* Note */}
              <div className="sm:col-span-2 min-w-0">
                <label className="block text-xs font-semibold uppercase tracking-wider text-gold-light mb-2">
                  11. {t("หมายเหตุเพิ่มเติม / เที่ยวบิน", "Flight No. / Special Requests")}
                </label>
                <textarea
                  rows={2}
                  placeholder={t("เช่น เที่ยวบิน TG640 ถึงเวลา 13:30 น. ต้องการเก้าอี้เด็ก ฯลฯ", "e.g. Flight TG640 arrives 13:30, child car seat requested...")}
                  value={formData.note}
                  onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                  className="w-full min-w-0 rounded-xl border border-gold/30 bg-black/60 px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold resize-none"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 pt-6 border-t border-gold/20 flex flex-col sm:flex-row gap-3">
              {/* Primary: Send to LINE */}
              <button
                type="submit"
                className="bg-gold-gradient flex-1 flex h-13 items-center justify-center gap-2.5 rounded-full text-sm font-bold uppercase tracking-wider text-black shadow-lg shadow-gold/20 transition hover:brightness-110 active:scale-95"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
                  <path d="M21 11.5C21 7.4 16.97 4 12 4S3 7.4 3 11.5c0 3.7 3.2 6.7 7.5 7.4.3.1.7.2.8.5.1.3 0 .7 0 1l-.1.7c0 .2-.2.9.8.5s5.4-3.2 7.4-5.5c1.4-1.5 2.1-3 2.1-4.6Z" />
                </svg>
                {t("ส่งข้อมูลจองผ่าน LINE (แนะนำ)", "Send Booking via LINE")}
              </button>

              {/* Secondary: Send to WhatsApp */}
              <button
                type="button"
                onClick={handleSendToWhatsApp}
                className="flex h-13 items-center justify-center gap-2 rounded-full border border-emerald-500/60 bg-emerald-500/10 px-6 text-xs sm:text-sm font-semibold text-emerald-300 transition hover:bg-emerald-500/20 active:scale-95"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-none stroke-current"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 1.94.55 3.75 1.5 5.29L2.36 21.2a1 1 0 0 0 1.25 1.25l3.91-1.14A9.95 9.95 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2Zm4.83 13.92c-.22.62-1.28 1.18-1.78 1.23-.46.05-.98.07-3.17-.79-2.31-.91-3.8-3.23-3.92-3.39-.12-.16-.94-1.25-.94-2.38 0-1.13.59-1.68.8-1.92.21-.24.46-.3.61-.3.15 0 .31 0 .45.01.14.01.33-.05.51.39.2.48.67 1.63.73 1.75.06.12.1.26.02.42-.08.16-.12.26-.24.4-.12.14-.25.31-.36.42-.12.12-.24.25-.1.49.14.24.62 1.02 1.33 1.65.91.81 1.68 1.06 1.92 1.18.24.12.38.1.52-.06.14-.16.6-.7.76-.94.16-.24.32-.2.53-.12.21.08 1.33.63 1.56.74.23.11.38.17.44.27.06.1.06.58-.16 1.2Z" />
                </svg>
                WhatsApp
              </button>
            </div>

            <p className="mt-3.5 text-center text-xs text-foreground/50">
              {t(
                "* ระบบจะคัดลอกข้อความสรุปและเปิดแอป LINE ทันที สามารถกดวางและส่งเพื่อยืนยันกับแอดมินได้เลยครับ",
                "* Information is pre-formatted and automatically opens LINE / WhatsApp for instant confirmation with our team."
              )}
            </p>
          </form>
        </Reveal>
      </div>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-24 left-1/2 z-50 -translate-x-1/2 rounded-full border border-gold/60 bg-black/95 px-5 py-2.5 text-xs font-semibold text-gold-light shadow-2xl backdrop-blur">
          ✓ {toastMessage}
        </div>
      )}
    </section>
  );
}
