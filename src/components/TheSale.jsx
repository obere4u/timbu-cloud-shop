import { lato, montserrat } from "@/ui/fonts";
import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function TheSale() {
  return (
    <div className="relative flex mt-12 w-full h-[633px]">
      <Image
        src={"/yellow.png"}
        width={555}
        height={633}
      />

      <div className="bg-[#D5B802] flex flex-col space-y-12 w-full h-full">
        <div className={cn(montserrat.className, "w-[45%] mt-20 ml-[300px] ")}>
          <div className="uppercase text-[4rem] font-[800] text-text-secondary">
            <div className="w-[75%] bg-secondary-lightGrey py-2 pl-2 pr-1 transform -rotate-5 ">
              shop
            </div>
            <div className="uppercase ">The Sale</div>
          </div>

          <div className="mt-10 flex flex-col space-y-6">
            <h4 className={cn(lato.className, "font-[900] text-[20px]")}>
              Buy 1, Get 1 Free on Selected Apparel
            </h4>
            <p
              className={cn(
                lato.className,
                "font-[500] text-[20px] leading-[25.49px] text-primary-richBlack"
              )}
            >
              Refresh your wardrobe with stylish outfits for every season.
            </p>
            <span
              className={cn(
                lato.className,
                "font-[700] text-[20px] leading-[25.49px]"
              )}
            >
              10 July- 20 July 2024
            </span>
          </div>
          <div className="mt-20">
            <Link
              href={"#"}
              className={cn(
                lato.className,
                "capitalized bg-[#00C6D7] px-10 py-4 font text-primary-richBlack rounded-md font-[500]"
              )}
            >
              View Cart
            </Link>
          </div>
        </div>
      </div>
      {/*Stars start */}
      <div className="absolute top-[211px] left-[662px]">
        <Image
          src="/star1.svg"
          width={60}
          height={60}
        />
      </div>
      <div className="absolute top-[503px] left-[525px]">
        <Image
          src="/star2.svg"
          width={60}
          height={60}
        />
      </div>
      {/*Stars end*/}
    </div>
  );
}
