import React from "react";
import Hero from "@/components/Solutions/Hero";
import BloodworkPanel from "@/components/Solutions/BloodworkPanel";
import OptimizedYourSelf from "@/components/Solutions/OptimizedYourSelf";
import Investment from "../../../components/Solutions/Investment";
import WellnessPro from "@/components/Solutions/WellnessPro";
import EasyOnlineCare from "@/components/Solutions/easy-online-care/EasyOnlineCare";
import FrequentlyAskedQues from "@/components/MemberShip/FrequentlyAskedQues";
import { Mission, RunningLogo } from "@/components/Landing";
import { Footer } from "@/components";
import { FAQ } from "@/components/HowItWorks";

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
        <FAQ />
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
