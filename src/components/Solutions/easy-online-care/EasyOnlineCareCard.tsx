import React from "react";
import { CheckIcon } from "../SolutionIcons";
import ButtonCta from "@/components/Landing/ButtonCta";

interface CardProps {
  title: string;
  subtitle: string;
  description: string;
  checkIconTexts: string[]; // Array of check icon texts
}

interface CardProps {
  obj: CardProps;
}

const EasyOnlineCareCard = (props: CardProps) => {
  const { title, subtitle, description, checkIconTexts } = props.obj;

  return (
    <>
      <article className="w-full">
        <div className="w-full">
          <p className="text-[#919B9F] !text-[10px] md:text-sm font-semibold leading-[150%] md:leading-[171.429%] uppercase tracking-[1.1px] md:tracking-[1.54px] font-Poppins">
            {title}
          </p>
          <h2 className="text-primary text-2xl md:text-3xl lg:text-5xl font-normal font-Poppins mt-3 mb-4 sm:my-0">
            {subtitle}
          </h2>
          <span className="text-gray-400 text-xs md:text-sm lg:text-lg font-normal leading-[142%] w-full font-Poppins inline-block mt-0 md:mt-[14px]">
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
      </article>
    </>
  );
};

export default EasyOnlineCareCard;
