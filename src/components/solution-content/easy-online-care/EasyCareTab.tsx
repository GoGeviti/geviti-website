import React from "react";
const tabContent = [
  "Testosterone Therapy",
  "Anti-aging Peptides",
  "Medical Weight Loss",
  "Sexual Health",
  "Thyroid",
];

const EasyCareTab = ({ activeContent, setActiveContent }) => {
  return (
    <div className="bg-gray-50 p-[6px] rounded-[100px] w-full gap-[14px]">
      {tabContent.map((content, index) => (
        <button
          key={index}
          onClick={() => setActiveContent(content)}
          className={`  text-sm font-normal font-Poppins px-[14px] py-2 rounded-[100px] w-fit ${
            activeContent === content
              ? " text-white bg-[#181A1C]"
              : "bg-transparent text-[#7B7F81]"
          }`}
        >
          {content}
        </button>
      ))}
    </div>
  );
};

export default EasyCareTab;
