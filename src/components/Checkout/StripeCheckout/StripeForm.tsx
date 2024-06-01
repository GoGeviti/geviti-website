import React, { FC } from "react";
import Checkbox from "@/components/Onboarding/Checkbox";
import clsxm from "@/helpers/clsxm";
import { UserDetailData } from "@/interfaces/precheckout";
import { CardCvcElement, CardExpiryElement, CardNumberElement } from "@stripe/react-stripe-js";
import { Stripe, StripeElements } from "@stripe/stripe-js";

type StripeFormProps = {
  stripe: Stripe | null;
  elements: StripeElements | null;
  totalPrice?: number;
  user: UserDetailData;
  handleCheckout: (token: string) => void;
};
const inputStyles = clsxm(
  "block w-full h-[54px] lg:h-[63px] border-[1px] border-grey-100 transform transition-colors duration-300 rounded-[10px]",
  "text-black bg-whitetext-xs lg:text-lg font-normal !leading-normal font-Poppins placeholder:text-grey-500 px-6 py-18px",
  "placeholder-grey-300"
);
const StripeForm: FC<StripeFormProps> = ({ stripe, elements, totalPrice, user, handleCheckout }) => {
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (stripe && elements) {
      const cardNumberElement = elements?.getElement(CardNumberElement);

      const { token } = await stripe?.createToken(cardNumberElement!);
      if (token) {
        handleCheckout(token.id);
      }
    }
  };
  const fontStyle = {
    base: {
      fontSize: "18px",
    },
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className='flex flex-col justify-center items-center gap-2 w-full lg:mt-14 lg:pt-9'>
        <div className={clsxm("relative flex flex-col w-[90%] lg:w-[70%]")}>
          <h1 className='text-2xl pt-12'>Payment Details</h1>
          <h4 className='text-sm mt-6'>Email</h4>
          <div className='pt-3 mb-10'>
            <input
              type='text'
              name='name_on_card'
              placeholder={user.email}
              value={user.email}
              className={inputStyles}
              autoComplete='off'
              disabled
            />
          </div>
          <h4 className='text-sm'>Card Information</h4>
          <div className='pt-4'>
            <input
              type='text'
              name='name_on_card'
              placeholder='Name on card'
              className={inputStyles}
              autoComplete='off'
            />
          </div>
          <div className='pt-4'>
            <CardNumberElement
              options={{
                showIcon: true,
                style: fontStyle,
              }}
              className={inputStyles}
            />
          </div>
          <div className='flex pt-4'>
            <CardExpiryElement
              options={{
                style: fontStyle,
              }}
              className={clsxm(inputStyles, "mr-[14px]")}
            />
            <CardCvcElement
              options={{
                style: fontStyle,
              }}
              className={inputStyles}
            />
          </div>
          <div className='mt-10'>
            <Checkbox
              className='w-[14px] h-[14px] lg:w-2.5 lg:h-2.5 2xl:w-[14px] 2xl:h-[14px] text-blue-primary outline-primary'
              labelClassName='text-sm text-grey-500 ml-2'
              label={
                "By checking the box, you confirm that you have read, understood, and agree to abide by our Privacy Policy and Terms of Service."
              }
            />
          </div>
          <button type='submit' className='h-[58px] my-10 py-3 px-[42px] bg-black text-white rounded-[1000px]'>
            Pay Securely ${totalPrice}
          </button>
        </div>
      </div>
    </form>
  );
};

export default StripeForm;
