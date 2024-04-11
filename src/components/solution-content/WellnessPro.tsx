import Image from "next/image";
import React from "react";

const sections = [
  {
    title: "Hormone optimization can change your life",
    subtitle: "1 in 4 men over age 30 have low T.",
    description:
      "1 of every 4 men over the age of 30 have a testosterone deficiency. Further, 1 in every three adults are overweight. Geviti offers the ultimate solution for health and wellness.",
    image: "/images/solution_media/low-case.webp",
  },
  {
    title: "Testosterone deficiencies are common",
    subtitle: "Low T can affect any age group.",
    description:
      "It’s a misconception that your testosterone only drops in your older years. More young men struggle with testosterone deficiencies than ever before.",
    image: "/images/solution_media/hormone-optimization.webp",
  },
];

const WellnessPro = () => {
  return (
    <>
      <section className="bg-[#F2F2F2] px-4">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-[23px] pt-[63px] max-w-[1415px] w-full mx-auto">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-[19px] px-4 md:px-6 py-[42px] pb-6 z-10"
            >
              <p className="text-grey-primary text-[10px] md:text-sm font-semibold leading-[171.429%] uppercase tracking-[1.54px]">
                {section.title}
              </p>
              <h2 className="text-primary text-2xl md:text-3xl lg:text-4xl font-normal font-Poppins">
                {section.subtitle}
              </h2>
              <span className="text-gray-400 text-sm md:text-sm font-normal leading-[142%] lg:max-w-[446px] w-full font-Poppins inline-block mt-4 md:mt-3">
                {section.description}
              </span>
              <div className="lg:max-w-[648px] w-full mt-[18px] md:mt-10 lg:mt-14">
                <Image
                  className="w-full h-full rounded-[19px] object-cover"
                  src={section.image}
                  alt="img"
                  width={648}
                  height={648}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default WellnessPro;
