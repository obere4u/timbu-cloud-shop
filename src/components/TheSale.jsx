import Image from 'next/image'
import React from 'react'

export default function TheSale() {
  return (
    <div className="relative flex mt-12 w-full h-[633px]">
      <Image
        src={"/yellow.png"}
        width={555}
        height={633}
      />
      <div className="bg-[#D5B802] w-full h-full">sdfghgj</div>
      <div className='absolute top-[211px] left-[662px]'>
        <Image
          src="/star1.svg"
          width={60}
          height={60}
        />
      </div>
      <div className='absolute top-[503px] left-[525px]'>
        <Image
          src="/star2.svg"
          width={60}
          height={60}
        />
      </div>
    </div>
  );
}
