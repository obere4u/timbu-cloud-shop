import { lato, montserrat } from "@/ui/fonts";
import { cn } from "@/utils/cn";
import React from "react";
import { companyLinks, customerLinks } from "./footerData";
import Form from "./components/Form";

export default function Footer() {
  return (
    <footer className="w-full bg-primary-richBlack md:bg-accent-softRed mt-auto ">
      <div className={cn("w-full mx-auto max-w-[1444px] px-8 pb-8 pt-20")}>
        <div className="md:flex  mb-16">
          <div className="md:w-[50%] flex justify-between w-full">
            <div>
              <h3
                className={cn(
                  montserrat.className,
                  "uppercase text-[0.7rem] leading-[17.32px] tracking-[0.72%] text-secondary-mediumGrey md:text-[#4A505C] "
                )}
              >
                Contact us
              </h3>
              <div
                className={cn(
                  lato.className,
                  "text-[0.7rem] md:text-[0.825rem] leading-[20.37px] font-[600] flex flex-col space-y-2 mt-4 text-secondary-lightGrey md:text-text-primary"
                )}
              >
                <p>+234(0)9025076961</p>
                <p>+234(0)7030810484</p>
                <p>obere4u@gmail.com</p>
                <p>Mon-Fri 9am-3pm PT</p>
              </div>
            </div>

            {/*Customer*/}
            <div
              className={cn(
                montserrat.className,
                "text-[0.5rem] md:text-[0.825rem] leading-[17.32px] tracking-[0.72%] text-secondary-mediumGrey md:text-[#4A505C] "
              )}
            >
              <h3 className="uppercase">customers</h3>
              <div className="flex flex-col space-y-2 mt-4 text-secondary-lightGrey md:text-text-primary">
                {customerLinks.map((customerLink, index) => (
                  <p
                    key={customerLink + index}
                    className={cn(
                      lato.className,
                      "text-[0.825rem] leading-[20.37px]  font-[600]"
                    )}
                  >
                    {customerLink}
                  </p>
                ))}
              </div>
            </div>

            {/*Company */}
            <div
              className={cn(
                montserrat.className,
                "ttext-[0.7rem] md:text-[0.825rem] leading-[17.32px] tracking-[0.72%] text-secondary-mediumGrey md:text-[#4A505C] "
              )}
            >
              <h3 className="uppercase">company</h3>
              <div className="flex flex-col space-y-2 mt-4 ">
                {companyLinks.map((companyLink, index) => (
                  <p
                    key={companyLink + index}
                    className={cn(
                      lato.className,
                      "text-[0.7rem] md:text-[0.825rem] leading-[20.37px] text-secondary-lightGrey md:text-text-primary font-[600]"
                    )}
                  >
                    {companyLink}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/*form */}
          <div className="md:w-[50%] mx-auto mt-16 md:mt-0 md:mx-0  md:flex">
            <Form />
          </div>
        </div>
        <small
          className={cn(
            lato.className,
            " text-[#4A505C] text-[0.8275rem] font-[400]"
          )}
        >
          ©Ore-online Store
        </small>
      </div>
    </footer>
  );
}
