import { lato, montserrat } from "@/ui/fonts";
import { cn } from "@/utils/cn";
import Link from "next/link";
import React from "react";

export default function Form() {
  return (
    <form className="ml-auto">
      <h3
        className={cn(
          montserrat.className,
          "uppercase text-[0.7rem] leading-[17.32px] tracking-[0.72%] text-[#4A505C] "
        )}
      >
        Get the latest new from us
      </h3>
      <div className="form-group mt-4">
        <input
          type="email"
          className={cn(
            lato.className,
            "w-full border-[1.02px] border-secondary-lightGrey py-[12.22px] px-[14.26px] bg-transparent placeholder:text-[#6C707A] placeholder:text-[0.825rem] leading-[20.37px] appearance-none focus:ring-0 focus:outline-none"
          )}
          id="exampleInputEmail1"
          placeholder="Enter your email address"
          aria-describedby="EmailHelp"
        />
        <div
          id="emailHelp"
          className={cn(
            lato.className,
            "mt-[5px] text-[0.8275rem] font-[400] leading-[20.37px] text-[#4A505C]"
          )}
        >
          By signing up, you agree to our{" "}
          <Link
            href={"#"}
            className="underline text-[#4A505C] hover:text-opacity-60"
          >
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link
            href={"#"}
            className="underline text-[#4A505C] hover:text-opacity-60"
          >
            Terms of Service
          </Link>
          .
        </div>
        <button
          type="submit"
          className={cn(
            lato.className,
            "mt-4 capitalize font-[500] text-[1.5rem] text-center leading-[24px] text-secondary-lightGrey bg-primary-richBlack w-full rounded-[8px] hover:bg-accent-softYellow transition-colors duration-150 ease-in-out hover:text-primary-richBlack p-3"
          )}
        >
          Subscribe
        </button>
      </div>
    </form>
  );
}
