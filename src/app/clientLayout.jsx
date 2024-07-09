"use client";
import Navbar from "@/components/navbar/Navbar";
import "./globals.css";

export default function ClientLayout({ children }) {
  return (
    <div className="max-w-[1440px] mx-auto h-full">
      <Navbar />
      <div>{children}</div>
    </div>
  );
}
