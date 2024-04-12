import React from "react";
import Hero from "../../components/solution-content/Hero";
import BloodworkPanel from "../../components/solution-content/BloodworkPanel";
import OptimizedYourSelf from "../../components/solution-content/OptimizedYourSelf";
import Faq from "../../components/solution-content/Faq";
import Investment from "../../components/solution-content/Investment";
import WellnessPro from "@/components/solution-content/WellnessPro";
import EasyOnlineCare from "@/components/solution-content/EasyOnlineCare";
const Solutions = () => {
  return (
    <>
      <div className="bg-[#F2F2F2]">
        <Hero />
        <WellnessPro />
        <EasyOnlineCare />
        <BloodworkPanel />
        <OptimizedYourSelf />
        <Faq />
        <Investment />
      </div>
    </>
  );
};

export default Solutions;
