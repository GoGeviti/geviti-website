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
    <div className="p-[6px] rounded-[100px] w-full space-x-[14px] bg-gray-50 max-w-[991px] flex justify-between items-center">
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
  );
};

export default EasyCareTab;
