import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
} from "next/font/google";

import "./globals.css";

import Navbar from "@/components/Navbar";
import { ThemeProvider } from "./providers/ThemeProvider";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/WhatsappIcon";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RestoreHealth - Your Partner in Better Health",
  description: "Created by Darkz143",
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`
        ${geistSans.variable}
        ${geistMono.variable}
        h-full
        antialiased
      `}
    >
      <body
        className="
          min-h-full
          bg-white
          text-[#303238]
          transition-colors
          duration-300
          dark:bg-[#0b1220]
          dark:text-white
        "
      >
        <ThemeProvider>
          <Navbar />
          {children}
          <FloatingWhatsAppButton />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}