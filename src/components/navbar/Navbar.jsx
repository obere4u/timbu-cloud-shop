import Link from "next/link";
import React, { useEffect, useState } from "react";
import Links from "./components/Links";
import { cn } from "@/utils/cn";
import NavButtons from "./components/buttons";
import Image from "next/image";

export default function Navbar() {
  const [header, setHeader] = useState(false);

  const scrollHeader = () => {
    if (window.scrollY >= 1) {
      return setHeader(true);
    } 
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader)

    return () => {
      window.removeEventListener("scroll", scrollHeader);
    }
  }, [])
  return (
    <nav
      className={`${
        header && "fixed "
      } w-full z-[100] flex items-center justify-between bg-secondary-lightGrey p-8`}
    >
      {/* Logo */}
      <Link
        href="/"
        className={cn("text-primary-obereGrey")}
      >
        <Image
          src="/logo.png"
          width={61.05}
          height={20}
          alt="Timbu cloud store logo"
        />
      </Link>

      {/* Links */}
      <Links />

      {/* Buttons */}
      <NavButtons />
    </nav>
  );
}
