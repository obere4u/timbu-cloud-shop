import React from "react";
import ClientLayout from "../clientLayout";
import { cn } from "@/utils/cn";
import { lato, montserrat, volkhov } from "@/ui/fonts";
import { cartDetails } from "./cartDetails";
import { HiOutlinePlusSm, HiOutlineMinusSm } from "react-icons/hi";
import Image from "next/image";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";

export default function Cart() {
  const tableHeaders = ["Product Image", "Name", "Size", "Selector", "Total"];
  return (
    <ClientLayout>
      <div className="px-4 sm:px-6 md:px-8 pt-[8rem]">
        <h1
          className={cn(
            montserrat.className,
            "mt-10 capitalize font-[700] text-primary-richBlack text-center text-[1.75rem] sm:text-[2rem] md:text-[3rem] leading-[2rem] md:leading-[32px]"
          )}
        >
          Shopping Cart
        </h1>

        <div className="overflow-x-auto">
          <table className="mt-10 w-full leading-normal border-collapse">
            <thead>
              <tr>
                {tableHeaders.map((tableHeader) => (
                  <th
                    key={tableHeader}
                    className={cn(
                      lato.className,
                      "px-2 sm:px-4 py-2 font-[400] capitalize text-[0.875rem] sm:text-[1rem] md:text-[1.375rem] text-primary-richBlack text-left leading-[1.75rem] md:leading-[32px]"
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
                    <td className="align-top px-2 sm:px-4 py-4 text-left capitalize border-b">
                      <div className="flex flex-col justify-between h-full">
                        <Image
                          src={item.image}
                          width={168}
                          height={225}
                          alt={item.name[0].title}
                          className="max-w-full h-auto"
                        />
                      </div>
                    </td>
                    <td className="align-top px-2 sm:px-4 py-4 text-left capitalize border-b">
                      <div className="flex flex-col h-full justify-between">
                        <div>
                          <span
                            className={cn(
                              volkhov.className,
                              "py-2 font-[400] capitalize text-[0.875rem] sm:text-[1rem] md:text-[1.375rem] text-left leading-[1.75rem] md:leading-[32px]"
                            )}
                          >
                            {item.name[0].title}
                          </span>
                          <br />
                          <span
                            className={cn(
                              lato.className,
                              "mt-3 text-secondary-mediumGrey py-2 font-[400] capitalize text-[0.875rem] sm:text-[1rem] md:text-[1.375rem] text-left leading-[1.75rem] md:leading-[32px]"
                            )}
                          >
                            Color: {item.name[0].color}
                          </span>
                        </div>
                        <button
                          className={cn(
                            lato.className,
                            "mt-auto py-2 font-[400] capitalize text-[0.875rem] sm:text-[1rem] md:text-[1.375rem] text-left text-secondary-mediumGrey underline leading-[1.75rem] md:leading-[32px]"
                          )}
                        >
                          {item.name[0].remove}
                        </button>
                      </div>
                    </td>
                    <td
                      className={cn(
                        lato.className,
                        "align-top px-2 sm:px-4 py-4 font-[400] capitalize border-b text-[0.875rem] sm:text-[1rem] md:text-[1.375rem] text-left leading-[1.75rem] md:leading-[32px]"
                      )}
                    >
                      <span>{item.size}</span>
                    </td>
                    <td className="align-top px-2 sm:px-4 py-4 text-left capitalize border-b">
                      <div
                        className={cn(
                          lato.className,
                          "flex items-center space-x-2 sm:space-x-4 border border-primary-richBlack w-fit text-[#4A505C] rounded-[3.5px] px-2 py-1 text-[0.875rem] sm:text-[1.125rem] md:text-[1.56rem] leading-[30.03px] text-center font-[400]"
                        )}
                      >
                        <button>
                          <HiOutlineMinusSm className="w-[15px] h-[35px]" />
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
                        "align-top px-2 sm:px-4 py-4 font-[700] capitalize border-b text-[0.875rem] sm:text-[1rem] md:text-[1.375rem] text-left leading-[1.75rem] md:leading-[32px]"
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
                <td
                  colSpan="5"
                  className="py-8  text-center  "
                >
                  <div className="w-[90%] flex flex-col items-center justify-center space-y-4">
                    <div className="flex space-x-2 items-center">
                      <MdOutlineCheckBoxOutlineBlank className="w-[24px] h-[24px] text-primary-richBlack" />
                      <p
                        className={cn(
                          lato.className,
                          "capitalize text-[0.875rem] sm:text-[1.125rem] md:text-[1.25rem] font-[400] leading-[42px]"
                        )}
                      >
                        Please ship the product faster for{" "}
                        <span className="font-[700] text-[0.875rem] sm:text-[1.125rem] md:text-[1.375rem] leading-[42px]">
                          $10.00
                        </span>
                      </p>
                    </div>
                    <hr className="border-[1px] w-full" />
                    <div
                      className={cn(
                        montserrat.className,
                        "py-12 text-[0.875rem] sm:text-[1.125rem] md:text-[1.375rem] leading-[32px] w-full flex items-center justify-between"
                      )}
                    >
                      <span className="font-[400]">Subtotal</span>
                      <span className="font-[700]">$1282.80</span>
                    </div>
                    <button
                      className={cn(
                        lato.className,
                        "font-[500] text-[0.875rem] sm:text-[1.25rem] md:text-[1.5rem] leading-[24px] text-center capitalize w-full py-4 bg-[#B0B0B0] hover:bg-accent-softYellow transition-colors duration-150 ease-in-out hover:text-text-secondary text-secondary-lightGrey rounded-[8px]"
                      )}
                    >
                      Checkout
                    </button>
                    <p
                      className={cn(
                        montserrat.className,
                        "font-[700] text-[0.875rem] sm:text-[1.125rem] md:text-[1.375rem] leading-[24px] text-center capitalize w-full underline text-primary-richBlack rounded-[8px] py-12"
                      )}
                    >
                      Continue Shopping
                    </p>
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </ClientLayout>
  );
}
