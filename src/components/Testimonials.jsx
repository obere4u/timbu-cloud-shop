import { lato, montserrat, volkhov } from "@/ui/fonts";
import { cn } from "@/utils/cn";
import Image from "next/image";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

export default function Testimonials() {
  return (
    <div className={cn("bg-secondary-lightGrey pt-20 pb-4 px-8")}>
      <div className={cn("text-center w-[50%] mx-auto mb-32")}>
        <h3
          className={cn(
            montserrat.className,
            "capitalize font-bold text-[1.3rem] md:text-[2.875rem] leading-[56.07px] text-[#484848]"
          )}
        >
          Customers Testimonials
        </h3>
        <p
          className={cn(
            lato.className,
            "capitalize mt-1 text-[0.85rem] md:text-[1.25rem] leading-[19.44px] font-normal text-[#8A8A8A]"
          )}
        >
          Hear What Our Happy Customers Have to Say
        </p>
      </div>

      {/*card */}
      <div className="md:w-[85%] mx-auto">
        <div
          className={cn(
            "md:relative md:flex items-center justify-between w-full "
          )}
        >
          {/*small*/}
          <div
            className={cn(
              "hidden rounded-[7.48px] md:flex items-center pl-8 bg-white w-[482.96px] h-[223.59px]  shadow-custom"
            )}
          >
            <Image
              src={"/testi1.png"}
              width={147.01}
              height={146.45}
              alt="small card"
            />
          </div>

          {/*Big Card */}
          <div
            className={cn(
              "md:absolute left-[20.8%] right-0 rounded-[7.48px] md:-mt-5 md:flex items-center md:space-x-10 md:pl-8 bg-white w-full mb-10 md:mb-0 md:w-[645.94px] md:h-[299.05px] shadow-custom text-center md:text-left"
            )}
          >
            <Image
              src={"/testiBig.png"}
              width={180.92}
              height={180.92}
              alt="big card"
              className="mx-auto"
            />
            <div className="flex flex-col items-center md:items-start md:justify-normal space-y-4 w-full">
              <p>
                {
                  "I've been shopping at Ore-online store for over a year now, and I couldn't be happier with the experience."
                }
              </p>

              <Image
                src={"ratings.svg"}
                width={71.2}
                height={14.2}
                alt="yellow star rating"
              />
              <hr className="bg-primary-richBlack mb-4 w-[171.95px] h-[0.75px]" />
              <p
                className={cn(
                  montserrat.className,
                  "capitalize font-400 text-[1.5rem] leading-[29.16px] text-primary-richBlack"
                )}
              >
                Abosede Oni
              </p>
              <span
                className={cn(
                  lato.className,
                  "text-primary-richBlack text-[0.7475rem] leading-[14.35px] font-normal"
                )}
              >
                Verified buyer
              </span>
            </div>
          </div>

          {/*small */}
          <div
            className={cn(
              "shadow-[#2E213D] rounded-[7.48px] md:flex items-center md:space-x-10 md:pl-8 text-center md:text-left bg-white md:w-[484.46px] md:h-[224.29px] justify-center md:items-start md:justify-normal shadow-custom"
            )}
          >
            <Image
              src={"/testi1.png"}
              width={147.01}
              height={146.45}
              alt="small card"
              className="mx-auto"
            />
            <div className="flex flex-col space-y-4">
              <p
                className={cn(
                  lato.className,
                  "text-primary-richBlack text-[0.75rem] leading-[14.4px] font-normal"
                )}
              >
                What sets Ore-online store apart is the seamless shopping
                experience. The website is easy to navigate, and the product
                categories are well-organized.
              </p>
              <Image
                src={"ratings.svg"}
                width={53.27}
                height={10.65}
                alt="yellow star rating"
                className="mx-auto"
              />
              <hr className="bg-primary-richBlack mb-4 w-[171.95px] h-[0.75px]" />
              <p
                className={cn(
                  volkhov.className,
                  "capitalize font-400 text-[1.12rem] leading-[29.16px] text-primary-richBlack"
                )}
              >
                Lateef Ola
              </p>
              <span
                className={cn(
                  lato.className,
                  "text-primary-richBlack text-[0.7475rem] leading-[14.35px] font-normal"
                )}
              >
                Regular Shopper
              </span>
            </div>
          </div>
        </div>

        {/*next prev btns */}
        <div className={cn("flex space-x-3 justify-center items-center mt-20")}>
          <button
            className={cn(
              "bg-white rounded-full shadow-sm hover:shadow-md shadow-secondary-mediumGrey hover:shadow-secondary-mediumGrey p-2"
            )}
          >
            <MdKeyboardArrowLeft
              className={cn("text-secondary-mediumGrey text-[1.25rem]")}
            />
          </button>
          <button
            className={cn(
              "bg-white rounded-full p-2  shadow-sm hover:shadow-md shadow-secondary-mediumGrey hover:shadow-secondary-mediumGrey"
            )}
          >
            <MdKeyboardArrowRight
              className={cn("text-primary-richBlack text-[1.25rem]")}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
