import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "S.S Enterprise — Precision. Purity. Partnership.",
  description:
    "Pakistan's trusted supplier of pharmaceutical & cosmetics raw materials, excipients, lab chemicals, glassware and HPLC columns. Est. 2017, Karachi.",
  keywords: [
    "pharmaceutical raw material supplier Pakistan",
    "lab chemicals Karachi",
    "excipients supplier Pakistan",
    "HPLC column supplier",
    "cosmetics raw material Pakistan",
    "glassware supplier Karachi",
  ],
  openGraph: {
    title: "S.S Enterprise — Precision. Purity. Partnership.",
    description:
      "Trusted pharma raw materials importer and lab chemical supplier — Karachi, Pakistan.",
    url: "https://ssenterprisepk.com",
    siteName: "S.S Enterprise",
    locale: "en_PK",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ background: "#f0f6ff" }}>{children}</body>
    </html>
  );
}