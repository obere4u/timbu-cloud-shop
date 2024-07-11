"use client";
import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import Footer from "@/components/footer/Footer";

export default function ClientLayout({ children }) {
  return (
    <div className="max-w-[1440px] flex flex-col h-screen">
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
