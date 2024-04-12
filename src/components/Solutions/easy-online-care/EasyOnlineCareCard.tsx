import Image from "next/image";
import React from "react";
import { CheckIcon } from "../SolutionIcons";

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
      <article className="w-full flex md:flex-row flex-col lg:pl-[68px] pr-4">
        <div className="lg:max-w-[606px] w-full mt-[120px]">
          <p className="text-[#919B9F] !text-[10px] md:text-sm font-semibold leading-[150%] md:leading-[171.429%] uppercase tracking-[1.1px] md:tracking-[1.54px] font-Poppins">
            {title}
          </p>
          <h2 className="text-primary text-2xl md:text-3xl lg:text-5xl font-normal font-Poppins mt-3 mb-4 sm:my-0">
            {subtitle}
          </h2>
          <span className="text-gray-400 text-xs md:text-sm lg:text-lg font-normal leading-[142%] w-full font-Poppins inline-block mt-4 md:mt-3">
            {description}
          </span>
          <div className="lg:max-w-[486px] w-full gap-x-[42px] gap-y-6 grid lg:grid-cols-3 grid-cols-2 h-fit mt-[64px] place-content-between">
            {checkIconTexts.map((text, index) => (
              <div className="flex items-center gap-2 w-fit" key={index}>
                <CheckIcon />
                <p className="text-xs font-normal font-Poppins text-[#181A1C]">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full mt-[18px] md:mt-10 lg:mt-14 flex items-center justify-between max-w-[695px]">
          <button className=" bg-[#F5F6F6] min-w-[46px] min-h-[46px] rounded-full flex items-center justify-center">
            {prevbtn}
          </button>
          <Image
            src={imgurl}
            alt={title}
            width={631}
            height={422}
            className="w-full h-full max-w-[476px]"
          />
          <button className=" bg-[#181A1C] min-w-[46px] min-h-[46px] rounded-full flex items-center justify-center">
            {nextbtn}
          </button>
        </div>
      </article>
    </>
  );
};

export default EasyOnlineCareCard;
