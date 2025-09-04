import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TrackingScripts from "@/components/TrackingScripts";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Launch at Scale - Reverse Funnels Workshop",
  description: "Join Shubh's exclusive workshop on Reverse Funnels and learn how to scale your business to new heights. Limited seats available.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
        style={{ fontFamily: 'var(--font-inter), sans-serif' }}
      >
        <TrackingScripts />
        {children}
      </body>
    </html>
  );
}