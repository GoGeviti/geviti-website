import { Footer } from "@/components";
import { FAQ } from "@/components/HowItWorks";
import { RunningLogo } from "@/components/Landing";
import FrequentlyAskedQues from "@/components/MemberShip/FrequentlyAskedQues";
import BloodworkPanel from "@/components/Solutions/BloodworkPanel";
import Hero from "@/components/Solutions/Hero";
import EasyOnlineCare from "@/components/Solutions/easy-online-care/EasyOnlineCare";
import WellnessPro from "@/components/Solutions/women/WellnessPro";
import Investment from "../../../components/Solutions/Investment";

const Solutions = () => {
  const treatmentmens = {
    sectionsubheading: "Doctor Led online Treatment",
    sectionmainheading: "Treatment options for females",
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
          image="/images/solution_media/women-desktop.png"
          imageMobile="/images/solution_media/women-desktop.png"
        />
        <RunningLogo />
        <WellnessPro />
        <EasyOnlineCare treatmentmens={treatmentmens} />
        <BloodworkPanel />
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
