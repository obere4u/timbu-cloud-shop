import { lato, montserrat } from "@/ui/fonts";
import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function DownloadApp() {
  return (
    <div className="flex items-center p-8 pb-44">
      <div className="w-[50%]">
        <h3
          className={cn(
            montserrat.className,
            "uppercase text-[3rem] leading-[28px] text-primary-richBlack font-[800]"
          )}
        >
          DOWNLOAD THE APP
        </h3>
        <p
          className={cn(
            lato.className,
            "w-[87%] mt-8 font-normal text-[1.25rem] leading-[25.49px] text-[#484848] my-12"
          )}
        >
          Experience the best of OreStore wherever you are with our mobile app.
          Shop your favorite products, track orders, and enjoy exclusive deals
          right at your fingertips. Download our app today and enjoy a seamless
          shopping experience.
        </p>
        <div className="mt-32 flex space-x-4">
          <Link href={"#"}>
            <Image
              src={"/iOS.png"}
              width={204}
              height={71}
              alt="iOS app download link"
            />
          </Link>
          <Link href={"#"}>
            <Image
              src={"/googlePlay.png"}
              width={204}
              height={71}
              alt="Google Play app download link"
            />
          </Link>
        </div>
      </div>

      {/*phone  */}

      <div className="relative w-[50%] flex items-center justify-center">
        <div className="absolute left-[75.5%] top-[10%] rounded-full w-[50px] h-[50px] bg-cyanOpacity"/>
        <div className="absolute left-[10%] top-[25%] rounded-full w-[22px] h-[22px] bg-softGray"/>
        <div className="absolute left-[92.8%] top-[60%] rounded-full w-[17px] h-[17px] bg-softGray"/>
        <div className="absolute left-[0.05%] bottom-0 rounded-full w-[34px] h-[34px] bg-redOpacity"/>
        <div className="relative">
          <Image
            src={"/mobileApp.png"}
            width={327.89}
            height={710}
            alt="phone mock"
            className="absolute left-[20%] w-[327.89px] h-[710px]"
          />

          <div className="flex items-center justify-center">
            <div className="mt-20 rounded-full w-[537px] h-[529px] border-[2.5px] border-yellowOpacity flex items-center justify-center">
              <div className="rounded-full w-[437px] h-[430.26px] border-[2.1px] border-darkOpacity flex items-center justify-center">
                <div className="bg-secondary-lightGrey rounded-full w-[337px] h-[330.26px] border-[2.1px] border-cyanOpacity"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
