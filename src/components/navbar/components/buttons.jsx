import React from "react";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { usePathname } from "next/navigation";

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

export default function NavButtons() {
  const pathname = usePathname();

  return (
    <div className="w-fit flex space-x-4">
      {navBtns.map((navBtn, index) => (
        <Link
          key={index}
          href={navBtn.path}
          className={cn(
            "w-fit capitalize text-primary-lightCyan text-[1.3rem] flex items-center space-x-2 hover:text-opacity-70 transition duration-150 ease-in-out",
            {
              " text-text-primary scale-[1.02]": pathname === navBtn.path,

              " text-text-secondary scale-[1.02] bg-primary-lightCyan px-8 py-2 rounded-md hover:bg-opacity-80 transition duration-150 ease-in-out":
                navBtn.path === "/login",
            }
          )}
        >
          {navBtn.title}
        </Link>
      ))}
    </div>
  );
}
