import React from "react";
import {
  HeartIcon,
  PeptidesIcon,
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
    <div className="p-[6px] rounded-[100px] w-full gap-[14px] bg-green-800 max-w-[991px]">
      {tabContent.map(({ label, icon }, index) => (
        <button
          key={index}
          onClick={() => setActiveContent(label)}
          className={`text-sm font-normal font-Poppins px-[14px] py-2 rounded-[100px] w-fit ${
            activeContent === label
              ? "text-white bg-[#181A1C]"
              : "bg-transparent text-[#7B7F81]"
          }`}
        >
          <span className="  flex items-center gap-[6px] ">
            {icon} {label}
          </span>
        </button>
      ))}
    </div>
  );
};

export default EasyCareTab;
