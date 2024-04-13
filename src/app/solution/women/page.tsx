import React from "react";
import Hero from "@/components/Solutions/Hero";
import BloodworkPanel from "@/components/Solutions/BloodworkPanel";
import OptimizedYourSelf from "@/components/Solutions/OptimizedYourSelf";
import Investment from "../../../components/Solutions/Investment";
import EasyOnlineCare from "@/components/Solutions/easy-online-care/EasyOnlineCare";
import FrequentlyAskedQues from "@/components/MemberShip/FrequentlyAskedQues";
import { Mission, RunningLogo } from "@/components/Landing";
import { Footer } from "@/components";
import { FAQ } from "@/components/HowItWorks";
import WellnessPro from "@/components/Solutions/women/WellnessPro";

const Solutions = () => {
  return (
    <>
      <div className="bg-[#F2F2F2]">
        <Hero
          image="/images/solution_media/women-desktop.png"
          imageMobile="/images/solution_media/women-desktop.png"
        />
        <RunningLogo />
        <WellnessPro />
        <EasyOnlineCare
          heading="Doctor Led online Treatment"
          subheading="Treatment options for females"
        />
        <BloodworkPanel />
        <FAQ />

        <FrequentlyAskedQues />
        <div className="flex flex-col gap-y-3.5">
          <Investment
            bgimagemobile="/images/solution_media/women-investment.png"
            bgimagedesktop="/images/solution_media/women-investment.png"
          />
          <Footer landingPage />
        </div>
      </div>
    </>
  );
};

export default Solutions;
