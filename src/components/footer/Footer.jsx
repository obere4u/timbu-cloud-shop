import { lato, montserrat } from "@/ui/fonts";
import { cn } from "@/utils/cn";
import React from "react";
import { companyLinks, customerLinks } from "./footerData";
import Form from "./components/Form";

export default function Footer() {
  return (
    <div className={cn("bg-accent-softRed  mt-auto px-8 pb-8 pt-20")}>
      <div className="flex mb-16">
        <div className="flex justify-between w-full">
          <div>
            <h3
              className={cn(
                montserrat.className,
                "uppercase text-[0.7rem] leading-[17.32px] tracking-[0.72%] text-[#4A505C] "
              )}
            >
              Contact us
            </h3>
            <div className="flex flex-col space-y-2 mt-4">
              <p
                className={cn(
                  lato.className,
                  "text-[0.825rem] leading-[20.37px] text-text-primary font-[600]"
                )}
              >
                +234(0)9025076961
              </p>
              <p
                className={cn(
                  lato.className,
                  "text-[0.825rem] leading-[20.37px] text-text-primary font-[600]"
                )}
              >
                +234(0)7030810484
              </p>
              <p
                className={cn(
                  lato.className,
                  "text-[0.825rem] leading-[20.37px] text-text-primary font-[600]"
                )}
              >
                obere4u@gmail.com
              </p>
              <p
                className={cn(
                  lato.className,
                  "capitalize text-[0.825rem] leading-[20.37px] text-text-primary font-[600]"
                )}
              >
                Mon-Fri 9am-3pm PT
              </p>
            </div>
          </div>

          {/*Customer*/}
          <div
            className={cn(
              montserrat.className,
              "text-[0.7rem] leading-[17.32px] tracking-[0.72%] text-[#4A505C] "
            )}
          >
            <h3 className="uppercase">customers</h3>
            <div className="flex flex-col space-y-2 mt-4">
              {customerLinks.map((customerLink, index) => (
                <p
                  key={customerLink + index}
                  className={cn(
                    lato.className,
                    "text-[0.825rem] leading-[20.37px] text-text-primary font-[600]"
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
              "text-[0.7rem] leading-[17.32px] tracking-[0.72%] text-[#4A505C] "
            )}
          >
            <h3 className="uppercase">company</h3>
            <div className="flex flex-col space-y-2 mt-4">
              {companyLinks.map((companyLink, index) => (
                <p
                  key={companyLink + index}
                  className={cn(
                    lato.className,
                    "text-[0.825rem] leading-[20.37px] text-text-primary font-[600]"
                  )}
                >
                  {companyLink}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/*form */}
        <div className="w-full flex">
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
  );
}
