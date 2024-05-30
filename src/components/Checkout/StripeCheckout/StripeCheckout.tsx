import React, { FC, useMemo } from "react";
import PageHeader from "./PageHeader";
import DiscountForm from "./DiscountForm";
import CheckoutItem from "./CheckoutItem";
import { CheckoutStep } from "../Main";
import { useSearchParams } from "next/navigation";
import { checkoutData } from "@/constant/data";
import BillingForm from "./BillingForm";
import { InitialOfferingsReturnType, MembershipOfferingsReturnType } from "../api/types";

type StripeCheckoutProps = {
  setStep: React.Dispatch<React.SetStateAction<CheckoutStep>>;
};
// TODO: make membership plans completely dynamic
const StripeCheckout: FC<StripeCheckoutProps> = ({ setStep }) => {
  const searchParams = useSearchParams();
  const productName = searchParams.get("product");
  const membershipBillingFreq = searchParams.get("membership");
  const product = useMemo(
    () => checkoutData.pricingProductPlan.list.find((it) => it.name === productName)!,
    [productName]
  );
  const membership = useMemo(
    () => checkoutData.membershipFrequency.frequencyOptions.find((it) => it.title === membershipBillingFreq)!,
    [membershipBillingFreq]
  );
  return (
    <div className='flex flex-col lg:flex-row min-h-screen h-full w-full'>
      <div className='min-h-screen h-auto w-full bg-primary'>
        <div className='flex flex-col w-full px-4 lg:px-20'>
          <PageHeader
            onBackClick={() => {
              if (setStep) setStep(CheckoutStep.MEMBER_FREQUENCY_PLAN);
            }}
          />
          <div className='my-6'>
            <CheckoutItem name={product.name || ""} plan={product.priceNote || "12"} price={product.price || "12"} />
          </div>
          <div className='my-6'>
            <CheckoutItem
              name={`billed ${membership.value}`}
              plan={membership.value}
              price={membership.price}
              metadata={`then ${membership.price} ${membership.value}`}
            />
          </div>
          <div className='mt-11 lg:pl-[71px] lg:ml-6'>
            <DiscountForm />
            <TotalCalc productPrice={Number(product.price)} membershipPrice={Number(membership.price)} discount={0} />
          </div>
        </div>
      </div>
      <div className='h-full w-full bg-white'>
        <BillingForm />
      </div>
    </div>
  );
};

interface ITotalCalc {
  productPrice: number;
  membershipPrice: number;
  discount: number;
  couponCode?: string;
}
const TotalCalc: FC<ITotalCalc> = ({ productPrice, membershipPrice, discount, couponCode }) => {
  const total = useMemo(() => productPrice + membershipPrice, [productPrice, membershipPrice, discount]);
  const totalDue = useMemo(() => total - discount, [total]);
  return (
    <div className='flex justify-between py-12'>
      <div className='flex flex-col'>
        <p className='text-grey-primary text-sm'>Total</p>
        {couponCode && <p className='text-grey-primary py-6 text-sm'>Coupon - {couponCode}</p>}
        <p className='text-white text-lg py-6'>Total due</p>
      </div>
      <div className='flex flex-col text-right'>
        <p className='text-grey-primary text-sm'>${total}</p>
        {couponCode && <p className='text-grey-primary py-6 text-sm'>-${discount}</p>}
        <p className='text-white text-lg py-6'>${totalDue}</p>
      </div>
    </div>
  );
};
export default StripeCheckout;
