import { NextIcon, PrevIcon } from "../SolutionIcons";
import EasyOnlineCareCard from "./EasyOnlineCareCard";
import SliderData from "./SliderData";

const Testosteronelist = [
  {
    title: "Compare Testosterone Optimization options",
    subtitle: "Oral Testosterone",

    description:
      "The FDA's approval of oral testosterone undecanoate offers a breakthrough in TRT, providing an easy-to-use, effective option for managing Low T. This addition enhances the therapy landscape, simplifying the path to hormonal balance for many.",

    prevbtn: <PrevIcon />,
    nextbtn: <NextIcon />,
    imgurl: "/images/solution_media/Pill-Bottle-Mockup.webp",
    checkIconTexts: [
      "FDA Approved",
      "Bioidentical",
      "96% Efficacy",
      "Oral Capsule",
      "Twice Daily",
      "Flexible Dosing",
    ],
  },
];
const imgUrls = [
  "/images/solution_media/Pill-Bottle-Mockup.webp",
  "/images/solution_media/Pill-Bottle-Mockup.webp",
  "/images/solution_media/Pill-Bottle-Mockup.webp",
];

interface IProps {
  treatmentmens: any;
}
const SexualHealth = (props: IProps) => {
  return (
    <>
      <section className="bg-[#F2F2F2]">
        <div className="bg-white flex gap-[23px] justify-between max-w-[1416px] w-full overflow-hidden">
          <div className="w-full grid md:grid-cols-2 grid-cols-1 xl:pl-[68px] gap-[65px] md:gap-6 md:pt-[70px]">
            <div className="max-w-1/2 flex flex-col w-full md:mt-0 mt-[57px] z-10">
              {Testosteronelist?.map((obj, index) => (
                <EasyOnlineCareCard obj={obj} key={index} />
              ))}
            </div>
            <div className="max-w-[696px] w-full flex flex-col items-center justify-between relative">
              <SliderData imgUrls={imgUrls} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SexualHealth;
