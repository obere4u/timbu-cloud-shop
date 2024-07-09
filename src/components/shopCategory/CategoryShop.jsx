import ShopCategoryCard from "@/ui/cards/ShopCategoryCard";
import { lato, montserrat } from "@/ui/fonts";
import { cn } from "@/utils/cn";
import React from "react";
import { shopCategoryData } from "./shopCategoryData";

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
      <div className="p-8 grid gap-8 grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 ">
        {shopCategoryData.map((item, index) => (
          <ShopCategoryCard
            key={item + index}
            name={item.name}
            owner={item.owner}
            price={item.price}
            label={item.label}
            image={item.image}
            link="#"
          />
        ))}
      </div>
    </div>
  );
}
