import Image from 'next/image'
import React from 'react'

export default function Support() {

  const supportData = [
    {
      title: "high quality",
      description: "Crafted from top materials",
      icon: "",
    },
    {
      title: "warranty protection",
      description: "Over 2 years",
      icon: "",
    },
    {
      title: "free shipping",
      description: "Order over $150",
      icon: "",
    },
    {
      title: "24/7 support",
      description: "Dedicated Support",
      icon: "",
    }
  ];


  return (
    <div>
      <Image
        src={"/highQuality.svg"}
        width={24}
        height={24}
      />
    </div>
  );
}
