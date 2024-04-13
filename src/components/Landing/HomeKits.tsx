"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

import { landingData } from "@/constant/data";

import LogoBlueLayer from "../../../public/images/landing/compressed/blue-geviti.webp";
import HomeKitsLayer from "../../../public/images/landing/compressed/homekits.webp";
import HomeKitsMobileLayer from "../../../public/images/landing/compressed/homekits-mobile.webp";

const homeKitsData = landingData.homeKits;

const HomeKits: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      ref={containerRef}
      className="pt-16 pb-[124px] lg:pt-[108.96px] lg:pb-[92.61px] h-full relative overflow-hidden font-Poppins"
    >
      <div className="container-center">
        <div className="max-sm:max-w-[311px] max-lg:max-w-[471px] max-lg:mx-auto text-center lg:text-left">
          <p className="text-grey-400 text-xs max-sm:!leading-5 sm:text-base lg:text-lg !leading-[27px]">
            <span
              dangerouslySetInnerHTML={{ __html: homeKitsData.description }}
            />
          </p>
        </div>
      </div>
      <div className="lg:container-center">
        <div className="flex h-full justify-center relative max-lg:mt-3.5 xl:-top-[100px]">
          <motion.div
            style={{ y: 0 }}
            className="lg:mt-0 max-lg:px-4 flex flex-col absolute bottom-0 lg:pb-[3.5vh] z-1"
          >
            <Image
              src={LogoBlueLayer}
              alt=""
              width={1227.73}
              height={288.65}
              className="w-[139.198vh] h-full object-contain pointer-events-none"
              unoptimized
            />
            <div className="flex justify-center w-full text-center mt-[27px] lg:mt-[47.37px]">
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-[62px] !leading-normal -tracking-0.04em text-primary">
                {homeKitsData.title}
              </h2>
            </div>
          </motion.div>
          <motion.div
            style={{ y: backgroundY }}
            className="relative flex max-lg:top-[4vh] z-2"
          >
            <Image
              src={HomeKitsLayer}
              alt=""
              width={1246.87}
              height={831.91}
              className="w-[141.368vh] h-full object-contain max-lg:hidden pointer-events-none"
              unoptimized
            />
            <Image
              src={HomeKitsMobileLayer}
              alt=""
              width={1139.48}
              height={760.26}
              className="w-[569.74px] h-full object-contain lg:hidden pointer-events-none"
              unoptimized
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomeKits;
