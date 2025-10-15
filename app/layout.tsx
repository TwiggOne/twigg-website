import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LenisScroll } from "@/components/landing/LenisScoll";
import { Header } from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-bricolage",
});

export const metadata: Metadata = {
  title: "Twigg",
  description: "Turning money chaos into clarity, one breakthrough at a time.",
  icons: {
    icon: "/logo.svg",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bricolage.className} antialiased`}
      >
        <LenisScroll>
          <div className=" flex flex-col bg-[#152D23] ">
            <Header />
            {children}

            <Footer />
          </div>
        </LenisScroll>
        <Toaster />
      </body>
    </html>
  );
}
