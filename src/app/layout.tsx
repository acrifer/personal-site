import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sans = Manrope({
  variable: "--font-sans-custom",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Crifer | Canvas Portfolio",
  description:
    "Crifer's in-progress portfolio for HandoffOS and personal-site, presented with a magazine-inspired Canvas interface.",
  openGraph: {
    title: "Crifer | Canvas Portfolio",
    description:
      "In-progress projects including HandoffOS and personal-site, presented with Canvas motion and editorial layout.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${display.variable} ${sans.variable} scroll-smooth antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
