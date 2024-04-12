import Image from "next/image";
import React from "react";
import { CheckIcon } from "../SolutionIcons";
import ButtonCta from "@/components/Landing/ButtonCta";

interface CardProps {
  title: string;
  subtitle: string;
  description: string;
  imgurl: string;
  prevbtn: JSX.Element; // Change the type to JSX.Element
  nextbtn: JSX.Element; // Change the type to JSX.Element
  checkIconTexts: string[]; // Array of check icon texts
}

interface CardProps {
  obj: CardProps;
}

const EasyOnlineCareCard = (props: CardProps) => {
  const {
    title,
    subtitle,
    description,
    imgurl,
    nextbtn,
    prevbtn,
    checkIconTexts,
  } = props.obj;

  return (
    <>
      <article className="w-full flex md:flex-row flex-col lg:pl-[68px] pr-4 md:gap-6">
        <div className="md:w-1/2 w-full md:mt-[120px] mt-[57px] z-10">
          <p className="text-[#919B9F] !text-[10px] md:text-sm font-semibold leading-[150%] md:leading-[171.429%] uppercase tracking-[1.1px] md:tracking-[1.54px] font-Poppins">
            {title}
          </p>
          <h2 className="text-primary text-2xl md:text-3xl lg:text-5xl font-normal font-Poppins mt-3 mb-4 sm:my-0">
            {subtitle}
          </h2>
          <span className="text-gray-400 text-xs md:text-sm lg:text-lg font-normal leading-[142%] w-full font-Poppins inline-block mt-0  md:mt-[14px]">
            {description}
          </span>
          <div className="lg:max-w-[486px] w-full gap-x-[42px] gap-y-6 grid lg:grid-cols-3 grid-cols-2 h-fit mt-6 md:mt-10 lg:mt-[64px] place-content-between">
            {checkIconTexts.map((text, index) => (
              <div className="flex items-center gap-2 w-fit" key={index}>
                <CheckIcon />
                <p className="text-xs font-normal font-Poppins text-[#181A1C]">
                  {text}
                </p>
              </div>
            ))}
          </div>
          <ButtonCta
            text="Get Started"
            href="/your-link"
            theme="primary"
            className="max-w-[222px] w-full mt-[64px] md:flex hidden"
          />
        </div>
        <div className="md:w-1/2 w-full  mt-[65px] md:mt-10 lg:mt-14 flex flex-col items-center justify-between relative">
          <div
            style={{ backgroundSize: "100% 100%" }}
            className="w-full absolute z-10 h-full bg-[url(/images/solution_media/pill-bg.webp)] object-cover"
          ></div>
          <div className="relative z-10 flex items-center justify-between w-full">
            <button className=" bg-[#F5F6F6] min-w-[46px] min-h-[46px] rounded-full flex items-center justify-center">
              {prevbtn}
            </button>

            <Image
              src={imgurl}
              alt={title}
              width={234}
              height={474}
              className="w-full h-full max-w-[234px] max-h-[474px]"
            />
            <button className=" bg-[#181A1C] min-w-[46px] min-h-[46px] rounded-full flex items-center justify-center">
              {nextbtn}
            </button>
          </div>
          <div className="flex justify-between md:hidden z-10">
            <ButtonCta
              text="Get Started"
              href="/your-link"
              theme="primary"
              className=" w-full mt-[74px] "
            />
          </div>
        </div>
      </article>
    </>
  );
};

export default EasyOnlineCareCard;
