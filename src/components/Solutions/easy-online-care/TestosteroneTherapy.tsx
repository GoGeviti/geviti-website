import { NextIcon, PrevIcon } from "../SolutionIcons";
import EasyOnlineCareCard from "./EasyOnlineCareCard";

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

const TestosteroneTherapy = () => {
  return (
    <>
      <section className="bg-[#F2F2F2]">
        <div className="bg-white flex gap-[23px]">
          {Testosteronelist?.map((obj, index) => (
            <EasyOnlineCareCard obj={obj} key={index} />
          ))}
        </div>
      </section>
    </>
  );
};

export default TestosteroneTherapy;
