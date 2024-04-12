"use client";
import React, { useState } from "react";
import EasyCareTab from "./EasyCareTab";
import Antiaging from "./Antiaging";
import MedicalWeightLoss from "./MedicalWeightLoss";
import TestosteroneTherapy from "./TestosteroneTherapy";
import SexualHealth from "./SexualHealth";
import Thyroid from "./Thyroid";
import EasyCareProductCard from "./EasyCareProductCard";

const EasyOnlineCare = () => {
  const [activeContent, setActiveContent] = useState("Testosterone Therapy");
  return (
    <>
      <section className="!my-6 bg-white px-4 py-11">
        <div className="w-full mx-auto">
          <div className="flex flex-col items-center justify-center">
            <h2 className="lg:text-base md:text-sm sm:text-xs text-[10px] leading-[150%] tracking-[1.76px] font-Poppins text-grey-primary font-semibold">
              Easy online care
            </h2>
            <p className="mt-[14px] text-center text-2xl md:text-4xl lg:text-[42px] text-primary -tracking-[1.68px] font-Poppins">
              Treatment options for male optimization
            </p>
          </div>
          <div className=" w-full md:mt-[56px] mt-6 flex flex-col items-center md:pb-0 pb-10">
            <EasyCareTab
              setActiveContent={setActiveContent}
              activeContent={activeContent}
            />
            {activeContent === "Testosterone Therapy" && (
              <TestosteroneTherapy />
            )}
            {activeContent === "Anti-aging Peptides" && <Antiaging />}
            {activeContent === "Medical Weight Loss" && <MedicalWeightLoss />}
            {activeContent === "Sexual Health" && <SexualHealth />}
            {activeContent === "Thyroid" && <Thyroid />}
          </div>
        </div>
        <EasyCareProductCard />
      </section>
    </>
  );
};

export default EasyOnlineCare;
