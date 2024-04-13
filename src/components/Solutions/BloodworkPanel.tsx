import React from "react";
import {
  BloodGroupIcon,
  BorderLine,
  CareTeamIcon,
  GraphIcon,
  MamberIcon,
} from "./SolutionIcons";

interface BloodworkPanelProps {
  bgColor: string;
  progressbg: string;
  barbg: string;
}

const bloodworkPanel: React.FC<BloodworkPanelProps> = ({ bgColor,progressbg,barbg }) => {
  return (
    <>
      <section className="md:px-4">
        <div className={`w-full rounded-[19px] ${bgColor} px-4 sm:px-10 md:py-20 py-12 lg:py-32`}>
          <div className="flex flex-col items-center justify-center text-center">
            {/* SECTION HEADING  */}
            <h2 className="md:text-sm text-[10px] leading-[150%] md:leading-[171.429%] tracking-[1.1px] md:tracking-[2px] font-Poppins text-grey-primary font-semibold uppercase">
              Geviti offers data-driven wellness solutions
            </h2>
            <p className="lg:text-[42px] text-2xl  text-white font-normal sm:-tracking-[1.68px] font-Poppins mt-4">
              Begin with an at-home bloodwork panel
            </p>
            <h3 className="text-xs md:text-sm md:leading-[142.857%] sm:tracking-[1.54px] font-Poppins text-grey-primary font-normal max-w-[561px] w-full text-center mt-4 md:mt-6">
              Membership journey starts with choosing a “Deep Dive” diagnostic.
              We’ll draw your blood from the comfort of your home.
            </h3>
          </div>
          {/* PROGRESS BAR  */}
          <div className={` ${progressbg}  h-1 rounded-full  my-14`}>
            <div 
              className={` ${barbg}  h-full rounded-full`}
              style={{ width: "50%" }}
            ></div>
          </div>
          {/* CARDS  */}
          <div className="flex-col lg:flex-row flex items-center lg:items-start justify-center lg:justify-between md:mt-0 mt-[42px] space-y-7 lg:space-y-0">
            <article className="cursor-pointer group space-y-4 lg:space-y-6 max-w-xs lg:max-w-[219px]  w-full flex flex-col lg:items-start items-center md:text-start text-center transition-all duration-300 ease-in-out">
              <span className="flex bg-[#3B3C3E] group-hover:bg-[#99D4FF] shadow-[0px_4px_21.1px_0px_rgba_(0_147_255_0.25)#99D4FF] rounded-[19px] w-[64px] h-[64px] items-center justify-center">
                <MamberIcon />
              </span>
              <p className="text-sm font-medium text-[#7B7F81] group-hover:text-white font-Poppins text-center lg:text-left transition-all duration-300 ease-in-out">
                Become a member by purchasing a full panel diagnostic package
              </p>
            </article>
            <article className="cursor-pointer group space-y-4 lg:space-y-6 max-w-xs lg:max-w-[219px]  w-full flex flex-col lg:items-start items-center md:text-start text-center">
              <span className="flex bg-[#3B3C3E] group-hover:bg-[#99D4FF] shadow-[0px_4px_21.1px_0px_rgba_(0_147_255_0.25)#99D4FF] rounded-[19px] w-[64px] h-[64px] items-center justify-center">
                <BloodGroupIcon />
              </span>
              <p className="text-sm font-medium text-[#7B7F81] group-hover:text-white font-Poppins text-center lg:text-left transition-all duration-300 ease-in-out">
                Become a member by purchasing a full panel diagnostic package
              </p>
            </article>
            <article className="cursor-pointer group space-y-4 lg:space-y-6 max-w-xs lg:max-w-[219px]  w-full flex flex-col lg:items-start items-center md:text-start text-center">
              <span className="flex bg-[#3B3C3E] group-hover:bg-[#99D4FF] rounded-[19px] w-[64px] h-[64px] items-center justify-center">
                <CareTeamIcon />
              </span>
              <p className="text-sm font-medium text-[#7B7F81] group-hover:text-white font-Poppins text-center lg:text-left transition-all duration-300 ease-in-out">
                Become a member by purchasing a full panel diagnostic package
              </p>
            </article>
            <article className="cursor-pointer group space-y-4 lg:space-y-6 max-w-xs lg:max-w-[219px]  w-full flex flex-col lg:items-start items-center md:text-start text-center">
              <span className="flex bg-[#3B3C3E] group-hover:bg-[#99D4FF] rounded-[19px] w-[64px] h-[64px] items-center justify-center">
                <GraphIcon />
              </span>
              <p className="text-sm font-medium text-[#7B7F81] group-hover:text-white font-Poppins text-center lg:text-left transition-all duration-300 ease-in-out">
                Become a member by purchasing a full panel diagnostic package
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default bloodworkPanel;
