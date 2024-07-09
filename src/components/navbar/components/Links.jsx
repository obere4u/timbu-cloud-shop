"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/cn";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

// Links array
const links = [
  {
    title: "home",
    path: "/",
  },
  {
    title: "shop",
    path: "/shop",
  },
  {
    title: "categories",
    path: "/categories",
    icon: <MdOutlineKeyboardArrowDown />,
  },
  {
    title: "about us",
    path: "/about",
  },
];

const navBtns = [
  {
    title: "sign up",
    path: "/sign-up",
  },
  {
    title: "Login",
    path: "/login",
  },
];

export default function Links() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const pathname = usePathname();

  return (
    <div className="w-full flex-1">
      {/* Desktop menu */}
      <div className="w-full hidden sm:flex sm:w-[50%] sm:mx-auto sm:space-x-10">
        {links.map((link, index) => (
          <div
            key={index}
            className={cn(
              "w-fit capitalize text-[1.3rem] leading-[24px] text-secondary-mediumGrey hover:text-text-primary hover:scale-[1.03] transition duration-150 ease-in-out",
              {
                "text-text-primary scale-[1.03] border-b border-text-primary":
                  pathname === link.path,
              }
            )}
          >
            <Link
              href={link.path}
              className="flex items-center space-x-1"
            >
              {link.title}
              {link.icon && <span className="text-[24px]">{link.icon}</span>}
            </Link>
          </div>
        ))}
      </div>

      {/* Mobile Links */}
      <div
        className={`sm:hidden ml-auto text-white ${
          openMobileMenu
            ? "absolute pt-10 top-0 right-0 w-1/2 bg-primary-obereWhite h-screen flex items-start justify-center flex-row-reverse text-black"
            : ""
        }`}
      >
        <button onClick={() => setOpenMobileMenu((prev) => !prev)}>Menu</button>

        {openMobileMenu && (
          <div className="mt-8">
            {links.map((link, index) => (
              <Link
                key={link.title + index}
                href={link.path}
                className={cn(
                  "w-fit flex flex-col my-8 capitalize text-primary-obereGrey hover:text-primary-obereYellow text-xl hover:scale-[1.02]",
                  {
                    "text-primary-obereYellow border-b border-b-primary-obereGrey scale-[1.02]":
                      pathname === link.path,
                  }
                )}
              >
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}