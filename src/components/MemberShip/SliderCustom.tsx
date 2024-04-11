"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import membershipdata from "@/constant/data/membershipdata";
import ButtonCta from "../Landing/ButtonCta";
import { ChevronRight } from "../Icons";
import { BlueArrow } from "../Icons/Landing";
const sliderdata = membershipdata.slider;

const SliderCustom = () => {
  const sliderRef = useRef<Slider>(null);
  //   const [isCursorVisible, setIsCursorVisible] = useState(true);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  };

  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <div className="relative w-full lg:px-3 pt-3 rounded-19px">
      <div className="overflow-hidden rounded-19px relative">
        <Slider ref={sliderRef} {...settings} className="bg-[#181A1C]">
          {sliderdata.data.map((obj, index) => (
            <div key={index} className="!flex lg:flex-row flex-col-reverse ">
              <div className="lg:w-1/2 relative z-10 bg-[#181A1C] px-4 lg:pl-16 lg:pr-11 pt-20 h-full">
                <p className=" text-grey-primary tracking-[1.1px] leading-[240%] uppercase font-Poppins text-[10px] sm:text-sm font-semibold">
                  {obj.title}
                </p>
                <h4 className=" text-white max-w-[338px] tracking-[-0.96px] sm:tracking-[-1.44px] font-Poppins text-[24px] sm:text-4xl font-medium pb-6 pt-2 sm:max-w-[592px]">
                  {" "}
                  {obj.heading}
                </h4>
                <p className=" text-grey-primary leading-[166%] sm:leading-[142%] font-Poppins text-[12px] sm:text-sm max-w-[446px]">
                  {obj.subheading}
                </p>
                <ul className=" flex flex-col list-disc my-10 pl-4 max-lg:pb-24">
                  {obj.list.map((data) => (
                    <li
                      key={index}
                      className="text-white leading-[228.571%] sm:leading-[177%] font-Poppins text-[14px] sm:text-lg"
                    >
                      {data}{" "}
                    </li>
                  ))}
                </ul>
                <div className={`${obj.hide} `}>
                  <ButtonCta
                    href=""
                    text="Join Geviti"
                    theme="secondary"
                    className="w-fit"
                  />
                </div>
              </div>
              <div
                onClick={nextSlide}
                className="lg:w-1/2 max-lg:h-[500px] relative"
              >
                <div
                  onClick={nextSlide}
                  className=" absolute w-[156px] cursor-pointer h-[156px] rounded-full flex items-center justify-center gap-2 bg-primary"
                >
                  <p className=" text-sm text-blue-1 font-Poppins font-medium">
                    Click to slide
                  </p>{" "}
                  <BlueArrow />
                </div>
                {/* {isCursorVisible && <CustomCursor/>} */}
                <Image
                  className=" w-full h-full object-cover"
                  src={obj.img}
                  alt="slider1"
                  width={300}
                  height={300}
                  unoptimized
                />
              </div>
            </div>
          ))}
        </Slider>
        <div className=" absolute max-lg:w-full justify-between bottom-9 px-7 lg:left-16 flex lg:gap-10">
          <button
            type="button"
            className="bg-white h-[46px] w-[46px] flex cursor-pointer justify-center items-center rounded-full"
            onClick={prevSlide}
          >
            <span className=" rotate-180">
              <ChevronRight />
            </span>
          </button>
          <button
            type="button"
            className=" bg-white h-[46px] w-[46px] flex cursor-pointer justify-center items-center rounded-full"
            onClick={nextSlide}
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SliderCustom;
