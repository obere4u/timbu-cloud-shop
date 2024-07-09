import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ShopCategoryCard({
  name,
  owner,
  price,
  label,
  image,
  link,
}) {
  const className = cn(
    "rounded-md p-4 w-full md:w-[386px] border border-black"
  );
  console.log(className);

  return (
    <Link
      href={link}
      className={className}
    >
      <div className="w-full rounded-md overflow-hidden">
        <Image
          src={image}
          width={336}
          height={244}
          alt={`${name} image`}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="flex items-center justify-between mt-4">
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <span className="text-secondary-mediumGrey">{owner}</span>
        </div>
        <Image
          src="/ratings.svg"
          width={95}
          height={19}
          alt="rating"
        />
      </div>
      <p className="capitalize text-secondary-mediumGrey mt-2">
        (4.1k) Customer Reviews
      </p>
      <div className="flex items-center justify-between mt-2">
        <p className="text-lg font-semibold">${price}</p>
        <p className="text-red-700">{label}</p>
      </div>
    </Link>
  );
}
