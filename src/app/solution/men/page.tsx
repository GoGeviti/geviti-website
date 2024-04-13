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
  const treatmentmens = {
    sectionsubheading: "Easy online care",
    sectionmainheading: "Treatment options for male optimization",
    cards: {
      heading: "Compare Testosterone Optimization options",
      subheading: "Oral Testosterone",
      paragraph:
        "The FDA's approval of oral testosterone undecanoate offers a breakthrough in TRT, providing an easy-to-use, effective option for managing Low T. This addition enhances the therapy landscape, simplifying the path to hormonal balance for many. ",
      features: [
        "FDA Approved",
        "Bioidentical",
        "96% Efficacy",
        "Oral Capsule",
        "Twice Daily",
        "Flexible Dosing",
      ],
      cardslist: [
        {
          imageURL: "/images/solution_media/Pill-Bottle-Mockup.webp",
        },
        {
          imageURL: "/images/solution_media/Pill-Bottle-Mockup.webp",
        },
        {
          imageURL: "/images/solution_media/Pill-Bottle-Mockup.webp",
        },
        {
          imageURL: "/images/solution_media/Pill-Bottle-Mockup.webp",
        },
      ],
    },
    products: [
      {
        id: 1,
        name: "Oral Testosterone",
        description: "Oral Gel Capsule",
        price: "$94.99/m*",
        imageSrc: "/images/solution_media/Pill-Bottle-Mockup.webp",
      },
      {
        id: 2,
        name: "Enclomiphene Citrate",
        description: "Oral Tablet",
        price: "$94.99/m*",
        imageSrc: "/images/solution_media/Pill-Bottle-Mockup.webp",
      },
      {
        id: 3,
        name: "Testosterone Booster Complex",
        description: "Oral Tablet",
        price: "$94.99/m*",
        imageSrc: "/images/solution_media/Pill-Bottle-Mockup.webp",
      },
      {
        id: 4,
        name: "Testosterone Topical Cream",
        description: "Oral Tablet",
        price: "$94.99/m*",
        imageSrc: "/images/solution_media/Pill-Bottle-Mockup.webp",
      },
      {
        id: 5,
        name: "Enclomiphene Citrate",
        description: "Oral Tablet",
        price: "$94.99/m*",
        imageSrc: "/images/solution_media/Pill-Bottle-Mockup.webp",
      },
      {
        id: 6,
        name: "Enclomiphene Citrate",
        description: "Oral Tablet",
        price: "$94.99/m*",
        imageSrc: "/images/solution_media/Pill-Bottle-Mockup.webp",
      },
    ],
  };
  return (
    <>
      <div className="bg-[#F2F2F2]">
        <Hero
          image="/images/solution_media/solution-bg.webp"
          imageMobile="/images/solution_media/solution-mobile-bg.webp"
        />
        <RunningLogo />
        <WellnessPro />
        <EasyOnlineCare
          treatmentmens={treatmentmens}
          heading="Easy online care"
          subheading="Treatment options for male optimization"
        />
        <BloodworkPanel />
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
