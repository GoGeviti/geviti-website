import React from "react";
import ButtonCta from "../Landing/ButtonCta";

const Investment = () => {
  return (
    <>
      <section className="sm:px-4 mb-10 overflow-hidden bg-">
        <div
          style={{ backgroundSize: "100% 100%" }}
          className="max-w-[1416px] h-[811px] flex items-end rounded-[19px] w-full mx-auto sm:bg-[url('/images/solution_media/investment-bg.webp')]  bg-[url('/images/solution_media/investment-bg-mobile.webp')] md:h-auto bg-no-repeat bg-center pointer-events-none  "
        >
          <div className="md:bg-none bg-hero-landing-bottom w-full  px-5 lg:pl-[68px] md:pt-[146px] pb-[68px] md:pb-[100px] h-[80%] object-cover flex flex-col justify-end">
            <h2 className="text-white font-Poppins font-semibold leading-[171.429%] tracking-[1.54px] uppercase sm:text-xs text-[10px] md:text-sm md:text-start text-center w-full">
              An INVESTMENT IN YOUR FUTURE
            </h2>
            <p className="lg:text-4xl md:text-3xl text-2xl font-normal font-Poppins leading-[133.333%] md:leading-[125%] text-grey-secondary -tracking-[0.96px] md:text-start text-center md:-tracking-[1.44px] mb-2.5 md:mb-5 mt-[7px] md:max-w-[494px] w-full">
              Prioritizing longevity is an investment in your future self.
            </p>
            <span className="text-white md:text-sm text-xs md:text-start text-center font-Poppins leading-[142.857%] md:max-w-[423px] w-full flex">
              Live longer without compromising your lifestyle—our longevity
              solutions are designed to fit seamlessly into your everyday life.
            </span>
            <ButtonCta
              className="md:max-w-[208px] w-full mt-10 md:mt-[60px]"
              text="Start now"
              href="/your-link"
              theme="secondary"
              arrowClassName="your-arrow-class"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Investment;
