import React from "react";
import Hero from "../../../components/solution-content/Hero";
import BloodworkPanel from "../../../components/solution-content/BloodworkPanel";
import OptimizedYourSelf from "../../../components/solution-content/OptimizedYourSelf";
import Faq from "../../../components/solution-content/Faq";
import Investment from "../../../components/solution-content/Investment";
import WellnessPro from "@/components/solution-content/WellnessPro";
import EasyOnlineCare from "@/components/solution-content/EasyOnlineCare";
import FrequentlyAskedQues from "@/components/MemberShip/FrequentlyAskedQues";
import { Mission, RunningLogo } from "@/components/Landing";
import { Footer } from "@/components";
const Solutions = () => {
  return (
    <>
      <div className="bg-[#F2F2F2]">
        <Hero />
        <RunningLogo />
        <WellnessPro />
        <EasyOnlineCare />
        <BloodworkPanel />
        <OptimizedYourSelf />
        <Faq />
        <Investment
          bgimagemobile="url(/images/solution_media/investment-bg-mobile.webp)"
          bgimagedesktop="url('/images/solution_media/investment-bg.webp')"
        />
        <FrequentlyAskedQues />
        <div className="flex flex-col gap-y-3.5">
          <Mission />
          <Footer landingPage />
        </div>
      </div>
    </>
  );
};

export default Solutions;
