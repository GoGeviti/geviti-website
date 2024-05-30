"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

import clsxm from "@/helpers/clsxm";

type ButtonSwitchMemberFreqProps = {
  layoutId?: string;
  options: {
    title: "Monthly" | "Quarterly";
  }[];
  onChange?: (currentActiveIdx: number) => void; // eslint-disable-line no-unused-vars
  showHightlightTextOnMobile?: boolean;
};

const ButtonSwitchMemberFreq: React.FC<ButtonSwitchMemberFreqProps> = ({
  layoutId = "pill-tab-switch-pricingplans",
  options,
  onChange,
  showHightlightTextOnMobile,
}) => {
  const [activeTabIdx, setActiveTabIdx] = useState<number>(0);

  const handleClick = (idx: number) => {
    setActiveTabIdx(idx);
    if (onChange) onChange(idx);
  };

  const setItemClassName = (optIdx: number) => {
    if (!showHightlightTextOnMobile) {
      return optIdx === 0 ? "px-3.5 w-[95px] sm:w-[156px]" : "px-6 w-[104px] sm:w-[156px]";
    }

    return optIdx === 0 ? "px-3.5 w-[156px]" : "px-6 w-[104px] sm:w-[156px]";
  };

  const renderButtonSwitchFrequency = () => {
    const currentOpt = options[activeTabIdx];

    return (
      <div className='relative w-full rounded-[100px] h-[49px] px-1.5 bg-grey-50'>
        <div className='relative flex items-center h-full'>
          {options.map((opt, optIdx) => {
            return (
              <button
                key={opt.title}
                aria-label={opt.title}
                onClick={() => handleClick(optIdx)}
                className={clsxm(
                  "text-sm !leading-normal h-full flex items-center justify-center text-grey-400 cursor-pointer whitespace-nowrap",
                  setItemClassName(optIdx)
                )}
              >
                {opt.title}
              </button>
            );
          })}
        </div>

        <motion.span
          layoutId={layoutId}
          transition={{ type: "spring", duration: 0.75 }}
          className={clsxm(
            "bg-primary cursor-pointer rounded-[100px] font-medium text-white whitespace-nowrap shadow-[0px_4px_8px_0px_rgba(0,0,0,0.1)] text-sm !leading-normal flex items-center h-[37px] top-1.5 absolute",
            activeTabIdx === 0 ? "left-1.5" : "left-[95px] sm:left-[162px]",
            showHightlightTextOnMobile && activeTabIdx > 0 && "max-sm:left-[162px]",
            setItemClassName(activeTabIdx),
            currentOpt.title === "Quarterly" ? "justify-between" : "justify-center"
          )}
        >
          {currentOpt.title}
          {currentOpt.title === "Quarterly" && (
            <span
              className={clsxm(
                "text-blue-primary text-xs !leading-normal w-[55px] h-[21px] flex-shrink-0 bg-[#F2FAFF]/15 border-[0.55px] border-white/15 rounded-[100px] flex items-center justify-center",
                !showHightlightTextOnMobile && "max-sm:hidden"
              )}
            >
              17% off
            </span>
          )}
        </motion.span>
      </div>
    );
  };

  return renderButtonSwitchFrequency();
};

export default ButtonSwitchMemberFreq;
