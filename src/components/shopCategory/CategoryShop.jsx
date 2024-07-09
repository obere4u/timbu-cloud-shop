import ShopCategoryCard from "@/ui/cards/ShopCategoryCard";
import { lato, montserrat } from "@/ui/fonts";
import { cn } from "@/utils/cn";
import React from "react";
import { shopCategoryData } from "./shopCategoryData";
import Link from "next/link";
import Image from "next/image";

export default function CategoryShop() {
  const categories = [
    "men's fashion",
    "women's fashion",
    "kid's wear",
    "home appliances",
    "discount deals",
  ];

  return (
    <div className="py-12">
      <div className="w-[43%] text-center mx-auto">
        <h2
          className={cn(
            montserrat.className,
            "font-[700] uppercase text-[2.875rem] leading-[56.07px] text-[#484848]"
          )}
        >
          Shop by category
        </h2>
        <p
          className={cn(
            lato.className,
            "text-[1.25rem] leading-[26px] text-[#4A505C] mt-6"
          )}
        >
          Welcome to Ore-online Store, where shopping is made easy and
          enjoyable. Browse through our categories and discover the perfect
          items to suit your needs.
        </p>
      </div>

      {/*Categories */}
      <div className="p-8 mt-6 flex items-center justify-between">
        {categories.map((category, index) => (
          <div
            key={category + index}
            className={cn(
              "px-10 py-2 bg-secondary-lightGrey rounded-md shadow-md shadow-secondary-lightGrey hover:shadow-lg hover:shadow-text-secondary hover:bg-text-secondary hover:text-secondary-lightGrey cursor-pointer"
            )}
          >
            {category}
          </div>
        ))}
      </div>

      {/*item cards */}
      <div className="p-8 w-full grid gap-8 grid-cols-1 md:grid-cols-3 2xl:grid-cols-4">
        {shopCategoryData.map((item, index) => (
          <Link
            href={"#"}
            key={item + index}
            className={
              "rounded-md py-4 shadow-md  w-full md:w-[386px] h-[438px] flex  "
            }
          >
            <div className="flex flex-col space-y-4 mx-auto">
              <div className="rounded-md overflow-hidden">
                <Image
                  src={item.image}
                  width={336}
                  height={244}
                  alt={`${item.name} image`}
                />
              </div>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <h3
                    className={cn(
                      montserrat.className,
                      "text-[1.25rem] font-[500] capitalize"
                    )}
                  >
                    {item.name}
                  </h3>
                  <span className="text-secondary-mediumGrey capitalize">
                    {item.owner}
                  </span>
                </div>
                <Image
                  src="/ratings.svg"
                  width={95}
                  height={19}
                  alt="rating"
                />
              </div>
              <p
                className={cn(
                  lato.className,
                  "capitalize text-[0.8rem] text-secondary-mediumGrey mt-2"
                )}
              >
                (4.1k) Customer Reviews
              </p>
              <div className="flex items-center justify-between mt-2">
                <p
                  className={cn(
                    montserrat.className,
                    "font-[700] text-[1.5rem] text-[#484848]"
                  )}
                >
                  ${item.price}
                </p>
                <p className={cn(lato.className, "text-red-500 capitalize")}>
                  {item.label}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <Link
          href={"#"}
          className="capitalize text-[24px] px-10 py-4 text-primary-richBlack bg-primary-lightCyan rounded-md hover:bg-opacity-80 transition duration-150 ease-in-out"
        >
          View more
        </Link>
      </div>
    </div>
  );
}
