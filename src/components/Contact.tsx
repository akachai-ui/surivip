"use client";

import Image from "next/image";
import { useState } from "react";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/context/LanguageContext";

interface ContactMethod {
  id: string;
  nameTh: string;
  nameEn: string;
  value: string;
  subValueTh: string;
  subValueEn: string;
  href?: string;
  actionTextTh: string;
  actionTextEn: string;
  hasQr?: boolean;
  qrImage?: string;
  icon: React.ReactNode;
}

export default function Contact() {
  const { lang, t } = useLanguage();
  const [selectedQr, setSelectedQr] = useState<ContactMethod | null>(null);
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const contactMethods: ContactMethod[] = [
    {
      id: "phone",
      nameTh: "โทรศัพท์ (Phone Hotline)",
      nameEn: "Phone Hotline 24/7",
      value: "064-969-6962",
      subValueTh: "+66 64 969 6962 (โทรได้ตลอด 24 ชม.)",
      subValueEn: "+66 64 969 6962 (24/7 Direct Call)",
      href: "tel:+66649696962",
      actionTextTh: "โทรออกทันที",
      actionTextEn: "Call Now",
      icon: (
        <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
      ),
    },
    {
      id: "line",
      nameTh: "LINE Official",
      nameEn: "LINE Official Chat",
      value: "kawjung27",
      subValueTh: "LINE ID หรือสแกน QR Code",
      subValueEn: "LINE ID or Scan QR Code",
      href: "https://line.me/ti/p/~kawjung27",
      actionTextTh: "เปิดแชต LINE",
      actionTextEn: "Open LINE Chat",
      hasQr: true,
      qrImage: "/images/qr/line-qr.jpg",
      icon: (
        <path d="M21 11.5C21 7.4 16.97 4 12 4S3 7.4 3 11.5c0 3.7 3.2 6.7 7.5 7.4.3.1.7.2.8.5.1.3 0 .7 0 1l-.1.7c0 .2-.2.9.8.5s5.4-3.2 7.4-5.5c1.4-1.5 2.1-3 2.1-4.6Z" />
      ),
    },
    {
      id: "whatsapp",
      nameTh: "WhatsApp",
      nameEn: "WhatsApp Direct",
      value: "+66 64 969 6962",
      subValueTh: "Suriya Harbantaen (สำหรับชาวต่างชาติ)",
      subValueEn: "Suriya Harbantaen (Direct Instant Chat)",
      href: "https://wa.me/66649696962",
      actionTextTh: "ส่งข้อความ WhatsApp",
      actionTextEn: "Chat on WhatsApp",
      hasQr: true,
      qrImage: "/images/qr/whatsapp-qr.jpg",
      icon: (
        <path d="M12 2C6.48 2 2 6.48 2 12c0 1.94.55 3.75 1.5 5.29L2.36 21.2a1 1 0 0 0 1.25 1.25l3.91-1.14A9.95 9.95 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2Zm4.83 13.92c-.22.62-1.28 1.18-1.78 1.23-.46.05-.98.07-3.17-.79-2.31-.91-3.8-3.23-3.92-3.39-.12-.16-.94-1.25-.94-2.38 0-1.13.59-1.68.8-1.92.21-.24.46-.3.61-.3.15 0 .31 0 .45.01.14.01.33-.05.51.39.2.48.67 1.63.73 1.75.06.12.1.26.02.42-.08.16-.12.26-.24.4-.12.14-.25.31-.36.42-.12.12-.24.25-.1.49.14.24.62 1.02 1.33 1.65.91.81 1.68 1.06 1.92 1.18.24.12.38.1.52-.06.14-.16.6-.7.76-.94.16-.24.32-.2.53-.12.21.08 1.33.63 1.56.74.23.11.38.17.44.27.06.1.06.58-.16 1.2Z" />
      ),
    },
    {
      id: "wechat",
      nameTh: "WeChat",
      nameEn: "WeChat (Weixin)",
      value: "Kaew",
      subValueTh: "WeChat ID หรือสแกน QR Code",
      subValueEn: "WeChat ID or Scan QR Code",
      actionTextTh: "ดู QR Code สแกน",
      actionTextEn: "Scan WeChat QR",
      hasQr: true,
      qrImage: "/images/qr/wechat-qr.jpg",
      icon: (
        <path d="M9 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm5-1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-4.5 7.5c3.87 0 7-2.69 7-6s-3.13-6-7-6-7 2.69-7 6c0 1.88 1.01 3.55 2.6 4.63-.12.63-.42 1.63-.96 2.37 1.08-.18 2.3-.77 2.96-1.3.74.2 1.55.3 2.4.3Z" />
      ),
    },
    {
      id: "email",
      nameTh: "อีเมล (Email)",
      nameEn: "Official Email",
      value: "kawjung27@gmail.com",
      subValueTh: "ส่งรายละเอียดเพื่อขอใบเสนอราคา",
      subValueEn: "Inquiries & Corporate Quotations",
      href: "mailto:kawjung27@gmail.com",
      actionTextTh: "ส่งอีเมลหาเรา",
      actionTextEn: "Send Email",
      icon: (
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2Zm0 3.5 8 5 8-5M4 6l8 5 8-5" />
      ),
    },
  ];

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2500);
  };

  return (
    <section id="contact" className="relative bg-background px-5 py-16 sm:px-6 sm:py-24 lg:px-10 lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(212,175,55,0.08),transparent_70%)]"
      />

      <div className="relative mx-auto max-w-6xl">
        <Reveal className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold sm:text-sm sm:tracking-[0.4em]">
            {t("ติดต่อเราตลอด 24 ชั่วโมง", "24/7 VIP Chauffeur Service")}
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-wide sm:text-6xl">
            <span className="text-gold-gradient">{t("ช่องทางการติดต่อ", "Contact Us")}</span>
          </h2>
          <div className="mx-auto mt-6 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-gold/60" />
            <span className="text-gold">◆</span>
            <span className="h-px w-12 bg-gold/60" />
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-foreground/70">
            {t(
              "ยินดีให้บริการและตอบกลับตลอด 24 ชั่วโมง ติดต่อเราผ่านช่องทางที่คุณสะดวกได้ทันที",
              "Available 24 hours a day, 7 days a week. Contact our team via your preferred messaging platform."
            )}
          </p>
        </Reveal>

        {/* Contact Method Cards Grid */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
          {contactMethods.map((m, i) => {
            const name = lang === "th" ? m.nameTh : m.nameEn;
            const subValue = lang === "th" ? m.subValueTh : m.subValueEn;
            const actionText = lang === "th" ? m.actionTextTh : m.actionTextEn;

            return (
              <Reveal key={m.id} delay={i * 70} className="h-full">
                <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-gold/25 bg-white/[0.03] p-5 sm:p-6 transition duration-300 hover:border-gold/60 hover:bg-gold/[0.04]">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold/40 bg-gold/10 text-gold transition duration-300 group-hover:scale-110 group-hover:border-gold group-hover:bg-gold/20">
                        <svg
                          viewBox="0 0 24 24"
                          className="h-5 w-5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden
                        >
                          {m.icon}
                        </svg>
                      </span>
                      <div>
                        <h3 className="font-display text-lg font-semibold text-gold-light">
                          {name}
                        </h3>
                        <p className="text-xs text-foreground/50">{subValue}</p>
                      </div>
                    </div>

                    {m.hasQr && (
                      <button
                        type="button"
                        onClick={() => setSelectedQr(m)}
                        className="rounded-lg border border-gold/30 bg-black/40 px-2 py-1 text-[11px] text-gold hover:border-gold hover:bg-gold/10 transition"
                      >
                        QR Code
                      </button>
                    )}
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-gold/15 pt-4">
                    <span className="font-mono text-sm font-semibold text-foreground/90 select-all">
                      {m.value}
                    </span>

                    <button
                      type="button"
                      onClick={() => copyToClipboard(m.value, m.nameTh)}
                      className="text-xs text-gold/70 hover:text-gold transition font-medium"
                    >
                      {copiedText === m.nameTh ? t("คัดลอกแล้ว ✓", "Copied ✓") : t("คัดลอก", "Copy")}
                    </button>
                  </div>

                  <div className="mt-3">
                    {m.href ? (
                      <a
                        href={m.href}
                        {...(m.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="flex h-10 w-full items-center justify-center rounded-xl border border-gold/40 bg-gold/10 text-xs font-semibold text-gold-light hover:bg-gold hover:text-black transition"
                      >
                        {actionText}
                      </a>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setSelectedQr(m)}
                        className="flex h-10 w-full items-center justify-center rounded-xl border border-gold/40 bg-gold/10 text-xs font-semibold text-gold-light hover:bg-gold hover:text-black transition"
                      >
                        {actionText}
                      </button>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* QR Code Modal */}
      {selectedQr && selectedQr.qrImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedQr(null)}
        >
          <div
            className="relative w-full max-w-sm rounded-3xl border border-gold/40 bg-neutral-950 p-6 text-center shadow-2xl shadow-gold/10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedQr(null)}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-gold/30 text-gold hover:bg-gold/10"
            >
              ✕
            </button>

            <h3 className="font-display text-2xl font-bold text-gold-light">
              {lang === "th" ? selectedQr.nameTh : selectedQr.nameEn}
            </h3>
            <p className="mt-1 text-xs text-foreground/60">
              {t("สแกน QR Code เพื่อติดต่อหรือเพิ่มเพื่อน", "Scan QR Code to connect instantly")}
            </p>

            <div className="relative mx-auto mt-6 aspect-square w-64 overflow-hidden rounded-2xl border-2 border-gold/40 bg-white p-3 shadow-inner">
              <Image
                src={selectedQr.qrImage}
                alt={selectedQr.nameEn}
                fill
                sizes="256px"
                className="object-contain p-2"
              />
            </div>

            <p className="mt-4 font-mono text-sm text-gold font-bold">
              ID: {selectedQr.value}
            </p>

            <button
              type="button"
              onClick={() => setSelectedQr(null)}
              className="mt-6 w-full rounded-xl bg-gold py-3 text-xs font-bold uppercase tracking-wider text-black hover:bg-gold-light transition"
            >
              {t("ปิดหน้าต่าง", "Close")}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
