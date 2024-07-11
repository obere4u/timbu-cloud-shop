import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Links from "./components/Links";
import NavButtons from "./components/buttons";
import { cn } from "@/utils/cn";

export default function Navbar() {
  const [header, setHeader] = useState(false);

  const scrollHeader = () => {
    if (window.scrollY >= 70) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
    return () => {
      window.removeEventListener("scroll", scrollHeader);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed max-w-[1444px] w-full z-10 p-8 flex items-center justify-between transition duration-300",
        {
          "bg-secondary-lightGrey": !header,
          "bg-primary-richBlack": header,
        }
      )}
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
      <Links header={header} />

      {/* Buttons */}
      <NavButtons />
    </nav>
  );
}
