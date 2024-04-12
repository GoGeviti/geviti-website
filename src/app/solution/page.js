import React from "react";
import Hero from "../../components/solution-content/Hero.tsx";
import WellnessPro from "../../components/solution-content/WellnessPro.tsx";
import EasyOnlineCare from "../../components/solution-content/EasyOnlineCare.tsx";
import BloodworkPanel from "../../components/solution-content/BloodworkPanel.tsx";
import OptimizedYourSelf from "../../components/solution-content/OptimizedYourSelf.tsx";
import Faq from "../../components/solution-content/Faq.tsx";
import Investment from "../../components/solution-content/Investment.tsx";
const page = () => {
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

export default page;
