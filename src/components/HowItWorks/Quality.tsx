import React from "react";
import Image from "next/image";

import { howItWorksData } from "@/constant/data";
import clsxm from "@/helpers/clsxm";

import CustomLink from "../CustomLink";
import { CheckCircleIcon, ChevronRight } from "../Icons";

const howItWorks = howItWorksData.quality;

const Quality: React.FC = () => {
  return (
    <div className="lg:px-3 overflow-hidden">
      <div className="bg-grey-secondary h-[850px] lg:h-full w-full lg:rounded-[19px] relative overflow-hidden">
        <div className="container-center relative mx-auto">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between lg:px-10 max-lg:pt-[48px] lg:py-[68px]">
            <div className="lg:max-w-lg z-20">
              <div className="text-center lg:text-left flex flex-col z-20">
                <p className="text-grey-primary font-Poppins text-[10px] lg:text-sm font-semibold leading-[15px] lg:leading-6 tracking-[1.1px] lg:tracking-[1.54px] uppercase">
                  {howItWorks.preTitle}
                </p>
                <h2 className="text-primary font-Poppins text-[27.941px] lg:text-4xl -tracking-[1.118px] lg:-tracking-[1.44px] leading-[108%] lg:leading-[45px] mt-11px sm:mt-7px">
                  {howItWorks.title}
                </h2>
                <div
                  id="main-quality-list"
                  className="mt-[70px] lg:mt-[50px] w-full grid gap-5px sm:gap-2.5 lg:max-w-[405px] order-1"
                >
                  {howItWorks.list.map((functionItem, functionItemIdx) => {
                    return (
                      <div
                        key={functionItemIdx}
                        className="rounded-lg bg-primary/[0.03] px-[13px] sm:px-5 py-15px sm:py-5 flex items-center gap-[10px] hover:outline hover:outline-2 hover:outline-grey-primary"
                      >
                        <CheckCircleIcon className="text-primary w-3 h-3 flex-shrink-0 scale-125" />
                        <p
                          className="text-xs lg:text-sm text-primary font-medium font-Poppins"
                          dangerouslySetInnerHTML={{ __html: functionItem }}
                        />
                      </div>
                    );
                  })}
                </div>
                <div className="flex max-lg:justify-center mt-4 lg:mt-[50px] order-0">
                  <div className="flex max-sm:flex-wrap justify-center items-center gap-2.5 lg:gap-[11px]">
                    {howItWorks.btnCtaList.map((btnCta, btnCtaIdx) => {
                      return (
                        <div key={btnCtaIdx}>
                          <CustomLink
                            href={btnCta.href}
                            externalLink={btnCta.externalLink}
                            className={clsxm(
                              "btn-cta-landing group px-5 py-[10px]",
                              btnCtaIdx === 0 ? "btn-primary" : ""
                            )}
                            aria-label={btnCta.text}
                          >
                            <span className="text-btn-cta-landing">
                              {btnCta.text}
                            </span>

                            <ChevronRight className="arrow-btn-cta-landing" />
                          </CustomLink>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="relative z-0 max-md:mt-5">
              <Image
                src={howItWorks.image}
                alt="quality"
                loading="lazy"
                width={480}
                height={644}
                className=""
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quality;
