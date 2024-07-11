"use client";
import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import Footer from "@/components/footer/Footer";

export default function ClientLayout({ children }) {
  return (
    <div className="relative max-w-[1444px] flex flex-col mx-auto h-screen">
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
