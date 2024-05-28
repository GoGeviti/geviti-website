import React, { FC, useMemo } from "react";
import PageHeader from "./PageHeader";
import DiscountForm from "./DiscountForm";
import CheckoutItem from "./CheckoutItem";
import { CheckoutStep } from "../Main";
import { useSearchParams } from "next/navigation";
import { checkoutData } from "@/constant/data";

type StripeCheckoutProps = {
  setStep?: React.Dispatch<React.SetStateAction<CheckoutStep>>;
};
// TODO: make membership plans completely dynamic
const StripeCheckout: FC<StripeCheckoutProps> = ({ setStep }) => {
  const searchParams = useSearchParams();
  const productId = searchParams.get("product");
  const membershipId = searchParams.get("membership");
  const product = useMemo(() => checkoutData.pricingProductPlan.list.find((it) => it.id === productId)!, [productId]);
  const membership = useMemo(
    () => checkoutData.membershipFrequency.frequencyOptions.find((it) => it.id === membershipId)!,
    [membershipId]
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
            <CheckoutItem name={product.name} plan={product.priceNote} price={product.price} />
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
            <TotalCalc />
          </div>
        </div>
      </div>
      <div className='h-full w-full bg-white'>
        <h1>Stripe Form</h1>
      </div>
    </div>
  );
};

function TotalCalc() {
  return (
    <div className='flex justify-between py-12'>
      <div className='flex flex-col'>
        <p className='text-grey-primary text-sm'>Total</p>
        {/* <p className='text-grey-primary py-6 text-sm'>Coupon - GEVITI20</p> */}
        <p className='text-white text-lg py-6'>Total due</p>
      </div>
      <div className='flex flex-col text-right'>
        <p className='text-grey-primary text-sm'>$668.98</p>
        {/* <p className='text-grey-primary py-6 text-sm'>-$200</p> */}
        <p className='text-white text-lg py-6'>$668.98</p>
      </div>
    </div>
  );
}
export default StripeCheckout;
