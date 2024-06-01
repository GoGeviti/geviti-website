import React, { FC, useCallback, useMemo, useState } from "react";
import PageHeader from "./PageHeader";
import DiscountForm from "./DiscountForm";
import CheckoutItem from "./CheckoutItem";
import { CheckoutStep } from "../Main";
import { useSearchParams } from "next/navigation";
import { checkoutData } from "@/constant/data";

import { checkout, getDiscount } from "../api/onboarding";
import { DiscountReturnType, InitialOfferingsReturnType, MembershipOfferingsReturnType } from "../api/types";
import { toast } from "sonner";
import { AiFillCloseCircle } from "react-icons/ai";
import { UserDetailData } from "@/interfaces/precheckout";
import StripeElementsProvider from "./StripeElementsProvider";
import TagUserIcon from "@/components/Icons/TagUserIcon";
import MicroscopeIcon from "@/components/Icons/MicroscopeIcon";

type StripeCheckoutProps = {
  setStep: React.Dispatch<React.SetStateAction<CheckoutStep>>;
  user: UserDetailData;
  productOffering?: InitialOfferingsReturnType;
  membershipOffering?: MembershipOfferingsReturnType;
};
// TODO: make membership plans completely dynamic
const StripeCheckout: FC<StripeCheckoutProps> = ({ user, productOffering, membershipOffering, setStep }) => {
  const searchParams = useSearchParams();
  const productName = searchParams.get("product");
  const membershipBillingFreq = searchParams.get("membership");
  const [discount, setDiscount] = useState<DiscountReturnType | null>(null);
  const [totalPrice, setTotalPrice] = useState<number>();
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

  const handleCheckout = useCallback(
    async (token: string) => {
      try {
        if (!membershipOffering || !productOffering) return;
        await checkout({
          token: token as string,
          email: user.email,
          packages: [
            {
              price: membershipOffering.price,
              offering_id: membershipOffering.id,
            },
            {
              price: productOffering.price,
              offering_id: productOffering.id,
            },
          ],
        });
      } catch (error) {
        toast.error(error as string, {
          icon: <AiFillCloseCircle className='h-5 w-5 text-danger' />,
        });
      }
    },
    [membershipOffering, productOffering]
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
              icon={TagUserIcon}
            />
          </div>
          <div className='my-6'>
            <CheckoutItem
              name={product.name || ""}
              plan={product.priceNote || "12"}
              price={product.price || "12"}
              icon={MicroscopeIcon}
            />
          </div>
          <div className='mt-11 lg:pl-[71px] lg:ml-6'>
            <DiscountForm submitCoupon={handleCouponSubmit} discountApplied={discountApplied} />
            <TotalCalc
              productPrice={Number(product.price)}
              membershipPrice={Number(membership.price)}
              discount={discount}
              setTotalPrice={setTotalPrice}
            />
          </div>
        </div>
      </div>
      <div className='h-full w-full bg-white'>
        <StripeElementsProvider totalPrice={totalPrice} handleCheckout={handleCheckout} user={user} />
      </div>
    </div>
  );
};

interface ITotalCalc {
  productPrice: number;
  membershipPrice: number;
  discount: DiscountReturnType | null;
  setTotalPrice: React.Dispatch<React.SetStateAction<number | undefined>>;
}
const TotalCalc: FC<ITotalCalc> = ({ productPrice, membershipPrice, discount, setTotalPrice }) => {
  const total = useMemo(() => productPrice + membershipPrice, [productPrice, membershipPrice]);
  const totalDue = useMemo(() => {
    if (discount) {
      const discountedAmounted = total - (total * Number(discount.amount_off)) / 100;
      setTotalPrice(discountedAmounted);
      return discountedAmounted;
    }
    setTotalPrice(total);
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
