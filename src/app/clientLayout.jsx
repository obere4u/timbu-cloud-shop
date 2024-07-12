"use client";
import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import Footer from "@/components/footer/Footer";

export default function ClientLayout({ children }) {
  return (
    <div className="relative w-full flex flex-col mx-auto h-screen">
      <Navbar />
      <div className="w-full max-w-[1444px] mx-auto">{children}</div>
      <Footer />
    </div>
  );
}
