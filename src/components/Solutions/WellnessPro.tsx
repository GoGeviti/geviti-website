import Image from "next/image";
import React from "react";

const sections = [
  {
    title: "Hormone optimization can change your life",
    subtitle: "1 in 4 men over age 30 have low T.",
    description:
      "1 of every 4 men over the age of 30 have a testosterone deficiency. Further, 1 in every three adults are overweight. Geviti offers the ultimate solution for health and wellness.",
    image: "/images/solution_media/low-case.webp",
    mobileimage: "/images/solution_media/low-case-mobile.webp",
    counting: "20",
    million: "Million",
    state: "Men In the united states",
    age: "from ages 25-75 have low T",
  },
  {
    title: "Testosterone deficiencies are common",
    subtitle: "Low T can affect any age group.",
    description:
      "It’s a misconception that your testosterone only drops in your older years. More young men struggle with testosterone deficiencies than ever before.",
    image: "/images/solution_media/hormone-optimization.webp",
    mobileimage: "/images/solution_media/hormone-optimization-mobile.webp",
    counting: "20%",
    million: null,
    state: "YOUNG MEN under 39",
    age: "have a testosterone deficiency",
  },
];
const WellnessPro = () => {
  return (
    <>
      <section className="bg-[#F2F2F2] md:px-4  pt-[63px]">
        <div className="grid lg:grid-cols-2 grid-cols-1 md:gap-[23px] gap-11 w-full mx-auto md:bg-transparent bg-white py-6 md:py-0 rounded-2xl">
          {sections.map((section, index) => (
            <div
              key={index}
              className="md:bg-white rounded-[19px] px-4 md:px-6 md:py-[42px] z-10 relative"
            >
              <p className="text-grey-primary !text-[10px] md:text-sm font-semibold leading-[150%] md:leading-[171.429%] uppercase tracking-[1.1px] md:tracking-[1.54px] font-Poppins">
                {section.title}
              </p>
              <h2 className="text-primary text-2xl md:text-3xl lg:text-4xl font-normal font-Poppins">
                {section.subtitle}
              </h2>
              <span className="text-gray-400 text-sm md:text-sm font-normal leading-[142%] lg:max-w-[446px] w-full font-Poppins inline-block mt-4 md:mt-3">
                {section.description}
              </span>
              <div className="lg:max-w-[648px] w-full mt-[18px] md:mt-10 lg:mt-14 relative h-[288px]">
                <Image
                  style={{ backgroundSize: "100% 100%" }}
                  className="w-full h-full rounded-[19px] absolute appearance-none sm:block hidden"
                  src={section.image}
                  alt="img"
                  width={648}
                  height={648}
                />
                <Image
                  style={{ backgroundSize: "100% 100%" }}
                  className="w-full h-full rounded-[19px] absolute appearance-none sm:hidden block "
                  src={section.mobileimage}
                  alt="img"
                  width={648}
                  height={648}
                />
                <div className="relative z-10 md:p-6 p-[18px] flex flex-col justify-end items-start h-full">
                  <h2 className="text-[100px] font-normal text-white font-Poppins tracking-[-4px] leading-[70%] mb-[14px]">
                    {section.counting}
                    <span className="text-4xl tracking-[-1.44px] font-Poppins">
                      {section.million}
                    </span>
                  </h2>
                  <p className=" text-[#99D4FF] !text-sm font-semibold leading-[150%] uppercase tracking-[1.54px] font-Poppins">
                    {section.state}
                  </p>
                  <p className=" text-white !text-sm font-semibold leading-[150%] uppercase tracking-[1.54px] font-Poppins">
                    {section.age}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default WellnessPro;
