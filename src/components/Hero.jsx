import Link from 'next/link';
import React from 'react'

export default function Hero() {
  return (
    <header className="relative flex flex-col h-screen bg-heroBg bg-cover p-8 bg-top bg-no-repeat w-full">
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="mt-auto relative flex flex-col md:w-[50%]">
        <h3 className="text-white text-[1.2rem] md:text-[1.5rem]">
          Discover the best products at unbeatable prices.
        </h3>
        <Link
          href={"/shop"}
          className="mt-4 w-[12.5em] text-center bg-primary-lightCyan px-4 py-4 rounded-md hover:bg-opacity-80 shadow-md shadow:text-primary hover:shadow-lg hover:shadow-text-primary"
        >
          Shop Now
        </Link>
      </div>
    </header>
  );
}
