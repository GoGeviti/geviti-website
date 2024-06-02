import React, { FC, useCallback, useMemo, useState } from "react";
import Checkbox from "@/components/Onboarding/Checkbox";
import clsxm from "@/helpers/clsxm";
import { CardCvcElement, CardExpiryElement, CardNumberElement } from "@stripe/react-stripe-js";
import { Stripe, StripeElements, StripeError } from "@stripe/stripe-js";
import { toast } from "sonner";

type StripeFormProps = {
  stripe: Stripe | null;
  elements: StripeElements | null;
  totalPrice?: number;
  userEmail: string;
  handleCheckout: (token: string) => void;
  loading: boolean;
};
const inputStyles = clsxm(
  "block w-full h-[54px] lg:h-[63px] border-[1px] border-grey-100 transform transition-colors duration-300 rounded-[10px]",
  "text-black bg-whitetext-xs lg:text-lg font-normal !leading-normal font-Poppins placeholder:text-grey-500 px-6 py-18px",
  "placeholder-grey-300"
);
const StripeForm: FC<StripeFormProps> = ({ stripe, elements, totalPrice, userEmail, loading, handleCheckout }) => {
  const [stripeResponseLoading, setStripeResponseLoading] = useState(false);

  const formLoading = useMemo(() => stripeResponseLoading || loading, [stripeResponseLoading, loading]);
  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!stripe || !elements) {
        return;
      }

      const cardNumberElement = elements.getElement(CardNumberElement);

      try {
        setStripeResponseLoading(true);
        const { token } = await stripe.createToken(cardNumberElement!);
        setStripeResponseLoading(false);
        if (token) {
          handleCheckout(token.id);
        }
      } catch (error) {
        const err = error as StripeError;
        setStripeResponseLoading(false);
        toast.error(err.message);
      }
    },
    [stripe, elements]
  );

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
              placeholder={userEmail}
              value={userEmail}
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
              disabled={formLoading}
            />
          </div>
          <div className='pt-4'>
            <CardNumberElement
              options={{
                showIcon: true,
                style: fontStyle,
                disabled: formLoading,
              }}
              className={inputStyles}
            />
          </div>
          <div className='flex pt-4'>
            <CardExpiryElement
              options={{
                style: fontStyle,
                disabled: formLoading,
              }}
              className={clsxm(inputStyles, "mr-[14px]")}
            />
            <CardCvcElement
              options={{
                style: fontStyle,
                disabled: formLoading,
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
              disabled={formLoading}
            />
          </div>
          <button
            type='submit'
            disabled={formLoading}
            className='h-[58px] my-10 py-3 px-[42px] bg-black text-white rounded-[1000px]'
          >
            Pay Securely ${totalPrice}
          </button>
        </div>
      </div>
    </form>
  );
};

export default StripeForm;
