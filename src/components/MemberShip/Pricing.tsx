"use client";
import React, { useState } from "react";
import { ChevronDown, QuestionIcon } from "../Icons";
import membershipdata from "@/constant/data/membershipdata";
import ButtonCta from "../Landing/ButtonCta";
import PriceExtended from "./PriceExtended";
const pricing = membershipdata.pricing;

const Pricing = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="bg-white mx-3 rounded-[19px] my-6 py-14">
      <div className=" container-center ">
        <p className=" uppercase text-sm text-[#919B9F] text-center font-Poppins font-semibold">
          Care based off of biomarkers
        </p>
        <h4 className=" text-6xl text-center font-Poppins">
          Start by establishing baselines
        </h4>
        <p className="  text-sm text-[#919B9F] text-center font-Poppins pt-3">
          Every user starts with one of these to establish baselines. This
          includes month free.{" "}
        </p>

        <div className=" my-11 flex justify-center items-center bg-[#F5F6F6] w-fit mx-auto gap-[14px] p-[6px] rounded-[100px]">
          <p className=" cursor-pointer duration-300 flex bg-[#181A1C] text-white  items-center py-2 px-[14px] font-Poppins rounded-full gap-[6px]">
            Quarterly{" "}
            <span className=" text-xs text-[#99D4FF] font-medium bg-[#393C3E] border border-[#57595B] rounded-full px-2 py-px">
              17% off
            </span>
          </p>
          <p className=" cursor-pointer duration-300 flex hover:bg-[#181A1C] text-[#7B7F81] hover:text-white font-Poppins  items-center py-2 px-[14px] rounded-full">
            Monthly
          </p>
        </div>
        <div className=" sm:flex gap-6 items-end w-full pt-10 ">
          {pricing.data.map((value) => (
            <div className=" w-full relative">
              <div
                className={`pt-[42px] pb-[34px] px-6   ${value.bg} ${value.text} rounded-2xl w-full`}
              >
                <p className=" text-xl font-Poppins ">{value.name}</p>
                <h3 className=" text-5xl font-Poppins py-1 ">
                  ${value.price}{" "}
                  <span className=" text-sm">one time payment</span>
                </h3>
                <p className=" font-medium text-sm font-Poppins ">
                  +$99/m billed quarterly
                </p>
                <p className=" text-2xl font-medium font-Poppins pb-4 mt-10">
                  {value.biomakers}+{" "}
                  <span className=" text-xs">biomarkers</span>
                </p>
                {pricing.features.map((data) => (
                  <>
                    <p className=" font-Poppins text-sm gap-[6px] flex items-center font-medium pb-3">
                      {" "}
                      <QuestionIcon /> {data}
                    </p>
                  </>
                ))}
                <ButtonCta
                  href=""
                  text="Get Started"
                  theme={value.button}
                  className="w-fit mx-auto"
                />
              </div>
              <div className={`${value.hide}`}>
                <p className=" absolute top-0 right-8 -translate-y-1/2 text-sm font-Poppins font-medium bg-[#91c9f2] py-2 px-6 rounded-full">
                  Most Popular
                </p>
                <div
                  onClick={toggleDropdown}
                  className={` ${
                    isOpen ? "bg-[#E6E7E7] border-[#E6E7E7]" : ""
                  } cursor-pointer flex mt-3 items-center border border-[#91c9f2] gap-3 rounded-2xl justify-center p-6 w-full bg-[#99D4FF]`}
                >
                  <p className=" text-xl font-Poppins">
                    Geviti vs. competitors
                  </p>
                  <ChevronDown />
                </div>
              </div>
            </div>
          ))}
        </div>
        {isOpen && (
          <>
            <PriceExtended />
          </>
        )}
      </div>
    </div>
  );
};

export default Pricing;
