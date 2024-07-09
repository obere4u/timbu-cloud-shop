import Link from "next/link";
import React from "react";
import Links from "./components/Links";
import { cn } from "@/utils/cn";
import NavButtons from "./components/buttons";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed z-[10] w-full flex items-center justify-between bg-secondary-lightGrey p-8">
      {/*Logo*/}
      {/*
       * &#123; is the left hand curly bracket
       * &#125; is the right hand curly bracket
       */}
      <Link
        href={"/"}
        className={cn("text-primary-obereGrey")}
      >
        <Image
          src={"/logo.png"}
          width={61.05}
          height={20}
          alt="Timbu cloud store logo"
        />
      </Link>

      {/*Links*/}

      <Links />

      {/*Buttons */}
      <NavButtons />
    </nav>
  );
}
