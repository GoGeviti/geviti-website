import React from "react";
const tabContent = ["Profile", "Social Media", "Subscription Tiers"];

const EasyCareTab = ({ activeContent, setActiveContent }) => {
  return (
    <div className="gap-x-3 overflow-auto btn-group md:mt-6 mt-4 md:px-6 px-4 scroll-bar-hide">
      {tabContent.map((content, index) => (
        <button
          key={index}
          onClick={() => setActiveContent(content)}
          className={`rounded-customRadius shadow-customShadow border flex flex-row gap-2 ${
            activeContent === content
              ? "!border-[#00E8E8]"
              : "!border-[#383B42]"
          }`}
        >
          {content}
        </button>
      ))}
    </div>
  );
};

export default EasyCareTab;
