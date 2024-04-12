"use client";
import React, { useState } from "react";
import EasyCareTab from "./EasyCareTab";
import Antiaging from "./Antiaging";
import MedicalWeightLoss from "./MedicalWeightLoss";
import TestosteroneTherapy from "./TestosteroneTherapy";

const EasyOnlineCare = () => {
  const [activeContent, setActiveContent] = useState("Profile");
  return (
    <>
      <section className="!my-6 bg-white px-4 py-11">
        <div className="max-w-[1349px] w-full mx-auto">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-base leading-[150%] tracking-[1.76px] font-Poppins text-grey-primary font-semibold">
              Easy online care
            </h2>
            <p className="mt-[14px] text-[42px] text-primary -tracking-[1.68px] font-Poppins">
              Treatment options for male optimization
            </p>
          </div>
          <div className="max-w-[991px] w-full mt-[56px] bg-gray-50 p-6 rounded-[100px]">
            <EasyCareTab
              setActiveContent={setActiveContent}
              activeContent={activeContent}
            />
            {activeContent === "Profile" && <Antiaging />}
            {activeContent === "Security & Privacy" && <MedicalWeightLoss />}
            {activeContent === "Social Media" && <TestosteroneTherapy />}
          </div>
        </div>
      </section>
    </>
  );
};

export default EasyOnlineCare;
