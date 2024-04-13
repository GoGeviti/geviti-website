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
        <Hero 
         image="/images/solution_media/solution-bg.webp"
         imageMobile="/images/solution_media/solution-mobile-bg.webp" 
        />
        <RunningLogo />
        <WellnessPro/>
        <EasyOnlineCare 
          heading="Easy online care"
          subheading="Treatment options for male optimization"
        />
        <BloodworkPanel bgColor="bg-primary" progressbg="bg-[#252627]" barbg="bg-[#99D4FF]"/>
        <OptimizedYourSelf bgimgyourself="/images/solution_media/running-man.webp" />
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
