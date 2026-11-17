"use client";

import { useLanguage } from "@/context/LanguageContext";

/** Sticky quick-contact bar — mobile only, where most customers browse. */
export default function MobileActionBar() {
  const { t } = useLanguage();

  const actions = [
    {
      label: t("โทร", "Call"),
      href: "tel:+66649696962",
      external: false,
      icon: (
        <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
      ),
    },
    {
      label: "LINE",
      href: "https://line.me/ti/p/~kawjung27",
      external: true,
      icon: (
        <path d="M21 11.5C21 7.4 16.97 4 12 4S3 7.4 3 11.5c0 3.7 3.2 6.7 7.5 7.4.3.1.7.2.8.5.1.3 0 .7 0 1l-.1.7c0 .2-.2.9.8.5s5.4-3.2 7.4-5.5c1.4-1.5 2.1-3 2.1-4.6Z" />
      ),
    },
  ];

  return (
    <nav
      aria-label={t("ติดต่อด่วน", "Quick Contact")}
      className="fixed inset-x-0 bottom-0 z-50 border-t border-gold/30 bg-background/90 pb-[env(safe-area-inset-bottom)] backdrop-blur-md md:hidden"
    >
      <ul className="mx-auto flex max-w-md items-center gap-2 px-3 py-2.5">
        {actions.map((a) => (
          <li key={a.label} className="flex-1">
            <a
              href={a.href}
              {...(a.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="flex h-12 items-center justify-center gap-2 rounded-full border border-gold/50 text-sm font-semibold text-gold transition active:scale-95 active:bg-gold/10"
            >
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
                {a.icon}
              </svg>
              {a.label}
            </a>
          </li>
        ))}
        <li className="flex-[1.3]">
          <a
            href="#booking"
            className="bg-gold-gradient flex h-12 items-center justify-center rounded-full text-sm font-bold uppercase tracking-wider text-black shadow-lg shadow-gold/20 transition active:scale-95"
          >
            {t("จองเลย", "Book Now")}
          </a>
        </li>
      </ul>
    </nav>
  );
}

