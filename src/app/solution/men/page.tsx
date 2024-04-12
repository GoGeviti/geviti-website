import { Footer } from "@/components";
import { RunningLogo } from "@/components/Landing";
import FrequentlyAskedQues from "@/components/MemberShip/FrequentlyAskedQues";
import BloodworkPanel from "@/components/Solutions/BloodworkPanel";
import Hero from "@/components/Solutions/Hero";
import Investment from "@/components/Solutions/Investment";
import OptimizedYourSelf from "@/components/Solutions/OptimizedYourSelf";
import WellnessPro from "@/components/Solutions/WellnessPro";
import EasyOnlineCare from "@/components/Solutions/easy-online-care/EasyOnlineCare";

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
        <FrequentlyAskedQues />
        <div className="flex flex-col gap-y-3.5">
          <Investment
            bgimagemobile="/images/solution_media/investment-bg-mobile.webp"
            bgimagedesktop="/images/solution_media/investment-bg.webp"
          />
          <Footer landingPage />
        </div>
      </div>
    </>
  );
};

export default Solutions;
