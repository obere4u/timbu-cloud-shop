import { montserrat } from "@/ui/fonts";
import { cn } from "@/utils/cn";
import Image from "next/image";
import React from "react";

export default function Support() {
  const supportDatas = [
    {
      title: "High Quality",
      description: "Crafted from top materials",
      icon: "/highQuality.svg",
    },
    {
      title: "Warranty Protection",
      description: "Over 2 years",
      icon: "/warrantyProtection.svg",
    },
    {
      title: "Free Shipping",
      description: "Order over $150",
      icon: "/freeShipping.svg",
    },
    {
      title: "24/7 Support",
      description: "Dedicated Support",
      icon: "/supportAllDay.svg",
    },
  ];

  return (
    <div className="flex flex-wrap justify-around bg-secondary-lightGrey h-[251px]">
      {supportDatas.map((supportData, index) => (
        <div
          key={`${supportData.title}-${index}`}
          className="flex items-center space-x-4 "
        >
          <div className="flex-shrink-0">
            <Image
              src={supportData.icon}
              width={51}
              height={50}
              alt={`${supportData.title} icon`}
            />
          </div>
          <div>
            <p
              className={cn(
                montserrat.className,
                "text-[20px] font-500 leading-[24.38px] font-semibold text-primary-richBlack"
              )}
            >
              {supportData.title}
            </p>
            <span className="text-[#4A505C">{supportData.description}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
