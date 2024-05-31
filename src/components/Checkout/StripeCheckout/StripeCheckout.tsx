import React, { FC, useCallback, useMemo, useState } from "react";
import PageHeader from "./PageHeader";
import DiscountForm from "./DiscountForm";
import CheckoutItem from "./CheckoutItem";
import { CheckoutStep } from "../Main";
import { useSearchParams } from "next/navigation";
import { checkoutData } from "@/constant/data";
import BillingForm from "./BillingForm";
import { getDiscount } from "../api/onboarding";
import { DiscountReturnType } from "../api/types";
import { toast } from "sonner";
import { AiFillCloseCircle } from "react-icons/ai";

type StripeCheckoutProps = {
  setStep: React.Dispatch<React.SetStateAction<CheckoutStep>>;
};
// TODO: make membership plans completely dynamic
const StripeCheckout: FC<StripeCheckoutProps> = ({ setStep }) => {
  const searchParams = useSearchParams();
  const productName = searchParams.get("product");
  const membershipBillingFreq = searchParams.get("membership");
  const [discount, setDiscount] = useState<DiscountReturnType | null>(null);
  const [discountApplied, setDiscountApplied] = useState(false);
  const product = useMemo(
    () => checkoutData.pricingProductPlan.list.find((it) => it.name === productName)!,
    [productName]
  );
  const membership = useMemo(
    () => checkoutData.membershipFrequency.frequencyOptions.find((it) => it.title === membershipBillingFreq)!,
    [membershipBillingFreq]
  );
  const handleCouponSubmit = useCallback(
    async (code?: string) => {
      try {
        const coupon = await getDiscount(code);
        if (coupon) {
          setDiscount(coupon);
          setDiscountApplied(true);
        }
      } catch (error) {
        setDiscount(null);
        setDiscountApplied(false);
        toast.error(error as string, {
          icon: <AiFillCloseCircle className='h-5 w-5 text-danger' />,
        });
      }
    },
    [getDiscount]
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
            <CheckoutItem
              name={`billed ${membership.value}`}
              plan={membership.value}
              price={membership.price}
              metadata={`then ${membership.price} ${membership.value}`}
            />
          </div>
          <div className='my-6'>
            <CheckoutItem name={product.name || ""} plan={product.priceNote || "12"} price={product.price || "12"} />
          </div>
          <div className='mt-11 lg:pl-[71px] lg:ml-6'>
            <DiscountForm submitCoupon={handleCouponSubmit} discountApplied={discountApplied} />
            <TotalCalc
              productPrice={Number(product.price)}
              membershipPrice={Number(membership.price)}
              discount={discount}
            />
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
  discount: DiscountReturnType | null;
}
const TotalCalc: FC<ITotalCalc> = ({ productPrice, membershipPrice, discount }) => {
  const total = useMemo(() => productPrice + membershipPrice, [productPrice, membershipPrice]);
  const totalDue = useMemo(() => {
    if (discount) {
      return total - (total * Number(discount.amount_off)) / 100;
    }
    return total;
  }, [total, discount]);
  return (
    <div className='flex justify-between py-12'>
      <div className='flex flex-col'>
        <p className='text-grey-primary text-sm'>Total</p>
        {discount?.code && <p className='text-grey-primary py-6 text-sm'>Coupon - {discount.code}</p>}
        <p className='text-white text-lg py-6'>Total due</p>
      </div>
      <div className='flex flex-col text-right'>
        <p className='text-grey-primary text-sm'>${total}</p>
        {discount?.code && <p className='text-grey-primary py-6 text-sm'>-${discount.amount_off}</p>}
        <p className='text-white text-lg py-6'>${totalDue}</p>
      </div>
    </div>
  );
};
export default StripeCheckout;
