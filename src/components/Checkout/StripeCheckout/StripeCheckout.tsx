import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import PageHeader from "./PageHeader";
import DiscountForm from "./DiscountForm";
import CheckoutItem from "./CheckoutItem";
import { useRouter, useSearchParams } from "next/navigation";

import { checkout, getDiscount, getInitialOfferings, getMembershipOfferings } from "../api/onboarding";
import { DiscountReturnType, InitialOfferingsReturnType, MembershipOfferingsReturnType, TemUser } from "../api/types";
import { toast } from "sonner";
import { AiFillCloseCircle } from "react-icons/ai";
import StripeElementsProvider from "./StripeElementsProvider";
import TagUserIcon from "@/components/Icons/TagUserIcon";
import MicroscopeIcon from "@/components/Icons/MicroscopeIcon";

// TODO: make membership plans completely dynamic
const StripeCheckout: FC = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const productId = searchParams.get("product");
  const membershipId = searchParams.get("membership");
  const user = localStorage.getItem("temp_user");

  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState<InitialOfferingsReturnType>();
  const [membership, setMembership] = useState<MembershipOfferingsReturnType>();
  const [discount, setDiscount] = useState<DiscountReturnType | null>(null);
  const [totalPrice, setTotalPrice] = useState<number>();
  const [discountApplied, setDiscountApplied] = useState(false);
  if (!user) {
    router.replace("onboarding");
    return;
  }
  const tempUser = JSON.parse(user) as TemUser;

  useEffect(() => {
    const getOfferings = async () => {
      setLoading(true);
      const offerings = await getInitialOfferings();
      const memberShipOfferings = await getMembershipOfferings();

      setProduct(offerings.find((it) => it.id === productId));
      setMembership(memberShipOfferings.find((it) => it.id === membershipId));
      setLoading(false);
    };
    getOfferings();
  }, []);

  const handleCouponSubmit = useCallback(
    async (code?: string) => {
      try {
        setLoading(true);
        const coupon = await getDiscount(code);
        if (coupon) {
          setDiscount(coupon);
          setDiscountApplied(true);
          setLoading(false);
        }
      } catch (error) {
        setDiscount(null);
        setDiscountApplied(false);
        setLoading(false);
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
        setLoading(true);
        if (!product || !membership) return;
        await checkout({
          token: token as string,
          email: tempUser.email,
          packages: [
            {
              price: product.price,
              offering_id: product.id,
            },
            {
              price: membership.price,
              offering_id: membership.id,
            },
          ],
        });
        setLoading(false);
        router.replace("payment/success");
      } catch (error) {
        setLoading(false);
        toast.error(error as string, {
          icon: <AiFillCloseCircle className='h-5 w-5 text-danger' />,
        });
      }
    },
    [product, membership]
  );

  return (
    <div className='flex flex-col lg:flex-row min-h-screen h-full w-full'>
      <div className='min-h-screen h-auto w-full bg-primary'>
        <div className='flex flex-col w-full px-4 lg:px-20'>
          <PageHeader onBackClick={() => router.replace("/onboarding")} />
          <div className='my-6'>
            {membership && (
              <CheckoutItem
                name={`billed ${membership.name}`}
                plan={membership.name}
                price={membership.price}
                metadata={`then ${membership.price} ${membership.name}`}
                icon={TagUserIcon}
              />
            )}
          </div>
          <div className='my-6'>
            {product && (
              <CheckoutItem
                name={product.name || ""}
                plan={product.first_time_payment || "12"}
                price={product.price || "12"}
                icon={MicroscopeIcon}
              />
            )}
          </div>
          <div className='mt-11 lg:pl-[71px] lg:ml-6'>
            <DiscountForm loading={loading} submitCoupon={handleCouponSubmit} discountApplied={discountApplied} />
            {product && membership && (
              <TotalCalc
                productPrice={Number(product.price)}
                membershipPrice={Number(membership.price)}
                discount={discount}
                setTotalPrice={setTotalPrice}
              />
            )}
          </div>
        </div>
      </div>
      <div className='h-full w-full bg-white'>
        <StripeElementsProvider
          loading={loading}
          totalPrice={totalPrice}
          handleCheckout={handleCheckout}
          userEmail={tempUser.email}
        />
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
