// app/team/layout.tsx
import Footer from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import React from "react";

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" flex flex-col">
      <Header />
      {children}

      <Footer />
    </div>
  );
}
