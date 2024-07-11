import React from "react";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { usePathname } from "next/navigation";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { FaRegStar, FaRegUser } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";

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

export default function NavButtons({ header }) {
  const pathname = usePathname();

  const cartItems = [
    <HiOutlineMagnifyingGlass />,
    <FaRegUser />,
    <FaRegStar />,
  ];

  return (
    <div className="w-fit flex space-x-4">
      {/*Login and others */}
      <div className="flex space-x-6 items-center">
        <Link href={"/cart"}>
          <div
            className={cn(
              "relative flex hover:scale-[1.03] w-full ml-auto items-center space-x-6",
              {
                hidden: pathname !== "/",
              }
            )}
          >
            <span className=" absolute z-10 -top-[8px] -right-2 rounded-full h-[16px] w-[16px] bg-accent-softRed text-center text-[0.75rem] text-secondary-lightGrey">
              9
            </span>
            <HiOutlineShoppingBag
              className={cn("relative w-[18px] h-[18px] text-text-primary", {
                "text-secondary-lightGrey": header,
              })}
            />
          </div>
        </Link>

        {navBtns.map((navBtn, index) => (
          <Link
            key={index}
            href={navBtn.path}
            className={cn(
              "w-fit capitalize text-primary-lightCyan text-[1.3rem] text-center  hover:text-opacity-70 transition duration-150 ease-in-out",
              {
                " text-text-primary scale-[1.02]": pathname === navBtn.path,
                hidden: pathname !== "/",
                " text-text-secondary scale-[1.02] bg-primary-lightCyan px-8 py-2 rounded-md hover:bg-opacity-80 transition duration-150 ease-in-out":
                  navBtn.path === "/login",
              }
            )}
          >
            {navBtn.title}
          </Link>
        ))}
      </div>

      {/*Cart and others */}
      <div
        className={cn("w-full ml-auto flex items-center space-x-6", {
          hidden: pathname === "/",
        })}
      >
        {cartItems.map((item) => (
          <Link
            key={item}
            href={"#"}
            className={cn("relative w-[18px] h-[18px] text-text-primary", {
              "text-secondary-lightGrey": header,
            })}
          >
            {item}
          </Link>
        ))}
        <Link href={"/cart"}>
          <div className="relative flex hover:scale-[1.03]">
            <span className=" absolute z-10 -top-[8px] -right-2 rounded-full h-[16px] w-[16px] bg-accent-softRed text-center text-[0.75rem] text-secondary-lightGrey">
              9
            </span>
            <HiOutlineShoppingBag
              className={cn("relative w-[18px] h-[18px] text-text-primary", {
                "text-secondary-lightGrey": header,
              })}
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
