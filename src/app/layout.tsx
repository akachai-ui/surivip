import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Noto_Sans_Thai } from "next/font/google";
import MobileActionBar from "@/components/MobileActionBar";
import Navbar from "@/components/Navbar";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const displaySerif = Cormorant_Garamond({
  variable: "--font-display-serif",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const sansThai = Noto_Sans_Thai({
  variable: "--font-sans-th",
  subsets: ["thai", "latin"],
});

export const viewport: Viewport = {
  themeColor: "#0b0b0c",
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "SURI VIP | Private Transfer & Car Service",
  description:
    "SURI VIP — Your premium transfer service from the airport to anywhere. บริการรถเช่าพร้อมคนขับระดับพรีเมียม",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="th"
      className={`${displaySerif.variable} ${sansThai.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col pb-[calc(4.5rem+env(safe-area-inset-bottom))] md:pb-0">
        <LanguageProvider>
          <Navbar />
          {children}
          <MobileActionBar />
        </LanguageProvider>
      </body>
    </html>
  );
}
