"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";

// import gsap from 'gsap';
import { landingData } from "@/constant/data";
import clsxm from "@/helpers/clsxm";
import { screens } from "@/helpers/style";
import { useWindowDimensions } from "@/hooks";

import LogoBlueLayer from "../../../public/images/landing/compressed/blue-geviti.webp";
import CustomLink from "../CustomLink";
import { ArrowNarrowLeft, ArrowNarrowRight, ChevronRight } from "../Icons";

const shiftVariants = {
  initial: { y: "0%" },
  animate: { y: "-50%" },
  exit: { y: "0%" },
};

const shiftVariantsMobile = {
  initial: {
    y: 20,
    opacity: 0,
  },
  animate: { y: 0, opacity: 1 },
  exit: {
    y: 20,
    opacity: 0,
  },
};

type ShiftSectionProps = {
  children: React.ReactNode;
  prevElement: React.ReactNode;
  trend?: number;
  id: string;
  isMobile?: boolean;
  wrapperClassName?: string;
};

const ShiftSection: React.FC<ShiftSectionProps> = ({
  children,
  prevElement,
  trend,
  id,
  isMobile,
  wrapperClassName,
}) => {
  const container = useRef<HTMLSpanElement>(null);
  const [contentHeight, setContentHeight] = useState<number | string>(0);

  useEffect(() => {
    const clientHeight = container?.current?.clientHeight;
    if (clientHeight) {
      setContentHeight(clientHeight);
    }
  }, [id]);

  return (
    <AnimatePresence initial={false} custom={trend}>
      <div
        className={clsxm("inline-block overflow-hidden", wrapperClassName)}
        style={!isMobile ? { height: contentHeight } : {}}
      >
        <motion.span
          className="flex flex-col"
          custom={trend}
          initial="initial"
          animate="animate"
          exit="exit"
          key={id}
          variants={isMobile ? shiftVariantsMobile : shiftVariants}
          transition={{
            duration: 0.85,
            ease: "easeIn",
          }}
        >
          <span
            className={clsxm(
              "max-lg:hidden",
              contentHeight === 0 ? "hidden" : ""
            )}
          >
            {prevElement}
          </span>
          <span ref={container}>{children}</span>
        </motion.span>
      </div>
    </AnimatePresence>
  );
};

const imgVariants = {
  initial: (trend: number) => ({
    x: trend === 1 ? "200%" : "-200%",
  }),
  animate: { x: "-50%", opacity: 1 },
  exit: (trend: number) => ({
    x: trend === 1 ? "-200%" : "200%",
  }),
};

const homeKitsData = landingData.homeKits;
const list = homeKitsData.carousel;
const CURSOR_SIZE = 156;

const HomeKits: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const windowDimensions = useWindowDimensions();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const animatedHoverX = useSpring(mouseX, {
    damping: 20,
    stiffness: 400,
    mass: 0.1,
  });
  const animatedHoverY = useSpring(mouseY, {
    damping: 20,
    stiffness: 400,
    mass: 0.1,
  });

  const [idx, setIdx] = useState<number>(0);

  const [prevIdx, setPrevIdx] = useState(idx);

  const trend = idx > prevIdx ? 1 : -1;

  const activeIdx = Math.abs(idx % list.length);
  const currentData = list[activeIdx];
  const isMobile = windowDimensions.width < screens.lg;

  const handleNext = () => {
    setPrevIdx(idx);
    setIdx((prevIndex) => (prevIndex + 1 === list.length ? 0 : prevIndex + 1));
  };

  const handlePrevious = () => {
    setPrevIdx(idx);
    setIdx((prevIndex) =>
      prevIndex - 1 < 0 ? list.length - 1 : prevIndex - 1
    );
  };

  const renderButtonArrowSlider = () => {
    const buttonClassName =
      "focus:ring-0 focus:outline-none relative text-primary disabled:text-grey-200";

    return (
      <div className="flex items-center gap-[11px]">
        <button
          onClick={handlePrevious}
          className={buttonClassName}
          disabled={idx === 0}
          aria-label={`prev-slider-${idx}`}
        >
          <ArrowNarrowLeft className="w-6 h-6 flex-shrink-0" />
        </button>

        <button
          onClick={handleNext}
          className={buttonClassName}
          disabled={idx === list.length - 1}
          aria-label={`next-slider-${idx}`}
        >
          <ArrowNarrowRight className="w-6 h-6 flex-shrink-0" />
        </button>
      </div>
    );
  };

  const renderButtonViewAll = () => {
    return (
      <CustomLink
        href={homeKitsData.btnCta.href}
        aria-label={homeKitsData.btnCta.text}
        className="btn btn-primary flex items-center gap-7px sm:gap-2 !translate-y-0 group flex-shrink-0"
      >
        <span className="text-xs sm:text-sm font-medium leading-5 sm:leading-6 font-Poppins">
          {homeKitsData.btnCta.text}
        </span>

        <ChevronRight className="stroke-grey-secondary w-4 h-4 sm:w-18px sm:h-18px group-hover:translate-x-1 transform transition-all duration-100" />
      </CustomLink>
    );
  };

  const renderProgressBar = () => {
    return (
      <div className="overflow-hidden rounded-full bg-grey-100 relative w-full">
        <motion.div
          className="h-1 rounded-full bg-blue-primary"
          initial={{ width: "0%" }}
          animate={{ width: (idx + 1) * (100 / list.length) + "%" }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
        />
      </div>
    );
  };

  const renderDesktopImage = () => {
    const defaultImageDesktopClassName =
      "h-full object-contain pointer-events-none";

    if (currentData.id === "homekits") {
      return (
        <Image
          src={currentData.image}
          alt=""
          width={1246.87}
          height={831.91}
          className={clsxm(
            "w-[1246.87px] mt-[60px] max-lg:hidden",
            defaultImageDesktopClassName
          )}
        />
      );
    }

    if (currentData.id === "prescription") {
      return (
        <Image
          src={currentData.image}
          alt=""
          width={1325.33}
          height={994}
          className={clsxm(
            "w-[1325.33px] -mt-[60px]",
            defaultImageDesktopClassName
          )}
        />
      );
    }

    if (currentData.id === "therapy") {
      return (
        <Image
          src={currentData.image}
          alt=""
          width={651.26}
          height={585.62}
          className={clsxm(
            "w-[651.26px] relative left-1/2 -translate-x-1/2 top-[207px]",
            defaultImageDesktopClassName
          )}
        />
      );
    }

    return null;
  };

  const renderTitle = (title: string) => {
    return (
      <h2 className="text-primary text-[5.581vw] xs:text-2xl md:text-3xl lg:text-[3.75vw] xl:text-5xl !leading-[133%] md:!leading-normal -tracking-0.04em">
        {title}
      </h2>
    );
  };

  const renderPreTitle = (preTitle: string) => {
    return <p className="text-pretitle text-grey-primary">{preTitle}</p>;
  };

  const renderDescription = (description: string) => {
    return (
      <p
        className="text-grey-400 text-[2.791vw] xs:text-xs max-sm:!leading-5 sm:text-base lg:text-lg !leading-normal text-center lg:text-left"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    );
  };

  const handleScrollCarousel = useCallback(
    (e: React.UIEvent<HTMLDivElement>) => {
      const element = e.currentTarget;

      const windowScroll = element.scrollLeft;
      const totalWidth = element.scrollWidth - element.clientWidth;
      let scrollProgress = 0;
      if (windowScroll === 0) scrollProgress = 0;
      if (windowScroll > totalWidth) scrollProgress = 100;
      else scrollProgress = (windowScroll / totalWidth) * 100;

      const activeItemIdx = Math.floor((scrollProgress * list.length) / 110);
      setIdx(activeItemIdx);
    },
    []
  );

  const renderImages = () => {
    if (isMobile && windowDimensions.width > 0) {
      return (
        <div className="absolute-center w-full h-full">
          <div
            onScroll={handleScrollCarousel}
            className="z-2 relative no-scrollbar w-full flex flex-nowrap overflow-y-hidden overflow-x-scroll snap-x snap-mandatory scroll-smooth"
          >
            {list.map((item, itemIdx) => {
              return (
                <motion.div
                  key={`scroll-image-${item.id}`}
                  style={{ y: backgroundY }}
                  className={clsxm(
                    "flex relative z-2 snap-start",
                    itemIdx === 0 && "pt-20 sm:pt-5",
                    itemIdx === 1 && "pt-[60px] sm:pt-2",
                    itemIdx === 2 && "pt-[80px] sm:pt-[100px]"
                  )}
                >
                  <div
                    className={clsxm(
                      "relative w-screen h-[380.13px]",
                      itemIdx === 2 ? "sm:h-[50vw]" : "sm:h-[58.651vw]"
                    )}
                  >
                    <Image
                      src={item.imageMobile}
                      fill
                      alt=""
                      className={clsxm(
                        itemIdx < list.length - 1
                          ? "object-cover sm:object-contain"
                          : "object-contain",
                        "w-full h-full"
                      )}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      );
    }

    return (
      <AnimatePresence initial={false} custom={trend}>
        <motion.div
          variants={imgVariants}
          custom={trend}
          initial="initial"
          animate="animate"
          exit="exit"
          key={`image-${currentData.id}`}
          style={{ x: "-50%", y: "-50%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute-center w-full h-full"
          onMouseMove={({ currentTarget, clientX, clientY }) => {
            const parent = currentTarget.offsetParent;
            if (!parent) return;
            const { left, top } = parent.getBoundingClientRect();
            mouseX.set(clientX - left - CURSOR_SIZE / 2);
            mouseY.set(clientY - top - CURSOR_SIZE / 2);
          }}
          onClick={handleNext}
        >
          <motion.div
            className="pointer-events-none absolute z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              width: CURSOR_SIZE,
              height: CURSOR_SIZE,
              x: animatedHoverX,
              y: animatedHoverY,
            }}
          >
            <motion.div
              layout
              className="grid justify-center items-center h-full place-items-center rounded-full bg-primary"
            >
              <motion.span
                layout="position"
                className="w-full inline-flex items-center gap-2 select-none text-center text-blue-primary text-sm !leading-6 font-medium"
              >
                Click To Slide
                <ArrowNarrowRight className="text-blue-primary flex-shrink-0 w-18px h-18px" />
              </motion.span>
            </motion.div>
          </motion.div>
          <motion.div style={{ y: backgroundY }} className="relative flex z-2">
            {renderDesktopImage()}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <div
      ref={containerRef}
      className="pt-[65px] mb-[84px] lg:pt-[74px] lg:mb-[140px] h-full relative overflow-hidden font-Poppins"
    >
      <div className="container-center">
        <div className="flex items-center space-x-14 max-lg:hidden">
          {renderProgressBar()}
          {renderButtonArrowSlider()}
        </div>
        <div>
          <div className="lg:flex lg:justify-between gap-4 mt-[42px]">
            <div className="max-lg:text-center flex flex-col max-lg:justify-center max-lg:gap-2.5">
              {renderPreTitle(currentData.preTitle)}
              <ShiftSection
                id={`title-${currentData.id}`}
                prevElement={renderTitle(list[prevIdx].title)}
                trend={trend}
                isMobile={isMobile}
                wrapperClassName="lg:min-h-[72px]"
              >
                {renderTitle(currentData.title)}
              </ShiftSection>
            </div>
            <div className="flex mt-12 max-lg:hidden">
              <div className="flex items-center">{renderButtonViewAll()}</div>
            </div>
          </div>
          <div className="mt-2.5 lg:mt-3.5 w-full sm:max-w-[600px] lg:max-w-none max-lg:mx-auto min-h-[120px]">
            <ShiftSection
              id={`description-${currentData.id}`}
              prevElement={renderDescription(list[prevIdx].description)}
              trend={trend}
              isMobile={isMobile}
              wrapperClassName="lg:min-h-[108px]"
            >
              {renderDescription(currentData.description)}
            </ShiftSection>
          </div>
        </div>
      </div>
      <div className="lg:max-w-7xl lg:mx-auto">
        <div className="flex h-full justify-center relative pt-[294px] lg:pt-[451px] group">
          <motion.div
            style={{ y: 0 }}
            className="px-4 lg:px-10 flex flex-col z-1"
          >
            <Image
              src={LogoBlueLayer}
              alt=""
              width={1227.73}
              height={288.65}
              className="w-full h-full object-contain pointer-events-none"
            />
            <div className="flex flex-col justify-center gap-6 w-full mt-[59px] lg:hidden">
              {renderProgressBar()}
              <p className="text-xs !leading-5 text-center text-grey-400">
                Slide for More
              </p>
            </div>
          </motion.div>

          {renderImages()}
        </div>
      </div>
    </div>
  );
};

export default HomeKits;
