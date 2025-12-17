import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
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
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
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
          <div className=" flex flex-col bg-[#152D23] overflow-hidden">
            <Header />
            {children}

            <Footer />
          </div>
        <Toaster />
      </body>
    </html>
  );
}
