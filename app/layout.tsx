import type { Metadata } from "next";
import { Instrument_Sans, JetBrains_Mono, Outfit } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const outfit = Outfit({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-outfit" });
const instrument = Instrument_Sans({ subsets: ["latin"], variable: "--font-instrument-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-jetbrains-mono" });

export const metadata: Metadata = {
  title: { default: "JobsMator", template: "%s · JobsMator" },
  description: "Upload a resume, pick your interests and job sites, get a ranked shortlist with a reason for every match.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${instrument.variable} ${mono.variable}`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
