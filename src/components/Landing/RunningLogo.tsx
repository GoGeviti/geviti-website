import React from "react";

import { ArrowUpRight, GevitiLogoIcon } from "../Icons";

const RunningLogo: React.FC = () => {
  const keywordsData = Array.from(Array(4).keys());

  const renderKeyword = (keywordIdx: number, section: number) => {
    return (
      <span
        key={`keyword-${section}-${keywordIdx}`}
        className="pl-[25.21px] lg:pl-[37.62px] inline-flex items-center gap-x-[25.22px] lg:gap-x-[37.62px]"
      >
        <span className="flex items-center justify-center">
          <ArrowUpRight className="w-[42.01px] h-[42.01px] lg:w-[62.7px] lg:h-[62.7px]" />
        </span>

        <span>
          <GevitiLogoIcon className="w-[130.26px] h-[31.21px] lg:w-[194.37px] lg:h-[46.58px]" />
        </span>
      </span>
    );
  };

  return (
    <div className="py-[27px] lg:py-[60px]">
      <div className="relative flex justify-center overflow-x-hidden select-none">
        <div className="h-[42.01px] lg:h-[62.7px] animate-marquee whitespace-nowrap flex justify-center">
          {keywordsData.map((idx: number) => renderKeyword(idx, 1))}
        </div>

        <div className="absolute top-0 h-[42.01px] lg:h-[62.7px] animate-marquee2 whitespace-nowrap flex justify-center">
          {keywordsData.map((idx: number) => renderKeyword(idx, 2))}
        </div>
      </div>
    </div>
  );
};

export default RunningLogo;
