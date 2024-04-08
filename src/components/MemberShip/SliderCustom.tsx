"use client";
import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import membershipdata from "@/constant/data/membershipdata";
import ButtonCta from "../Landing/ButtonCta";
import { ArrowNarrowLeft, ChevronRight } from "../Icons";
const sliderdata = membershipdata.slider;

const SliderCustom = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade:true,
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="relative w-full px-3 rounded-19px">
      <div className="overflow-hidden rounded-19px relative ">
        <Slider ref={sliderRef} {...settings} className="bg-black"> 
          {sliderdata.data.map((obj) => (
            <div className="!flex ">
              <div className="w-1/2 bg-[#181A1C] pl-16 pr-11 pt-20">
                <p className=" text-grey-primary uppercase font-Poppins text-sm font-semibold">
                  {obj.title}
                </p>
                <h4 className=" text-white font-Poppins text-4xl font-medium pb-6 pt-2 max-w-[592px]"> {obj.heading}
                </h4>
                <p className=" text-grey-primary  font-Poppins text-sm max-w-[446px]">
               {obj.subheading}
                </p>
                <ul className=" flex flex-col list-disc mt-10 pl-4 gap-2">
                   
                        {obj.list.map((data)=>(
                
                   <li className="text-white font-Poppins text-lg">{data} </li>       
               
                         ))}
               
                  
                </ul>
                <div className={`${obj.hide} `}>
                    <ButtonCta
                    href=""
                      text="Join Geviti"
                      theme="secondary"
                      className="w-fit"/>
                </div>
              </div>
              <div className="w-1/2">
                <Image
                  className=" w-full h-full"
                  src="/images/membership/slider1.png"
                  alt="slider1"
                  width={300}
                  height={300}
                />
              </div>
            </div>
          ))}
 
        </Slider>
        <div className=" absolute bottom-9 left-16 flex gap-10">
            <button
            className="bg-white h-[46px] w-[46px] flex cursor-pointer justify-center items-center rounded-full"
            onClick={prevSlide}
                  >
          <span className=" rotate-180"><ChevronRight/></span>
                  </button>
                  <button
            className=" bg-white h-[46px] w-[46px] flex cursor-pointer justify-center items-center rounded-full"
            onClick={nextSlide}
                  >
            <ChevronRight/>
            
                  </button>
        </div>
      </div>
    
    </div>
  );
};

export default SliderCustom;
