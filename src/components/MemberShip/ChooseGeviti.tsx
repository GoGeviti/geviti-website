import React from "react";
import membershipdata from "@/constant/data/membershipdata";
import { CheckCircleIcon, ChevronRight } from "../Icons";
import { CustomLink } from "..";
import ButtonCta from "../Landing/ButtonCta";
import Image from "next/image";
const Data = membershipdata.choosegivity;

const ChooseGeviti = () => {
  return (
    <div className=" mx-3 rounded-[19px] my-6 pt-8 sm:py-14">
      <div className=" container-center ">
        <div className=" md:flex items-center">
          <div className="md:w-1/2 ">
            <div className=" md:px-14">
              <p className="tracking-[1.1px] font-Poppins uppercase md:text-start text-center text-[10px] sm:text-sm text-grey-primary font-semibold">
                Tailor-made longevity
              </p>
              <h4 className="text-[27.941px] md:text-start text-center sm:text-4xl font-Poppins">
                Why Choose Geviti?
              </h4>
              <div className="sm:hidden grid mt-8 sm:mt-12 grid-cols-1 auto-rows-fr sm:grid-cols-2 gap-4 sm:gap-6 items-center max-sm:w-full">
                <ButtonCta
                  href=""
                  text="Get Started"
                  theme="primary"
                  className="max-sm:w-full"
                />
              </div>
              <div className=" mt-8 sm:mt-12">
                {Data.data.map((data) => (
                  <>
                    <div className="  flex items-center gap-3 mb-3 bg-white px-5 py-[14px] rounded-lg cursor-pointer duration-300 shadow-[0px_4px_4px_0px] hover:shadow-[0px_6px_6px_0px] hover:shadow-[#0000002e] shadow-[#0000002e]">
                      <CheckCircleIcon />
                      <p className=" font-Poppins font-medium text-sm ">
                        {" "}
                        {data}
                      </p>
                    </div>
                  </>
                ))}
              </div>
              <div className="hidden sm:grid mt-12 grid-cols-1 auto-rows-fr sm:grid-cols-2 gap-4 sm:gap-6 items-center max-sm:w-full">
                <ButtonCta
                  href=""
                  text="Get Started"
                  theme="primary"
                  className="max-sm:w-full"
                />
                <CustomLink
                  href=""
                  className="bg-white hover:bg-white/20 group max-md:w-full  border border-white/5 backdrop-blur-[25px] rounded-full py-1.5 pl-[42px] pr-1.5 h-full relative grid place-items-center grid-cols-[auto_46px] overflow-hidden gap-6"
                  aria-label=""
                >
                  <span className="text-lg leading-[133%] font-medium text-[#181A1C] inline-block z-[2]">
                    See Products
                  </span>
                  <span className="w-[46px] relative flex items-center justify-center">
                    <ChevronRight className="w-18px h-18px  text-[#181A1C] flex-shrink-0" />
                  </span>
                </CustomLink>
              </div>
            </div>
          </div>
          <div className=" md:w-1/2">
            <Image
              className=" w-full h-full"
              src="/images/membership/oral.png"
              alt="oral"
              width={480}
              height={750}
              unoptimized
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseGeviti;
