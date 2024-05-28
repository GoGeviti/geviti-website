import React, { FC, useRef } from "react";
import TextField from "../TextField";
import PageHeader from "./PageHeader";
import DiscountForm from "./DiscountForm";
import CheckoutItem from "./CheckoutItem";

// TODO: Separate components into their own folders
const StripeCheckout: FC = () => {
  return (
    <div className='flex flex-col lg:flex-row min-h-screen h-full w-full'>
      <div className='min-h-screen h-auto w-full bg-primary'>
        <div className='flex flex-col w-full px-4 lg:px-20'>
          <PageHeader />
          <div className='my-6'>
            <CheckoutItem />
          </div>
          <div className='my-6'>
            <CheckoutItem />
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
        <p className='text-grey-primary py-6 text-sm'>Coupon - GEVITI20</p>
        <p className='text-white text-lg'>Total due</p>
      </div>
      <div className='flex flex-col text-right'>
        <p className='text-grey-primary text-sm'>$668.98</p>
        <p className='text-grey-primary py-6 text-sm'>-$200</p>
        <p className='text-white text-lg'>$668.98</p>
      </div>
    </div>
  );
}
export default StripeCheckout;
