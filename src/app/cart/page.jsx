import React from "react";
import ClientLayout from "../clientLayout";
import { cn } from "@/utils/cn";
import { lato, montserrat, volkhov } from "@/ui/fonts";
import { cartDetails } from "./cartDetails";
import { HiOutlinePlusSm } from "react-icons/hi";
import { HiOutlineMinusSm } from "react-icons/hi";
import Image from "next/image";

export default function Cart() {
  const tableHeaders = ["product image", "name", "size", "selector", "total"];
  return (
    <ClientLayout>
      <div className="px-8 pt-[8rem]">
        <h1
          className={cn(
            montserrat.className,
            "mt-10 capitalize font-[700] text-primary-richBlack text-center text-[3rem] leading-[32px]"
          )}
        >
          Shopping cart
        </h1>

        <div className="mt-10">
          <table className="min-w-full leading-normal border-collapse">
            <thead>
              <tr>
                {tableHeaders.map((tableHeader) => (
                  <th
                    key={tableHeader}
                    className={cn(
                      lato.className,
                      "px-4 py-2 font-[400] capitalize text-[1.375rem] text-primary-richBlack text-left leading-[32px]"
                    )}
                  >
                    {tableHeader}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {cartDetails.map((item, index) => (
                <React.Fragment key={index}>
                  <tr>
                    <td className="px-4 py-4 text-left capitalize border-b border-t">
                      <Image
                        src={item.image}
                        width={168}
                        height={225}
                        alt={item.name[0].title}
                      />
                    </td>
                    <td className="px-4 py-2 text-left capitalize border-b border-t">
                      <p
                        className={cn(
                          volkhov.className,
                          "w-[40%] py-2 font-[400] capitalize text-[1.375rem] text-left leading-[32px]"
                        )}
                      >
                        {item.name[0].title}
                      </p>
                      <br />
                      <span
                        className={cn(
                          lato.className,
                          "mt-3 text-secondary-mediumGrey py-2 font-[400] capitalize text-[1.375rem] text-left leading-[32px]"
                        )}
                      >
                        color: {item.name[0].color}
                      </span>
                      <br />
                      <button
                        className={cn(
                          lato.className,
                          "mt-10 py-2 font-[400] capitalize text-[1.375rem] text-left text-secondary-mediumGrey underline leading-[32px]"
                        )}
                      >
                        {item.name[0].remove}
                      </button>
                    </td>
                    <td
                      className={cn(
                        lato.className,
                        "px-4 py-2 font-[400] capitalize border-b border-t text-[1.375rem] text-left leading-[32px]"
                      )}
                    >
                      {item.size}
                    </td>
                    <td className="px-4 py-2 text-left capitalize border-b border-t">
                      <div
                        className={cn(
                          lato.className,
                          "flex items-center space-x-4 border border-primary-richBlack w-fit text-[#4A505C] rounded-[3.5px] px-2 py-1 text-[1.56rem] leading-[30.03px] text-center font-[400]"
                        )}
                      >
                        <button>
                          <HiOutlineMinusSm className="w-[15px] h-[35px] text" />
                        </button>

                        <span>{item.quantity}</span>
                        <button>
                          <HiOutlinePlusSm className="w-[15px] h-[35px]" />
                        </button>
                      </div>
                    </td>
                    <td
                      className={cn(
                        lato.className,
                        "px-4 py-2 font-[700] capitalize border-b border-t text-[1.375rem] text-left leading-[32px]"
                      )}
                    >
                      {item.total}
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="3"></td>
                <td
                  colSpan="2"
                  className="px-4 border border-black py-2 text-left capitalize border-t w-[50%]"
                >
                  {/* You can calculate the total here if needed */}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </ClientLayout>
  );
}
