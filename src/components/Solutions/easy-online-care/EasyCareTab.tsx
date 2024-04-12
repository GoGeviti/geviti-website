import React from "react";
import {
  FIlterIcon,
  HeartIcon,
  PeptidesIcon,
  TherapyIcon,
  ThyroidIcon,
  WeightLossIcon,
} from "../SolutionIcons";

const tabContent = [
  { label: "Testosterone Therapy", icon: <HeartIcon /> },
  { label: "Anti-aging Peptides", icon: <PeptidesIcon /> },
  { label: "Medical Weight Loss", icon: <WeightLossIcon /> },
  { label: "Sexual Health", icon: <HeartIcon /> },
  { label: "Thyroid", icon: <ThyroidIcon /> },
];

const EasyCareTab = ({ activeContent, setActiveContent }) => {
  return (
    <>
      <section className="w-full flex items-center justify-center">
        <div className="p-[6px] rounded-[100px] w-full space-x-[14px] bg-gray-50 max-w-[991px] lg:flex hidden justify-between items-center">
          {tabContent.map(({ label, icon }, index) => (
            <button
              onClick={() => setActiveContent(label)}
              className={`text-sm font-normal font-Poppins px-5 py-2 rounded-[100px] w-fit ${
                activeContent === label
                  ? "text-white bg-[#181A1C]"
                  : "bg-transparent text-[#7B7F81]"
              }`}
            >
              <span className="flex items-center gap-[6px] ">
                {icon} {label}
              </span>
            </button>
          ))}
        </div>
        <div className=" justify-between items-baseline bg-[#F5F6F6] rounded-[20px] p-[6px] flex lg:hidden w-full">
          <div className="flex items-center gap-[6px] text-xs text-[#181A1C] font-Poppins">
            <TherapyIcon />
            Testosterone Therapy
          </div>
          <button className="flex items-center gap-[6px] h-[34px] px-3 text-xs font-medium text-white font-Poppins bg-[#181A1C] rounded-[100px] shadow-[0px_4px_8px_0px_rgba_(0_0_0_0.10)]">
            <FIlterIcon />
            Filter
          </button>
        </div>
      </section>
    </>
  );
};

export default EasyCareTab;
