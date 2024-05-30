"use client";
import Checkbox from "@/components/Onboarding/Checkbox";
import clsxm from "@/helpers/clsxm";
import {
  CardCvcElement,
  CardElement,
  CardExpiryElement,
  CardNumberElement,
  Elements,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import { StripeElementsOptions, loadStripe } from "@stripe/stripe-js";

const BillingForm = () => {
  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_TOKEN_STAGING || "pk_test_fAj7WlTrG0uc5Z9WHKQDdoTq");

  const appearance: StripeElementsOptions = {
    appearance: {
      rules: {
        ".Input": {
          border: "0px",
          boxShadow: "none",
          outline: "none",
          paddingTop: "10px",
          paddingBottom: "10px",
          fontSize: "16px",
          fontWeight: "500",
          lineHeight: "16px",
        },
        ".Input:focus": {
          boxShadow: `none`,
        },
        ".Label": {
          fontSize: "12px",
        },
        ".Error": {
          fontSize: "15px",
        },
      },
    },
  };

  return (
    <Elements stripe={stripePromise} options={appearance}>
      <ElementsConsumer>
        {({ stripe, elements }) => {
          const handleSubmit = async (e: any) => {
            e.preventDefault();
            const cardNumberElement = elements?.getElement(CardNumberElement);
            console.log("cardNumberElement", cardNumberElement);
            const { token } = await stripe?.createToken(cardNumberElement!);
            console.log("token", token);
          };
          const fontStyle = {
            base: {
              fontSize: "16px",
            },
          };
          return (
            <form onSubmit={handleSubmit}>
              <div className='flex flex-col justify-center items-center gap-2 w-full'>
                <div className={clsxm("relative flex flex-col")}>
                  <h1 className='text-2xl py-12'>Payment Details</h1>
                  <h4 className='text-sm'>Card Information</h4>
                  <div className='w-[500px] pt-4'>
                    <input
                      type='text'
                      name='name_on_card'
                      placeholder='Name on card'
                      className={clsxm(
                        "block w-full h-[54px] lg:h-[63px] border-[1px] border-grey-100 transform transition-colors duration-300 rounded-[10px]",
                        "text-black bg-whitetext-xs lg:text-lg font-normal !leading-normal font-Poppins placeholder:text-grey-500 px-6 py-18px",
                        "placeholder-grey-300"
                      )}
                      autoComplete='off'
                    />
                  </div>
                  <div className='w-[500px] pt-4'>
                    <CardNumberElement
                      options={{
                        showIcon: true,
                        style: fontStyle,
                      }}
                      className={clsxm(
                        "block w-full h-[54px] lg:h-[63px] border-[1px] border-grey-100 transform transition-colors duration-300 rounded-[10px]",
                        "text-black bg-white text-xs lg:text-lg font-normal !leading-normal font-Poppins placeholder:text-grey-500 px-6 py-18px",
                        "placeholder-grey-300"
                      )}
                    />
                  </div>
                  <div className='flex pt-4'>
                    <CardExpiryElement
                      options={{
                        style: fontStyle,
                      }}
                      className={clsxm(
                        "block w-full h-[54px] lg:h-[63px] border-[1px] border-grey-100 transform transition-colors duration-300 rounded-[10px]",
                        "text-black bg-white text-xs lg:text-lg font-normal !leading-normal font-Poppins placeholder:text-grey-500 px-6 py-18px mr-[14px]",
                        "placeholder-grey-300"
                      )}
                    />
                    <CardCvcElement
                      options={{
                        style: fontStyle,
                      }}
                      className={clsxm(
                        "block w-full h-[54px] lg:h-[63px] border-[1px] border-grey-100 transform transition-colors duration-300 rounded-[10px]",
                        "text-black bg-white text-xs lg:text-lg font-normal !leading-normal font-Poppins placeholder:text-grey-500 px-6 py-18px",
                        "placeholder-grey-300"
                      )}
                    />
                  </div>
                </div>
                <div className='w-[80%] mt-6'>
                  <Checkbox
                    className='w-[14px] h-[14px] lg:w-2.5 lg:h-2.5 2xl:w-[14px] 2xl:h-[14px]'
                    label='By checking the box, you confirm that you have read, understood, and agree to abide by our Privacy Policy and Terms of Service.'
                  />
                </div>
                <button
                  type='submit'
                  className='w-[80%] h-[58px] mt-6 py-3 px-[42px] bg-black text-white rounded-[1000px]'
                >
                  Pay Securely
                </button>
              </div>
            </form>
          );
        }}
      </ElementsConsumer>
    </Elements>
  );
};

export default BillingForm;
