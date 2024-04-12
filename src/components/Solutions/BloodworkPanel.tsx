import React from "react";
import {
  BloodGroupIcon,
  BorderLine,
  CareTeamIcon,
  GraphIcon,
  MamberIcon,
} from "./SolutionIcons";

const bloodworkPanel = () => {
  return (
    <>
      <section className="md:px-4">
        <div className="px-4 max-w-[1416px] w-full rounded-[19px] bg-primary lg:pt-[120px] md:py-20 py-10 lg:pb-[138px] mx-auto">
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="md:text-sm text-[10px] leading-[150%] md:leading-[171.429%] tracking-[1.1px] md:tracking-[1.54px] font-Poppins text-grey-primary font-semibold uppercase">
              Geviti offers data-driven wellness solutions
            </h2>
            <p className="lg:text-[42px] text-2xl  text-white font-normal -tracking-[1.68px] font-Poppins md:mt-0 mt-3">
              Begin with an at-home bloodwork panel
            </p>
            <h3 className="md:text-sm text-xs md:leading-[142.857%] tracking-[1.54px] font-Poppins text-grey-primary font-normal max-w-[461px] w-full text-center mt-[14px]">
              Membership journey starts with choosing a “Deep Dive” diagnostic.
              We’ll draw your blood from the comfort of your home.
            </h3>
          </div>
          <span className="md:flex max-w-[1280px] w-full mx-auto my-[58px] hidden">
            <BorderLine />
          </span>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[42px] place-content-center place-items-center md:mt-0 mt-[42px]">
            <div className="space-y-6 md:max-w-[219px]  w-full flex flex-col md:items-start items-center md:text-start text-center">
              <span className="flex bg-[#99D4FF] shadow-[0px_4px_21.1px_0px_rgba_(0_147_255_0.25)#99D4FF] rounded-[19px] w-[64px] h-[64px] items-center justify-center">
                <MamberIcon />
              </span>
              <p className="text-sm font-medium text-white font-Poppins">
                Become a member by purchasing a full panel diagnostic package
              </p>
            </div>
            <div className="space-y-6 md:max-w-[219px]  w-full flex flex-col md:items-start items-center md:text-start text-center">
              <span className="flex bg-[#99D4FF] shadow-[0px_4px_21.1px_0px_rgba_(0_147_255_0.25)#99D4FF] rounded-[19px] w-[64px] h-[64px] items-center justify-center">
                <BloodGroupIcon />
              </span>
              <p className="text-sm font-medium text-white font-Poppins">
                Become a member by purchasing a full panel diagnostic package
              </p>
            </div>
            <div className="space-y-6 md:max-w-[219px]  w-full flex flex-col md:items-start items-center md:text-start text-center">
              <span className="flex bg-[#3B3C3E] rounded-[19px] w-[64px] h-[64px] items-center justify-center">
                <CareTeamIcon />
              </span>
              <p className="text-sm font-medium text-[#7B7F81] font-Poppins">
                Become a member by purchasing a full panel diagnostic package
              </p>
            </div>
            <div className="space-y-6 md:max-w-[219px]  w-full flex flex-col md:items-start items-center md:text-start text-center">
              <span className="flex bg-[#3B3C3E] rounded-[19px] w-[64px] h-[64px] items-center justify-center">
                <GraphIcon />
              </span>
              <p className="text-sm font-medium text-[#7B7F81] font-Poppins">
                Become a member by purchasing a full panel diagnostic package
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default bloodworkPanel;
