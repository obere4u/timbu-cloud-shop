"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/cn";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi"; // Hamburger and Close icons

// Links array
const links = [
  { title: "home", path: "/" },
  { title: "shop", path: "/shop" },
  {
    title: "categories",
    path: "/categories",
    icon: <MdOutlineKeyboardArrowDown />,
  },
  { title: "about us", path: "/about" },
];

const navBtns = [
  { title: "sign up", path: "/sign-up" },
  { title: "Login", path: "/login" },
];

export default function Links({ header }) {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const pathname = usePathname();

  const desktopLinkClasses = (linkPath) =>
    cn(
      "w-fit capitalize text-[1.3rem] text-secondary-mediumGrey hover:text-text-primary hover:scale-[1.03] hover:border-text-primary leading-[24px] transition duration-150 ease-in-out",
      {
        "text-secondary-mediumGrey border-b border-primary-richBlack hover:border-b hover:border-secondary-lightGrey hover:text-secondary-lightGrey":
          header,
        "text-secondary-lightGrey border-b border-secondary-lightGrey scale-[1.03]":
          pathname === linkPath && header,
        "text-text-primary scale-[1.03] border-b border-text-primary":
          pathname === linkPath && !header,
      }
    );

  const mobileLinkClasses = (linkPath) =>
    cn("w-fit flex flex-col my-8 capitalize text-xl hover:scale-[1.02]", {
      "text-primary-obereYellow border-b border-b-primary-obereGrey scale-[1.02]":
        pathname === linkPath,
      "text-primary-richBlack text-secondary-mediumGrey border-b border-primary-richBlack hover:border-b hover:border-secondary-lightGrey hover:text-secondary-lightGrey":
        header,
    });

  const toggleMobileMenu = () => {
    setOpenMobileMenu((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setOpenMobileMenu(false);
  };

  return (
    <div className="w-full flex-grow">
      {/* Desktop menu */}
      <div className="w-full hidden md:flex items-center justify-center sm:space-x-10">
        {links.map((link, index) => (
          <div
            key={index}
            className={desktopLinkClasses(link.path)}
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
        className={cn("md:hidden w-full flex flex-col", {
          "absolute w-1/2 -top-8 -right-8 p-8 pl-0 h-[calc(100vh)] flex flex-col items-start justify-start text-black bg-opacity-90":
            openMobileMenu,
          "text-primary-richBlack bg-primary-richBlack ": header,
          "text-primary-richBlack bg-secondary-lightGrey": !header,
        })}
      >
        <button
          onClick={toggleMobileMenu}
          className={cn("w-8 h-8 ml-auto", {
            "text-secondary-lightGrey": header,
            "text-primary-richBlack": !header
          })}
        >
          {openMobileMenu ? (
            <HiX className="text-3xl" />
          ) : (
            <HiMenu className="text-3xl" />
          )}
        </button>

        {openMobileMenu && (
          <div className="mt-8 w-full flex flex-col items-start px-4">
            {links.map((link, index) => (
              <Link
                key={link.title + index}
                href={link.path}
                className={mobileLinkClasses(link.path)}
                onClick={closeMobileMenu}
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
