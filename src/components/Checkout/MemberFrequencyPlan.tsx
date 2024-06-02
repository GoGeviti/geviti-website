import React, { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";

import { checkoutData } from "@/constant/data";
import clsxm from "@/helpers/clsxm";
import { splitList } from "@/helpers/misc";

import { GreenCheck } from "../Icons";
import ButtonSwitchMemberFreq from "../MemberShip/ButtonSwitchMemberFreq";

import { CheckoutStep } from "./Main";
import Navbar from "./Navbar";
import PrivacyPolicyStatement from "./PrivacyPolicyStatement";
import ProgressStep from "./ProgressStep";
import { MembershipOfferingsReturnType } from "./api/types";
import { getMembershipOfferings } from "./api/onboarding";

const membershipFrequencyData = checkoutData.membershipFrequency;
const defaultButtonClassName =
  "rounded-full font-medium text-lg !leading-6 max-sm:w-full py-[17px] px-[42px] flex items-center justify-center shadow-[0px_1px_2px_rgba(16,24,40,0.05)]";

type MemberFrequencyPlanProps = {
  setStep: Dispatch<SetStateAction<CheckoutStep>>;
  setSelectedMembership: Dispatch<SetStateAction<MembershipOfferingsReturnType | undefined>>;
};

const MemberFrequencyPlan: React.FC<MemberFrequencyPlanProps> = ({ setStep, setSelectedMembership }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [activeTabIdx, setActiveTabIdx] = useState<number>(0);
  const [offerings, setOfferings] = useState<MembershipOfferingsReturnType[]>();

  useEffect(() => {
    const getOfferings = async () => {
      const memberShipOfferings = await getMembershipOfferings();

      setOfferings(
        memberShipOfferings
          ?.map((it) => ({
            ...it,
            title: it.billing_frequency,
          }))
          .reverse()
      );
    };
    getOfferings();
  }, []);

  const onClickBack = () => {
    router.back();
    if (setStep) setStep(CheckoutStep.PRICING_PRODUCT_PLAN);
  };

  const onClickSubmit = () => {
    if (!offerings) return;

    const selectedPayment = offerings[activeTabIdx].billing_frequency;

    const product = searchParams.get("product");
    const params = new URLSearchParams(searchParams.toString());
    params.set("membership", offerings[activeTabIdx].id);
    if (window) {
      window.history.pushState(null, "", `?${params.toString()}`);
      window.scrollTo({ top: 0 });
    }
    // TODO: remove console and go to payment link
    if (setStep) {
      setStep(CheckoutStep.STRIPE_PAYMENT);
      setSelectedMembership(offerings[activeTabIdx]);
      router.replace(`/payment?product=${product}&&membership=${offerings[activeTabIdx].id}`);
    }
  };

  const renderList = () => {
    const splittedList = splitList(membershipFrequencyData.list, 5);

    return (
      <div className='flex max-lg:flex-col lg:justify-between w-full mt-6 lg:mt-[3.889vh] 2xl:mt-[42px] text-left'>
        {splittedList.map((items: string[], itemsIdx: number) => {
          return (
            <div key={`items-${itemsIdx}`} className='flex flex-col'>
              {items.map((item: string, itemIdx: number) => {
                return (
                  <div key={`item-${itemIdx}`} className='flex items-center gap-2.5 lg:gap-[18px]'>
                    <GreenCheck className='flex-shrink-0 text-green-alert' />
                    <span className='text-primary text-sm !leading-8'>{item}</span>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className='flex flex-col w-full h-full'>
      <Navbar theme='light' arrowBack onClickBack={onClickBack} />
      <motion.div
        variants={{
          initial: { y: 0, opacity: 0 },
          visible: { y: 0, opacity: 1 },
          exit: { y: "-50%", opacity: 0 },
        }}
        initial='initial'
        animate='visible'
        exit='exit'
        transition={{ ease: "easeInOut", duration: 1 }}
        className='w-full h-full flex flex-col'
      >
        <div className='pt-[87px] lg:pt-[9.537vh] 2xl:pt-[103px] w-full h-full flex flex-col relative min-h-screen'>
          <div className='w-full pt-6 pb-[43px] lg:py-[2.222vh] xl:py-6 max-lg:container-center lg:max-w-[651px] lg:mx-auto flex-grow flex flex-col justify-between h-full relative'>
            <div className='relative overflow-hidden flex-1 h-full flex flex-col lg:items-center lg:justify-center w-full'>
              <div className='w-full flex flex-col text-left'>
                <ProgressStep currentIdx={2} theme='light' />
                <div className='w-fit max-lg:my-[42px] lg:mb-[2.222vh] 2xl:mb-6'>
                  {offerings && (
                    <ButtonSwitchMemberFreq
                      options={offerings}
                      onChange={(currentIdx: number) => setActiveTabIdx(currentIdx)}
                      layoutId='switch-membership-frequency-checkout'
                      showHightlightTextOnMobile
                    />
                  )}
                </div>

                <h1 className='text-2xl lg:text-4xl !leading-normal lg:-tracking-0.04em text-primary'>
                  {membershipFrequencyData.title}
                </h1>
                <p className='mt-4 lg:mt-3.5 text-grey-400 lg:text-grey-500 text-xs !leading-5 lg:text-sm lg:!leading-normal'>
                  {membershipFrequencyData.description}
                </p>
                {renderList()}
                <div className='mt-6 mb-[42px] lg:my-[3.889vh] 2xl:my-[42px] inline-flex max-lg:flex-col lg:items-baseline'>
                  <span className='max-lg:font-medium text-4xl !leading-normal -tracking-0.04em text-primary'>
                    ${offerings?.[activeTabIdx].price}
                    <span className='max-lg:hidden'>&nbsp;</span>
                  </span>
                  <span className='text-grey-500 text-lg lg:text-sm !leading-normal'>
                    {activeTabIdx === 0
                      ? membershipFrequencyData.price.quarterly
                      : membershipFrequencyData.price.monthly}
                  </span>
                </div>
                <div className='flex max-sm:flex-col max-sm:w-full items-center gap-6'>
                  <button
                    aria-label={membershipFrequencyData.btnSubmitLabel}
                    onClick={onClickSubmit}
                    className={clsxm(
                      "bg-primary text-blue-primary lg:text-white border border-primary",
                      defaultButtonClassName
                    )}
                  >
                    {membershipFrequencyData.btnSubmitLabel}
                  </button>
                  <button
                    aria-label={membershipFrequencyData.btnCancelLabel}
                    onClick={onClickBack}
                    className={clsxm("border border-grey-primary text-grey-primary", defaultButtonClassName)}
                  >
                    {membershipFrequencyData.btnCancelLabel}
                  </button>
                </div>
              </div>
            </div>
            <div className='mt-[42px] lg:mt-[2.222vh] xl:mt-6'>
              <PrivacyPolicyStatement highlightText='Proceed to Payment' theme='light' />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MemberFrequencyPlan;
