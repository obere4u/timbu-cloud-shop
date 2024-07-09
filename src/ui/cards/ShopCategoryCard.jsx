import Image from "next/image";
import React from "react";

export default function ShopCategoryCard({ items }) {
  console.log(items);
  return (
    <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {items.map((item, index) => (
        <div
          key={item + index}
          className="p-4 w-full md:w-[386px] shadow-lg shadow-secondary-lightGrey"
        >
          <Image />
          <div className="flex items-center justify-between">
            <div>
              <span>{item.owner}</span>
            </div>
            <Image
              src={"/ratings.svg"}
              width={95}
              height={19}
              alt="rating"
            />
          </div>
          <p className="capitalize">(4.1k) Customer Reviews</p>
          <div className="flex items-center justify-center">
            <p>${item.price}</p>
            <p className="text-red-700">{item.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
